import { setStorageItem as $0, StorageKeys as kn, getStorageItem as Rs, deactivateLicence as Is, validateLicence as Ns, getLicenceState as Ps, initializeTrial as Ls } from "./src/licence.js";
async function getRecipes() {
  return (await Rs(kn.RECIPES)) || [];
}
async function saveRecipe(e) {
  const t = await getRecipes();
  const r = t.findIndex(a => a.id === e.id);
  if (r >= 0) {
    t[r] = {
      ...e,
      updatedAt: Date.now()
    };
  } else {
    t.push({
      ...e,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }
  await $0(kn.RECIPES, t);
}
async function deleteRecipe(e) {
  const r = (await getRecipes()).filter(a => a.id !== e);
  await $0(kn.RECIPES, r);
}
import * as XLSX from 'xlsx';
const gn = XLSX.utils;
const xs = XLSX.write;
function Qx(e, t) {
  const r = s => s.includes("\"") || s.includes(",") || s.includes(`
`) || s.includes("\r") ? `"${s.replace(/"/g, "\"\"")}"` : s;
  const a = t.map(r).join(",");
  const n = e.map(s => t.map(i => r(s[i] || "")).join(","));
  return [a, ...n].join(`\r
`);
}
async function e2(e, t, r) {
  const a = gn.json_to_sheet(e, {
    header: t
  });
  const n = gn.book_new();
  gn.book_append_sheet(n, a, "Scraped Data");
  const s = xs(n, {
    bookType: "xlsx",
    type: "base64"
  });
  await chrome.downloads.download({
    url: `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${s}`,
    filename: `${vs(r)}.xlsx`,
    saveAs: true
  });
}
async function r2(e, t, r) {
  const a = Qx(e, t);
  const n = btoa(unescape(encodeURIComponent(a)));
  await chrome.downloads.download({
    url: `data:text/csv;base64,${n}`,
    filename: `${vs(r)}.csv`,
    saveAs: true
  });
}
function vs(e) {
  return e.replace(/[^a-zA-Z0-9_\-. ]/g, "_").substring(0, 100);
}
const t2 = {
  TAB_LOAD_TIMEOUT_MS: 30000
};
function fa(e) {
  return new Promise((t, r) => {
    const a = setTimeout(() => {
      chrome.tabs.onUpdated.removeListener(n);
      r(new Error("Tab load timeout"));
    }, t2.TAB_LOAD_TIMEOUT_MS);
    const n = (s, i) => {
      if (s === e && i.status === "complete") {
        clearTimeout(a);
        chrome.tabs.onUpdated.removeListener(n);
        setTimeout(t, 500);
      }
    };
    chrome.tabs.onUpdated.addListener(n);
  });
}
async function validateTabId(e) {
  try {
    return !!(await chrome.tabs.sendMessage(e, {
      action: "GET_PAGE_INFO"
    }));
  } catch {
    try {
      await chrome.scripting.executeScript({
        target: {
          tabId: e
        },
        files: ["content.js"]
      });
      return true;
    } catch (t) {
      console.error("[SWWC] Failed to inject content script:", t);
      return false;
    }
  }
}
let Sr = false;
let ze = false;
async function a2(e, t) {
  if (Sr || !e.pagination) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = e.pagination.maxPages;
  try {
    for (let n = 1; n <= a && !ze; n++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: n,
          totalPages: a,
          rowsSoFar: r.length
        }
      });
      await validateTabId(t);
      const s = await new Promise(i => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, f => i(f || {
          data: []
        }));
      });
      if (s.data) {
        r.push(...s.data);
      }
      if (n < a && !ze) {
        if (!(await l2(e, t, n))) {
          break;
        }
        await At(e.pagination.delayMs);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } catch (n) {
    console.error("[SWWC] Multi-scrape error:", n);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function n2(e, t) {
  if (Sr || !e.pagination) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = new Set();
  const n = e.pagination.maxPages;
  const s = e.pagination.delayMs;
  const i = f => {
    for (const o of f) {
      const l = Object.values(o).join("||");
      if (l.trim() && !a.has(l)) {
        a.add(l);
        r.push(o);
      }
    }
  };
  try {
    await validateTabId(t);
    let f = 0;
    for (let o = 1; o <= n && !ze; o++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: o,
          totalPages: n,
          rowsSoFar: r.length,
          mode: "scroll"
        }
      });
      const l = r.length;
      const c = await new Promise(h => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, u => h(u || {
          data: []
        }));
      });
      if (c.data) {
        i(c.data);
      }
      const x = await new Promise(h => {
        chrome.tabs.sendMessage(t, {
          action: "SCROLL_PAGE"
        }, u => h(u || {
          scrolled: false,
          heightChanged: false
        }));
      });
      if (r.length === l && !x.heightChanged) {
        f++;
        if (f >= 2) {
          break;
        }
      } else {
        f = 0;
      }
      await At(s);
    }
    if (!ze) {
      const o = await new Promise(l => {
        chrome.tabs.sendMessage(t, {
          action: "SCRAPE_PAGE",
          payload: {
            fields: e.fields
          }
        }, c => l(c || {
          data: []
        }));
      });
      if (o.data) {
        i(o.data);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } catch (f) {
    console.error("[SWWC] Scroll-scrape error:", f);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function i2(e, t, r) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const a = [];
  try {
    for (let n = 0; n < t.length && !ze; n++) {
      const s = t[n];
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: n + 1,
          totalPages: t.length,
          mode: "page-detail"
        }
      });
      await chrome.tabs.update(r, {
        url: s
      });
      await fa(r);
      await validateTabId(r);
      const i = await new Promise(f => {
        chrome.tabs.sendMessage(r, {
          action: "SCRAPE_PAGE_DETAIL",
          payload: {
            fields: e
          }
        }, o => f(o || {
          row: {}
        }));
      });
      if (i.row) {
        a.push({
          ...i.row,
          URL: s
        });
      }
      if (n < t.length - 1 && !ze) {
        await At(1000);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length
      }
    });
  } catch (n) {
    console.error("[SWWC] Page details scrape error:", n);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function s2(e, t) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const r = [];
  const a = new Set();
  const n = s => {
    for (const i of s) {
      const f = i["Image URL"];
      if (f && !a.has(f)) {
        a.add(f);
        r.push(i);
      }
    }
  };
  try {
    for (let s = 1; s <= e.maxPages && !ze; s++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: s,
          totalPages: e.maxPages,
          rowsSoFar: r.length
        }
      });
      await validateTabId(t);
      const i = await new Promise(f => {
        chrome.tabs.sendMessage(t, {
          action: "EXTRACT_IMAGES"
        }, o => f(o || {
          data: []
        }));
      });
      if (i.data) {
        n(i.data);
      }
      if (s < e.maxPages && !ze) {
        if (!(await c2(e, t, s))) {
          break;
        }
        await At(e.delayMs);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length,
        isImageScrape: true
      }
    });
  } catch (s) {
    console.error("[SWWC] Paginated image scrape error:", s);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: r,
        pageUrl: "",
        rowCount: r.length,
        isImageScrape: true
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
async function f2(e, t, r) {
  if (Sr) {
    return;
  }
  Sr = true;
  ze = false;
  const a = [];
  const n = new Set();
  const s = i => {
    for (const f of i) {
      const o = f["Image URL"];
      if (o && !n.has(o)) {
        n.add(o);
        a.push(f);
      }
    }
  };
  try {
    await validateTabId(r);
    let i = 0;
    for (let f = 1; f <= e && !ze; f++) {
      chrome.runtime.sendMessage({
        action: "SCRAPE_PROGRESS",
        payload: {
          currentPage: f,
          totalPages: e,
          rowsSoFar: a.length,
          mode: "scroll"
        }
      });
      const o = a.length;
      const l = await new Promise(x => {
        chrome.tabs.sendMessage(r, {
          action: "EXTRACT_IMAGES"
        }, h => x(h || {
          data: []
        }));
      });
      if (l.data) {
        s(l.data);
      }
      const c = await new Promise(x => {
        chrome.tabs.sendMessage(r, {
          action: "SCROLL_PAGE"
        }, h => x(h || {
          scrolled: false,
          heightChanged: false
        }));
      });
      if (a.length === o && !c.heightChanged) {
        i++;
        if (i >= 2) {
          break;
        }
      } else {
        i = 0;
      }
      await At(t);
    }
    if (!ze) {
      const f = await new Promise(o => {
        chrome.tabs.sendMessage(r, {
          action: "EXTRACT_IMAGES"
        }, l => o(l || {
          data: []
        }));
      });
      if (f.data) {
        s(f.data);
      }
    }
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length,
        isImageScrape: true
      }
    });
  } catch (i) {
    console.error("[SWWC] Scroll image scrape error:", i);
    chrome.runtime.sendMessage({
      action: "SCRAPE_RESULT",
      payload: {
        data: a,
        pageUrl: "",
        rowCount: a.length,
        isImageScrape: true
      }
    });
  } finally {
    Sr = false;
    ze = false;
  }
}
function o2() {
  ze = true;
}
async function l2(e, t, r) {
  if (!e.pagination) {
    return false;
  }
  if (e.pagination.type === "click-next" && e.pagination.nextButtonSelector) {
    if ((await new Promise(n => {
      chrome.tabs.sendMessage(t, {
        action: "CLICK_ELEMENT",
        payload: {
          selector: e.pagination.nextButtonSelector
        }
      }, s => n(s || {
        success: false
      }));
    })).success) {
      try {
        await Promise.race([fa(t), At(3000)]);
      } catch { }
      await validateTabId(t);
      return true;
    }
    return false;
  }
  if (e.pagination.type === "url-pattern" && e.pagination.urlTemplate) {
    const a = (e.pagination.startPage || 1) + r;
    const n = e.pagination.urlTemplate.replace("{page}", String(a));
    await chrome.tabs.update(t, {
      url: n
    });
    await fa(t);
    return true;
  }
  return false;
}
async function c2(e, t, r) {
  if (e.type === "click-next" && e.nextButtonSelector) {
    if ((await new Promise(n => {
      chrome.tabs.sendMessage(t, {
        action: "CLICK_ELEMENT",
        payload: {
          selector: e.nextButtonSelector
        }
      }, s => n(s || {
        success: false
      }));
    })).success) {
      try {
        await Promise.race([fa(t), At(3000)]);
      } catch { }
      await validateTabId(t);
      return true;
    }
    return false;
  }
  if (e.type === "url-pattern" && e.urlTemplate) {
    const a = (e.startPage || 1) + r;
    const n = e.urlTemplate.replace("{page}", String(a));
    await chrome.tabs.update(t, {
      url: n
    });
    await fa(t);
    await validateTabId(t);
    return true;
  }
  return false;
}
function At(e) {
  return new Promise(t => setTimeout(t, e));
}
const Cn = [{
  id: "prebuilt-amazon-search",
  name: "Amazon Search Results",
  description: "Scrape product listings from Amazon search pages",
  icon: "🛒",
  urlPattern: "amazon\\.com/s\\?",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Product Name",
    selector: "h2 a span",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "Price",
    selector: ".a-price .a-offscreen",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f3",
    name: "Rating",
    selector: ".a-icon-alt",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Image",
    selector: ".s-image",
    attribute: "src",
    type: "image"
  }, {
    id: "f5",
    name: "URL",
    selector: "h2 a",
    attribute: "href",
    type: "link"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".s-pagination-next",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-google-search",
  name: "Google Search Results",
  description: "Scrape search results from Google",
  icon: "🔍",
  urlPattern: "google\\.com/search",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: "h3",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: "a[jsname] h3",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Snippet",
    selector: "[data-sncf] span",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: "#pnnext",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-youtube-search",
  name: "YouTube Search Results",
  description: "Scrape video listings from YouTube search",
  icon: "🎥",
  urlPattern: "youtube\\.com/results",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: "#video-title",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "Channel",
    selector: "#channel-name a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f3",
    name: "Views",
    selector: "#metadata-line span:first-child",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "URL",
    selector: "#video-title",
    attribute: "href",
    type: "link"
  }],
  pagination: null
}, {
  id: "prebuilt-hackernews",
  name: "Hacker News",
  description: "Scrape stories from Hacker News front page",
  icon: "📰",
  urlPattern: "news\\.ycombinator\\.com",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Title",
    selector: ".titleline a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: ".titleline a",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Points",
    selector: ".score",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Author",
    selector: ".hnuser",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".morelink",
    maxPages: 5,
    delayMs: 2000
  }
}, {
  id: "prebuilt-github-repos",
  name: "GitHub Repositories",
  description: "Scrape repository listings from GitHub search",
  icon: "💻",
  urlPattern: "github\\.com/search",
  isPrebuilt: true,
  createdAt: 0,
  updatedAt: 0,
  fields: [{
    id: "f1",
    name: "Repository",
    selector: ".search-title a",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f2",
    name: "URL",
    selector: ".search-title a",
    attribute: "href",
    type: "link"
  }, {
    id: "f3",
    name: "Description",
    selector: ".search-match",
    attribute: "textContent",
    type: "text"
  }, {
    id: "f4",
    name: "Language",
    selector: "[itemprop=\"programmingLanguage\"]",
    attribute: "textContent",
    type: "text"
  }],
  pagination: {
    type: "click-next",
    nextButtonSelector: ".next_page",
    maxPages: 5,
    delayMs: 2000
  }
}];
function detectPrebuiltRecipe(e) {
  return Cn.find(t => {
    try {
      return new RegExp(t.urlPattern).test(e);
    } catch {
      return false;
    }
  });
}
async function handleMessage(e, t, r) {
  try {
    switch (e.action) {
      case "OPEN_SIDE_PANEL":
        {
          const a = e.payload;
          await chrome.sidePanel.open({
            tabId: a.tabId
          });
          if (a.recipeId) {
            const s = (await getRecipes()).find(i => i.id === a.recipeId);
            if (s) {
              setTimeout(() => {
                chrome.runtime.sendMessage({
                  action: "LOAD_RECIPE",
                  payload: {
                    recipe: s
                  }
                });
              }, 500);
            }
          } else if (a.prebuiltId) {
            const n = Cn.find(s => s.id === a.prebuiltId);
            if (n) {
              setTimeout(() => {
                chrome.runtime.sendMessage({
                  action: "LOAD_RECIPE",
                  payload: {
                    recipe: n
                  }
                });
              }, 500);
            }
          }
          r({
            success: true
          });
          break;
        }
      case "GET_RECIPES":
        {
          const a = await getRecipes();
          r({
            recipes: a
          });
          break;
        }
      case "SAVE_RECIPE":
        {
          const {
            recipe: a
          } = e.payload;
          await saveRecipe(a);
          r({
            success: true
          });
          break;
        }
      case "DELETE_RECIPE":
        {
          const {
            id: a
          } = e.payload;
          await deleteRecipe(a);
          r({
            success: true
          });
          break;
        }
      case "EXPORT_DATA":
        {
          const a = e.payload;
          if (a.format === "xlsx") {
            await e2(a.data, a.fields, a.filename);
          } else {
            await r2(a.data, a.fields, a.filename);
          }
          r({
            success: true
          });
          break;
        }
      case "START_MULTI_SCRAPE":
        {
          const a = e.payload;
          a2(a.recipe, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_SCROLL_SCRAPE":
        {
          const a = e.payload;
          n2(a.recipe, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "STOP_SCRAPE":
        {
          o2();
          r({
            success: true
          });
          break;
        }
      case "START_PAGE_DETAILS_SCRAPE":
        {
          const a = e.payload;
          i2(a.fields, a.urls, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_PAGINATED_IMAGE_SCRAPE":
        {
          const a = e.payload;
          s2(a.pagination, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "START_SCROLL_IMAGE_SCRAPE":
        {
          const a = e.payload;
          f2(a.maxScrolls, a.delayMs, a.tabId);
          r({
            success: true
          });
          break;
        }
      case "DOWNLOAD_IMAGE":
        {
          const a = e.payload;
          chrome.downloads.download({
            url: a.url,
            filename: a.filename
          });
          r({
            success: true
          });
          break;
        }
      case "START_AUTO_DETECT_PICKER":
        {
          const a = e.payload;
          await validateTabId(a.tabId);
          chrome.tabs.sendMessage(a.tabId, {
            action: "START_AUTO_DETECT_PICKER"
          });
          r({
            success: true
          });
          break;
        }
      case "DETECT_PREBUILT":
        {
          const {
            url: a
          } = e.payload;
          const n = detectPrebuiltRecipe(a);
          r({
            recipe: n || null
          });
          break;
        }
      case "GET_PREBUILT_RECIPES":
        {
          r({
            recipes: Cn
          });
          break;
        }
      case "GET_LICENCE_STATE":
        {
          const a = await Ps();
          r(a);
          break;
        }
      case "VALIDATE_LICENCE":
        {
          const {
            licenceKey: a
          } = e.payload;
          const n = await Ns(a);
          r(n);
          break;
        }
      case "DEACTIVATE_LICENCE":
        {
          await Is();
          r({
            success: true
          });
          break;
        }
      default:
        {
          const [a] = await chrome.tabs.query({
            active: true,
            currentWindow: true
          });
          if (a != null && a.id) {
            chrome.tabs.sendMessage(a.id, e, n => {
              r(n);
            });
          } else {
            r({
              error: "No active tab found"
            });
          }
        }
    }
  } catch (a) {
    console.error("[SWWC] Message handler error:", a);
    r({
      error: String(a)
    });
  }
}
chrome.runtime.onInstalled.addListener(async () => {
  console.log("[SWWC] Extension installed");
  await Ls();
});
chrome.runtime.onMessage.addListener((e, t, r) => {
  (async () => {
    try {
      await handleMessage(e, t, r);
    } catch (a) {
      console.error("[SWWC] Top-level message error:", a);
      r({
        error: String(a)
      });
    }
  })();
  return true;
});
chrome.action.onClicked.addListener(e => {
  if (e.id) {
    chrome.sidePanel.open({
      tabId: e.id
    });
  }
});