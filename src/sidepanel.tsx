import React from 'react';
import ReactDOM from 'react-dom/client';
import { formatTimeRemaining } from './licence.js';
import { createDefaultRecipe, FIELD_COLORS, generateId, extractUrls } from './utils.js';
import { SidepanelHeader } from './components/SidepanelHeader.jsx';
import { FieldRow } from './components/FieldRow.jsx';
import { FieldList } from './components/FieldList.jsx';
import { PaginationConfig } from './components/PaginationConfig.jsx';
import { BulkUrlConfig } from './components/BulkUrlConfig.jsx';
import { ActionBar } from './components/ActionBar.jsx';
import { StatusBar } from './components/StatusBar.jsx';
import { SavedRecipesOverlay } from './components/SavedRecipesOverlay.jsx';
import { LicencePage } from './components/LicencePage.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';

function SidePanelApp() {
  const [t, i] = React.useState(createDefaultRecipe());
  const [d, m] = React.useState("list");
  const [p, x] = React.useState(null);
  const [o, r] = React.useState([]);
  const [f, v] = React.useState(null);
  const [E, A] = React.useState([]);
  const [k, j] = React.useState(null);
  const [u, h] = React.useState(null);
  const [M, S] = React.useState("idle");
  const [I, B] = React.useState(false);
  const F = React.useRef(t);
  F.current = t;
  const [P, w] = React.useState({
    id: generateId(),
    recipeId: t.id,
    status: "idle",
    data: [],
    currentPage: 0,
    totalPages: 0,
    errors: [],
    startedAt: null,
    completedAt: null
  });
  const [L, W] = React.useState({
    isLicensed: false,
    isTrial: true,
    trialExpired: false,
    trialRemainingMs: 0,
    licenceData: null
  });
  const [q, T] = React.useState(false);
  const [z, Y] = React.useState(false);
  React.useEffect(() => {
    chrome.runtime.sendMessage({
      action: "GET_LICENCE_STATE"
    }, a => {
      if (a) {
        W(a);
        if (a.trialExpired && !a.isLicensed) {
          T(true);
        }
      }
      Y(true);
    });
  }, []);
  React.useEffect(() => {
    if (L.isLicensed || L.trialExpired) {
      return;
    }
    const a = setInterval(() => {
      W(n => {
        if (n.trialRemainingMs <= 0) {
          return n;
        }
        const s = Math.max(0, n.trialRemainingMs - 1000);
        if (s <= 0) {
          T(true);
          return {
            ...n,
            trialRemainingMs: 0,
            trialExpired: true,
            isTrial: false
          };
        } else {
          return {
            ...n,
            trialRemainingMs: s
          };
        }
      });
    }, 1000);
    return () => clearInterval(a);
  }, [L.isLicensed, L.trialExpired]);
  const U = React.useCallback(() => {
    chrome.runtime.sendMessage({
      action: "GET_LICENCE_STATE"
    }, a => {
      if (a) {
        W(a);
      }
    });
  }, []);
  React.useEffect(() => {
    if (!t.urlPattern) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, a => {
        var n;
        if ((n = a[0]) != null && n.url) {
          try {
            const s = new URL(a[0].url);
            i(l => ({
              ...l,
              urlPattern: s.hostname
            }));
          } catch { }
        }
      });
    }
  }, []);
  React.useEffect(() => {
    const a = n => {
      if (n.action === "ELEMENT_PICKED") {
        const s = n.payload;
        if (s.fieldId.startsWith("__")) {
          return;
        }
        i(l => {
          const b = l.fields.find(C => C.id === s.fieldId);
          const g = (b == null ? undefined : b.name) || "Field";
          const y = (b == null ? undefined : b.type) || "text";
          const N = s.attribute || (y === "image" || y === "video" ? "src" : y === "link" ? "href" : "textContent");
          A(C => C.some(D => D.selector === s.selector) ? C : [...C, {
            selector: s.selector,
            name: g,
            attribute: N,
            type: y,
            sampleValue: s.sampleText || ""
          }]);
          return {
            ...l,
            fields: l.fields.map(C => {
              if (C.id !== s.fieldId) {
                return C;
              }
              const D = {
                selector: s.selector
              };
              if (s.attribute) {
                D.attribute = s.attribute;
              }
              return {
                ...C,
                ...D
              };
            }),
            updatedAt: Date.now()
          };
        });
      } else if (n.action === "ELEMENT_PICKED_HAS_LINK") {
        const s = n.payload;
        if (s.fieldId.startsWith("__")) {
          return;
        }
        j({
          fieldName: s.fieldName,
          linkSelector: s.linkSelector,
          linkHref: s.linkHref
        });
      } else if (n.action === "VIDEO_HAS_POSTER") {
        const s = n.payload;
        if (s.fieldId.startsWith("__")) {
          return;
        }
        h({
          fieldName: s.fieldName,
          posterSelector: s.posterSelector,
          posterUrl: s.posterUrl,
          posterAttribute: s.posterAttribute
        });
      } else if (n.action === "SCRAPE_RESULT") {
        const s = n.payload;
        w(l => {
          const b = [...l.data, ...s.data];
          const g = F.current.fields;
          const y = s.isImageScrape ? G : g.map(N => ({
            id: N.id,
            name: N.name,
            type: N.type
          }));
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, N => {
            var C;
            if ((C = N[0]) != null && C.id) {
              chrome.tabs.sendMessage(N[0].id, {
                action: "SHOW_DATA_TABLE",
                payload: {
                  data: b,
                  fields: y
                }
              });
            }
          });
          return {
            ...l,
            data: b,
            status: "complete",
            completedAt: Date.now()
          };
        });
      } else if (n.action === "DT_FIELDS_CHANGED") {
        const s = n.payload;
        i(l => {
          const b = s.fields.map(g => {
            const y = l.fields.find(N => N.id === g.id);
            if (y) {
              return {
                ...y,
                name: g.name,
                type: g.type
              };
            } else {
              return null;
            }
          }).filter(g => g !== null);
          return {
            ...l,
            fields: b,
            updatedAt: Date.now()
          };
        });
        if (s.renamedKeys) {
          const l = s.renamedKeys;
          w(b => ({
            ...b,
            data: b.data.map(g => {
              const y = {
                ...g
              };
              for (const [N, C] of Object.entries(l)) {
                if (N in y) {
                  y[C] = y[N];
                  delete y[N];
                }
              }
              return y;
            })
          }));
        }
      } else if (n.action === "SCRAPE_PROGRESS") {
        const s = n.payload;
        w(l => ({
          ...l,
          currentPage: s.currentPage,
          totalPages: s.totalPages,
          status: s.mode === "page-detail" ? "page-detail" : s.mode === "scroll" ? "scrolling" : "paginating"
        }));
      } else if (n.action === "AUTO_DETECT_RESULT") {
        const l = n.payload.structure;
        const b = l.fields.map(g => ({
          id: generateId(),
          name: g.name,
          selector: g.selector,
          attribute: g.attribute,
          type: g.type
        }));
        A(l.fields.map(g => ({
          selector: g.selector,
          name: g.name,
          attribute: g.attribute,
          type: g.type,
          sampleValue: g.sampleValue
        })));
        i(g => ({
          ...g,
          name: g.name || `${l.type} (${l.itemCount} items)`,
          fields: b,
          updatedAt: Date.now()
        }));
      } else if (n.action === "LOAD_RECIPE") {
        const s = n.payload;
        i(s.recipe);
      }
    };
    chrome.runtime.onMessage.addListener(a);
    return () => chrome.runtime.onMessage.removeListener(a);
  }, []);
  const J = React.useCallback(() => {
    S("saving");
    chrome.runtime.sendMessage({
      action: "SAVE_RECIPE",
      payload: {
        recipe: t
      }
    }, a => {
      if (a != null && a.success) {
        S("saved");
        setTimeout(() => S("idle"), 2000);
      } else {
        S("error");
        setTimeout(() => S("idle"), 3000);
      }
    });
  }, [t]);
  const Q = React.useCallback(() => {
    const a = {
      id: generateId(),
      name: `Field ${t.fields.length + 1}`,
      selector: "",
      attribute: "textContent",
      type: "text"
    };
    i(n => ({
      ...n,
      fields: [...n.fields, a],
      updatedAt: Date.now()
    }));
  }, [t.fields.length]);
  const Z = React.useCallback((a, n) => {
    i(s => ({
      ...s,
      fields: s.fields.map(l => l.id === a ? {
        ...l,
        ...n
      } : l),
      updatedAt: Date.now()
    }));
  }, []);
  const ee = React.useCallback(a => {
    i(n => ({
      ...n,
      fields: n.fields.filter(s => s.id !== a),
      updatedAt: Date.now()
    }));
  }, []);
  const te = React.useCallback(async (a, n, s) => {
    const [l] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (l != null && l.id) {
      chrome.tabs.sendMessage(l.id, {
        action: "START_PICKER",
        payload: {
          fieldId: a,
          fieldName: n,
          fieldType: s
        }
      });
    }
  }, []);
  const H = React.useCallback(async () => {
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a == null || !a.id) {
      return;
    }
    w(s => ({
      ...s,
      status: "scraping",
      data: []
    }));
    const n = a.id;
    chrome.tabs.sendMessage(n, {
      action: "SCRAPE_PAGE",
      payload: {
        fields: t.fields
      }
    }, s => {
      if (s != null && s.data && s.data.length > 0) {
        w(l => ({
          ...l,
          data: s.data,
          status: "complete",
          completedAt: Date.now()
        }));
        chrome.tabs.sendMessage(n, {
          action: "SHOW_DATA_TABLE",
          payload: {
            data: s.data,
            fields: t.fields.map(l => ({
              id: l.id,
              name: l.name,
              type: l.type
            }))
          }
        });
      } else {
        w(l => ({
          ...l,
          status: "error",
          errors: [...l.errors, {
            page: 0,
            message: "No data returned",
            timestamp: Date.now()
          }]
        }));
      }
    });
  }, [t.fields]);
  const V = React.useCallback(async () => {
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a != null && !!a.id && o.length !== 0) {
      w(n => ({
        ...n,
        status: "page-detail",
        data: [],
        currentPage: 0,
        totalPages: o.length,
        errors: [],
        startedAt: Date.now(),
        completedAt: null
      }));
      chrome.runtime.sendMessage({
        action: "START_PAGE_DETAILS_SCRAPE",
        payload: {
          fields: t.fields,
          urls: o,
          tabId: a.id
        }
      });
    }
  }, [t.fields, o]);
  const G = [{
    id: "__img_url",
    name: "Image URL",
    type: "link"
  }, {
    id: "__img_alt",
    name: "Alt Text",
    type: "text"
  }, {
    id: "__img_w",
    name: "Width",
    type: "text"
  }, {
    id: "__img_h",
    name: "Height",
    type: "text"
  }];
  const O = React.useCallback(async () => {
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a == null || !a.id) {
      return;
    }
    if (p) {
      w(s => ({
        ...s,
        status: p.type === "infinite-scroll" ? "scrolling" : "paginating",
        data: [],
        currentPage: 0,
        totalPages: p.maxPages,
        errors: [],
        startedAt: Date.now(),
        completedAt: null
      }));
      if (p.type === "infinite-scroll") {
        chrome.runtime.sendMessage({
          action: "START_SCROLL_IMAGE_SCRAPE",
          payload: {
            maxScrolls: p.maxPages,
            delayMs: p.delayMs,
            tabId: a.id
          }
        });
      } else {
        chrome.runtime.sendMessage({
          action: "START_PAGINATED_IMAGE_SCRAPE",
          payload: {
            pagination: p,
            tabId: a.id
          }
        });
      }
      return;
    }
    w(s => ({
      ...s,
      status: "scraping",
      data: [],
      errors: [],
      startedAt: Date.now(),
      completedAt: null
    }));
    const n = a.id;
    chrome.tabs.sendMessage(n, {
      action: "EXTRACT_IMAGES"
    }, s => {
      if (s != null && s.data && s.data.length > 0) {
        w(l => ({
          ...l,
          data: s.data,
          status: "complete",
          completedAt: Date.now()
        }));
        chrome.tabs.sendMessage(n, {
          action: "SHOW_DATA_TABLE",
          payload: {
            data: s.data,
            fields: G
          }
        });
      } else {
        w(l => ({
          ...l,
          status: "error",
          errors: [...l.errors, {
            page: 0,
            message: "No images found on page",
            timestamp: Date.now()
          }]
        }));
      }
    });
  }, [p]);
  const ae = React.useCallback(async () => {
    if (d === "images") {
      O();
      return;
    }
    if (d === "page") {
      V();
      return;
    }
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a != null && a.id) {
      if (!t.pagination) {
        H();
        return;
      }
      w(n => {
        var s;
        return {
          ...n,
          status: "scraping",
          data: [],
          currentPage: 0,
          totalPages: ((s = t.pagination) == null ? undefined : s.maxPages) || 0,
          errors: [],
          startedAt: Date.now(),
          completedAt: null
        };
      });
      if (t.pagination.type === "infinite-scroll") {
        chrome.runtime.sendMessage({
          action: "START_SCROLL_SCRAPE",
          payload: {
            recipe: t,
            tabId: a.id
          }
        });
      } else {
        chrome.runtime.sendMessage({
          action: "START_MULTI_SCRAPE",
          payload: {
            recipe: t,
            tabId: a.id
          }
        });
      }
    }
  }, [t, H, d, V, O]);
  const se = React.useCallback(async () => {
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a != null && a.id) {
      chrome.runtime.sendMessage({
        action: "START_AUTO_DETECT_PICKER",
        payload: {
          tabId: a.id
        }
      });
    }
  }, []);
  const ne = React.useCallback(async a => {
    v(a);
    const [n] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (n == null || !n.id) {
      return;
    }
    if (!a) {
      chrome.tabs.sendMessage(n.id, {
        action: "CLEAR_HIGHLIGHTS"
      });
      return;
    }
    const s = t.fields.find(l => l.id === a);
    if (s == null || !s.selector) {
      chrome.tabs.sendMessage(n.id, {
        action: "CLEAR_HIGHLIGHTS"
      });
      return;
    }
    chrome.tabs.sendMessage(n.id, {
      action: "HIGHLIGHT_SELECTOR",
      payload: {
        selector: s.selector,
        color: "#000000"
      }
    });
  }, [t.fields]);
  const ie = React.useCallback(async () => {
    i(n => ({
      ...n,
      fields: [],
      updatedAt: Date.now()
    }));
    v(null);
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a != null && a.id) {
      chrome.tabs.sendMessage(a.id, {
        action: "CLEAR_HIGHLIGHTS"
      });
    }
  }, []);
  const le = React.useCallback(() => {
    chrome.runtime.sendMessage({
      action: "STOP_SCRAPE"
    });
    w(a => ({
      ...a,
      status: "idle"
    }));
  }, []);
  const re = React.useCallback(async () => {
    if (P.data.length === 0) {
      return;
    }
    const [a] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (a != null && a.id) {
      chrome.tabs.sendMessage(a.id, {
        action: "SHOW_DATA_TABLE",
        payload: {
          data: P.data,
          fields: t.fields.map(n => ({
            id: n.id,
            name: n.name,
            type: n.type
          }))
        }
      });
    }
  }, [P.data, t.fields]);
  const ce = React.useCallback(() => {
    if (!k) {
      return;
    }
    const a = {
      id: generateId(),
      name: `${k.fieldName} URL`,
      selector: k.linkSelector,
      attribute: "href",
      type: "link"
    };
    i(n => ({
      ...n,
      fields: [...n.fields, a],
      updatedAt: Date.now()
    }));
    j(null);
  }, [k]);
  const oe = React.useCallback(() => {
    j(null);
  }, []);
  const de = React.useCallback(() => {
    if (!u) {
      return;
    }
    const a = {
      id: generateId(),
      name: `${u.fieldName} Poster`,
      selector: u.posterSelector,
      attribute: u.posterAttribute,
      type: "image"
    };
    i(n => ({
      ...n,
      fields: [...n.fields, a],
      updatedAt: Date.now()
    }));
    h(null);
  }, [u]);
  const ue = React.useCallback(() => {
    h(null);
  }, []);
  const he = React.useCallback((a, n) => {
    i(s => {
      const l = [...s.fields];
      const [b] = l.splice(a, 1);
      l.splice(n, 0, b);
      return {
        ...s,
        fields: l,
        updatedAt: Date.now()
      };
    });
  }, []);
  const $ = t.fields.length > 0 && t.fields.some(a => a.selector);
  const me = d === "images" ? true : d === "page" ? $ && o.length > 0 : $;
  if (z) {
    if (q || L.trialExpired) {
      return <div className="sidepanel">{<LicencePage onActivated={() => {
        U();
        T(false);
      }} onBack={() => T(false)} trialExpired={L.trialExpired} licenceData={L.licenceData} onDeactivate={() => {
        U();
        T(false);
      }} />}</div>;
    } else {
      return <div className="sidepanel">{<SidepanelHeader recipeName={t.name} onNameChange={a => i(n => ({
        ...n,
        name: a,
        updatedAt: Date.now()
      }))} onSave={J} saveStatus={M} canSave={!!t.name && t.fields.length > 0} onOpenRecipes={() => B(true)} isLicensed={L.isLicensed} trialExpired={L.trialExpired} trialRemainingMs={L.trialRemainingMs} onOpenLicence={() => T(true)} urlPattern={t.urlPattern} onUrlChange={a => i(n => ({
        ...n,
        urlPattern: a,
        updatedAt: Date.now()
      }))} />}{I && <SavedRecipesOverlay onLoad={a => i(a)} onClose={() => B(false)} />}{<div className="panel-body">{L.isLicensed && <div className="url-section">{<input className="input input-sm url-input" type="text" placeholder="URL pattern (e.g. amazon.com)" value={t.urlPattern} onChange={a => i(n => ({
        ...n,
        urlPattern: a.target.value,
        updatedAt: Date.now()
      }))} />}</div>}{<div className="mode-toggle">{<button className={`mode-toggle-btn ${d === "list" ? "mode-toggle-btn-active" : ""}`} onClick={() => m("list")}>{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<path d="M2 3h2M6 3h6M2 7h2M6 7h6M2 11h2M6 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>}List</button>}{<button className={`mode-toggle-btn ${d === "page" ? "mode-toggle-btn-active" : ""}`} onClick={() => m("page")}>{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<path d="M4 1h4l3 3v8a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />}{<path d="M8 1v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />}</svg>}Page Details</button>}{<button className={`mode-toggle-btn ${d === "images" ? "mode-toggle-btn-active" : ""}`} onClick={() => m("images")}>{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />}{<circle cx="5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />}{<path d="M1.5 10l3-3 2 2 2.5-3L12.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />}</svg>}Images</button>}</div>}{d === "images" ? <>{<div className="images-mode-info">{<div className="images-mode-icon">{<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{<rect x="3" y="3" width="18" height="18" rx="2" />}{<circle cx="8.5" cy="8.5" r="1.5" />}{<path d="M21 15l-5-5L5 21" />}</svg>}</div>}{<p className="images-mode-title">Extract All Images</p>}{<p className="images-mode-desc">Finds all images including img tags, picture sources, and CSS background images.</p>}</div>}{<PaginationConfig pagination={p} onChange={x} />}</> : <>{<div className="fields-header">{<span className="fields-label">Fields</span>}{<div className="fields-actions">{d === "list" && <button className="btn btn-primary btn-sm" onClick={se}>Auto Detect</button>}{<button className="btn btn-secondary btn-sm" onClick={Q}>+ Add</button>}{t.fields.length > 0 && <button className="btn btn-ghost btn-sm" onClick={ie}>Clear</button>}</div>}</div>}{<div className="fields-scroll">{<FieldList fields={t.fields} activeFieldId={f} onUpdateField={Z} onRemoveField={ee} onPickField={te} onSelectField={ne} onReorderFields={he} availableSelectors={E} />}</div>}{d === "list" ? <PaginationConfig pagination={t.pagination} onChange={a => i(n => ({
        ...n,
        pagination: a,
        updatedAt: Date.now()
      }))} /> : <BulkUrlConfig urls={o} onChange={r} />}</>}</div>}{<ActionBar onViewData={re} onScrape={ae} hasData={P.data.length > 0} dataCount={P.data.length} canScrape={me} />}{k && <div className="link-prompt">{<div className="link-prompt-text">This element has a link. Add a {<strong>{k.fieldName} URL</strong>} field?</div>}{<div className="link-prompt-preview">{k.linkHref}</div>}{<div className="link-prompt-actions">{<button className="btn btn-primary btn-sm" onClick={ce}>Yes, Add Link</button>}{<button className="btn btn-ghost btn-sm" onClick={oe}>No</button>}</div>}</div>}{u && <div className="link-prompt">{<div className="link-prompt-text">This video has a poster image. Add a {<strong>{u.fieldName} Poster</strong>} field?</div>}{<div className="link-prompt-preview">{u.posterUrl}</div>}{<div className="link-prompt-actions">{<button className="btn btn-primary btn-sm" onClick={de}>Yes, Add Poster</button>}{<button className="btn btn-ghost btn-sm" onClick={ue}>No</button>}</div>}</div>}{<StatusBar status={P.status} currentPage={P.currentPage} totalPages={P.totalPages} onStop={le} />}</div>;
    }
  } else {
    return <div className="sidepanel">{<div className="licence-loading">{<div className="spinner" style={{
      width: 24,
      height: 24
    }} />}</div>}</div>;
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(<><ErrorBoundary><SidePanelApp /></ErrorBoundary></>);