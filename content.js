(function () {
  "use strict";

  const ur = "swwc-highlight-host";
  let Pt = null;
  let ee = null;
  let re = [];
  let Bt = null;
  let Ut = null;
  function fr() {
    return ee || (Pt = document.createElement("div"), Pt.id = ur, Pt.style.cssText = "position:fixed;top:0;left:0;width:0;height:0;z-index:2147483646;pointer-events:none;", document.body.appendChild(Pt), ee = Pt.attachShadow({
      mode: "open"
    }), ee);
  }
  function ne(e, a = "#4F46E5") {
    const t = fr();
    const o = e.getBoundingClientRect();
    const s = document.createElement("div");
    s.style.cssText = `
    position: fixed;
    left: ${o.left}px;
    top: ${o.top}px;
    width: ${o.width}px;
    height: ${o.height}px;
    background: ${a}22;
    border: 2px solid ${a};
    border-radius: 2px;
    pointer-events: none;
    transition: all 0.05s ease;
    box-sizing: border-box;
  `;
    t.appendChild(s);
    re.push(s);
    s._targetElement = e;
    hr();
    return s;
  }
  function xe(e, a) {
    Et();
    document.querySelectorAll(e).forEach(o => ne(o, a));
  }
  function Et() {
    re.forEach(e => e.remove());
    re = [];
    pr();
  }
  function De() {
    re.forEach(e => {
      const a = e._targetElement;
      if (!a) {
        return;
      }
      const t = a.getBoundingClientRect();
      e.style.left = `${t.left}px`;
      e.style.top = `${t.top}px`;
      e.style.width = `${t.width}px`;
      e.style.height = `${t.height}px`;
    });
  }
  function hr() {
    if (!Bt) {
      Bt = () => requestAnimationFrame(De);
      Ut = () => requestAnimationFrame(De);
      window.addEventListener("scroll", Bt, true);
      window.addEventListener("resize", Ut);
    }
  }
  function pr() {
    if (Bt) {
      window.removeEventListener("scroll", Bt, true);
      Bt = null;
    }
    if (Ut) {
      window.removeEventListener("resize", Ut);
      Ut = null;
    }
  }
  function ie(e) {
    if (e.id && !Wt(e.id)) {
      const s = `#${CSS.escape(e.id)}`;
      if ($t(s)) {
        return s;
      }
    }
    const a = yr(e);
    if (a) {
      return a;
    }
    const t = wr(e);
    if (t) {
      return t;
    }
    const o = _r(e);
    return o || xr(e);
  }
  function ke(e) {
    let a = e;
    let t = 0;
    while (a && a !== document.body && t < 8) {
      const s = a.parentElement;
      if (!s) {
        break;
      }
      const r = mr(a);
      for (const i of r) {
        try {
          if (s.querySelectorAll(`:scope > ${i}`).length > 1) {
            const d = `${br(s)} > ${i}`;
            if (document.querySelectorAll(d).length > 1) {
              const m = gr(e, a);
              if (m && a !== e) {
                return `${d} ${m}`;
              } else {
                return d;
              }
            }
          }
        } catch { }
      }
      a = s;
      t++;
    }
    const o = vr(e);
    return o || ie(e);
  }
  function mr(e) {
    const a = e.tagName.toLowerCase();
    const t = at(e);
    const o = [];
    if (t.length > 0) {
      o.push(`${a}.${t.join(".")}`);
      for (const r of t) {
        o.push(`${a}.${r}`);
      }
    }
    o.push(a);
    const s = e.getAttribute("role");
    if (s) {
      o.push(`${a}[role="${s}"]`);
    }
    return o;
  }
  function gr(e, a) {
    if (e === a) {
      return null;
    }
    const t = e.tagName.toLowerCase();
    const o = at(e);
    if (o.length > 0) {
      const i = `${t}.${o.join(".")}`;
      if (oe(a, i)) {
        return i;
      }
      for (const n of o) {
        const c = `${t}.${n}`;
        if (oe(a, c)) {
          return c;
        }
      }
    }
    if (oe(a, t)) {
      return t;
    }
    const s = [];
    let r = e;
    while (r && r !== a) {
      const i = r.tagName.toLowerCase();
      const n = at(r);
      let c = n.length > 0 ? `${i}.${n[0]}` : i;
      const d = r.parentElement;
      if (d) {
        const p = n.length > 0 ? `${i}.${n[0]}` : i;
        if (d.querySelectorAll(`:scope > ${p}`).length > 1) {
          const f = Array.from(d.children).filter(v => v.tagName.toLowerCase() !== i ? false : n.length > 0 ? v.classList.contains(n[0]) : true).indexOf(r) + 1;
          if (f > 0) {
            c = n.length > 0 ? `${i}.${n[0]}:nth-of-type(${f})` : `${i}:nth-of-type(${f})`;
          }
        }
      }
      s.unshift(c);
      if (s.length >= 1 && s.length <= 4) {
        const p = s.join(" > ");
        if (oe(a, p)) {
          return p;
        }
      }
      r = r.parentElement;
    }
    if (s.length > 0 && s.length <= 5) {
      return s.join(" > ");
    } else {
      return t;
    }
  }
  function oe(e, a) {
    try {
      return e.querySelectorAll(a).length === 1;
    } catch {
      return false;
    }
  }
  function br(e) {
    if (e.id && !Wt(e.id)) {
      return `#${CSS.escape(e.id)}`;
    }
    const a = e.tagName.toLowerCase();
    const t = at(e);
    if (t.length > 0) {
      for (const n of t) {
        const c = `${a}.${n}`;
        try {
          if (document.querySelectorAll(c).length === 1) {
            return c;
          }
        } catch { }
      }
      const i = `${a}.${t.join(".")}`;
      try {
        if (document.querySelectorAll(i).length === 1) {
          return i;
        }
      } catch { }
    }
    let o = e;
    const s = [];
    let r = 0;
    while (o && o !== document.body && r < 5) {
      const i = o.tagName.toLowerCase();
      const n = at(o);
      const c = n.length > 0 ? `${i}.${n[0]}` : i;
      if (o.id && !Wt(o.id)) {
        s.unshift(`#${CSS.escape(o.id)}`);
        return s.join(" > ");
      }
      s.unshift(c);
      o = o.parentElement;
      r++;
    }
    return s.join(" > ");
  }
  function vr(e) {
    const a = e.tagName.toLowerCase();
    const t = at(e);
    for (const o of t) {
      const s = `${a}.${o}`;
      try {
        const r = document.querySelectorAll(s).length;
        if (r > 1 && r < 500) {
          return s;
        }
      } catch { }
    }
    if (t.length > 0) {
      const o = `${a}.${t.join(".")}`;
      try {
        const s = document.querySelectorAll(o).length;
        if (s > 1 && s < 500) {
          return o;
        }
      } catch { }
    }
    return null;
  }
  function Wt(e) {
    return !!/^[a-f0-9]{8,}$/i.test(e) || !!/[:.]/.test(e) || !!/^(ember|react|vue|ng|__)/i.test(e) || !!(e.length > 50);
  }
  function yr(e) {
    const a = ["data-testid", "data-id", "data-name", "name", "aria-label"];
    for (const t of a) {
      const o = e.getAttribute(t);
      if (o && !Wt(o)) {
        const s = `[${t}="${CSS.escape(o)}"]`;
        if ($t(s)) {
          return s;
        }
      }
    }
    return null;
  }
  function wr(e) {
    const a = e.tagName.toLowerCase();
    const t = at(e);
    if (t.length === 0) {
      return null;
    }
    const o = `${a}.${t.join(".")}`;
    if ($t(o)) {
      return o;
    }
    for (const s of t) {
      const r = `${a}.${s}`;
      if ($t(r)) {
        return r;
      }
    }
    if (t.length >= 2) {
      for (let s = 0; s < t.length; s++) {
        for (let r = s + 1; r < t.length; r++) {
          const i = `${a}.${t[s]}.${t[r]}`;
          if ($t(i)) {
            return i;
          }
        }
      }
    }
    return null;
  }
  function _r(e) {
    let a = e;
    const t = [];
    let o = 0;
    while (a && a !== document.body && o < 5) {
      const s = a.tagName.toLowerCase();
      const r = at(a);
      let i = s;
      if (a.id && !Wt(a.id)) {
        i = `#${CSS.escape(a.id)}`;
        t.unshift(i);
        const c = t.join(" > ");
        if ($t(c)) {
          return c;
        }
        break;
      }
      if (r.length > 0) {
        i = `${s}.${r[0]}`;
      }
      t.unshift(i);
      const n = t.join(" > ");
      if ($t(n)) {
        return n;
      }
      a = a.parentElement;
      o++;
    }
    return null;
  }
  function xr(e) {
    const a = [];
    let t = e;
    while (t && t !== document.body) {
      const o = t.parentElement;
      if (!o) {
        break;
      }
      const r = Array.from(o.children).indexOf(t) + 1;
      const i = t.tagName.toLowerCase();
      a.unshift(`${i}:nth-child(${r})`);
      t = o;
    }
    return a.join(" > ");
  }
  function at(e) {
    return Array.from(e.classList).filter(a => !/^[a-z]{1,3}[A-Z]/.test(a) && !/^_/.test(a) && !/[0-9]{4,}/.test(a) && !(a.length > 40));
  }
  function $t(e) {
    try {
      return document.querySelectorAll(e).length === 1;
    } catch {
      return false;
    }
  }
  const kr = ".picker-toolbar{font-family:Rubik,sans-serif;font-size:13px;line-height:1.4;color:#fff}.picker-toolbar-inner{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:#1e1b4b;border-top:2px solid #4F46E5;box-shadow:0 -4px 12px #0000004d}.picker-info{display:flex;align-items:center;gap:12px;flex:1;min-width:0;overflow:hidden}.picker-label{white-space:nowrap;flex-shrink:0}.picker-label strong{color:#a5b4fc}.picker-selector{font-family:SF Mono,Monaco,monospace;font-size:11px;background:#ffffff1a;padding:2px 8px;border-radius:4px;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.picker-count{background:#4f46e5;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;white-space:nowrap;flex-shrink:0}.picker-hint{color:#a5b4fc;font-style:italic}.picker-actions{display:flex;gap:8px;flex-shrink:0;margin-left:12px}.picker-btn{padding:6px 16px;border:none;border-radius:6px;font-size:13px;font-weight:500;cursor:pointer;transition:background .15s ease}.picker-btn-confirm{background:#4f46e5;color:#fff}.picker-btn-confirm:hover{background:#4338ca}.picker-btn-cancel{background:#ffffff26;color:#fff}.picker-btn-cancel:hover{background:#ffffff40}";
  const Sr = "swwc-picker-host";
  let Ct = null;
  let se = null;
  let It = null;
  let xt = {
    fieldName: "",
    selector: "",
    matchCount: 0,
    onConfirm: () => { },
    onCancel: () => { }
  };
  function Me(e) {
    xt = {
      ...e
    };
    if (Ct) {
      Se();
      return;
    }
    Ct = document.createElement("div");
    Ct.id = Sr;
    Ct.style.cssText = "position:fixed;bottom:0;left:0;right:0;z-index:2147483647;pointer-events:auto;";
    document.body.appendChild(Ct);
    se = Ct.attachShadow({
      mode: "open"
    });
    const a = document.createElement("style");
    a.textContent = kr;
    se.appendChild(a);
    It = document.createElement("div");
    It.className = "picker-toolbar";
    se.appendChild(It);
    Se();
  }
  function ae(e) {
    xt = {
      ...xt,
      ...e
    };
    Se();
  }
  function Fe() {
    if (Ct) {
      Ct.remove();
      Ct = null;
      se = null;
      It = null;
    }
  }
  function Se() {
    if (!It) {
      return;
    }
    It.innerHTML = `
    <div class="picker-toolbar-inner">
      <div class="picker-info">
        <span class="picker-label">Picking: <strong>${je(xt.fieldName)}</strong></span>
        ${xt.selector ? `
          <span class="picker-selector">${je(xt.selector)}</span>
          <span class="picker-count">${xt.matchCount} match${xt.matchCount !== 1 ? "es" : ""}</span>
        ` : `
          <span class="picker-hint">Click an element on the page</span>
        `}
      </div>
      <div class="picker-actions">
        <button class="picker-btn picker-btn-confirm" id="swwc-confirm">Confirm</button>
        <button class="picker-btn picker-btn-cancel" id="swwc-cancel">Cancel</button>
      </div>
    </div>
  `;
    const e = It.querySelector("#swwc-confirm");
    const a = It.querySelector("#swwc-cancel");
    if (e != null) {
      e.addEventListener("click", t => {
        t.stopPropagation();
        xt.onConfirm();
      });
    }
    if (a != null) {
      a.addEventListener("click", t => {
        t.stopPropagation();
        xt.onCancel();
      });
    }
  }
  function je(e) {
    const a = document.createElement("div");
    a.textContent = e;
    return a.innerHTML;
  }
  let Nt = false;
  let Lt = "";
  let qt = "";
  let Ht = "";
  let Tt = null;
  let le = null;
  function Pe(e) {
    if (!Nt) {
      return;
    }
    const a = document.elementFromPoint(e.clientX, e.clientY);
    if (!!a && a !== le && !He(a)) {
      le = a;
      if (Tt) {
        Tt.remove();
        Tt = null;
      }
      Tt = ne(a, "#4F46E5");
    }
  }
  function Ue(e) {
    if (!Nt) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    const a = document.elementFromPoint(e.clientX, e.clientY);
    if (!a || He(a)) {
      return;
    }
    let t = a;
    let o;
    if (Ht === "image") {
      const d = Er(a);
      if (d) {
        t = d.element;
        o = d.attribute;
      }
    } else if (Ht === "video") {
      const d = Cr(a);
      if (d) {
        t = d.element;
        o = d.attribute;
      }
    }
    const s = ie(t);
    const r = Lt.startsWith("__");
    let i = s;
    let n = 1;
    if (!r) {
      const d = ke(t);
      const p = document.querySelectorAll(d).length;
      const m = document.querySelectorAll(s).length;
      i = p > 1 ? d : s;
      n = p > 1 ? p : m;
    }
    Et();
    xe(i, "#16A34A");
    const c = zr(t, o);
    ae({
      selector: i,
      matchCount: n,
      fieldName: qt
    });
    chrome.runtime.sendMessage({
      action: "ELEMENT_PICKED",
      payload: {
        fieldId: Lt,
        selector: i,
        sampleText: c,
        matchCount: n,
        attribute: o
      }
    });
    if (!Lt.startsWith("__")) {
      const d = a.tagName === "A" ? a : a.closest("a");
      if (d && d.href && !d.href.startsWith("javascript:")) {
        const p = ke(d);
        const m = document.querySelectorAll(p).length;
        chrome.runtime.sendMessage({
          action: "ELEMENT_PICKED_HAS_LINK",
          payload: {
            fieldId: Lt,
            fieldName: qt,
            linkSelector: m > 1 ? p : ie(d),
            linkHref: d.href,
            linkMatchCount: m > 1 ? m : 1
          }
        });
      }
    }
    if (Ht === "video" && !Lt.startsWith("__")) {
      const d = Ar(t, a);
      if (d) {
        const p = ke(d.element);
        const m = document.querySelectorAll(p).length;
        chrome.runtime.sendMessage({
          action: "VIDEO_HAS_POSTER",
          payload: {
            fieldId: Lt,
            fieldName: qt,
            posterSelector: m > 1 ? p : ie(d.element),
            posterUrl: d.url,
            posterAttribute: d.attribute
          }
        });
      }
    }
  }
  function Er(e) {
    if (e.tagName === "IMG") {
      const n = Ee(e);
      return {
        element: e,
        attribute: n
      };
    }
    const a = ce(e);
    if (a) {
      return {
        element: e,
        attribute: a
      };
    }
    const t = e.querySelector("img");
    if (t) {
      const n = Ee(t);
      return {
        element: t,
        attribute: n
      };
    }
    const o = We(e);
    if (o) {
      return {
        element: o,
        attribute: "style:background-image"
      };
    }
    if (de(e)) {
      return {
        element: e,
        attribute: "style:background-image"
      };
    }
    let r = e.parentElement;
    let i = 0;
    while (r && i < 3) {
      const n = r.querySelector("img");
      if (n) {
        const d = Ee(n);
        return {
          element: n,
          attribute: d
        };
      }
      const c = We(r);
      if (c && c !== e) {
        return {
          element: c,
          attribute: "style:background-image"
        };
      }
      r = r.parentElement;
      i++;
    }
    return null;
  }
  function Ee(e) {
    const a = e.getAttribute("src") || "";
    if (!a || a.startsWith("data:") || a.length < 20) {
      const o = ce(e);
      if (o) {
        return o;
      }
    }
    return "src";
  }
  function ce(e) {
    const a = ["data-src", "data-lazy-src", "data-original", "data-thumb", "data-thumbnail", "data-bg", "data-background"];
    for (const t of a) {
      const o = e.getAttribute(t);
      if (o && (o.startsWith("http") || o.startsWith("/") || o.startsWith("./"))) {
        return t;
      }
    }
    return null;
  }
  function We(e) {
    const a = e.querySelectorAll("*");
    for (const t of a) {
      if (de(t)) {
        return t;
      }
    }
    return null;
  }
  function de(e) {
    try {
      const t = window.getComputedStyle(e).backgroundImage;
      if (t && t !== "none") {
        const o = t.match(/url\(["']?(.+?)["']?\)/);
        if (o && o[1] && !o[1].startsWith("data:")) {
          return o[1];
        }
      }
    } catch { }
    return null;
  }
  function Cr(e) {
    if (e.tagName === "VIDEO") {
      return Ce(e);
    }
    const a = e.querySelector("video");
    if (a) {
      return Ce(a);
    }
    const t = e.tagName === "IFRAME" ? e : e.querySelector("iframe");
    if (t) {
      const r = t.getAttribute("src") || t.getAttribute("data-src") || "";
      if (r && /youtube|vimeo|dailymotion|wistia|vidyard/.test(r)) {
        const i = t.getAttribute("data-src") ? "data-src" : "src";
        return {
          element: t,
          attribute: i
        };
      }
    }
    let o = e.parentElement;
    let s = 0;
    while (o && s < 3) {
      const r = o.querySelector("video");
      if (r) {
        return Ce(r);
      }
      const i = o.querySelector("iframe");
      if (i) {
        const n = i.getAttribute("src") || i.getAttribute("data-src") || "";
        if (n && /youtube|vimeo|dailymotion|wistia|vidyard/.test(n)) {
          const c = i.getAttribute("data-src") ? "data-src" : "src";
          return {
            element: i,
            attribute: c
          };
        }
      }
      o = o.parentElement;
      s++;
    }
    return null;
  }
  function Ce(e) {
    const a = e.querySelector("source");
    if (a) {
      const o = a.getAttribute("data-src") ? "data-src" : "src";
      return {
        element: a,
        attribute: o
      };
    }
    const t = ce(e);
    if (t) {
      return {
        element: e,
        attribute: t
      };
    } else {
      return {
        element: e,
        attribute: "src"
      };
    }
  }
  function Ar(e, a) {
    const t = e.tagName === "VIDEO" ? e : e.closest("video") || a.closest("video") || a.querySelector("video") || e.querySelector("video");
    if (t) {
      const n = t.getAttribute("poster");
      if (n && n.length > 5) {
        return {
          element: t,
          attribute: "poster",
          url: n
        };
      }
    }
    const s = ((t == null ? undefined : t.parentElement) || a.parentElement || a).querySelector("img");
    if (s) {
      const n = s.getAttribute("src") || "";
      if (n && !n.startsWith("data:") && n.length > 20) {
        return {
          element: s,
          attribute: "src",
          url: n
        };
      }
      const c = ce(s);
      if (c) {
        const d = s.getAttribute(c) || "";
        return {
          element: s,
          attribute: c,
          url: d
        };
      }
    }
    const r = (t == null ? undefined : t.parentElement) || a;
    const i = de(r);
    if (i) {
      return {
        element: r,
        attribute: "style:background-image",
        url: i
      };
    } else {
      return null;
    }
  }
  function zr(e, a) {
    var t;
    var o;
    var s;
    var r;
    var i;
    if (a === "style:background-image") {
      return de(e) || "";
    }
    if (a && a !== "src" && a !== "textContent") {
      const n = e.getAttribute(a);
      if (n) {
        return n.substring(0, 100);
      }
    }
    if (e.tagName === "IMG") {
      return ((t = e.src) == null ? undefined : t.substring(0, 100)) || "";
    } else if (e.tagName === "VIDEO") {
      return ((o = e.src) == null ? undefined : o.substring(0, 100)) || "";
    } else if (e.tagName === "SOURCE") {
      return ((s = e.src) == null ? undefined : s.substring(0, 100)) || "";
    } else if (e.tagName === "IFRAME") {
      return ((r = e.src) == null ? undefined : r.substring(0, 100)) || "";
    } else {
      return ((i = e.textContent) == null ? undefined : i.trim().substring(0, 100)) || "";
    }
  }
  function qe(e) {
    if (e.key === "Escape") {
      Zt();
    }
  }
  function He(e) {
    const a = document.getElementById("swwc-highlight-host");
    const t = document.getElementById("swwc-picker-host");
    return a != null && !!a.contains(e) || e === a || t != null && !!t.contains(e) || e === t;
  }
  function Ir(e, a, t) {
    if (Nt) {
      Zt();
    }
    Nt = true;
    Lt = e;
    qt = a;
    Ht = t || "";
    le = null;
    document.addEventListener("mousemove", Pe, true);
    document.addEventListener("click", Ue, true);
    document.addEventListener("keydown", qe, true);
    document.addEventListener("auxclick", ue, true);
    document.addEventListener("contextmenu", ue, true);
    Me({
      fieldName: a,
      selector: "",
      matchCount: 0,
      onConfirm: () => Zt(),
      onCancel: () => {
        Et();
        Zt();
      }
    });
    document.body.style.cursor = "crosshair";
  }
  function Zt() {
    Nt = false;
    Lt = "";
    qt = "";
    Ht = "";
    le = null;
    if (Tt) {
      Tt.remove();
      Tt = null;
    }
    document.removeEventListener("mousemove", Pe, true);
    document.removeEventListener("click", Ue, true);
    document.removeEventListener("keydown", qe, true);
    document.removeEventListener("auxclick", ue, true);
    document.removeEventListener("contextmenu", ue, true);
    Fe();
    Et();
    document.body.style.cursor = "";
  }
  function ue(e) {
    if (Nt) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  let Rt = false;
  let Ot = null;
  let fe = null;
  let Gt = null;
  function Lr(e) {
    let a = e;
    let t = 0;
    let o = null;
    while (a && a !== document.body && t < 8) {
      const s = $r(a);
      if (s) {
        if (s.items[0].children.length > 0) {
          return s;
        }
        o ||= s;
      }
      a = a.parentElement;
      t++;
    }
    return o;
  }
  function $r(e) {
    const a = Array.from(e.children).filter(Kt);
    if (a.length < 2) {
      return null;
    }
    const t = new Map();
    for (const n of a) {
      const c = Tr(n);
      if (!t.has(c)) {
        t.set(c, []);
      }
      t.get(c).push(n);
    }
    let o = null;
    for (const [n, c] of t) {
      if (!(c.length < 2) && !(c.reduce((p, m) => p + (m.textContent || "").trim().length, 0) / c.length < 5)) {
        if (!o || c.length > o.els.length) {
          o = {
            sig: n,
            els: c
          };
        }
      }
    }
    if (!o) {
      return null;
    }
    const s = Ve(e);
    const r = `${s} > ${o.sig}`;
    const i = Ge(e, o.els[0]);
    try {
      if (document.querySelectorAll(r).length < 2) {
        return null;
      }
    } catch {
      return null;
    }
    return {
      container: e,
      items: o.els,
      itemSelector: r,
      containerSelector: s,
      type: i,
      itemTag: o.sig
    };
  }
  function Tr(e) {
    const a = e.tagName.toLowerCase();
    const t = at(e);
    if (t.length > 0) {
      return `${a}.${t.join(".")}`;
    } else {
      return a;
    }
  }
  function Ze(e, a, t, o) {
    if (t.some(d => d.attribute === "href")) {
      return;
    }
    let s = null;
    let r = "";
    if (e.tagName === "A") {
      s = e;
      r = "";
    } else {
      const d = (e.textContent || "").trim();
      const p = e.querySelectorAll("a[href]");
      for (const m of p) {
        if ((m.textContent || "").trim().length >= d.length * 0.5) {
          s = m;
          r = Ae(m, e) || "a";
          break;
        }
      }
      if (!s && p.length > 0) {
        const m = p[0];
        if (m.href && !m.href.startsWith("javascript:")) {
          s = m;
          r = Ae(m, e) || "a";
        }
      }
    }
    if (!s) {
      return;
    }
    const i = s.href;
    if (!i || i.startsWith("javascript:")) {
      return;
    }
    let n = 0;
    for (const d of o) {
      const p = r ? d.querySelector(r) : d;
      if (p && p.href) {
        n++;
      }
    }
    if (n < Math.min(2, o.length)) {
      return;
    }
    const c = r ? `${a} ${r}` : a;
    t.push({
      name: "Link",
      selector: c,
      attribute: "href",
      type: "link",
      sampleValue: i.substring(0, 80)
    });
  }
  function Or(e, a) {
    const t = e.slice(0, 5);
    if (t.length === 0) {
      return [];
    }
    const o = t[0];
    if (o.tagName === "TR") {
      return Br(o, a);
    }
    const s = o.querySelectorAll("*");
    const r = [];
    s.forEach(d => {
      var h;
      if (!Kt(d) || !o.contains(d)) {
        return;
      }
      const p = (d.textContent || "").trim();
      const m = d.tagName === "IMG" || d.children.length === 1 && ((h = d.children[0]) == null ? undefined : h.tagName) === "IMG";
      if (p.length < 1 && !m) {
        return;
      }
      if (!m && d.tagName !== "A" && d.children.length >= 1) {
        const w = Array.from(d.children).map(g => (g.textContent || "").trim()).filter(Boolean);
        if (w.length >= 1 && w.join("").length >= p.length * 0.85) {
          return;
        }
      }
      const b = Ae(d, o);
      if (!b) {
        return;
      }
      let f = 0;
      for (const w of t) {
        try {
          if (w.querySelectorAll(b).length === 1) {
            f++;
          }
        } catch { }
      }
      if (f < Math.min(2, t.length)) {
        return;
      }
      const v = f * 5 + Math.min(p.length, 60) / 10 - d.children.length * 3;
      r.push({
        el: d,
        relSel: b,
        text: p,
        score: v
      });
    });
    r.sort((d, p) => p.score - d.score);
    const i = [];
    const n = new Set();
    const c = [];
    for (const d of r) {
      if (n.has(d.relSel)) {
        continue;
      }
      let p = false;
      for (const v of c) {
        if (d.text.length > 3 && v.length > 3 && (v.includes(d.text) || d.text.includes(v))) {
          p = true;
          break;
        }
      }
      if (p) {
        continue;
      }
      const {
        attribute: m,
        type: b
      } = he(d.el);
      const f = ze(d.el, i.length);
      i.push({
        name: f,
        selector: `${a} ${d.relSel}`,
        attribute: m,
        type: b,
        sampleValue: pe(d.el, m)
      });
      n.add(d.relSel);
      if (d.text) {
        c.push(d.text);
      }
      if (d.el.tagName === "A" && m === "textContent") {
        const v = d.el.href;
        if (v && !v.startsWith("javascript:")) {
          i.push({
            name: `${f} URL`,
            selector: `${a} ${d.relSel}`,
            attribute: "href",
            type: "link",
            sampleValue: v.substring(0, 80)
          });
        }
      }
      if (i.length >= 12) {
        break;
      }
    }
    Ze(o, a, i, t);
    if (i.length < 2) {
      i.length = 0;
      Array.from(o.children).forEach((p, m) => {
        var g;
        if (!Kt(p)) {
          return;
        }
        const b = (p.textContent || "").trim();
        const f = p.tagName === "IMG" || p.children.length === 1 && ((g = p.children[0]) == null ? undefined : g.tagName) === "IMG";
        if (b.length < 1 && !f) {
          return;
        }
        let v = 0;
        for (const x of t) {
          const S = x.children[m];
          if (S && Kt(S)) {
            v++;
          }
        }
        if (v < Math.min(2, t.length)) {
          return;
        }
        const {
          attribute: h,
          type: w
        } = he(p);
        i.push({
          name: ze(p, i.length),
          selector: `${a} > :nth-child(${m + 1})`,
          attribute: h,
          type: w,
          sampleValue: pe(p, h)
        });
      });
      Ze(o, a, i, t);
    }
    if (i.length === 0 && (o.textContent || "").trim().length > 0) {
      const {
        attribute: p,
        type: m
      } = he(o);
      i.push({
        name: ze(o, 0),
        selector: a,
        attribute: p,
        type: m,
        sampleValue: pe(o, p)
      });
    }
    return i;
  }
  function Br(e, a) {
    const t = [];
    const o = e.querySelectorAll("td, th");
    const s = e.closest("table");
    const r = s == null ? undefined : s.querySelectorAll("thead th, thead td");
    o.forEach((i, n) => {
      var b;
      var f;
      const c = ((f = (b = r == null ? undefined : r[n]) == null ? undefined : b.textContent) == null ? undefined : f.trim()) || `Column ${n + 1}`;
      const d = `td:nth-child(${n + 1})`;
      const {
        attribute: p,
        type: m
      } = he(i);
      t.push({
        name: c,
        selector: `${a} ${d}`,
        attribute: p,
        type: m,
        sampleValue: pe(i, p)
      });
    });
    return t;
  }
  function Ae(e, a) {
    const t = e.tagName.toLowerCase();
    const o = at(e);
    if (o.length > 0) {
      for (const c of o) {
        const d = `${t}.${c}`;
        if (Vt(a, d)) {
          return d;
        }
      }
      if (o.length > 1) {
        const c = `${t}.${o.join(".")}`;
        if (Vt(a, c)) {
          return c;
        }
      }
    }
    for (const c of ["data-testid", "role", "itemprop"]) {
      const d = e.getAttribute(c);
      if (d) {
        const p = `${t}[${c}="${CSS.escape(d)}"]`;
        if (Vt(a, p)) {
          return p;
        }
      }
    }
    if (Vt(a, t)) {
      return t;
    }
    const s = [];
    let r = e;
    while (r && r !== a) {
      const c = r.tagName.toLowerCase();
      const d = at(r);
      let p = d.length > 0 ? `${c}.${d[0]}` : c;
      const m = r.parentElement;
      if (m) {
        const b = d.length > 0 ? `${c}.${d[0]}` : c;
        try {
          const f = m.querySelectorAll(`:scope > ${b}`);
          if (f.length > 1) {
            const v = Array.from(f).indexOf(r) + 1;
            if (v > 0) {
              p += `:nth-of-type(${v})`;
            }
          }
        } catch { }
      }
      s.unshift(p);
      if (s.length <= 8) {
        const b = s.join(" > ");
        if (Vt(a, b)) {
          return b;
        }
      }
      r = r.parentElement;
    }
    if (s.length > 0 && s.length <= 8) {
      return s.join(" > ");
    }
    const i = [];
    let n = e;
    while (n && n !== a) {
      const c = n.parentElement;
      if (!c) {
        break;
      }
      const d = Array.from(c.children).indexOf(n) + 1;
      i.unshift(`:nth-child(${d})`);
      n = c;
    }
    if (i.length > 0) {
      return i.join(" > ");
    } else {
      return null;
    }
  }
  function Vt(e, a) {
    try {
      return e.querySelectorAll(a).length === 1;
    } catch {
      return false;
    }
  }
  function Ge(e, a) {
    const t = e.tagName.toLowerCase();
    const o = a.tagName.toLowerCase();
    if (t === "table" || t === "tbody" || o === "tr") {
      return "Table";
    }
    if (t === "ul" || t === "ol" || o === "li") {
      return "List";
    }
    const s = window.getComputedStyle(e);
    if (s.display === "grid" || s.display === "flex" && s.flexWrap === "wrap") {
      return "Grid";
    } else {
      return "Repeating";
    }
  }
  function Ve(e) {
    if (e.id && !/^[a-f0-9]{8,}$/i.test(e.id)) {
      return `#${CSS.escape(e.id)}`;
    }
    const a = e.tagName.toLowerCase();
    const t = at(e);
    if (t.length > 0) {
      for (const n of t) {
        const c = `${a}.${n}`;
        try {
          if (document.querySelectorAll(c).length === 1) {
            return c;
          }
        } catch { }
      }
      const i = `${a}.${t.join(".")}`;
      try {
        if (document.querySelectorAll(i).length === 1) {
          return i;
        }
      } catch { }
    }
    const o = [];
    let s = e;
    let r = 0;
    while (s && s !== document.body && r < 4) {
      const i = s.tagName.toLowerCase();
      const n = at(s);
      if (s.id && !/^[a-f0-9]{8,}$/i.test(s.id)) {
        o.unshift(`#${CSS.escape(s.id)}`);
        return o.join(" > ");
      }
      o.unshift(n.length > 0 ? `${i}.${n[0]}` : i);
      s = s.parentElement;
      r++;
    }
    return o.join(" > ");
  }
  function he(e) {
    var t;
    if (e.tagName === "IMG" || e.children.length === 1 && ((t = e.children[0]) == null ? undefined : t.tagName) === "IMG") {
      return {
        attribute: "src",
        type: "image"
      };
    }
    if (e.tagName === "A") {
      if ((e.textContent || "").trim().length > 0) {
        return {
          attribute: "textContent",
          type: "text"
        };
      } else {
        return {
          attribute: "href",
          type: "link"
        };
      }
    }
    const a = (e.textContent || "").trim();
    if (/^[\d$€£¥,.]+$/.test(a) || /^\$?\d/.test(a)) {
      return {
        attribute: "textContent",
        type: "number"
      };
    } else {
      return {
        attribute: "textContent",
        type: "text"
      };
    }
  }
  function pe(e, a) {
    if (a === "href") {
      return e.href || e.getAttribute("href") || "";
    }
    if (a === "src") {
      const t = e.tagName === "IMG" ? e : e.querySelector("img");
      return (t == null ? undefined : t.src) || (t == null ? undefined : t.getAttribute("src")) || "";
    }
    return (e.textContent || "").trim().substring(0, 80);
  }
  function ze(e, a) {
    var r;
    const t = e.getAttribute("aria-label");
    if (t && t.length < 30) {
      return t;
    }
    const o = e.tagName.toLowerCase();
    if (o === "img" || e.children.length === 1 && ((r = e.children[0]) == null ? undefined : r.tagName) === "IMG") {
      return "Image";
    }
    if (o === "h1" || o === "h2" || o === "h3" || o === "h4") {
      return "Title";
    }
    if (o === "p") {
      return "Description";
    }
    if (o === "time") {
      return "Date";
    }
    const s = at(e);
    for (const i of s) {
      const n = i.toLowerCase();
      if (n.includes("title") || n.includes("name") || n.includes("heading")) {
        return "Title";
      }
      if (n.includes("price") || n.includes("cost")) {
        return "Price";
      }
      if (n.includes("desc") || n.includes("summary")) {
        return "Description";
      }
      if (n.includes("rating") || n.includes("star")) {
        return "Rating";
      }
      if (n.includes("date") || n.includes("time")) {
        return "Date";
      }
      if (n.includes("author") || n.includes("user")) {
        return "Author";
      }
      if (n.includes("score") || n.includes("vote") || n.includes("point")) {
        return "Score";
      }
      if (n.includes("comment")) {
        return "Comments";
      }
    }
    if (o === "a") {
      return "Link";
    } else {
      return `Field ${a + 1}`;
    }
  }
  function Kt(e) {
    const a = e.getBoundingClientRect();
    if (a.width === 0 && a.height === 0) {
      return false;
    }
    const t = window.getComputedStyle(e);
    return t.display !== "none" && t.visibility !== "hidden";
  }
  function Ke(e) {
    const a = document.getElementById("swwc-highlight-host");
    const t = document.getElementById("swwc-picker-host");
    return a != null && !!a.contains(e) || e === a || t != null && !!t.contains(e) || e === t;
  }
  function Xe(e) {
    if (!Rt) {
      return;
    }
    const a = document.elementFromPoint(e.clientX, e.clientY);
    if (!a || a === fe || Ke(a)) {
      return;
    }
    fe = a;
    Et();
    if (Ot) {
      Ot.remove();
      Ot = null;
    }
    const t = Lr(a);
    if (t) {
      Gt = {
        containerSelector: t.containerSelector,
        itemSelector: t.itemSelector,
        itemCount: t.items.length,
        type: t.type,
        container: t.container,
        items: t.items,
        itemTag: t.itemTag
      };
      t.items.forEach(o => ne(o, "#4F46E5"));
      ae({
        fieldName: `${t.type} — ${t.items.length} items`,
        selector: t.itemSelector,
        matchCount: t.items.length
      });
    } else {
      Gt = null;
      Ot = ne(a, "#94A3B8");
      ae({
        fieldName: "Click to try extraction here",
        selector: "",
        matchCount: 0
      });
    }
  }
  function Ye(e) {
    if (!Rt) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    let a = Gt;
    if (!a || a.itemCount < 2) {
      const s = document.elementFromPoint(e.clientX, e.clientY);
      if (!s || Ke(s)) {
        return;
      }
      const r = Nr(s);
      if (r) {
        a = {
          containerSelector: r.containerSelector,
          itemSelector: r.itemSelector,
          itemCount: r.items.length,
          type: r.type,
          container: r.container,
          items: r.items,
          itemTag: r.itemTag
        };
      }
    }
    if (!a || a.itemCount < 2) {
      return;
    }
    const t = Or(a.items, a.itemSelector);
    Et();
    try {
      xe(a.itemSelector, "#16A34A");
    } catch { }
    const o = {
      type: a.type.toLowerCase(),
      containerSelector: a.containerSelector,
      itemSelector: a.itemSelector,
      itemCount: a.itemCount,
      fields: t
    };
    ae({
      fieldName: `${a.type} — ${a.itemCount} items, ${t.length} fields`,
      selector: a.itemSelector,
      matchCount: a.itemCount
    });
    chrome.runtime.sendMessage({
      action: "AUTO_DETECT_RESULT",
      payload: {
        structure: o
      }
    });
    setTimeout(() => Dt(), 300);
  }
  function Nr(e) {
    let a = e;
    let t = 0;
    let o = null;
    while (a && a !== document.body && t < 10) {
      const s = a.parentElement;
      if (!s || s === document.documentElement) {
        break;
      }
      const r = Array.from(s.children).filter(i => Kt(i));
      if (r.length >= 2) {
        const i = new Map();
        for (const d of r) {
          const p = d.tagName.toLowerCase();
          if (!i.has(p)) {
            i.set(p, []);
          }
          i.get(p).push(d);
        }
        const n = a.tagName.toLowerCase();
        let c = null;
        for (const [d, p] of i) {
          if (!(p.length < 2)) {
            if (d === n && p.includes(a)) {
              c = p;
              break;
            }
            if (!c || p.length > c.length) {
              c = p;
            }
          }
        }
        if (c && c.length >= 2) {
          const d = Ve(s);
          const p = c[0].tagName.toLowerCase();
          const m = at(c[0]);
          let b = p;
          if (m.length > 0 && c.every(h => h.classList.contains(m[0]))) {
            b = `${p}.${m[0]}`;
          }
          const f = `${d} > ${b}`;
          try {
            if (document.querySelectorAll(f).length >= 2) {
              const h = {
                container: s,
                items: c,
                itemSelector: f,
                containerSelector: d,
                type: Ge(s, c[0]),
                itemTag: b
              };
              if (c[0].children.length > 0) {
                return h;
              }
              o ||= h;
            }
          } catch { }
        }
      }
      a = s;
      t++;
    }
    return o;
  }
  function Je(e) {
    if (e.key === "Escape") {
      Dt();
    }
  }
  function me(e) {
    if (Rt) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  function Rr() {
    if (Rt) {
      Dt();
    }
    Rt = true;
    fe = null;
    Gt = null;
    document.addEventListener("mousemove", Xe, true);
    document.addEventListener("click", Ye, true);
    document.addEventListener("keydown", Je, true);
    document.addEventListener("auxclick", me, true);
    document.addEventListener("contextmenu", me, true);
    Me({
      fieldName: "List Extraction — hover over a list/grid/table",
      selector: "",
      matchCount: 0,
      onConfirm: () => Dt(),
      onCancel: () => {
        Et();
        Dt();
      }
    });
    document.body.style.cursor = "crosshair";
  }
  function Dt() {
    Rt = false;
    fe = null;
    Gt = null;
    if (Ot) {
      Ot.remove();
      Ot = null;
    }
    document.removeEventListener("mousemove", Xe, true);
    document.removeEventListener("click", Ye, true);
    document.removeEventListener("keydown", Je, true);
    document.removeEventListener("auxclick", me, true);
    document.removeEventListener("contextmenu", me, true);
    Fe();
    Et();
    document.body.style.cursor = "";
  }
  function Dr(e) {
    if (e.length === 0) {
      return [];
    }
    const a = e.filter(o => o.selector);
    if (a.length === 0) {
      return [];
    }
    const t = jr(a);
    if (t) {
      const o = Ur(t.containerSelector, t.fieldMappings);
      if (o.length > 1) {
        Fr(o, a, t.fieldMappings);
        return o;
      }
    }
    return tr(a);
  }
  function Mr(e) {
    const a = {};
    for (const t of e) {
      if (!t.selector) {
        a[t.name] = "";
        continue;
      }
      const o = document.querySelector(t.selector);
      a[t.name] = o ? ge(o, t.attribute) : "";
    }
    return a;
  }
  function Ie(e) {
    const a = e.filter(t => t.selector);
    if (a.length === 0) {
      return [];
    } else {
      return tr(a);
    }
  }
  function Fr(e, a, t) {
    const o = new Set(t.map(s => s.name));
    for (const s of a) {
      const r = !o.has(s.name);
      const i = !r && e.every(n => {
        var c;
        return (c = n[s.name]) == null || !c.trim();
      });
      if (r || i) {
        const n = Array.from(document.querySelectorAll(s.selector));
        e.forEach((c, d) => {
          c[s.name] = n[d] ? ge(n[d], s.attribute) : "";
        });
      }
    }
  }
  function jr(e) {
    const a = e.map(s => ({
      field: s,
      element: document.querySelector(s.selector)
    })).filter(s => s.element !== null);
    if (a.length === 0) {
      return null;
    }
    const t = a.map(s => Wr(s.element));
    const o = qr(t);
    for (let s = o.length - 1; s >= 0; s--) {
      const r = o[s];
      if (r === document.body || r === document.documentElement) {
        continue;
      }
      const i = r.parentElement;
      if (!i) {
        continue;
      }
      const n = Qe(r, i);
      if (!n) {
        continue;
      }
      const c = document.querySelectorAll(n);
      if (c.length < 2) {
        continue;
      }
      const d = a.map(b => {
        const f = er(b.element, r);
        return {
          name: b.field.name,
          relativeSelector: f,
          attribute: b.field.attribute
        };
      });
      const p = c[0];
      if (d.filter(b => {
        try {
          return p.querySelector(b.relativeSelector) !== null;
        } catch {
          return false;
        }
      }).length >= 1) {
        return {
          containerSelector: n,
          fieldMappings: d
        };
      }
    }
    if (a.length === 1) {
      return Pr(a[0]);
    } else {
      return null;
    }
  }
  function Pr(e) {
    let a = e.element;
    let t = 0;
    while (a && a !== document.body && t < 8) {
      const o = a.parentElement;
      if (!o) {
        break;
      }
      const s = Qe(a, o);
      if (s) {
        const r = document.querySelectorAll(s);
        if (r.length > 1) {
          const i = er(e.element, a);
          try {
            if (r[0].querySelector(i)) {
              return {
                containerSelector: s,
                fieldMappings: [{
                  name: e.field.name,
                  relativeSelector: i,
                  attribute: e.field.attribute
                }]
              };
            }
          } catch { }
        }
      }
      a = o;
      t++;
    }
    return null;
  }
  function Qe(e, a) {
    const t = e.tagName.toLowerCase();
    const o = Array.from(e.classList).filter(r => r.length < 40 && !/[0-9]{4,}/.test(r) && !r.startsWith("_"));
    const s = [];
    if (o.length > 0) {
      s.push(`${t}.${o[0]}`);
      if (o.length > 1) {
        s.push(`${t}.${o.join(".")}`);
      }
    }
    s.push(t);
    for (const r of s) {
      try {
        if (a.querySelectorAll(`:scope > ${r}`).length > 1) {
          return `${Zr(a)} > ${r}`;
        }
      } catch { }
    }
    return null;
  }
  function Ur(e, a) {
    const t = document.querySelectorAll(e);
    const o = [];
    t.forEach(s => {
      const r = {};
      a.forEach(i => {
        let n = null;
        try {
          n = s.querySelector(i.relativeSelector);
        } catch { }
        r[i.name] = n ? ge(n, i.attribute) : "";
      });
      if (Object.values(r).some(i => i.trim())) {
        o.push(r);
      }
    });
    return o;
  }
  function tr(e) {
    const a = e.map(s => Array.from(document.querySelectorAll(s.selector)));
    const t = Math.max(...a.map(s => s.length));
    if (t === 0) {
      return [];
    }
    const o = [];
    for (let s = 0; s < t; s++) {
      const r = {};
      e.forEach((i, n) => {
        const c = a[n][s];
        r[i.name] = c ? ge(c, i.attribute) : "";
      });
      o.push(r);
    }
    return o;
  }
  function ge(e, a) {
    var t;
    switch (a) {
      case "textContent":
        return (e.textContent || "").trim();
      case "innerHTML":
        return e.innerHTML;
      case "href":
        if (e instanceof HTMLAnchorElement) {
          return e.href;
        } else {
          return e.getAttribute("href") || "";
        }
      case "src":
        if (e instanceof HTMLImageElement) {
          return e.src;
        } else if (e instanceof HTMLVideoElement) {
          return e.src || ((t = e.querySelector("source")) == null ? undefined : t.src) || "";
        } else if (e instanceof HTMLSourceElement || e instanceof HTMLIFrameElement) {
          return e.src;
        } else {
          return e.getAttribute("src") || "";
        }
      case "poster":
        return e.getAttribute("poster") || "";
      case "style:background-image":
        {
          try {
            const s = window.getComputedStyle(e).backgroundImage;
            if (s && s !== "none") {
              const r = s.match(/url\(["']?(.+?)["']?\)/);
              if (r && r[1]) {
                return r[1];
              }
            }
          } catch { }
          return "";
        }
      default:
        return e.getAttribute(a) || (e.textContent || "").trim();
    }
  }
  function er(e, a) {
    if (e === a) {
      return ":scope";
    }
    const t = [];
    let o = e;
    while (o && o !== a) {
      const s = o.tagName.toLowerCase();
      const r = Array.from(o.classList).filter(c => c.length < 40 && !/[0-9]{4,}/.test(c) && !c.startsWith("_"));
      let i = s;
      if (r.length > 0) {
        i = `${s}.${r[0]}`;
      }
      const n = o.parentElement;
      if (n && n !== a.parentElement) {
        const c = i;
        try {
          if (n.querySelectorAll(`:scope > ${c}`).length > 1) {
            const p = Array.from(n.children).filter(b => b.tagName.toLowerCase() !== s ? false : r.length > 0 ? b.classList.contains(r[0]) : true);
            const m = p.indexOf(o) + 1;
            if (m > 0 && p.length > 1) {
              i = `${i}:nth-of-type(${m})`;
            }
          }
        } catch { }
      }
      t.unshift(i);
      if (t.length <= 4) {
        const c = t.join(" > ");
        try {
          if (a.querySelectorAll(c).length === 1) {
            return c;
          }
        } catch { }
      }
      o = o.parentElement;
    }
    return t.join(" > ");
  }
  function Wr(e) {
    const a = [];
    let t = e;
    while (t) {
      a.unshift(t);
      t = t.parentElement;
    }
    return a;
  }
  function qr(e) {
    if (e.length === 0) {
      return [];
    }
    if (e.length === 1) {
      return e[0];
    }
    const a = [];
    const t = Math.min(...e.map(o => o.length));
    for (let o = 0; o < t; o++) {
      const s = e[0][o];
      if (e.every(r => r[o] === s)) {
        a.push(s);
      } else {
        break;
      }
    }
    return a;
  }
  function Hr() {
    const e = new Set();
    const a = [];
    document.querySelectorAll("img").forEach(r => {
      const i = r.src || r.getAttribute("data-src") || r.getAttribute("data-lazy-src") || "";
      if (!!i && !i.startsWith("data:image/svg") && !e.has(i)) {
        e.add(i);
        a.push({
          "Image URL": i,
          "Alt Text": r.alt || "",
          Width: r.naturalWidth ? `${r.naturalWidth}` : r.width ? `${r.width}` : "",
          Height: r.naturalHeight ? `${r.naturalHeight}` : r.height ? `${r.height}` : ""
        });
      }
    });
    document.querySelectorAll("picture source").forEach(r => {
      var c;
      const n = ((c = (r.getAttribute("srcset") || "").split(",")[0]) == null ? undefined : c.trim().split(/\s+/)[0]) || "";
      if (!!n && !e.has(n)) {
        e.add(n);
        a.push({
          "Image URL": n,
          "Alt Text": "",
          Width: "",
          Height: ""
        });
      }
    });
    document.querySelectorAll("div, section, span, a, header, footer, aside, figure").forEach(r => {
      try {
        const n = window.getComputedStyle(r).backgroundImage;
        if (n && n !== "none") {
          const c = n.match(/url\(["']?(.+?)["']?\)/);
          if (c && c[1]) {
            const d = c[1];
            if (!d.startsWith("data:image/svg") && !e.has(d)) {
              e.add(d);
              a.push({
                "Image URL": d,
                "Alt Text": "",
                Width: "",
                Height: ""
              });
            }
          }
        }
      } catch { }
    });
    return a;
  }
  function Zr(e) {
    if (e.id && e.id.length < 50 && !/[:.]/.test(e.id)) {
      return `#${CSS.escape(e.id)}`;
    }
    const a = e.tagName.toLowerCase();
    const t = Array.from(e.classList).filter(i => i.length < 40 && !/[0-9]{4,}/.test(i) && !i.startsWith("_"));
    if (t.length > 0) {
      for (const i of t) {
        const n = `${a}.${i}`;
        try {
          if (document.querySelectorAll(n).length === 1) {
            return n;
          }
        } catch { }
      }
    }
    let o = e;
    const s = [];
    let r = 0;
    while (o && o !== document.body && r < 5) {
      const i = o.tagName.toLowerCase();
      const n = Array.from(o.classList).filter(d => d.length < 40 && !/[0-9]{4,}/.test(d) && !d.startsWith("_"));
      const c = n.length > 0 ? `${i}.${n[0]}` : i;
      if (o.id && o.id.length < 50 && !/[:.]/.test(o.id)) {
        s.unshift(`#${CSS.escape(o.id)}`);
        return s.join(" > ");
      }
      s.unshift(c);
      o = o.parentElement;
      r++;
    }
    return s.join(" > ");
  }
  function Gr() {
    const e = Vr();
    if (e) {
      return {
        type: "click-next",
        nextButtonSelector: Xr(e),
        maxPages: 5,
        delayMs: 2000
      };
    }
    const a = Kr();
    if (a) {
      return {
        type: "url-pattern",
        urlTemplate: a,
        maxPages: 5,
        delayMs: 2000
      };
    } else {
      return null;
    }
  }
  function Vr() {
    const e = ["a[rel=\"next\"]", "[aria-label*=\"next\" i]", "[aria-label*=\"Next\" i]", "a.next", "a.pagination-next", ".pagination a.next", ".pagination .next a", "li.next a", "a[class*=\"next\"]", "button[class*=\"next\"]"];
    for (const t of e) {
      const o = document.querySelector(t);
      if (o && rr(o)) {
        return o;
      }
    }
    const a = document.querySelectorAll("a, button");
    for (const t of a) {
      const o = (t.textContent || "").trim().toLowerCase();
      if ((o === "next" || o === "next page" || o === "›" || o === "»" || o === ">" || o === ">>") && rr(t)) {
        return t;
      }
    }
    return null;
  }
  function Kr() {
    const e = window.location.href;
    const a = [/([?&])page=(\d+)/, /([?&])p=(\d+)/, /\/page\/(\d+)/, /\/p\/(\d+)/];
    for (const t of a) {
      if (e.match(t)) {
        return e.replace(t, s => s.replace(/\d+/, "{page}"));
      }
    }
    return null;
  }
  function Xr(e) {
    if (e.id) {
      return `#${CSS.escape(e.id)}`;
    }
    const a = e.tagName.toLowerCase();
    const t = Array.from(e.classList).filter(r => r.length < 40 && !r.includes(":")).slice(0, 3);
    if (t.length > 0) {
      const r = `${a}.${t.join(".")}`;
      try {
        if (document.querySelectorAll(r).length === 1) {
          return r;
        }
      } catch { }
    }
    const o = e.getAttribute("aria-label");
    if (o) {
      return `${a}[aria-label="${CSS.escape(o)}"]`;
    }
    const s = e.getAttribute("rel");
    if (s) {
      return `${a}[rel="${CSS.escape(s)}"]`;
    } else {
      return `${a}.${t[0] || ""}`;
    }
  }
  function rr(e) {
    const a = e.getBoundingClientRect();
    if (a.width === 0 || a.height === 0) {
      return false;
    }
    const t = window.getComputedStyle(e);
    return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0";
  }
  function Yr() {
    const e = [];
    e.push(...Jr());
    e.push(...Qr());
    e.push(...tn());
    e.sort((a, t) => t.itemCount - a.itemCount);
    return nn(e);
  }
  function Jr() {
    const e = [];
    document.querySelectorAll("table").forEach(t => {
      if (!be(t)) {
        return;
      }
      const o = t.querySelectorAll("tbody tr, tr");
      if (o.length < 2) {
        return;
      }
      const s = Xt(t);
      const r = t.querySelectorAll("thead th, thead td, tr:first-child th");
      const i = [];
      if (r.length > 0) {
        r.forEach((n, c) => {
          var v;
          var h;
          const d = (n.textContent || "").trim();
          if (!d) {
            return;
          }
          const p = `td:nth-child(${c + 1})`;
          const m = ((v = o[0]) == null ? undefined : v.querySelector(p)) || ((h = o[1]) == null ? undefined : h.querySelector(p));
          const {
            attribute: b,
            type: f
          } = $e(m);
          i.push({
            name: d,
            selector: `${s} tbody tr ${p}`,
            attribute: b,
            type: f,
            sampleValue: m ? Te(m, b) : ""
          });
        });
      } else {
        const n = o[0];
        ((n == null ? undefined : n.querySelectorAll("td, th")) || []).forEach((d, p) => {
          const {
            attribute: m,
            type: b
          } = $e(d);
          i.push({
            name: `Column ${p + 1}`,
            selector: `${s} tr td:nth-child(${p + 1})`,
            attribute: m,
            type: b,
            sampleValue: Te(d, m)
          });
        });
      }
      if (i.length > 0) {
        e.push({
          type: "table",
          containerSelector: s,
          itemSelector: `${s} tbody tr`,
          itemCount: o.length,
          fields: i
        });
      }
    });
    return e;
  }
  function Qr() {
    const e = [];
    document.querySelectorAll("ul, ol").forEach(t => {
      if (!be(t)) {
        return;
      }
      const o = t.querySelectorAll(":scope > li");
      if (o.length < 2) {
        return;
      }
      const s = Xt(t);
      const r = nr(o, `${s} > li`);
      if (r.length > 0) {
        e.push({
          type: "list",
          containerSelector: s,
          itemSelector: `${s} > li`,
          itemCount: o.length,
          fields: r
        });
      }
    });
    return e;
  }
  function tn() {
    const e = [];
    document.querySelectorAll("div, section, main, article, aside, nav").forEach(t => {
      if (!be(t)) {
        return;
      }
      const o = Array.from(t.children);
      if (o.length < 2) {
        return;
      }
      const s = new Map();
      o.forEach(b => {
        const f = rn(b);
        const v = s.get(f) || [];
        v.push(b);
        s.set(f, v);
      });
      let r = [];
      s.forEach(b => {
        if (b.length >= 2 && b.length > r.length) {
          r = b;
        }
      });
      if (r.length < 2 || r.reduce((b, f) => b + (f.textContent || "").trim().length, 0) / r.length < 10) {
        return;
      }
      const n = Xt(t);
      const c = r[0].tagName.toLowerCase();
      const d = at(r[0]);
      const p = d.length > 0 ? `${c}.${d[0]}` : c;
      const m = `${n} > ${p}`;
      try {
        const b = document.querySelectorAll(m).length;
        if (b < 2) {
          return;
        }
        const f = nr(r, m);
        if (f.length === 0) {
          return;
        }
        e.push({
          type: "repeating",
          containerSelector: n,
          itemSelector: m,
          itemCount: b,
          fields: f
        });
      } catch { }
    });
    return e;
  }
  function nr(e, a) {
    const t = [];
    const o = Array.from(e).slice(0, 5);
    if (o.length === 0) {
      return t;
    }
    const s = o[0];
    const r = s.querySelectorAll("*");
    const i = [];
    r.forEach(c => {
      if (!be(c)) {
        return;
      }
      const d = (c.textContent || "").trim();
      if (d.length < 1) {
        return;
      }
      if (c.tagName !== "A" && c.children.length >= 1) {
        const b = Array.from(c.children).map(f => (f.textContent || "").trim()).filter(Boolean);
        if (b.length >= 1 && b.join("").length >= d.length * 0.85) {
          return;
        }
      }
      const p = Le(c, s);
      if (!p) {
        return;
      }
      let m = 0;
      o.forEach(b => {
        if (b.querySelector(p)) {
          m++;
        }
      });
      if (m >= Math.min(2, o.length)) {
        const b = m / o.length * 10 + Math.min(d.length, 50) / 10 - c.children.length * 3;
        i.push({
          selector: p,
          element: c,
          score: b
        });
      }
    });
    i.sort((c, d) => d.score - c.score);
    const n = new Set();
    for (const c of i) {
      if (n.has(c.selector)) {
        continue;
      }
      const d = (c.element.textContent || "").trim();
      let p = false;
      for (const v of t) {
        if (d.includes(v.sampleValue) && v.sampleValue.length > 5) {
          p = true;
          break;
        }
      }
      if (p) {
        continue;
      }
      const {
        attribute: m,
        type: b
      } = $e(c.element);
      const f = en(c.element, t.length);
      t.push({
        name: f,
        selector: `${a} ${c.selector}`,
        attribute: m,
        type: b,
        sampleValue: Te(c.element, m)
      });
      n.add(c.selector);
      if (c.element.tagName === "A" && m === "textContent") {
        const v = c.element.href;
        if (v && !v.startsWith("javascript:")) {
          t.push({
            name: `${f} URL`,
            selector: `${a} ${c.selector}`,
            attribute: "href",
            type: "link",
            sampleValue: v.substring(0, 80)
          });
        }
      }
      if (t.length >= 8) {
        break;
      }
    }
    if (!t.some(c => c.attribute === "href")) {
      const c = o[0];
      let d = null;
      let p = "";
      if (c.tagName === "A") {
        d = c;
      } else {
        const m = (c.textContent || "").trim();
        const b = c.querySelectorAll("a[href]");
        for (const f of b) {
          if ((f.textContent || "").trim().length >= m.length * 0.5) {
            d = f;
            p = Le(f, c) || "a";
            break;
          }
        }
        if (!d && b.length > 0) {
          const f = b[0];
          if (f.href && !f.href.startsWith("javascript:")) {
            d = f;
            p = Le(f, c) || "a";
          }
        }
      }
      if (d && d.href && !d.href.startsWith("javascript:")) {
        let m = 0;
        for (const b of o) {
          const f = p ? b.querySelector(p) : b;
          if (f && f.href) {
            m++;
          }
        }
        if (m >= Math.min(2, o.length)) {
          const b = p ? `${a} ${p}` : a;
          t.push({
            name: "Link",
            selector: b,
            attribute: "href",
            type: "link",
            sampleValue: d.href.substring(0, 80)
          });
        }
      }
    }
    return t;
  }
  function Le(e, a) {
    const t = e.tagName.toLowerCase();
    const o = at(e);
    if (o.length > 0) {
      const i = `${t}.${o[0]}`;
      try {
        if (a.querySelectorAll(i).length === 1) {
          return i;
        }
      } catch { }
    }
    if (o.length > 1) {
      const i = `${t}.${o.join(".")}`;
      try {
        if (a.querySelectorAll(i).length === 1) {
          return i;
        }
      } catch { }
    }
    for (const i of ["data-testid", "role", "itemprop"]) {
      const n = e.getAttribute(i);
      if (n) {
        const c = `${t}[${i}="${CSS.escape(n)}"]`;
        try {
          if (a.querySelectorAll(c).length === 1) {
            return c;
          }
        } catch { }
      }
    }
    try {
      if (a.querySelectorAll(t).length === 1) {
        return t;
      }
    } catch { }
    const s = [];
    let r = e;
    while (r && r !== a) {
      const i = r.tagName.toLowerCase();
      const n = at(r);
      s.unshift(n.length > 0 ? `${i}.${n[0]}` : i);
      r = r.parentElement;
    }
    if (s.length > 0 && s.length <= 4) {
      const i = s.join(" > ");
      try {
        if (a.querySelectorAll(i).length === 1) {
          return i;
        }
      } catch { }
    }
    return null;
  }
  function $e(e) {
    if (!e) {
      return {
        attribute: "textContent",
        type: "text"
      };
    }
    if (e.tagName === "IMG" || e.querySelector("img")) {
      return {
        attribute: "src",
        type: "image"
      };
    }
    if (e.tagName === "A" || e.closest("a")) {
      if ((e.textContent || "").trim().length > 0) {
        return {
          attribute: "textContent",
          type: "text"
        };
      } else {
        return {
          attribute: "href",
          type: "link"
        };
      }
    }
    const a = (e.textContent || "").trim();
    if (/^[\d$€£¥,.]+$/.test(a) || /^\$?\d/.test(a)) {
      return {
        attribute: "textContent",
        type: "number"
      };
    } else {
      return {
        attribute: "textContent",
        type: "text"
      };
    }
  }
  function Te(e, a) {
    switch (a) {
      case "href":
        return e.href || e.getAttribute("href") || "";
      case "src":
        return e.src || e.getAttribute("src") || "";
      default:
        return (e.textContent || "").trim().substring(0, 80);
    }
  }
  function en(e, a) {
    const t = e.getAttribute("aria-label");
    if (t) {
      return t;
    }
    const o = e.getAttribute("id");
    if (o) {
      const r = document.querySelector(`label[for="${o}"]`);
      if (r) {
        return (r.textContent || "").trim();
      }
    }
    const s = e.tagName.toLowerCase();
    if (s === "img") {
      return "Image";
    }
    if (s === "a") {
      return "Link";
    }
    if (s === "h1" || s === "h2" || s === "h3") {
      return "Title";
    }
    if (s === "p") {
      return "Description";
    }
    if (s === "span" || s === "div") {
      const r = at(e);
      for (const i of r) {
        const n = i.toLowerCase();
        if (n.includes("title") || n.includes("name")) {
          return "Title";
        }
        if (n.includes("price") || n.includes("cost")) {
          return "Price";
        }
        if (n.includes("desc") || n.includes("summary")) {
          return "Description";
        }
        if (n.includes("rating") || n.includes("star")) {
          return "Rating";
        }
        if (n.includes("date") || n.includes("time")) {
          return "Date";
        }
        if (n.includes("author") || n.includes("user")) {
          return "Author";
        }
        if (n.includes("url") || n.includes("link")) {
          return "URL";
        }
        if (n.includes("image") || n.includes("img") || n.includes("thumb")) {
          return "Image";
        }
      }
    }
    return `Field ${a + 1}`;
  }
  function Xt(e) {
    if (e.id) {
      return `#${CSS.escape(e.id)}`;
    }
    const a = e.tagName.toLowerCase();
    const t = at(e);
    if (t.length > 0) {
      for (const s of t) {
        const r = `${a}.${s}`;
        try {
          if (document.querySelectorAll(r).length === 1) {
            return r;
          }
        } catch { }
      }
    }
    const o = e.parentElement;
    if (o) {
      if (Array.from(o.children).filter(n => n.tagName === e.tagName).length === 1) {
        return `${Xt(o)} > ${a}`;
      }
      const r = Array.from(o.children).indexOf(e) + 1;
      return `${Xt(o)} > ${a}:nth-child(${r})`;
    }
    return a;
  }
  function rn(e) {
    const a = e.tagName.toLowerCase();
    const t = at(e).sort().join(".");
    if (t) {
      return `${a}.${t}`;
    } else {
      return a;
    }
  }
  function be(e) {
    const a = e.getBoundingClientRect();
    if (a.width === 0 && a.height === 0) {
      return false;
    }
    const t = window.getComputedStyle(e);
    return t.display !== "none" && t.visibility !== "hidden";
  }
  function nn(e) {
    const a = [];
    for (const t of e) {
      let o = false;
      for (const s of a) {
        if (t.containerSelector === s.containerSelector) {
          o = true;
          break;
        }
        if (t.itemCount === s.itemCount && t.fields.length <= s.fields.length) {
          o = true;
          break;
        }
      }
      if (!o) {
        a.push(t);
      }
    }
    return a.slice(0, 5);
  }
  const on = ".dt-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483646;background:#00000073;display:flex;align-items:center;justify-content:center;font-family:Rubik,sans-serif;font-size:13px;line-height:1.5;color:#111}.dt-modal{background:#fff;border-radius:12px;box-shadow:0 24px 80px #00000040,0 0 0 1px #0000000d;display:flex;flex-direction:column;width:92vw;height:88vh;max-width:1400px;overflow:hidden}.dt-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;flex-shrink:0;background:#fff}.dt-title{display:flex;align-items:center;gap:10px}.dt-title-text{font-size:15px;font-weight:600;color:#111;letter-spacing:-.01em}.dt-badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:9999px;font-size:11px;font-weight:500;background:#f5f5f5;color:#111}.dt-header-actions{display:flex;align-items:center;gap:6px}.dt-export-btn{display:inline-flex;align-items:center;gap:4px;padding:6px 10px;border:1px solid #e5e7eb;border-radius:6px;font-size:12px;font-weight:500;font-family:inherit;background:#fff;color:#6b7280;cursor:pointer;transition:all .12s ease}.dt-export-btn:hover{background:#f5f5f5;color:#111;border-color:#000}.dt-close{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:6px;cursor:pointer;color:#9ca3af;transition:all .12s ease;margin-left:4px}.dt-close:hover{background:#f3f4f6;color:#111}.dt-toolbar{display:flex;align-items:center;gap:10px;padding:10px 20px;border-bottom:1px solid #e5e7eb;flex-shrink:0;background:#fff}.dt-toolbar-search{position:relative;flex:1}.dt-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#9ca3af;pointer-events:none}.dt-search-input{width:100%;padding:7px 12px 7px 32px;border:1px solid #e5e7eb;border-radius:6px;font-size:13px;font-family:inherit;background:#f9fafb;color:#111;outline:none;transition:all .12s ease;box-sizing:border-box}.dt-search-input:focus{border-color:#000;background:#fff;box-shadow:0 0 0 3px #00000014}.dt-search-input::placeholder{color:#9ca3af}.dt-search-clear{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:20px;height:20px;display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:4px;cursor:pointer;color:#9ca3af;transition:all .12s ease}.dt-search-clear:hover{color:#111;background:#f3f4f6}.dt-view-toggle{display:flex;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;flex-shrink:0}.dt-view-btn{display:flex;align-items:center;justify-content:center;width:32px;height:30px;border:none;background:#fff;color:#9ca3af;cursor:pointer;transition:all .12s ease;font-family:inherit}.dt-view-btn:not(:last-child){border-right:1px solid #e5e7eb}.dt-view-btn:hover{background:#f9fafb;color:#6b7280}.dt-view-btn-active{background:#000;color:#fff}.dt-view-btn-active:hover{background:#1a1a1a;color:#fff}.dt-table-wrap{flex:1;overflow:auto;min-height:0}.dt-table{min-width:100%;border-collapse:collapse;font-size:13px;table-layout:fixed}.dt-th{position:sticky;top:0;z-index:2;background:#f9fafb;padding:9px 14px;text-align:left;font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#6b7280;border-bottom:1px solid #e5e7eb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none}.dt-table-wrap-scrolled .dt-th{box-shadow:0 1px 3px #0000000f}.dt-th-num{width:32px;text-align:center}.dt-th-field{cursor:grab;overflow:visible}.dt-th-field:active{cursor:grabbing}.dt-th-label{cursor:default}.dt-th-delete{display:none;position:absolute;top:4px;right:10px;width:20px;height:20px;align-items:center;justify-content:center;border:none;background:#f3f4f6;border-radius:4px;cursor:pointer;color:#9ca3af;transition:all .12s ease;padding:0}.dt-th-field:hover .dt-th-delete{display:flex}.dt-th-delete:hover{background:#fee2e2;color:#ef4444}.dt-th-rename-input{width:calc(100% - 30px);padding:2px 6px;border:1px solid #000000;border-radius:4px;font-size:11px;font-weight:600;font-family:inherit;text-transform:uppercase;letter-spacing:.5px;color:#111;background:#fff;outline:none;box-shadow:0 0 0 3px #00000014}.dt-th-dragging{opacity:.4}.dt-th-dragover{box-shadow:inset 3px 0 #000}.dt-tr{border-bottom:1px solid #f3f4f6;transition:background .1s ease}.dt-tr:hover{background:#f9fafb}.dt-td{padding:10px 14px;vertical-align:top;overflow:hidden;text-overflow:ellipsis}.dt-td-num{width:32px;text-align:center;color:#9ca3af;font-size:11px;vertical-align:middle}.dt-td-img{overflow:visible}.dt-text{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word;line-height:1.5}.dt-link{color:#000;font-size:12px;word-break:break-all;line-height:1.4;text-decoration:underline;text-decoration-color:#d1d5db;text-underline-offset:2px;transition:text-decoration-color .12s ease}.dt-link:hover{text-decoration-color:#000}.dt-img{width:40px;height:40px;object-fit:cover;border-radius:4px;border:1px solid #e5e7eb;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}.dt-img:hover{transform:scale(3);z-index:10;position:relative;box-shadow:0 8px 24px #00000026;border-color:#000}.dt-img-cell{display:flex;align-items:center;gap:8px}.dt-img-thumb{width:36px;height:36px;object-fit:cover;border-radius:4px;border:1px solid #e5e7eb;flex-shrink:0;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease}.dt-img-thumb:hover{transform:scale(3);z-index:10;position:relative;box-shadow:0 8px 24px #00000026;border-color:#000}.dt-link-truncate{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.dt-dl-btn{flex-shrink:0;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:1px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;color:#9ca3af;transition:all .12s ease;padding:0}.dt-dl-btn:hover{background:#f5f5f5;color:#111;border-color:#000}.dt-code-block{font-family:SF Mono,Monaco,Cascadia Code,monospace;font-size:11px;line-height:1.5;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;padding:6px 8px;overflow-x:auto;max-height:80px;white-space:pre-wrap;word-break:break-all;color:#111}.dt-empty{text-align:center;padding:40px 14px!important;color:#9ca3af;font-style:italic}.dt-resize-handle{position:absolute;right:0;top:0;bottom:0;width:6px;cursor:col-resize;background:transparent;z-index:3;transition:background .12s ease}.dt-resize-handle:hover,.dt-resize-handle-active{background:#000}.dt-row-view{flex:1;overflow-y:auto;min-height:0}.dt-row-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;padding:16px;align-content:start}.dt-card{background:#fff;border:1px solid #e5e7eb;border-radius:10px;transition:border-color .15s ease,box-shadow .15s ease;display:flex;flex-direction:column;overflow:hidden}.dt-card:hover{border-color:#000;box-shadow:0 4px 16px #0000000f}.dt-card-header{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;background:#f9fafb;border-bottom:1px solid #e5e7eb;font-size:11px;font-weight:600;color:#9ca3af;flex-shrink:0}.dt-card-body{padding:0;flex:1 1 auto;min-height:0}.dt-card-field{display:flex;padding:8px 14px;border-bottom:1px solid #f3f4f6;gap:10px}.dt-card-field:last-child{border-bottom:none}.dt-card-label{flex-shrink:0;width:80px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;color:#9ca3af;padding-top:2px}.dt-card-value{flex:1;min-width:0;font-size:12px;color:#111;word-break:break-word}.dt-card-value .dt-img{width:80px;height:80px;border-radius:6px}.dt-card-value .dt-img:hover{transform:scale(2)}.dt-card-hero{width:100%;overflow:hidden;background:#f3f4f6;flex-shrink:0}.dt-card-hero-img{width:100%;height:auto;max-height:200px;object-fit:cover;display:block;transition:transform .2s ease}.dt-card-has-hero:hover .dt-card-hero-img{transform:scale(1.04)}.dt-footer{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;background:#f9fafb;flex-shrink:0}.dt-footer-left,.dt-footer-right{display:flex;align-items:center}.dt-minimized-bar{position:fixed;bottom:20px;left:50%;transform:translate(-50%);z-index:2147483646;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;pointer-events:auto;box-shadow:0 8px 32px #0000001f,0 0 0 1px #0000000a;cursor:pointer;font-family:Rubik,sans-serif;font-size:13px;color:#111;transition:box-shadow .15s ease;-webkit-user-select:none;user-select:none}.dt-minimized-bar:hover{box-shadow:0 12px 40px #0000002e,0 0 0 1px #00000014}.dt-minimized-left{display:flex;align-items:center;gap:8px;color:#6b7280}.dt-minimized-text{font-weight:600;color:#111}.dt-minimized-actions{display:flex;align-items:center;gap:4px}.dt-minimized-restore,.dt-minimized-close{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:6px;cursor:pointer;color:#9ca3af;transition:all .12s ease}.dt-minimized-restore:hover{background:#f3f4f6;color:#111}.dt-minimized-close:hover{background:#fee2e2;color:#ef4444}.dt-grid-view{flex:1;overflow-y:auto;padding:16px;min-height:0;columns:5 200px;column-gap:12px}.dt-pin{position:relative;break-inside:avoid;margin-bottom:12px;border-radius:12px;overflow:hidden;background:#f3f4f6;cursor:pointer}.dt-pin-img{display:block;width:100%;height:auto;border-radius:12px}.dt-pin-placeholder{display:flex;align-items:center;justify-content:center;width:100%;height:120px;font-size:12px;color:#9ca3af}.dt-pin-hover{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:12px;background:#0006;opacity:0;transition:opacity .18s ease;display:flex;align-items:flex-end;justify-content:space-between;padding:10px}.dt-pin-size{font-size:11px;font-weight:600;color:#fff;background:#00000080;padding:3px 8px;border-radius:6px;letter-spacing:.3px;white-space:nowrap}.dt-pin-actions{display:flex;gap:6px}.dt-pin:hover .dt-pin-hover{opacity:1}.dt-pin-dl,.dt-pin-open{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border:none;border-radius:50%;cursor:pointer;transition:all .15s ease;padding:0;text-decoration:none}.dt-pin-dl{background:#fff;color:#111}.dt-pin-dl:hover{background:#000;color:#fff;transform:scale(1.1)}.dt-pin-open{background:#ffffff40;color:#fff}.dt-pin-open:hover{background:#ffffff80;transform:scale(1.1)}.dt-grid-view::-webkit-scrollbar{width:6px;height:6px}.dt-grid-view::-webkit-scrollbar-track{background:transparent}.dt-grid-view::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:3px}.dt-grid-view::-webkit-scrollbar-thumb:hover{background:#9ca3af}.dt-table-wrap::-webkit-scrollbar,.dt-row-view::-webkit-scrollbar{width:6px;height:6px}.dt-table-wrap::-webkit-scrollbar-track,.dt-row-view::-webkit-scrollbar-track{background:transparent}.dt-table-wrap::-webkit-scrollbar-thumb,.dt-row-view::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:3px}.dt-table-wrap::-webkit-scrollbar-thumb:hover,.dt-row-view::-webkit-scrollbar-thumb:hover{background:#9ca3af}";
  var ve = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function sn(e) {
    if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
      return e.default;
    } else {
      return e;
    }
  }
  function ye(e) {
    throw new Error("Could not dynamically require \"" + e + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
  }
  var Oe = {
    exports: {}
  }; /*!
     JSZip v3.10.1 - A JavaScript class for generating and reading zip files
     <http://stuartk.com/jszip>
     (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
     Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
     JSZip uses the library pako released under the MIT license :
     https://github.com/nodeca/pako/blob/main/LICENSE
     */
  var ir;
  function an() {
    if (!ir) {
      ir = 1;
      (function (e, a) {
        (function (t) {
          e.exports = t();
        })(function () {
          return function t(o, s, r) {
            function i(d, p) {
              if (!s[d]) {
                if (!o[d]) {
                  var m = typeof ye == "function" && ye;
                  if (!p && m) {
                    return m(d, true);
                  }
                  if (n) {
                    return n(d, true);
                  }
                  var b = new Error("Cannot find module '" + d + "'");
                  b.code = "MODULE_NOT_FOUND";
                  throw b;
                }
                var f = s[d] = {
                  exports: {}
                };
                o[d][0].call(f.exports, function (v) {
                  var h = o[d][1][v];
                  return i(h || v);
                }, f, f.exports, t, o, s, r);
              }
              return s[d].exports;
            }
            var n = typeof ye == "function" && ye;
            for (var c = 0; c < r.length; c++) {
              i(r[c]);
            }
            return i;
          }({
            1: [function (t, o, s) {
              var r = t("./utils");
              var i = t("./support");
              var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              s.encode = function (c) {
                var d;
                var p;
                var m;
                var b;
                var f;
                var v;
                var h;
                var w = [];
                for (var g = 0, x = c.length, S = x, A = r.getTypeOf(c) !== "string"; g < c.length;) {
                  S = x - g;
                  m = A ? (d = c[g++], p = g < x ? c[g++] : 0, g < x ? c[g++] : 0) : (d = c.charCodeAt(g++), p = g < x ? c.charCodeAt(g++) : 0, g < x ? c.charCodeAt(g++) : 0);
                  b = d >> 2;
                  f = (d & 3) << 4 | p >> 4;
                  v = S > 1 ? (p & 15) << 2 | m >> 6 : 64;
                  h = S > 2 ? m & 63 : 64;
                  w.push(n.charAt(b) + n.charAt(f) + n.charAt(v) + n.charAt(h));
                }
                return w.join("");
              };
              s.decode = function (c) {
                var d;
                var p;
                var m;
                var b;
                var f;
                var v;
                var h = 0;
                var w = 0;
                var g = "data:";
                if (c.substr(0, g.length) === g) {
                  throw new Error("Invalid base64 input, it looks like a data url.");
                }
                var x;
                var S = (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length * 3 / 4;
                if (c.charAt(c.length - 1) === n.charAt(64)) {
                  S--;
                }
                if (c.charAt(c.length - 2) === n.charAt(64)) {
                  S--;
                }
                if (S % 1 != 0) {
                  throw new Error("Invalid base64 input, bad content length.");
                }
                for (x = i.uint8array ? new Uint8Array(S | 0) : new Array(S | 0); h < c.length;) {
                  d = n.indexOf(c.charAt(h++)) << 2 | (b = n.indexOf(c.charAt(h++))) >> 4;
                  p = (b & 15) << 4 | (f = n.indexOf(c.charAt(h++))) >> 2;
                  m = (f & 3) << 6 | (v = n.indexOf(c.charAt(h++)));
                  x[w++] = d;
                  if (f !== 64) {
                    x[w++] = p;
                  }
                  if (v !== 64) {
                    x[w++] = m;
                  }
                }
                return x;
              };
            }, {
              "./support": 30,
              "./utils": 32
            }],
            2: [function (t, o, s) {
              var r = t("./external");
              var i = t("./stream/DataWorker");
              var n = t("./stream/Crc32Probe");
              var c = t("./stream/DataLengthProbe");
              function d(p, m, b, f, v) {
                this.compressedSize = p;
                this.uncompressedSize = m;
                this.crc32 = b;
                this.compression = f;
                this.compressedContent = v;
              }
              d.prototype = {
                getContentWorker: function () {
                  var p = new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length"));
                  var m = this;
                  p.on("end", function () {
                    if (this.streamInfo.data_length !== m.uncompressedSize) {
                      throw new Error("Bug : uncompressed data size mismatch");
                    }
                  });
                  return p;
                },
                getCompressedWorker: function () {
                  return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                }
              };
              d.createWorkerFrom = function (p, m, b) {
                return p.pipe(new n()).pipe(new c("uncompressedSize")).pipe(m.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression", m);
              };
              o.exports = d;
            }, {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27
            }],
            3: [function (t, o, s) {
              var r = t("./stream/GenericWorker");
              s.STORE = {
                magic: "\0\0",
                compressWorker: function () {
                  return new r("STORE compression");
                },
                uncompressWorker: function () {
                  return new r("STORE decompression");
                }
              };
              s.DEFLATE = t("./flate");
            }, {
              "./flate": 7,
              "./stream/GenericWorker": 28
            }],
            4: [function (t, o, s) {
              var r = t("./utils");
              var i = function () {
                var n;
                var c = [];
                for (var d = 0; d < 256; d++) {
                  n = d;
                  for (var p = 0; p < 8; p++) {
                    n = n & 1 ? n >>> 1 ^ 3988292384 : n >>> 1;
                  }
                  c[d] = n;
                }
                return c;
              }();
              o.exports = function (n, c) {
                if (n !== undefined && n.length) {
                  if (r.getTypeOf(n) !== "string") {
                    return function (d, p, m, b) {
                      var f = i;
                      var v = b + m;
                      d ^= -1;
                      for (var h = b; h < v; h++) {
                        d = d >>> 8 ^ f[(d ^ p[h]) & 255];
                      }
                      return d ^ -1;
                    }(c | 0, n, n.length, 0);
                  } else {
                    return function (d, p, m, b) {
                      var f = i;
                      var v = b + m;
                      d ^= -1;
                      for (var h = b; h < v; h++) {
                        d = d >>> 8 ^ f[(d ^ p.charCodeAt(h)) & 255];
                      }
                      return d ^ -1;
                    }(c | 0, n, n.length, 0);
                  }
                } else {
                  return 0;
                }
              };
            }, {
              "./utils": 32
            }],
            5: [function (t, o, s) {
              s.base64 = false;
              s.binary = false;
              s.dir = false;
              s.createFolders = true;
              s.date = null;
              s.compression = null;
              s.compressionOptions = null;
              s.comment = null;
              s.unixPermissions = null;
              s.dosPermissions = null;
            }, {}],
            6: [function (t, o, s) {
              var r = null;
              r = typeof Promise !== "undefined" ? Promise : t("lie");
              o.exports = {
                Promise: r
              };
            }, {
              lie: 37
            }],
            7: [function (t, o, s) {
              var r = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
              var i = t("pako");
              var n = t("./utils");
              var c = t("./stream/GenericWorker");
              var d = r ? "uint8array" : "array";
              function p(m, b) {
                c.call(this, "FlateWorker/" + m);
                this._pako = null;
                this._pakoAction = m;
                this._pakoOptions = b;
                this.meta = {};
              }
              s.magic = "\b\0";
              n.inherits(p, c);
              p.prototype.processChunk = function (m) {
                this.meta = m.meta;
                if (this._pako === null) {
                  this._createPako();
                }
                this._pako.push(n.transformTo(d, m.data), false);
              };
              p.prototype.flush = function () {
                c.prototype.flush.call(this);
                if (this._pako === null) {
                  this._createPako();
                }
                this._pako.push([], true);
              };
              p.prototype.cleanUp = function () {
                c.prototype.cleanUp.call(this);
                this._pako = null;
              };
              p.prototype._createPako = function () {
                this._pako = new i[this._pakoAction]({
                  raw: true,
                  level: this._pakoOptions.level || -1
                });
                var m = this;
                this._pako.onData = function (b) {
                  m.push({
                    data: b,
                    meta: m.meta
                  });
                };
              };
              s.compressWorker = function (m) {
                return new p("Deflate", m);
              };
              s.uncompressWorker = function () {
                return new p("Inflate", {});
              };
            }, {
              "./stream/GenericWorker": 28,
              "./utils": 32,
              pako: 38
            }],
            8: [function (t, o, s) {
              function r(f, v) {
                var h;
                var w = "";
                for (h = 0; h < v; h++) {
                  w += String.fromCharCode(f & 255);
                  f >>>= 8;
                }
                return w;
              }
              function i(f, v, h, w, g, x) {
                var S;
                var A;
                var C = f.file;
                var D = f.compression;
                var O = x !== d.utf8encode;
                var P = n.transformTo("string", x(C.name));
                var T = n.transformTo("string", d.utf8encode(C.name));
                var q = C.comment;
                var Y = n.transformTo("string", x(q));
                var k = n.transformTo("string", d.utf8encode(q));
                var B = T.length !== C.name.length;
                var u = k.length !== q.length;
                var R = "";
                var tt = "";
                var j = "";
                var et = C.dir;
                var U = C.date;
                var J = {
                  crc32: 0,
                  compressedSize: 0,
                  uncompressedSize: 0
                };
                if (!v || !!h) {
                  J.crc32 = f.crc32;
                  J.compressedSize = f.compressedSize;
                  J.uncompressedSize = f.uncompressedSize;
                }
                var L = 0;
                if (v) {
                  L |= 8;
                }
                if (!O && (!!B || !!u)) {
                  L |= 2048;
                }
                var I = 0;
                var X = 0;
                if (et) {
                  I |= 16;
                }
                if (g === "UNIX") {
                  X = 798;
                  I |= function (Z, lt) {
                    var ht = Z;
                    if (!Z) {
                      ht = lt ? 16893 : 33204;
                    }
                    return (ht & 65535) << 16;
                  }(C.unixPermissions, et);
                } else {
                  X = 20;
                  I |= function (Z) {
                    return (Z || 0) & 63;
                  }(C.dosPermissions);
                }
                S = U.getUTCHours();
                S <<= 6;
                S |= U.getUTCMinutes();
                S <<= 5;
                S |= U.getUTCSeconds() / 2;
                A = U.getUTCFullYear() - 1980;
                A <<= 4;
                A |= U.getUTCMonth() + 1;
                A <<= 5;
                A |= U.getUTCDate();
                if (B) {
                  tt = r(1, 1) + r(p(P), 4) + T;
                  R += "up" + r(tt.length, 2) + tt;
                }
                if (u) {
                  j = r(1, 1) + r(p(Y), 4) + k;
                  R += "uc" + r(j.length, 2) + j;
                }
                var G = "";
                G += `
\0`;
                G += r(L, 2);
                G += D.magic;
                G += r(S, 2);
                G += r(A, 2);
                G += r(J.crc32, 4);
                G += r(J.compressedSize, 4);
                G += r(J.uncompressedSize, 4);
                G += r(P.length, 2);
                G += r(R.length, 2);
                return {
                  fileRecord: m.LOCAL_FILE_HEADER + G + P + R,
                  dirRecord: m.CENTRAL_FILE_HEADER + r(X, 2) + G + r(Y.length, 2) + "\0\0\0\0" + r(I, 4) + r(w, 4) + P + R + Y
                };
              }
              var n = t("../utils");
              var c = t("../stream/GenericWorker");
              var d = t("../utf8");
              var p = t("../crc32");
              var m = t("../signature");
              function b(f, v, h, w) {
                c.call(this, "ZipFileWorker");
                this.bytesWritten = 0;
                this.zipComment = v;
                this.zipPlatform = h;
                this.encodeFileName = w;
                this.streamFiles = f;
                this.accumulate = false;
                this.contentBuffer = [];
                this.dirRecords = [];
                this.currentSourceOffset = 0;
                this.entriesCount = 0;
                this.currentFile = null;
                this._sources = [];
              }
              n.inherits(b, c);
              b.prototype.push = function (f) {
                var v = f.meta.percent || 0;
                var h = this.entriesCount;
                var w = this._sources.length;
                if (this.accumulate) {
                  this.contentBuffer.push(f);
                } else {
                  this.bytesWritten += f.data.length;
                  c.prototype.push.call(this, {
                    data: f.data,
                    meta: {
                      currentFile: this.currentFile,
                      percent: h ? (v + (h - w - 1) * 100) / h : 100
                    }
                  });
                }
              };
              b.prototype.openedSource = function (f) {
                this.currentSourceOffset = this.bytesWritten;
                this.currentFile = f.file.name;
                var v = this.streamFiles && !f.file.dir;
                if (v) {
                  var h = i(f, v, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                  this.push({
                    data: h.fileRecord,
                    meta: {
                      percent: 0
                    }
                  });
                } else {
                  this.accumulate = true;
                }
              };
              b.prototype.closedSource = function (f) {
                this.accumulate = false;
                var v = this.streamFiles && !f.file.dir;
                var h = i(f, v, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                this.dirRecords.push(h.dirRecord);
                if (v) {
                  this.push({
                    data: function (w) {
                      return m.DATA_DESCRIPTOR + r(w.crc32, 4) + r(w.compressedSize, 4) + r(w.uncompressedSize, 4);
                    }(f),
                    meta: {
                      percent: 100
                    }
                  });
                } else {
                  for (this.push({
                    data: h.fileRecord,
                    meta: {
                      percent: 0
                    }
                  }); this.contentBuffer.length;) {
                    this.push(this.contentBuffer.shift());
                  }
                }
                this.currentFile = null;
              };
              b.prototype.flush = function () {
                var f = this.bytesWritten;
                for (var v = 0; v < this.dirRecords.length; v++) {
                  this.push({
                    data: this.dirRecords[v],
                    meta: {
                      percent: 100
                    }
                  });
                }
                var h = this.bytesWritten - f;
                var w = function (g, x, S, A, C) {
                  var D = n.transformTo("string", C(A));
                  return m.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(g, 2) + r(g, 2) + r(x, 4) + r(S, 4) + r(D.length, 2) + D;
                }(this.dirRecords.length, h, f, this.zipComment, this.encodeFileName);
                this.push({
                  data: w,
                  meta: {
                    percent: 100
                  }
                });
              };
              b.prototype.prepareNextSource = function () {
                this.previous = this._sources.shift();
                this.openedSource(this.previous.streamInfo);
                if (this.isPaused) {
                  this.previous.pause();
                } else {
                  this.previous.resume();
                }
              };
              b.prototype.registerPrevious = function (f) {
                this._sources.push(f);
                var v = this;
                f.on("data", function (h) {
                  v.processChunk(h);
                });
                f.on("end", function () {
                  v.closedSource(v.previous.streamInfo);
                  if (v._sources.length) {
                    v.prepareNextSource();
                  } else {
                    v.end();
                  }
                });
                f.on("error", function (h) {
                  v.error(h);
                });
                return this;
              };
              b.prototype.resume = function () {
                return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? undefined : (this.end(), true));
              };
              b.prototype.error = function (f) {
                var v = this._sources;
                if (!c.prototype.error.call(this, f)) {
                  return false;
                }
                for (var h = 0; h < v.length; h++) {
                  try {
                    v[h].error(f);
                  } catch { }
                }
                return true;
              };
              b.prototype.lock = function () {
                c.prototype.lock.call(this);
                for (var f = this._sources, v = 0; v < f.length; v++) {
                  f[v].lock();
                }
              };
              o.exports = b;
            }, {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32
            }],
            9: [function (t, o, s) {
              var r = t("../compressions");
              var i = t("./ZipFileWorker");
              s.generateWorker = function (n, c, d) {
                var p = new i(c.streamFiles, d, c.platform, c.encodeFileName);
                var m = 0;
                try {
                  n.forEach(function (b, f) {
                    m++;
                    var v = function (x, S) {
                      var A = x || S;
                      var C = r[A];
                      if (!C) {
                        throw new Error(A + " is not a valid compression method !");
                      }
                      return C;
                    }(f.options.compression, c.compression);
                    var h = f.options.compressionOptions || c.compressionOptions || {};
                    var w = f.dir;
                    var g = f.date;
                    f._compressWorker(v, h).withStreamInfo("file", {
                      name: b,
                      dir: w,
                      date: g,
                      comment: f.comment || "",
                      unixPermissions: f.unixPermissions,
                      dosPermissions: f.dosPermissions
                    }).pipe(p);
                  });
                  p.entriesCount = m;
                } catch (b) {
                  p.error(b);
                }
                return p;
              };
            }, {
              "../compressions": 3,
              "./ZipFileWorker": 8
            }],
            10: [function (t, o, s) {
              function r() {
                if (!(this instanceof r)) {
                  return new r();
                }
                if (arguments.length) {
                  throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                }
                this.files = Object.create(null);
                this.comment = null;
                this.root = "";
                this.clone = function () {
                  var i = new r();
                  for (var n in this) {
                    if (typeof this[n] != "function") {
                      i[n] = this[n];
                    }
                  }
                  return i;
                };
              }
              (r.prototype = t("./object")).loadAsync = t("./load");
              r.support = t("./support");
              r.defaults = t("./defaults");
              r.version = "3.10.1";
              r.loadAsync = function (i, n) {
                return new r().loadAsync(i, n);
              };
              r.external = t("./external");
              o.exports = r;
            }, {
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30
            }],
            11: [function (t, o, s) {
              var r = t("./utils");
              var i = t("./external");
              var n = t("./utf8");
              var c = t("./zipEntries");
              var d = t("./stream/Crc32Probe");
              var p = t("./nodejsUtils");
              function m(b) {
                return new i.Promise(function (f, v) {
                  var h = b.decompressed.getContentWorker().pipe(new d());
                  h.on("error", function (w) {
                    v(w);
                  }).on("end", function () {
                    if (h.streamInfo.crc32 !== b.decompressed.crc32) {
                      v(new Error("Corrupted zip : CRC32 mismatch"));
                    } else {
                      f();
                    }
                  }).resume();
                });
              }
              o.exports = function (b, f) {
                var v = this;
                f = r.extend(f || {}, {
                  base64: false,
                  checkCRC32: false,
                  optimizedBinaryString: false,
                  createFolders: false,
                  decodeFileName: n.utf8decode
                });
                if (p.isNode && p.isStream(b)) {
                  return i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
                } else {
                  return r.prepareContent("the loaded zip file", b, true, f.optimizedBinaryString, f.base64).then(function (h) {
                    var w = new c(f);
                    w.load(h);
                    return w;
                  }).then(function (h) {
                    var w = [i.Promise.resolve(h)];
                    var g = h.files;
                    if (f.checkCRC32) {
                      for (var x = 0; x < g.length; x++) {
                        w.push(m(g[x]));
                      }
                    }
                    return i.Promise.all(w);
                  }).then(function (h) {
                    var w = h.shift();
                    for (var g = w.files, x = 0; x < g.length; x++) {
                      var S = g[x];
                      var A = S.fileNameStr;
                      var C = r.resolve(S.fileNameStr);
                      v.file(C, S.decompressed, {
                        binary: true,
                        optimizedBinaryString: true,
                        date: S.date,
                        dir: S.dir,
                        comment: S.fileCommentStr.length ? S.fileCommentStr : null,
                        unixPermissions: S.unixPermissions,
                        dosPermissions: S.dosPermissions,
                        createFolders: f.createFolders
                      });
                      if (!S.dir) {
                        v.file(C).unsafeOriginalName = A;
                      }
                    }
                    if (w.zipComment.length) {
                      v.comment = w.zipComment;
                    }
                    return v;
                  });
                }
              };
            }, {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33
            }],
            12: [function (t, o, s) {
              var r = t("../utils");
              var i = t("../stream/GenericWorker");
              function n(c, d) {
                i.call(this, "Nodejs stream input adapter for " + c);
                this._upstreamEnded = false;
                this._bindStream(d);
              }
              r.inherits(n, i);
              n.prototype._bindStream = function (c) {
                var d = this;
                (this._stream = c).pause();
                c.on("data", function (p) {
                  d.push({
                    data: p,
                    meta: {
                      percent: 0
                    }
                  });
                }).on("error", function (p) {
                  if (d.isPaused) {
                    this.generatedError = p;
                  } else {
                    d.error(p);
                  }
                }).on("end", function () {
                  if (d.isPaused) {
                    d._upstreamEnded = true;
                  } else {
                    d.end();
                  }
                });
              };
              n.prototype.pause = function () {
                return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
              };
              n.prototype.resume = function () {
                return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
              };
              o.exports = n;
            }, {
              "../stream/GenericWorker": 28,
              "../utils": 32
            }],
            13: [function (t, o, s) {
              var r = t("readable-stream").Readable;
              function i(n, c, d) {
                r.call(this, c);
                this._helper = n;
                var p = this;
                n.on("data", function (m, b) {
                  if (!p.push(m)) {
                    p._helper.pause();
                  }
                  if (d) {
                    d(b);
                  }
                }).on("error", function (m) {
                  p.emit("error", m);
                }).on("end", function () {
                  p.push(null);
                });
              }
              t("../utils").inherits(i, r);
              i.prototype._read = function () {
                this._helper.resume();
              };
              o.exports = i;
            }, {
              "../utils": 32,
              "readable-stream": 16
            }],
            14: [function (t, o, s) {
              o.exports = {
                isNode: typeof Buffer !== "undefined",
                newBufferFrom: function (r, i) {
                  if (Buffer.from && Buffer.from !== Uint8Array.from) {
                    return Buffer.from(r, i);
                  }
                  if (typeof r == "number") {
                    throw new Error("The \"data\" argument must not be a number");
                  }
                  return new Buffer(r, i);
                },
                allocBuffer: function (r) {
                  if (Buffer.alloc) {
                    return Buffer.alloc(r);
                  }
                  var i = new Buffer(r);
                  i.fill(0);
                  return i;
                },
                isBuffer: function (r) {
                  return Buffer.isBuffer(r);
                },
                isStream: function (r) {
                  return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
                }
              };
            }, {}],
            15: [function (t, o, s) {
              function r(C, D, O) {
                var P;
                var T = n.getTypeOf(D);
                var q = n.extend(O || {}, p);
                q.date = q.date || new Date();
                if (q.compression !== null) {
                  q.compression = q.compression.toUpperCase();
                }
                if (typeof q.unixPermissions == "string") {
                  q.unixPermissions = parseInt(q.unixPermissions, 8);
                }
                if (q.unixPermissions && q.unixPermissions & 16384) {
                  q.dir = true;
                }
                if (q.dosPermissions && q.dosPermissions & 16) {
                  q.dir = true;
                }
                if (q.dir) {
                  C = g(C);
                }
                if (q.createFolders && (P = w(C))) {
                  x.call(this, P, true);
                }
                var Y = T === "string" && q.binary === false && q.base64 === false;
                if (!O || O.binary === undefined) {
                  q.binary = !Y;
                }
                if (D instanceof m && D.uncompressedSize === 0 || q.dir || !D || D.length === 0) {
                  q.base64 = false;
                  q.binary = true;
                  D = "";
                  q.compression = "STORE";
                  T = "string";
                }
                var k = null;
                k = D instanceof m || D instanceof c ? D : v.isNode && v.isStream(D) ? new h(C, D) : n.prepareContent(C, D, q.binary, q.optimizedBinaryString, q.base64);
                var B = new b(C, k, q);
                this.files[C] = B;
              }
              var i = t("./utf8");
              var n = t("./utils");
              var c = t("./stream/GenericWorker");
              var d = t("./stream/StreamHelper");
              var p = t("./defaults");
              var m = t("./compressedObject");
              var b = t("./zipObject");
              var f = t("./generate");
              var v = t("./nodejsUtils");
              var h = t("./nodejs/NodejsStreamInputAdapter");
              function w(C) {
                if (C.slice(-1) === "/") {
                  C = C.substring(0, C.length - 1);
                }
                var D = C.lastIndexOf("/");
                if (D > 0) {
                  return C.substring(0, D);
                } else {
                  return "";
                }
              }
              function g(C) {
                if (C.slice(-1) !== "/") {
                  C += "/";
                }
                return C;
              }
              function x(C, D) {
                D = D !== undefined ? D : p.createFolders;
                C = g(C);
                if (!this.files[C]) {
                  r.call(this, C, null, {
                    dir: true,
                    createFolders: D
                  });
                }
                return this.files[C];
              }
              function S(C) {
                return Object.prototype.toString.call(C) === "[object RegExp]";
              }
              var A = {
                load: function () {
                  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                },
                forEach: function (C) {
                  var D;
                  var O;
                  var P;
                  for (D in this.files) {
                    P = this.files[D];
                    if ((O = D.slice(this.root.length, D.length)) && D.slice(0, this.root.length) === this.root) {
                      C(O, P);
                    }
                  }
                },
                filter: function (C) {
                  var D = [];
                  this.forEach(function (O, P) {
                    if (C(O, P)) {
                      D.push(P);
                    }
                  });
                  return D;
                },
                file: function (C, D, O) {
                  if (arguments.length !== 1) {
                    C = this.root + C;
                    r.call(this, C, D, O);
                    return this;
                  }
                  if (S(C)) {
                    var P = C;
                    return this.filter(function (q, Y) {
                      return !Y.dir && P.test(q);
                    });
                  }
                  var T = this.files[this.root + C];
                  if (T && !T.dir) {
                    return T;
                  } else {
                    return null;
                  }
                },
                folder: function (C) {
                  if (!C) {
                    return this;
                  }
                  if (S(C)) {
                    return this.filter(function (T, q) {
                      return q.dir && C.test(T);
                    });
                  }
                  var D = this.root + C;
                  var O = x.call(this, D);
                  var P = this.clone();
                  P.root = O.name;
                  return P;
                },
                remove: function (C) {
                  C = this.root + C;
                  var D = this.files[C];
                  if (!D) {
                    if (C.slice(-1) !== "/") {
                      C += "/";
                    }
                    D = this.files[C];
                  }
                  if (D && !D.dir) {
                    delete this.files[C];
                  } else {
                    for (var O = this.filter(function (T, q) {
                      return q.name.slice(0, C.length) === C;
                    }), P = 0; P < O.length; P++) {
                      delete this.files[O[P].name];
                    }
                  }
                  return this;
                },
                generate: function () {
                  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                },
                generateInternalStream: function (C) {
                  var D;
                  var O = {};
                  try {
                    (O = n.extend(C || {}, {
                      streamFiles: false,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: i.utf8encode
                    })).type = O.type.toLowerCase();
                    O.compression = O.compression.toUpperCase();
                    if (O.type === "binarystring") {
                      O.type = "string";
                    }
                    if (!O.type) {
                      throw new Error("No output type specified.");
                    }
                    n.checkSupport(O.type);
                    if (O.platform === "darwin" || O.platform === "freebsd" || O.platform === "linux" || O.platform === "sunos") {
                      O.platform = "UNIX";
                    }
                    if (O.platform === "win32") {
                      O.platform = "DOS";
                    }
                    var P = O.comment || this.comment || "";
                    D = f.generateWorker(this, O, P);
                  } catch (T) {
                    (D = new c("error")).error(T);
                  }
                  return new d(D, O.type || "string", O.mimeType);
                },
                generateAsync: function (C, D) {
                  return this.generateInternalStream(C).accumulate(D);
                },
                generateNodeStream: function (C, D) {
                  if (!(C = C || {}).type) {
                    C.type = "nodebuffer";
                  }
                  return this.generateInternalStream(C).toNodejsStream(D);
                }
              };
              o.exports = A;
            }, {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35
            }],
            16: [function (t, o, s) {
              o.exports = t("stream");
            }, {
              stream: undefined
            }],
            17: [function (t, o, s) {
              var r = t("./DataReader");
              function i(n) {
                r.call(this, n);
                for (var c = 0; c < this.data.length; c++) {
                  n[c] = n[c] & 255;
                }
              }
              t("../utils").inherits(i, r);
              i.prototype.byteAt = function (n) {
                return this.data[this.zero + n];
              };
              i.prototype.lastIndexOfSignature = function (n) {
                var c = n.charCodeAt(0);
                var d = n.charCodeAt(1);
                var p = n.charCodeAt(2);
                var m = n.charCodeAt(3);
                for (var b = this.length - 4; b >= 0; --b) {
                  if (this.data[b] === c && this.data[b + 1] === d && this.data[b + 2] === p && this.data[b + 3] === m) {
                    return b - this.zero;
                  }
                }
                return -1;
              };
              i.prototype.readAndCheckSignature = function (n) {
                var c = n.charCodeAt(0);
                var d = n.charCodeAt(1);
                var p = n.charCodeAt(2);
                var m = n.charCodeAt(3);
                var b = this.readData(4);
                return c === b[0] && d === b[1] && p === b[2] && m === b[3];
              };
              i.prototype.readData = function (n) {
                this.checkOffset(n);
                if (n === 0) {
                  return [];
                }
                var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                this.index += n;
                return c;
              };
              o.exports = i;
            }, {
              "../utils": 32,
              "./DataReader": 18
            }],
            18: [function (t, o, s) {
              var r = t("../utils");
              function i(n) {
                this.data = n;
                this.length = n.length;
                this.index = 0;
                this.zero = 0;
              }
              i.prototype = {
                checkOffset: function (n) {
                  this.checkIndex(this.index + n);
                },
                checkIndex: function (n) {
                  if (this.length < this.zero + n || n < 0) {
                    throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
                  }
                },
                setIndex: function (n) {
                  this.checkIndex(n);
                  this.index = n;
                },
                skip: function (n) {
                  this.setIndex(this.index + n);
                },
                byteAt: function () { },
                readInt: function (n) {
                  var c;
                  var d = 0;
                  this.checkOffset(n);
                  c = this.index + n - 1;
                  for (; c >= this.index; c--) {
                    d = (d << 8) + this.byteAt(c);
                  }
                  this.index += n;
                  return d;
                },
                readString: function (n) {
                  return r.transformTo("string", this.readData(n));
                },
                readData: function () { },
                lastIndexOfSignature: function () { },
                readAndCheckSignature: function () { },
                readDate: function () {
                  var n = this.readInt(4);
                  return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (n & 31) << 1));
                }
              };
              o.exports = i;
            }, {
              "../utils": 32
            }],
            19: [function (t, o, s) {
              var r = t("./Uint8ArrayReader");
              function i(n) {
                r.call(this, n);
              }
              t("../utils").inherits(i, r);
              i.prototype.readData = function (n) {
                this.checkOffset(n);
                var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                this.index += n;
                return c;
              };
              o.exports = i;
            }, {
              "../utils": 32,
              "./Uint8ArrayReader": 21
            }],
            20: [function (t, o, s) {
              var r = t("./DataReader");
              function i(n) {
                r.call(this, n);
              }
              t("../utils").inherits(i, r);
              i.prototype.byteAt = function (n) {
                return this.data.charCodeAt(this.zero + n);
              };
              i.prototype.lastIndexOfSignature = function (n) {
                return this.data.lastIndexOf(n) - this.zero;
              };
              i.prototype.readAndCheckSignature = function (n) {
                return n === this.readData(4);
              };
              i.prototype.readData = function (n) {
                this.checkOffset(n);
                var c = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                this.index += n;
                return c;
              };
              o.exports = i;
            }, {
              "../utils": 32,
              "./DataReader": 18
            }],
            21: [function (t, o, s) {
              var r = t("./ArrayReader");
              function i(n) {
                r.call(this, n);
              }
              t("../utils").inherits(i, r);
              i.prototype.readData = function (n) {
                this.checkOffset(n);
                if (n === 0) {
                  return new Uint8Array(0);
                }
                var c = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
                this.index += n;
                return c;
              };
              o.exports = i;
            }, {
              "../utils": 32,
              "./ArrayReader": 17
            }],
            22: [function (t, o, s) {
              var r = t("../utils");
              var i = t("../support");
              var n = t("./ArrayReader");
              var c = t("./StringReader");
              var d = t("./NodeBufferReader");
              var p = t("./Uint8ArrayReader");
              o.exports = function (m) {
                var b = r.getTypeOf(m);
                r.checkSupport(b);
                if (b !== "string" || i.uint8array) {
                  if (b === "nodebuffer") {
                    return new d(m);
                  } else if (i.uint8array) {
                    return new p(r.transformTo("uint8array", m));
                  } else {
                    return new n(r.transformTo("array", m));
                  }
                } else {
                  return new c(m);
                }
              };
            }, {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21
            }],
            23: [function (t, o, s) {
              s.LOCAL_FILE_HEADER = "PK";
              s.CENTRAL_FILE_HEADER = "PK";
              s.CENTRAL_DIRECTORY_END = "PK";
              s.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
              s.ZIP64_CENTRAL_DIRECTORY_END = "PK";
              s.DATA_DESCRIPTOR = "PK\b";
            }, {}],
            24: [function (t, o, s) {
              var r = t("./GenericWorker");
              var i = t("../utils");
              function n(c) {
                r.call(this, "ConvertWorker to " + c);
                this.destType = c;
              }
              i.inherits(n, r);
              n.prototype.processChunk = function (c) {
                this.push({
                  data: i.transformTo(this.destType, c.data),
                  meta: c.meta
                });
              };
              o.exports = n;
            }, {
              "../utils": 32,
              "./GenericWorker": 28
            }],
            25: [function (t, o, s) {
              var r = t("./GenericWorker");
              var i = t("../crc32");
              function n() {
                r.call(this, "Crc32Probe");
                this.withStreamInfo("crc32", 0);
              }
              t("../utils").inherits(n, r);
              n.prototype.processChunk = function (c) {
                this.streamInfo.crc32 = i(c.data, this.streamInfo.crc32 || 0);
                this.push(c);
              };
              o.exports = n;
            }, {
              "../crc32": 4,
              "../utils": 32,
              "./GenericWorker": 28
            }],
            26: [function (t, o, s) {
              var r = t("../utils");
              var i = t("./GenericWorker");
              function n(c) {
                i.call(this, "DataLengthProbe for " + c);
                this.propName = c;
                this.withStreamInfo(c, 0);
              }
              r.inherits(n, i);
              n.prototype.processChunk = function (c) {
                if (c) {
                  var d = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = d + c.data.length;
                }
                i.prototype.processChunk.call(this, c);
              };
              o.exports = n;
            }, {
              "../utils": 32,
              "./GenericWorker": 28
            }],
            27: [function (t, o, s) {
              var r = t("../utils");
              var i = t("./GenericWorker");
              function n(c) {
                i.call(this, "DataWorker");
                var d = this;
                this.dataIsReady = false;
                this.index = 0;
                this.max = 0;
                this.data = null;
                this.type = "";
                this._tickScheduled = false;
                c.then(function (p) {
                  d.dataIsReady = true;
                  d.data = p;
                  d.max = p && p.length || 0;
                  d.type = r.getTypeOf(p);
                  if (!d.isPaused) {
                    d._tickAndRepeat();
                  }
                }, function (p) {
                  d.error(p);
                });
              }
              r.inherits(n, i);
              n.prototype.cleanUp = function () {
                i.prototype.cleanUp.call(this);
                this.data = null;
              };
              n.prototype.resume = function () {
                return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, r.delay(this._tickAndRepeat, [], this)), true);
              };
              n.prototype._tickAndRepeat = function () {
                this._tickScheduled = false;
                if (!this.isPaused && !this.isFinished) {
                  this._tick();
                  if (!this.isFinished) {
                    r.delay(this._tickAndRepeat, [], this);
                    this._tickScheduled = true;
                  }
                }
              };
              n.prototype._tick = function () {
                if (this.isPaused || this.isFinished) {
                  return false;
                }
                var c = null;
                var d = Math.min(this.max, this.index + 16384);
                if (this.index >= this.max) {
                  return this.end();
                }
                switch (this.type) {
                  case "string":
                    c = this.data.substring(this.index, d);
                    break;
                  case "uint8array":
                    c = this.data.subarray(this.index, d);
                    break;
                  case "array":
                  case "nodebuffer":
                    c = this.data.slice(this.index, d);
                }
                this.index = d;
                return this.push({
                  data: c,
                  meta: {
                    percent: this.max ? this.index / this.max * 100 : 0
                  }
                });
              };
              o.exports = n;
            }, {
              "../utils": 32,
              "./GenericWorker": 28
            }],
            28: [function (t, o, s) {
              function r(i) {
                this.name = i || "default";
                this.streamInfo = {};
                this.generatedError = null;
                this.extraStreamInfo = {};
                this.isPaused = true;
                this.isFinished = false;
                this.isLocked = false;
                this._listeners = {
                  data: [],
                  end: [],
                  error: []
                };
                this.previous = null;
              }
              r.prototype = {
                push: function (i) {
                  this.emit("data", i);
                },
                end: function () {
                  if (this.isFinished) {
                    return false;
                  }
                  this.flush();
                  try {
                    this.emit("end");
                    this.cleanUp();
                    this.isFinished = true;
                  } catch (i) {
                    this.emit("error", i);
                  }
                  return true;
                },
                error: function (i) {
                  return !this.isFinished && (this.isPaused ? this.generatedError = i : (this.isFinished = true, this.emit("error", i), this.previous && this.previous.error(i), this.cleanUp()), true);
                },
                on: function (i, n) {
                  this._listeners[i].push(n);
                  return this;
                },
                cleanUp: function () {
                  this.streamInfo = this.generatedError = this.extraStreamInfo = null;
                  this._listeners = [];
                },
                emit: function (i, n) {
                  if (this._listeners[i]) {
                    for (var c = 0; c < this._listeners[i].length; c++) {
                      this._listeners[i][c].call(this, n);
                    }
                  }
                },
                pipe: function (i) {
                  return i.registerPrevious(this);
                },
                registerPrevious: function (i) {
                  if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                  }
                  this.streamInfo = i.streamInfo;
                  this.mergeStreamInfo();
                  this.previous = i;
                  var n = this;
                  i.on("data", function (c) {
                    n.processChunk(c);
                  });
                  i.on("end", function () {
                    n.end();
                  });
                  i.on("error", function (c) {
                    n.error(c);
                  });
                  return this;
                },
                pause: function () {
                  return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
                },
                resume: function () {
                  if (!this.isPaused || this.isFinished) {
                    return false;
                  }
                  var i = this.isPaused = false;
                  if (this.generatedError) {
                    this.error(this.generatedError);
                    i = true;
                  }
                  if (this.previous) {
                    this.previous.resume();
                  }
                  return !i;
                },
                flush: function () { },
                processChunk: function (i) {
                  this.push(i);
                },
                withStreamInfo: function (i, n) {
                  this.extraStreamInfo[i] = n;
                  this.mergeStreamInfo();
                  return this;
                },
                mergeStreamInfo: function () {
                  for (var i in this.extraStreamInfo) {
                    if (Object.prototype.hasOwnProperty.call(this.extraStreamInfo, i)) {
                      this.streamInfo[i] = this.extraStreamInfo[i];
                    }
                  }
                },
                lock: function () {
                  if (this.isLocked) {
                    throw new Error("The stream '" + this + "' has already been used.");
                  }
                  this.isLocked = true;
                  if (this.previous) {
                    this.previous.lock();
                  }
                },
                toString: function () {
                  var i = "Worker " + this.name;
                  if (this.previous) {
                    return this.previous + " -> " + i;
                  } else {
                    return i;
                  }
                }
              };
              o.exports = r;
            }, {}],
            29: [function (t, o, s) {
              var r = t("../utils");
              var i = t("./ConvertWorker");
              var n = t("./GenericWorker");
              var c = t("../base64");
              var d = t("../support");
              var p = t("../external");
              var m = null;
              if (d.nodestream) {
                try {
                  m = t("../nodejs/NodejsStreamOutputAdapter");
                } catch { }
              }
              function b(v, h) {
                return new p.Promise(function (w, g) {
                  var x = [];
                  var S = v._internalType;
                  var A = v._outputType;
                  var C = v._mimeType;
                  v.on("data", function (D, O) {
                    x.push(D);
                    if (h) {
                      h(O);
                    }
                  }).on("error", function (D) {
                    x = [];
                    g(D);
                  }).on("end", function () {
                    try {
                      var D = function (O, P, T) {
                        switch (O) {
                          case "blob":
                            return r.newBlob(r.transformTo("arraybuffer", P), T);
                          case "base64":
                            return c.encode(P);
                          default:
                            return r.transformTo(O, P);
                        }
                      }(A, function (O, P) {
                        var T;
                        var q = 0;
                        var Y = null;
                        var k = 0;
                        for (T = 0; T < P.length; T++) {
                          k += P[T].length;
                        }
                        switch (O) {
                          case "string":
                            return P.join("");
                          case "array":
                            return Array.prototype.concat.apply([], P);
                          case "uint8array":
                            Y = new Uint8Array(k);
                            T = 0;
                            for (; T < P.length; T++) {
                              Y.set(P[T], q);
                              q += P[T].length;
                            }
                            return Y;
                          case "nodebuffer":
                            return Buffer.concat(P);
                          default:
                            throw new Error("concat : unsupported type '" + O + "'");
                        }
                      }(S, x), C);
                      w(D);
                    } catch (O) {
                      g(O);
                    }
                    x = [];
                  }).resume();
                });
              }
              function f(v, h, w) {
                var g = h;
                switch (h) {
                  case "blob":
                  case "arraybuffer":
                    g = "uint8array";
                    break;
                  case "base64":
                    g = "string";
                }
                try {
                  this._internalType = g;
                  this._outputType = h;
                  this._mimeType = w;
                  r.checkSupport(g);
                  this._worker = v.pipe(new i(g));
                  v.lock();
                } catch (x) {
                  this._worker = new n("error");
                  this._worker.error(x);
                }
              }
              f.prototype = {
                accumulate: function (v) {
                  return b(this, v);
                },
                on: function (v, h) {
                  var w = this;
                  if (v === "data") {
                    this._worker.on(v, function (g) {
                      h.call(w, g.data, g.meta);
                    });
                  } else {
                    this._worker.on(v, function () {
                      r.delay(h, arguments, w);
                    });
                  }
                  return this;
                },
                resume: function () {
                  r.delay(this._worker.resume, [], this._worker);
                  return this;
                },
                pause: function () {
                  this._worker.pause();
                  return this;
                },
                toNodejsStream: function (v) {
                  r.checkSupport("nodestream");
                  if (this._outputType !== "nodebuffer") {
                    throw new Error(this._outputType + " is not supported by this method");
                  }
                  return new m(this, {
                    objectMode: this._outputType !== "nodebuffer"
                  }, v);
                }
              };
              o.exports = f;
            }, {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28
            }],
            30: [function (t, o, s) {
              s.base64 = true;
              s.array = true;
              s.string = true;
              s.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
              s.nodebuffer = typeof Buffer !== "undefined";
              s.uint8array = typeof Uint8Array !== "undefined";
              if (typeof ArrayBuffer === "undefined") {
                s.blob = false;
              } else {
                var r = new ArrayBuffer(0);
                try {
                  s.blob = new Blob([r], {
                    type: "application/zip"
                  }).size === 0;
                } catch {
                  try {
                    var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    i.append(r);
                    s.blob = i.getBlob("application/zip").size === 0;
                  } catch {
                    s.blob = false;
                  }
                }
              }
              try {
                s.nodestream = !!t("readable-stream").Readable;
              } catch {
                s.nodestream = false;
              }
            }, {
              "readable-stream": 16
            }],
            31: [function (t, o, s) {
              var r = t("./utils");
              var i = t("./support");
              var n = t("./nodejsUtils");
              var c = t("./stream/GenericWorker");
              var d = new Array(256);
              for (var p = 0; p < 256; p++) {
                d[p] = p >= 252 ? 6 : p >= 248 ? 5 : p >= 240 ? 4 : p >= 224 ? 3 : p >= 192 ? 2 : 1;
              }
              d[254] = d[254] = 1;
              function m() {
                c.call(this, "utf-8 decode");
                this.leftOver = null;
              }
              function b() {
                c.call(this, "utf-8 encode");
              }
              s.utf8encode = function (f) {
                if (i.nodebuffer) {
                  return n.newBufferFrom(f, "utf-8");
                } else {
                  return function (v) {
                    var h;
                    var w;
                    var g;
                    var x;
                    var S;
                    var A = v.length;
                    var C = 0;
                    for (x = 0; x < A; x++) {
                      if (((w = v.charCodeAt(x)) & 64512) == 55296 && x + 1 < A && ((g = v.charCodeAt(x + 1)) & 64512) == 56320) {
                        w = 65536 + (w - 55296 << 10) + (g - 56320);
                        x++;
                      }
                      C += w < 128 ? 1 : w < 2048 ? 2 : w < 65536 ? 3 : 4;
                    }
                    h = i.uint8array ? new Uint8Array(C) : new Array(C);
                    x = S = 0;
                    for (; S < C; x++) {
                      if (((w = v.charCodeAt(x)) & 64512) == 55296 && x + 1 < A && ((g = v.charCodeAt(x + 1)) & 64512) == 56320) {
                        w = 65536 + (w - 55296 << 10) + (g - 56320);
                        x++;
                      }
                      if (w < 128) {
                        h[S++] = w;
                      } else {
                        if (w < 2048) {
                          h[S++] = w >>> 6 | 192;
                        } else {
                          if (w < 65536) {
                            h[S++] = w >>> 12 | 224;
                          } else {
                            h[S++] = w >>> 18 | 240;
                            h[S++] = w >>> 12 & 63 | 128;
                          }
                          h[S++] = w >>> 6 & 63 | 128;
                        }
                        h[S++] = w & 63 | 128;
                      }
                    }
                    return h;
                  }(f);
                }
              };
              s.utf8decode = function (f) {
                if (i.nodebuffer) {
                  return r.transformTo("nodebuffer", f).toString("utf-8");
                } else {
                  return function (v) {
                    var h;
                    var w;
                    var g;
                    var x;
                    var S = v.length;
                    var A = new Array(S * 2);
                    for (h = w = 0; h < S;) {
                      if ((g = v[h++]) < 128) {
                        A[w++] = g;
                      } else if ((x = d[g]) > 4) {
                        A[w++] = 65533;
                        h += x - 1;
                      } else {
                        for (g &= x === 2 ? 31 : x === 3 ? 15 : 7; x > 1 && h < S;) {
                          g = g << 6 | v[h++] & 63;
                          x--;
                        }
                        if (x > 1) {
                          A[w++] = 65533;
                        } else if (g < 65536) {
                          A[w++] = g;
                        } else {
                          g -= 65536;
                          A[w++] = g >> 10 & 1023 | 55296;
                          A[w++] = g & 1023 | 56320;
                        }
                      }
                    }
                    if (A.length !== w) {
                      if (A.subarray) {
                        A = A.subarray(0, w);
                      } else {
                        A.length = w;
                      }
                    }
                    return r.applyFromCharCode(A);
                  }(f = r.transformTo(i.uint8array ? "uint8array" : "array", f));
                }
              };
              r.inherits(m, c);
              m.prototype.processChunk = function (f) {
                var v = r.transformTo(i.uint8array ? "uint8array" : "array", f.data);
                if (this.leftOver && this.leftOver.length) {
                  if (i.uint8array) {
                    var h = v;
                    (v = new Uint8Array(h.length + this.leftOver.length)).set(this.leftOver, 0);
                    v.set(h, this.leftOver.length);
                  } else {
                    v = this.leftOver.concat(v);
                  }
                  this.leftOver = null;
                }
                var w = function (x, S) {
                  var A;
                  if ((S = S || x.length) > x.length) {
                    S = x.length;
                  }
                  A = S - 1;
                  while (A >= 0 && (x[A] & 192) == 128) {
                    A--;
                  }
                  if (A < 0 || A === 0) {
                    return S;
                  } else if (A + d[x[A]] > S) {
                    return A;
                  } else {
                    return S;
                  }
                }(v);
                var g = v;
                if (w !== v.length) {
                  if (i.uint8array) {
                    g = v.subarray(0, w);
                    this.leftOver = v.subarray(w, v.length);
                  } else {
                    g = v.slice(0, w);
                    this.leftOver = v.slice(w, v.length);
                  }
                }
                this.push({
                  data: s.utf8decode(g),
                  meta: f.meta
                });
              };
              m.prototype.flush = function () {
                if (this.leftOver && this.leftOver.length) {
                  this.push({
                    data: s.utf8decode(this.leftOver),
                    meta: {}
                  });
                  this.leftOver = null;
                }
              };
              s.Utf8DecodeWorker = m;
              r.inherits(b, c);
              b.prototype.processChunk = function (f) {
                this.push({
                  data: s.utf8encode(f.data),
                  meta: f.meta
                });
              };
              s.Utf8EncodeWorker = b;
            }, {
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32
            }],
            32: [function (t, o, s) {
              var r = t("./support");
              var i = t("./base64");
              var n = t("./nodejsUtils");
              var c = t("./external");
              function d(h) {
                return h;
              }
              function p(h, w) {
                for (var g = 0; g < h.length; ++g) {
                  w[g] = h.charCodeAt(g) & 255;
                }
                return w;
              }
              t("setimmediate");
              s.newBlob = function (h, w) {
                s.checkSupport("blob");
                try {
                  return new Blob([h], {
                    type: w
                  });
                } catch {
                  try {
                    var g = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    g.append(h);
                    return g.getBlob(w);
                  } catch {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              };
              var m = {
                stringifyByChunk: function (h, w, g) {
                  var x = [];
                  var S = 0;
                  var A = h.length;
                  if (A <= g) {
                    return String.fromCharCode.apply(null, h);
                  }
                  while (S < A) {
                    if (w === "array" || w === "nodebuffer") {
                      x.push(String.fromCharCode.apply(null, h.slice(S, Math.min(S + g, A))));
                    } else {
                      x.push(String.fromCharCode.apply(null, h.subarray(S, Math.min(S + g, A))));
                    }
                    S += g;
                  }
                  return x.join("");
                },
                stringifyByChar: function (h) {
                  var w = "";
                  for (var g = 0; g < h.length; g++) {
                    w += String.fromCharCode(h[g]);
                  }
                  return w;
                },
                applyCanBeUsed: {
                  uint8array: function () {
                    try {
                      return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                    } catch {
                      return false;
                    }
                  }(),
                  nodebuffer: function () {
                    try {
                      return r.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
                    } catch {
                      return false;
                    }
                  }()
                }
              };
              function b(h) {
                var w = 65536;
                var g = s.getTypeOf(h);
                var x = true;
                if (g === "uint8array") {
                  x = m.applyCanBeUsed.uint8array;
                } else if (g === "nodebuffer") {
                  x = m.applyCanBeUsed.nodebuffer;
                }
                if (x) {
                  while (w > 1) {
                    try {
                      return m.stringifyByChunk(h, g, w);
                    } catch {
                      w = Math.floor(w / 2);
                    }
                  }
                }
                return m.stringifyByChar(h);
              }
              function f(h, w) {
                for (var g = 0; g < h.length; g++) {
                  w[g] = h[g];
                }
                return w;
              }
              s.applyFromCharCode = b;
              var v = {};
              v.string = {
                string: d,
                array: function (h) {
                  return p(h, new Array(h.length));
                },
                arraybuffer: function (h) {
                  return v.string.uint8array(h).buffer;
                },
                uint8array: function (h) {
                  return p(h, new Uint8Array(h.length));
                },
                nodebuffer: function (h) {
                  return p(h, n.allocBuffer(h.length));
                }
              };
              v.array = {
                string: b,
                array: d,
                arraybuffer: function (h) {
                  return new Uint8Array(h).buffer;
                },
                uint8array: function (h) {
                  return new Uint8Array(h);
                },
                nodebuffer: function (h) {
                  return n.newBufferFrom(h);
                }
              };
              v.arraybuffer = {
                string: function (h) {
                  return b(new Uint8Array(h));
                },
                array: function (h) {
                  return f(new Uint8Array(h), new Array(h.byteLength));
                },
                arraybuffer: d,
                uint8array: function (h) {
                  return new Uint8Array(h);
                },
                nodebuffer: function (h) {
                  return n.newBufferFrom(new Uint8Array(h));
                }
              };
              v.uint8array = {
                string: b,
                array: function (h) {
                  return f(h, new Array(h.length));
                },
                arraybuffer: function (h) {
                  return h.buffer;
                },
                uint8array: d,
                nodebuffer: function (h) {
                  return n.newBufferFrom(h);
                }
              };
              v.nodebuffer = {
                string: b,
                array: function (h) {
                  return f(h, new Array(h.length));
                },
                arraybuffer: function (h) {
                  return v.nodebuffer.uint8array(h).buffer;
                },
                uint8array: function (h) {
                  return f(h, new Uint8Array(h.length));
                },
                nodebuffer: d
              };
              s.transformTo = function (h, w) {
                w = w || "";
                if (!h) {
                  return w;
                }
                s.checkSupport(h);
                var g = s.getTypeOf(w);
                return v[g][h](w);
              };
              s.resolve = function (h) {
                for (var w = h.split("/"), g = [], x = 0; x < w.length; x++) {
                  var S = w[x];
                  if (S !== "." && (S !== "" || x === 0 || x === w.length - 1)) {
                    if (S === "..") {
                      g.pop();
                    } else {
                      g.push(S);
                    }
                  }
                }
                return g.join("/");
              };
              s.getTypeOf = function (h) {
                if (typeof h == "string") {
                  return "string";
                } else if (Object.prototype.toString.call(h) === "[object Array]") {
                  return "array";
                } else if (r.nodebuffer && n.isBuffer(h)) {
                  return "nodebuffer";
                } else if (r.uint8array && h instanceof Uint8Array) {
                  return "uint8array";
                } else if (r.arraybuffer && h instanceof ArrayBuffer) {
                  return "arraybuffer";
                } else {
                  return undefined;
                }
              };
              s.checkSupport = function (h) {
                if (!r[h.toLowerCase()]) {
                  throw new Error(h + " is not supported by this platform");
                }
              };
              s.MAX_VALUE_16BITS = 65535;
              s.MAX_VALUE_32BITS = -1;
              s.pretty = function (h) {
                var w;
                var g;
                var x = "";
                for (g = 0; g < (h || "").length; g++) {
                  x += "\\x" + ((w = h.charCodeAt(g)) < 16 ? "0" : "") + w.toString(16).toUpperCase();
                }
                return x;
              };
              s.delay = function (h, w, g) {
                setImmediate(function () {
                  h.apply(g || null, w || []);
                });
              };
              s.inherits = function (h, w) {
                function g() { }
                g.prototype = w.prototype;
                h.prototype = new g();
              };
              s.extend = function () {
                var h;
                var w;
                var g = {};
                for (h = 0; h < arguments.length; h++) {
                  for (w in arguments[h]) {
                    if (Object.prototype.hasOwnProperty.call(arguments[h], w) && g[w] === undefined) {
                      g[w] = arguments[h][w];
                    }
                  }
                }
                return g;
              };
              s.prepareContent = function (h, w, g, x, S) {
                return c.Promise.resolve(w).then(function (A) {
                  if (r.blob && (A instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(A)) !== -1) && typeof FileReader !== "undefined") {
                    return new c.Promise(function (C, D) {
                      var O = new FileReader();
                      O.onload = function (P) {
                        C(P.target.result);
                      };
                      O.onerror = function (P) {
                        D(P.target.error);
                      };
                      O.readAsArrayBuffer(A);
                    });
                  } else {
                    return A;
                  }
                }).then(function (A) {
                  var C = s.getTypeOf(A);
                  if (C) {
                    if (C === "arraybuffer") {
                      A = s.transformTo("uint8array", A);
                    } else if (C === "string") {
                      if (S) {
                        A = i.decode(A);
                      } else if (g && x !== true) {
                        A = function (D) {
                          return p(D, r.uint8array ? new Uint8Array(D.length) : new Array(D.length));
                        }(A);
                      }
                    }
                    return A;
                  } else {
                    return c.Promise.reject(new Error("Can't read the data of '" + h + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                  }
                });
              };
            }, {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54
            }],
            33: [function (t, o, s) {
              var r = t("./reader/readerFor");
              var i = t("./utils");
              var n = t("./signature");
              var c = t("./zipEntry");
              var d = t("./support");
              function p(m) {
                this.files = [];
                this.loadOptions = m;
              }
              p.prototype = {
                checkSignature: function (m) {
                  if (!this.reader.readAndCheckSignature(m)) {
                    this.reader.index -= 4;
                    var b = this.reader.readString(4);
                    throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(b) + ", expected " + i.pretty(m) + ")");
                  }
                },
                isSignature: function (m, b) {
                  var f = this.reader.index;
                  this.reader.setIndex(m);
                  var v = this.reader.readString(4) === b;
                  this.reader.setIndex(f);
                  return v;
                },
                readBlockEndOfCentral: function () {
                  this.diskNumber = this.reader.readInt(2);
                  this.diskWithCentralDirStart = this.reader.readInt(2);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
                  this.centralDirRecords = this.reader.readInt(2);
                  this.centralDirSize = this.reader.readInt(4);
                  this.centralDirOffset = this.reader.readInt(4);
                  this.zipCommentLength = this.reader.readInt(2);
                  var m = this.reader.readData(this.zipCommentLength);
                  var b = d.uint8array ? "uint8array" : "array";
                  var f = i.transformTo(b, m);
                  this.zipComment = this.loadOptions.decodeFileName(f);
                },
                readBlockZip64EndOfCentral: function () {
                  this.zip64EndOfCentralSize = this.reader.readInt(8);
                  this.reader.skip(4);
                  this.diskNumber = this.reader.readInt(4);
                  this.diskWithCentralDirStart = this.reader.readInt(4);
                  this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
                  this.centralDirRecords = this.reader.readInt(8);
                  this.centralDirSize = this.reader.readInt(8);
                  this.centralDirOffset = this.reader.readInt(8);
                  this.zip64ExtensibleData = {};
                  var m;
                  var b;
                  var f;
                  for (var v = this.zip64EndOfCentralSize - 44; v > 0;) {
                    m = this.reader.readInt(2);
                    b = this.reader.readInt(4);
                    f = this.reader.readData(b);
                    this.zip64ExtensibleData[m] = {
                      id: m,
                      length: b,
                      value: f
                    };
                  }
                },
                readBlockZip64EndOfCentralLocator: function () {
                  this.diskWithZip64CentralDirStart = this.reader.readInt(4);
                  this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
                  this.disksCount = this.reader.readInt(4);
                  if (this.disksCount > 1) {
                    throw new Error("Multi-volumes zip are not supported");
                  }
                },
                readLocalFiles: function () {
                  var m;
                  var b;
                  for (m = 0; m < this.files.length; m++) {
                    b = this.files[m];
                    this.reader.setIndex(b.localHeaderOffset);
                    this.checkSignature(n.LOCAL_FILE_HEADER);
                    b.readLocalPart(this.reader);
                    b.handleUTF8();
                    b.processAttributes();
                  }
                },
                readCentralDir: function () {
                  var m;
                  for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);) {
                    (m = new c({
                      zip64: this.zip64
                    }, this.loadOptions)).readCentralPart(this.reader);
                    this.files.push(m);
                  }
                  if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) {
                    throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                  }
                },
                readEndOfCentral: function () {
                  var m = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
                  if (m < 0) {
                    throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                  }
                  this.reader.setIndex(m);
                  var b = m;
                  this.checkSignature(n.CENTRAL_DIRECTORY_END);
                  this.readBlockEndOfCentral();
                  if (this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                    this.zip64 = true;
                    if ((m = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) {
                      throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                    }
                    this.reader.setIndex(m);
                    this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                    this.readBlockZip64EndOfCentralLocator();
                    if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) {
                      throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                    }
                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                    this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END);
                    this.readBlockZip64EndOfCentral();
                  }
                  var f = this.centralDirOffset + this.centralDirSize;
                  if (this.zip64) {
                    f += 20;
                    f += 12 + this.zip64EndOfCentralSize;
                  }
                  var v = b - f;
                  if (v > 0) {
                    if (!this.isSignature(b, n.CENTRAL_FILE_HEADER)) {
                      this.reader.zero = v;
                    }
                  } else if (v < 0) {
                    throw new Error("Corrupted zip: missing " + Math.abs(v) + " bytes.");
                  }
                },
                prepareReader: function (m) {
                  this.reader = r(m);
                },
                load: function (m) {
                  this.prepareReader(m);
                  this.readEndOfCentral();
                  this.readCentralDir();
                  this.readLocalFiles();
                }
              };
              o.exports = p;
            }, {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34
            }],
            34: [function (t, o, s) {
              var r = t("./reader/readerFor");
              var i = t("./utils");
              var n = t("./compressedObject");
              var c = t("./crc32");
              var d = t("./utf8");
              var p = t("./compressions");
              var m = t("./support");
              function b(f, v) {
                this.options = f;
                this.loadOptions = v;
              }
              b.prototype = {
                isEncrypted: function () {
                  return (this.bitFlag & 1) == 1;
                },
                useUTF8: function () {
                  return (this.bitFlag & 2048) == 2048;
                },
                readLocalPart: function (f) {
                  var v;
                  var h;
                  f.skip(22);
                  this.fileNameLength = f.readInt(2);
                  h = f.readInt(2);
                  this.fileName = f.readData(this.fileNameLength);
                  f.skip(h);
                  if (this.compressedSize === -1 || this.uncompressedSize === -1) {
                    throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                  }
                  if ((v = function (w) {
                    for (var g in p) {
                      if (Object.prototype.hasOwnProperty.call(p, g) && p[g].magic === w) {
                        return p[g];
                      }
                    }
                    return null;
                  }(this.compressionMethod)) === null) {
                    throw new Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
                  }
                  this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, v, f.readData(this.compressedSize));
                },
                readCentralPart: function (f) {
                  this.versionMadeBy = f.readInt(2);
                  f.skip(2);
                  this.bitFlag = f.readInt(2);
                  this.compressionMethod = f.readString(2);
                  this.date = f.readDate();
                  this.crc32 = f.readInt(4);
                  this.compressedSize = f.readInt(4);
                  this.uncompressedSize = f.readInt(4);
                  var v = f.readInt(2);
                  this.extraFieldsLength = f.readInt(2);
                  this.fileCommentLength = f.readInt(2);
                  this.diskNumberStart = f.readInt(2);
                  this.internalFileAttributes = f.readInt(2);
                  this.externalFileAttributes = f.readInt(4);
                  this.localHeaderOffset = f.readInt(4);
                  if (this.isEncrypted()) {
                    throw new Error("Encrypted zip are not supported");
                  }
                  f.skip(v);
                  this.readExtraFields(f);
                  this.parseZIP64ExtraField(f);
                  this.fileComment = f.readData(this.fileCommentLength);
                },
                processAttributes: function () {
                  this.unixPermissions = null;
                  this.dosPermissions = null;
                  var f = this.versionMadeBy >> 8;
                  this.dir = !!(this.externalFileAttributes & 16);
                  if (f == 0) {
                    this.dosPermissions = this.externalFileAttributes & 63;
                  }
                  if (f == 3) {
                    this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
                  }
                  if (!this.dir && this.fileNameStr.slice(-1) === "/") {
                    this.dir = true;
                  }
                },
                parseZIP64ExtraField: function () {
                  if (this.extraFields[1]) {
                    var f = r(this.extraFields[1].value);
                    if (this.uncompressedSize === i.MAX_VALUE_32BITS) {
                      this.uncompressedSize = f.readInt(8);
                    }
                    if (this.compressedSize === i.MAX_VALUE_32BITS) {
                      this.compressedSize = f.readInt(8);
                    }
                    if (this.localHeaderOffset === i.MAX_VALUE_32BITS) {
                      this.localHeaderOffset = f.readInt(8);
                    }
                    if (this.diskNumberStart === i.MAX_VALUE_32BITS) {
                      this.diskNumberStart = f.readInt(4);
                    }
                  }
                },
                readExtraFields: function (f) {
                  var v;
                  var h;
                  var w;
                  var g = f.index + this.extraFieldsLength;
                  for (this.extraFields ||= {}; f.index + 4 < g;) {
                    v = f.readInt(2);
                    h = f.readInt(2);
                    w = f.readData(h);
                    this.extraFields[v] = {
                      id: v,
                      length: h,
                      value: w
                    };
                  }
                  f.setIndex(g);
                },
                handleUTF8: function () {
                  var f = m.uint8array ? "uint8array" : "array";
                  if (this.useUTF8()) {
                    this.fileNameStr = d.utf8decode(this.fileName);
                    this.fileCommentStr = d.utf8decode(this.fileComment);
                  } else {
                    var v = this.findExtraFieldUnicodePath();
                    if (v !== null) {
                      this.fileNameStr = v;
                    } else {
                      var h = i.transformTo(f, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(h);
                    }
                    var w = this.findExtraFieldUnicodeComment();
                    if (w !== null) {
                      this.fileCommentStr = w;
                    } else {
                      var g = i.transformTo(f, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(g);
                    }
                  }
                },
                findExtraFieldUnicodePath: function () {
                  var f = this.extraFields[28789];
                  if (f) {
                    var v = r(f.value);
                    if (v.readInt(1) !== 1 || c(this.fileName) !== v.readInt(4)) {
                      return null;
                    } else {
                      return d.utf8decode(v.readData(f.length - 5));
                    }
                  }
                  return null;
                },
                findExtraFieldUnicodeComment: function () {
                  var f = this.extraFields[25461];
                  if (f) {
                    var v = r(f.value);
                    if (v.readInt(1) !== 1 || c(this.fileComment) !== v.readInt(4)) {
                      return null;
                    } else {
                      return d.utf8decode(v.readData(f.length - 5));
                    }
                  }
                  return null;
                }
              };
              o.exports = b;
            }, {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32
            }],
            35: [function (t, o, s) {
              function r(v, h, w) {
                this.name = v;
                this.dir = w.dir;
                this.date = w.date;
                this.comment = w.comment;
                this.unixPermissions = w.unixPermissions;
                this.dosPermissions = w.dosPermissions;
                this._data = h;
                this._dataBinary = w.binary;
                this.options = {
                  compression: w.compression,
                  compressionOptions: w.compressionOptions
                };
              }
              var i = t("./stream/StreamHelper");
              var n = t("./stream/DataWorker");
              var c = t("./utf8");
              var d = t("./compressedObject");
              var p = t("./stream/GenericWorker");
              r.prototype = {
                internalStream: function (v) {
                  var h = null;
                  var w = "string";
                  try {
                    if (!v) {
                      throw new Error("No output type specified.");
                    }
                    var g = (w = v.toLowerCase()) === "string" || w === "text";
                    if (w === "binarystring" || w === "text") {
                      w = "string";
                    }
                    h = this._decompressWorker();
                    var x = !this._dataBinary;
                    if (x && !g) {
                      h = h.pipe(new c.Utf8EncodeWorker());
                    }
                    if (!x && g) {
                      h = h.pipe(new c.Utf8DecodeWorker());
                    }
                  } catch (S) {
                    (h = new p("error")).error(S);
                  }
                  return new i(h, w, "");
                },
                async: function (v, h) {
                  return this.internalStream(v).accumulate(h);
                },
                nodeStream: function (v, h) {
                  return this.internalStream(v || "nodebuffer").toNodejsStream(h);
                },
                _compressWorker: function (v, h) {
                  if (this._data instanceof d && this._data.compression.magic === v.magic) {
                    return this._data.getCompressedWorker();
                  }
                  var w = this._decompressWorker();
                  if (!this._dataBinary) {
                    w = w.pipe(new c.Utf8EncodeWorker());
                  }
                  return d.createWorkerFrom(w, v, h);
                },
                _decompressWorker: function () {
                  if (this._data instanceof d) {
                    return this._data.getContentWorker();
                  } else if (this._data instanceof p) {
                    return this._data;
                  } else {
                    return new n(this._data);
                  }
                }
              };
              for (var m = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], b = function () {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, f = 0; f < m.length; f++) {
                r.prototype[m[f]] = b;
              }
              o.exports = r;
            }, {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31
            }],
            36: [function (t, o, s) {
              (function (r) {
                var i;
                var n;
                var c = r.MutationObserver || r.WebKitMutationObserver;
                if (c) {
                  var d = 0;
                  var p = new c(v);
                  var m = r.document.createTextNode("");
                  p.observe(m, {
                    characterData: true
                  });
                  i = function () {
                    m.data = d = ++d % 2;
                  };
                } else if (r.setImmediate || r.MessageChannel === undefined) {
                  i = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function () {
                    var h = r.document.createElement("script");
                    h.onreadystatechange = function () {
                      v();
                      h.onreadystatechange = null;
                      h.parentNode.removeChild(h);
                      h = null;
                    };
                    r.document.documentElement.appendChild(h);
                  } : function () {
                    setTimeout(v, 0);
                  };
                } else {
                  var b = new r.MessageChannel();
                  b.port1.onmessage = v;
                  i = function () {
                    b.port2.postMessage(0);
                  };
                }
                var f = [];
                function v() {
                  var h;
                  var w;
                  n = true;
                  for (var g = f.length; g;) {
                    w = f;
                    f = [];
                    h = -1;
                    while (++h < g) {
                      w[h]();
                    }
                    g = f.length;
                  }
                  n = false;
                }
                o.exports = function (h) {
                  if (f.push(h) === 1 && !n) {
                    i();
                  }
                };
              }).call(this, typeof ve !== "undefined" ? ve : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            }, {}],
            37: [function (t, o, s) {
              var r = t("immediate");
              function i() { }
              var n = {};
              var c = ["REJECTED"];
              var d = ["FULFILLED"];
              var p = ["PENDING"];
              function m(g) {
                if (typeof g != "function") {
                  throw new TypeError("resolver must be a function");
                }
                this.state = p;
                this.queue = [];
                this.outcome = undefined;
                if (g !== i) {
                  h(this, g);
                }
              }
              function b(g, x, S) {
                this.promise = g;
                if (typeof x == "function") {
                  this.onFulfilled = x;
                  this.callFulfilled = this.otherCallFulfilled;
                }
                if (typeof S == "function") {
                  this.onRejected = S;
                  this.callRejected = this.otherCallRejected;
                }
              }
              function f(g, x, S) {
                r(function () {
                  var A;
                  try {
                    A = x(S);
                  } catch (C) {
                    return n.reject(g, C);
                  }
                  if (A === g) {
                    n.reject(g, new TypeError("Cannot resolve promise with itself"));
                  } else {
                    n.resolve(g, A);
                  }
                });
              }
              function v(g) {
                var x = g && g.then;
                if (g && (typeof g == "object" || typeof g == "function") && typeof x == "function") {
                  return function () {
                    x.apply(g, arguments);
                  };
                }
              }
              function h(g, x) {
                var S = false;
                function A(O) {
                  if (!S) {
                    S = true;
                    n.reject(g, O);
                  }
                }
                function C(O) {
                  if (!S) {
                    S = true;
                    n.resolve(g, O);
                  }
                }
                var D = w(function () {
                  x(C, A);
                });
                if (D.status === "error") {
                  A(D.value);
                }
              }
              function w(g, x) {
                var S = {};
                try {
                  S.value = g(x);
                  S.status = "success";
                } catch (A) {
                  S.status = "error";
                  S.value = A;
                }
                return S;
              }
              (o.exports = m).prototype.finally = function (g) {
                if (typeof g != "function") {
                  return this;
                }
                var x = this.constructor;
                return this.then(function (S) {
                  return x.resolve(g()).then(function () {
                    return S;
                  });
                }, function (S) {
                  return x.resolve(g()).then(function () {
                    throw S;
                  });
                });
              };
              m.prototype.catch = function (g) {
                return this.then(null, g);
              };
              m.prototype.then = function (g, x) {
                if (typeof g != "function" && this.state === d || typeof x != "function" && this.state === c) {
                  return this;
                }
                var S = new this.constructor(i);
                if (this.state !== p) {
                  f(S, this.state === d ? g : x, this.outcome);
                } else {
                  this.queue.push(new b(S, g, x));
                }
                return S;
              };
              b.prototype.callFulfilled = function (g) {
                n.resolve(this.promise, g);
              };
              b.prototype.otherCallFulfilled = function (g) {
                f(this.promise, this.onFulfilled, g);
              };
              b.prototype.callRejected = function (g) {
                n.reject(this.promise, g);
              };
              b.prototype.otherCallRejected = function (g) {
                f(this.promise, this.onRejected, g);
              };
              n.resolve = function (g, x) {
                var S = w(v, x);
                if (S.status === "error") {
                  return n.reject(g, S.value);
                }
                var A = S.value;
                if (A) {
                  h(g, A);
                } else {
                  g.state = d;
                  g.outcome = x;
                  for (var C = -1, D = g.queue.length; ++C < D;) {
                    g.queue[C].callFulfilled(x);
                  }
                }
                return g;
              };
              n.reject = function (g, x) {
                g.state = c;
                g.outcome = x;
                for (var S = -1, A = g.queue.length; ++S < A;) {
                  g.queue[S].callRejected(x);
                }
                return g;
              };
              m.resolve = function (g) {
                if (g instanceof this) {
                  return g;
                } else {
                  return n.resolve(new this(i), g);
                }
              };
              m.reject = function (g) {
                var x = new this(i);
                return n.reject(x, g);
              };
              m.all = function (g) {
                var x = this;
                if (Object.prototype.toString.call(g) !== "[object Array]") {
                  return this.reject(new TypeError("must be an array"));
                }
                var S = g.length;
                var A = false;
                if (!S) {
                  return this.resolve([]);
                }
                var C = new Array(S);
                var D = 0;
                for (var O = -1, P = new this(i); ++O < S;) {
                  T(g[O], O);
                }
                return P;
                function T(q, Y) {
                  x.resolve(q).then(function (k) {
                    C[Y] = k;
                    if (++D === S && !A) {
                      A = true;
                      n.resolve(P, C);
                    }
                  }, function (k) {
                    if (!A) {
                      A = true;
                      n.reject(P, k);
                    }
                  });
                }
              };
              m.race = function (g) {
                var x = this;
                if (Object.prototype.toString.call(g) !== "[object Array]") {
                  return this.reject(new TypeError("must be an array"));
                }
                var S = g.length;
                var A = false;
                if (!S) {
                  return this.resolve([]);
                }
                for (var C = -1, D = new this(i); ++C < S;) {
                  O = g[C];
                  x.resolve(O).then(function (P) {
                    if (!A) {
                      A = true;
                      n.resolve(D, P);
                    }
                  }, function (P) {
                    if (!A) {
                      A = true;
                      n.reject(D, P);
                    }
                  });
                }
                var O;
                return D;
              };
            }, {
              immediate: 36
            }],
            38: [function (t, o, s) {
              var r = {};
              (0, t("./lib/utils/common").assign)(r, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants"));
              o.exports = r;
            }, {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44
            }],
            39: [function (t, o, s) {
              var r = t("./zlib/deflate");
              var i = t("./utils/common");
              var n = t("./utils/strings");
              var c = t("./zlib/messages");
              var d = t("./zlib/zstream");
              var p = Object.prototype.toString;
              var m = 0;
              var b = -1;
              var f = 0;
              var v = 8;
              function h(g) {
                if (!(this instanceof h)) {
                  return new h(g);
                }
                this.options = i.assign({
                  level: b,
                  method: v,
                  chunkSize: 16384,
                  windowBits: 15,
                  memLevel: 8,
                  strategy: f,
                  to: ""
                }, g || {});
                var x = this.options;
                if (x.raw && x.windowBits > 0) {
                  x.windowBits = -x.windowBits;
                } else if (x.gzip && x.windowBits > 0 && x.windowBits < 16) {
                  x.windowBits += 16;
                }
                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new d();
                this.strm.avail_out = 0;
                var S = r.deflateInit2(this.strm, x.level, x.method, x.windowBits, x.memLevel, x.strategy);
                if (S !== m) {
                  throw new Error(c[S]);
                }
                if (x.header) {
                  r.deflateSetHeader(this.strm, x.header);
                }
                if (x.dictionary) {
                  var A;
                  A = typeof x.dictionary == "string" ? n.string2buf(x.dictionary) : p.call(x.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(x.dictionary) : x.dictionary;
                  if ((S = r.deflateSetDictionary(this.strm, A)) !== m) {
                    throw new Error(c[S]);
                  }
                  this._dict_set = true;
                }
              }
              function w(g, x) {
                var S = new h(x);
                S.push(g, true);
                if (S.err) {
                  throw S.msg || c[S.err];
                }
                return S.result;
              }
              h.prototype.push = function (g, x) {
                var S;
                var A;
                var C = this.strm;
                var D = this.options.chunkSize;
                if (this.ended) {
                  return false;
                }
                A = x === ~~x ? x : x === true ? 4 : 0;
                if (typeof g == "string") {
                  C.input = n.string2buf(g);
                } else if (p.call(g) === "[object ArrayBuffer]") {
                  C.input = new Uint8Array(g);
                } else {
                  C.input = g;
                }
                C.next_in = 0;
                C.avail_in = C.input.length;
                do {
                  if (C.avail_out === 0) {
                    C.output = new i.Buf8(D);
                    C.next_out = 0;
                    C.avail_out = D;
                  }
                  if ((S = r.deflate(C, A)) !== 1 && S !== m) {
                    this.onEnd(S);
                    return !(this.ended = true);
                  }
                  if (C.avail_out === 0 || C.avail_in === 0 && (A === 4 || A === 2)) {
                    if (this.options.to === "string") {
                      this.onData(n.buf2binstring(i.shrinkBuf(C.output, C.next_out)));
                    } else {
                      this.onData(i.shrinkBuf(C.output, C.next_out));
                    }
                  }
                } while ((C.avail_in > 0 || C.avail_out === 0) && S !== 1);
                if (A === 4) {
                  S = r.deflateEnd(this.strm);
                  this.onEnd(S);
                  this.ended = true;
                  return S === m;
                } else {
                  return A !== 2 || (this.onEnd(m), !(C.avail_out = 0));
                }
              };
              h.prototype.onData = function (g) {
                this.chunks.push(g);
              };
              h.prototype.onEnd = function (g) {
                if (g === m) {
                  if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                  } else {
                    this.result = i.flattenChunks(this.chunks);
                  }
                }
                this.chunks = [];
                this.err = g;
                this.msg = this.strm.msg;
              };
              s.Deflate = h;
              s.deflate = w;
              s.deflateRaw = function (g, x) {
                (x = x || {}).raw = true;
                return w(g, x);
              };
              s.gzip = function (g, x) {
                (x = x || {}).gzip = true;
                return w(g, x);
              };
            }, {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
            }],
            40: [function (t, o, s) {
              var r = t("./zlib/inflate");
              var i = t("./utils/common");
              var n = t("./utils/strings");
              var c = t("./zlib/constants");
              var d = t("./zlib/messages");
              var p = t("./zlib/zstream");
              var m = t("./zlib/gzheader");
              var b = Object.prototype.toString;
              function f(h) {
                if (!(this instanceof f)) {
                  return new f(h);
                }
                this.options = i.assign({
                  chunkSize: 16384,
                  windowBits: 0,
                  to: ""
                }, h || {});
                var w = this.options;
                if (w.raw && w.windowBits >= 0 && w.windowBits < 16) {
                  w.windowBits = -w.windowBits;
                  if (w.windowBits === 0) {
                    w.windowBits = -15;
                  }
                }
                if (!!(w.windowBits >= 0) && !!(w.windowBits < 16) && (!h || !h.windowBits)) {
                  w.windowBits += 32;
                }
                if (w.windowBits > 15 && w.windowBits < 48 && (w.windowBits & 15) == 0) {
                  w.windowBits |= 15;
                }
                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new p();
                this.strm.avail_out = 0;
                var g = r.inflateInit2(this.strm, w.windowBits);
                if (g !== c.Z_OK) {
                  throw new Error(d[g]);
                }
                this.header = new m();
                r.inflateGetHeader(this.strm, this.header);
              }
              function v(h, w) {
                var g = new f(w);
                g.push(h, true);
                if (g.err) {
                  throw g.msg || d[g.err];
                }
                return g.result;
              }
              f.prototype.push = function (h, w) {
                var g;
                var x;
                var S;
                var A;
                var C;
                var D;
                var O = this.strm;
                var P = this.options.chunkSize;
                var T = this.options.dictionary;
                var q = false;
                if (this.ended) {
                  return false;
                }
                x = w === ~~w ? w : w === true ? c.Z_FINISH : c.Z_NO_FLUSH;
                if (typeof h == "string") {
                  O.input = n.binstring2buf(h);
                } else if (b.call(h) === "[object ArrayBuffer]") {
                  O.input = new Uint8Array(h);
                } else {
                  O.input = h;
                }
                O.next_in = 0;
                O.avail_in = O.input.length;
                do {
                  if (O.avail_out === 0) {
                    O.output = new i.Buf8(P);
                    O.next_out = 0;
                    O.avail_out = P;
                  }
                  if ((g = r.inflate(O, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && T) {
                    D = typeof T == "string" ? n.string2buf(T) : b.call(T) === "[object ArrayBuffer]" ? new Uint8Array(T) : T;
                    g = r.inflateSetDictionary(this.strm, D);
                  }
                  if (g === c.Z_BUF_ERROR && q === true) {
                    g = c.Z_OK;
                    q = false;
                  }
                  if (g !== c.Z_STREAM_END && g !== c.Z_OK) {
                    this.onEnd(g);
                    return !(this.ended = true);
                  }
                  if (O.next_out) {
                    if (O.avail_out === 0 || g === c.Z_STREAM_END || O.avail_in === 0 && (x === c.Z_FINISH || x === c.Z_SYNC_FLUSH)) {
                      if (this.options.to === "string") {
                        S = n.utf8border(O.output, O.next_out);
                        A = O.next_out - S;
                        C = n.buf2string(O.output, S);
                        O.next_out = A;
                        O.avail_out = P - A;
                        if (A) {
                          i.arraySet(O.output, O.output, S, A, 0);
                        }
                        this.onData(C);
                      } else {
                        this.onData(i.shrinkBuf(O.output, O.next_out));
                      }
                    }
                  }
                  if (O.avail_in === 0 && O.avail_out === 0) {
                    q = true;
                  }
                } while ((O.avail_in > 0 || O.avail_out === 0) && g !== c.Z_STREAM_END);
                if (g === c.Z_STREAM_END) {
                  x = c.Z_FINISH;
                }
                if (x === c.Z_FINISH) {
                  g = r.inflateEnd(this.strm);
                  this.onEnd(g);
                  this.ended = true;
                  return g === c.Z_OK;
                } else {
                  return x !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(O.avail_out = 0));
                }
              };
              f.prototype.onData = function (h) {
                this.chunks.push(h);
              };
              f.prototype.onEnd = function (h) {
                if (h === c.Z_OK) {
                  if (this.options.to === "string") {
                    this.result = this.chunks.join("");
                  } else {
                    this.result = i.flattenChunks(this.chunks);
                  }
                }
                this.chunks = [];
                this.err = h;
                this.msg = this.strm.msg;
              };
              s.Inflate = f;
              s.inflate = v;
              s.inflateRaw = function (h, w) {
                (w = w || {}).raw = true;
                return v(h, w);
              };
              s.ungzip = v;
            }, {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
            }],
            41: [function (t, o, s) {
              var r = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
              s.assign = function (c) {
                for (var d = Array.prototype.slice.call(arguments, 1); d.length;) {
                  var p = d.shift();
                  if (p) {
                    if (typeof p != "object") {
                      throw new TypeError(p + "must be non-object");
                    }
                    for (var m in p) {
                      if (p.hasOwnProperty(m)) {
                        c[m] = p[m];
                      }
                    }
                  }
                }
                return c;
              };
              s.shrinkBuf = function (c, d) {
                if (c.length === d) {
                  return c;
                } else if (c.subarray) {
                  return c.subarray(0, d);
                } else {
                  c.length = d;
                  return c;
                }
              };
              var i = {
                arraySet: function (c, d, p, m, b) {
                  if (d.subarray && c.subarray) {
                    c.set(d.subarray(p, p + m), b);
                  } else {
                    for (var f = 0; f < m; f++) {
                      c[b + f] = d[p + f];
                    }
                  }
                },
                flattenChunks: function (c) {
                  var d;
                  var p;
                  var m;
                  var b;
                  var f;
                  var v;
                  d = m = 0;
                  p = c.length;
                  for (; d < p; d++) {
                    m += c[d].length;
                  }
                  v = new Uint8Array(m);
                  d = b = 0;
                  p = c.length;
                  for (; d < p; d++) {
                    f = c[d];
                    v.set(f, b);
                    b += f.length;
                  }
                  return v;
                }
              };
              var n = {
                arraySet: function (c, d, p, m, b) {
                  for (var f = 0; f < m; f++) {
                    c[b + f] = d[p + f];
                  }
                },
                flattenChunks: function (c) {
                  return [].concat.apply([], c);
                }
              };
              s.setTyped = function (c) {
                if (c) {
                  s.Buf8 = Uint8Array;
                  s.Buf16 = Uint16Array;
                  s.Buf32 = Int32Array;
                  s.assign(s, i);
                } else {
                  s.Buf8 = Array;
                  s.Buf16 = Array;
                  s.Buf32 = Array;
                  s.assign(s, n);
                }
              };
              s.setTyped(r);
            }, {}],
            42: [function (t, o, s) {
              var r = t("./common");
              var i = true;
              var n = true;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch {
                i = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch {
                n = false;
              }
              var c = new r.Buf8(256);
              for (var d = 0; d < 256; d++) {
                c[d] = d >= 252 ? 6 : d >= 248 ? 5 : d >= 240 ? 4 : d >= 224 ? 3 : d >= 192 ? 2 : 1;
              }
              function p(m, b) {
                if (b < 65537 && (m.subarray && n || !m.subarray && i)) {
                  return String.fromCharCode.apply(null, r.shrinkBuf(m, b));
                }
                var f = "";
                for (var v = 0; v < b; v++) {
                  f += String.fromCharCode(m[v]);
                }
                return f;
              }
              c[254] = c[254] = 1;
              s.string2buf = function (m) {
                var b;
                var f;
                var v;
                var h;
                var w;
                var g = m.length;
                var x = 0;
                for (h = 0; h < g; h++) {
                  if (((f = m.charCodeAt(h)) & 64512) == 55296 && h + 1 < g && ((v = m.charCodeAt(h + 1)) & 64512) == 56320) {
                    f = 65536 + (f - 55296 << 10) + (v - 56320);
                    h++;
                  }
                  x += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
                }
                b = new r.Buf8(x);
                h = w = 0;
                for (; w < x; h++) {
                  if (((f = m.charCodeAt(h)) & 64512) == 55296 && h + 1 < g && ((v = m.charCodeAt(h + 1)) & 64512) == 56320) {
                    f = 65536 + (f - 55296 << 10) + (v - 56320);
                    h++;
                  }
                  if (f < 128) {
                    b[w++] = f;
                  } else {
                    if (f < 2048) {
                      b[w++] = f >>> 6 | 192;
                    } else {
                      if (f < 65536) {
                        b[w++] = f >>> 12 | 224;
                      } else {
                        b[w++] = f >>> 18 | 240;
                        b[w++] = f >>> 12 & 63 | 128;
                      }
                      b[w++] = f >>> 6 & 63 | 128;
                    }
                    b[w++] = f & 63 | 128;
                  }
                }
                return b;
              };
              s.buf2binstring = function (m) {
                return p(m, m.length);
              };
              s.binstring2buf = function (m) {
                var b = new r.Buf8(m.length);
                for (var f = 0, v = b.length; f < v; f++) {
                  b[f] = m.charCodeAt(f);
                }
                return b;
              };
              s.buf2string = function (m, b) {
                var f;
                var v;
                var h;
                var w;
                var g = b || m.length;
                var x = new Array(g * 2);
                for (f = v = 0; f < g;) {
                  if ((h = m[f++]) < 128) {
                    x[v++] = h;
                  } else if ((w = c[h]) > 4) {
                    x[v++] = 65533;
                    f += w - 1;
                  } else {
                    for (h &= w === 2 ? 31 : w === 3 ? 15 : 7; w > 1 && f < g;) {
                      h = h << 6 | m[f++] & 63;
                      w--;
                    }
                    if (w > 1) {
                      x[v++] = 65533;
                    } else if (h < 65536) {
                      x[v++] = h;
                    } else {
                      h -= 65536;
                      x[v++] = h >> 10 & 1023 | 55296;
                      x[v++] = h & 1023 | 56320;
                    }
                  }
                }
                return p(x, v);
              };
              s.utf8border = function (m, b) {
                var f;
                if ((b = b || m.length) > m.length) {
                  b = m.length;
                }
                f = b - 1;
                while (f >= 0 && (m[f] & 192) == 128) {
                  f--;
                }
                if (f < 0 || f === 0) {
                  return b;
                } else if (f + c[m[f]] > b) {
                  return f;
                } else {
                  return b;
                }
              };
            }, {
              "./common": 41
            }],
            43: [function (t, o, s) {
              o.exports = function (r, i, n, c) {
                var d = r & 65535 | 0;
                var p = r >>> 16 & 65535 | 0;
                var m = 0;
                while (n !== 0) {
                  for (n -= m = n > 2000 ? 2000 : n; p = p + (d = d + i[c++] | 0) | 0, --m;);
                  d %= 65521;
                  p %= 65521;
                }
                return d | p << 16 | 0;
              };
            }, {}],
            44: [function (t, o, s) {
              o.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
              };
            }, {}],
            45: [function (t, o, s) {
              var r = function () {
                var i;
                var n = [];
                for (var c = 0; c < 256; c++) {
                  i = c;
                  for (var d = 0; d < 8; d++) {
                    i = i & 1 ? i >>> 1 ^ 3988292384 : i >>> 1;
                  }
                  n[c] = i;
                }
                return n;
              }();
              o.exports = function (i, n, c, d) {
                var p = r;
                var m = d + c;
                i ^= -1;
                for (var b = d; b < m; b++) {
                  i = i >>> 8 ^ p[(i ^ n[b]) & 255];
                }
                return i ^ -1;
              };
            }, {}],
            46: [function (t, o, s) {
              var r;
              var i = t("../utils/common");
              var n = t("./trees");
              var c = t("./adler32");
              var d = t("./crc32");
              var p = t("./messages");
              var m = 0;
              var b = 4;
              var f = 0;
              var v = -2;
              var h = -1;
              var w = 4;
              var g = 2;
              var x = 8;
              var S = 9;
              var A = 286;
              var C = 30;
              var D = 19;
              var O = A * 2 + 1;
              var P = 15;
              var T = 3;
              var q = 258;
              var Y = q + T + 1;
              var k = 42;
              var B = 113;
              var u = 1;
              var R = 2;
              var tt = 3;
              var j = 4;
              function et(l, N) {
                l.msg = p[N];
                return N;
              }
              function U(l) {
                return (l << 1) - (l > 4 ? 9 : 0);
              }
              function J(l) {
                for (var N = l.length; --N >= 0;) {
                  l[N] = 0;
                }
              }
              function L(l) {
                var N = l.state;
                var $ = N.pending;
                if ($ > l.avail_out) {
                  $ = l.avail_out;
                }
                if ($ !== 0) {
                  i.arraySet(l.output, N.pending_buf, N.pending_out, $, l.next_out);
                  l.next_out += $;
                  N.pending_out += $;
                  l.total_out += $;
                  l.avail_out -= $;
                  N.pending -= $;
                  if (N.pending === 0) {
                    N.pending_out = 0;
                  }
                }
              }
              function I(l, N) {
                n._tr_flush_block(l, l.block_start >= 0 ? l.block_start : -1, l.strstart - l.block_start, N);
                l.block_start = l.strstart;
                L(l.strm);
              }
              function X(l, N) {
                l.pending_buf[l.pending++] = N;
              }
              function G(l, N) {
                l.pending_buf[l.pending++] = N >>> 8 & 255;
                l.pending_buf[l.pending++] = N & 255;
              }
              function Z(l, N) {
                var $;
                var _;
                var y = l.max_chain_length;
                var E = l.strstart;
                var M = l.prev_length;
                var F = l.nice_match;
                var z = l.strstart > l.w_size - Y ? l.strstart - (l.w_size - Y) : 0;
                var W = l.window;
                var V = l.w_mask;
                var H = l.prev;
                var K = l.strstart + q;
                var st = W[E + M - 1];
                var nt = W[E + M];
                if (l.prev_length >= l.good_match) {
                  y >>= 2;
                }
                if (F > l.lookahead) {
                  F = l.lookahead;
                }
                do {
                  if (W[($ = N) + M] === nt && W[$ + M - 1] === st && W[$] === W[E] && W[++$] === W[E + 1]) {
                    E += 2;
                    $++;
                    do; while (W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && W[++E] === W[++$] && E < K);
                    _ = q - (K - E);
                    E = K - q;
                    if (M < _) {
                      l.match_start = N;
                      if (F <= (M = _)) {
                        break;
                      }
                      st = W[E + M - 1];
                      nt = W[E + M];
                    }
                  }
                } while ((N = H[N & V]) > z && --y != 0);
                if (M <= l.lookahead) {
                  return M;
                } else {
                  return l.lookahead;
                }
              }
              function lt(l) {
                var N;
                var $;
                var _;
                var y;
                var E;
                var M;
                var F;
                var z;
                var W;
                var V;
                var H = l.w_size;
                do {
                  y = l.window_size - l.lookahead - l.strstart;
                  if (l.strstart >= H + (H - Y)) {
                    i.arraySet(l.window, l.window, H, H, 0);
                    l.match_start -= H;
                    l.strstart -= H;
                    l.block_start -= H;
                    N = $ = l.hash_size;
                    while (_ = l.head[--N], l.head[N] = H <= _ ? _ - H : 0, --$);
                    for (N = $ = H; _ = l.prev[--N], l.prev[N] = H <= _ ? _ - H : 0, --$;);
                    y += H;
                  }
                  if (l.strm.avail_in === 0) {
                    break;
                  }
                  M = l.strm;
                  F = l.window;
                  z = l.strstart + l.lookahead;
                  W = y;
                  V = undefined;
                  V = M.avail_in;
                  if (W < V) {
                    V = W;
                  }
                  $ = V === 0 ? 0 : (M.avail_in -= V, i.arraySet(F, M.input, M.next_in, V, z), M.state.wrap === 1 ? M.adler = c(M.adler, F, V, z) : M.state.wrap === 2 && (M.adler = d(M.adler, F, V, z)), M.next_in += V, M.total_in += V, V);
                  l.lookahead += $;
                  if (l.lookahead + l.insert >= T) {
                    E = l.strstart - l.insert;
                    l.ins_h = l.window[E];
                    l.ins_h = (l.ins_h << l.hash_shift ^ l.window[E + 1]) & l.hash_mask;
                    while (l.insert && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[E + T - 1]) & l.hash_mask, l.prev[E & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = E, E++, l.insert--, !(l.lookahead + l.insert < T)));
                  }
                } while (l.lookahead < Y && l.strm.avail_in !== 0);
              }
              function ht(l, N) {
                var $;
                var _;
                while (true) {
                  if (l.lookahead < Y) {
                    lt(l);
                    if (l.lookahead < Y && N === m) {
                      return u;
                    }
                    if (l.lookahead === 0) {
                      break;
                    }
                  }
                  $ = 0;
                  if (l.lookahead >= T) {
                    l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + T - 1]) & l.hash_mask;
                    $ = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h];
                    l.head[l.ins_h] = l.strstart;
                  }
                  if ($ !== 0 && l.strstart - $ <= l.w_size - Y) {
                    l.match_length = Z(l, $);
                  }
                  if (l.match_length >= T) {
                    _ = n._tr_tally(l, l.strstart - l.match_start, l.match_length - T);
                    l.lookahead -= l.match_length;
                    if (l.match_length <= l.max_lazy_match && l.lookahead >= T) {
                      for (l.match_length--; l.strstart++, l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + T - 1]) & l.hash_mask, $ = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart, --l.match_length != 0;);
                      l.strstart++;
                    } else {
                      l.strstart += l.match_length;
                      l.match_length = 0;
                      l.ins_h = l.window[l.strstart];
                      l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + 1]) & l.hash_mask;
                    }
                  } else {
                    _ = n._tr_tally(l, 0, l.window[l.strstart]);
                    l.lookahead--;
                    l.strstart++;
                  }
                  if (_ && (I(l, false), l.strm.avail_out === 0)) {
                    return u;
                  }
                }
                l.insert = l.strstart < T - 1 ? l.strstart : T - 1;
                if (N === b) {
                  I(l, true);
                  if (l.strm.avail_out === 0) {
                    return tt;
                  } else {
                    return j;
                  }
                } else if (l.last_lit && (I(l, false), l.strm.avail_out === 0)) {
                  return u;
                } else {
                  return R;
                }
              }
              function rt(l, N) {
                var $;
                var _;
                var y;
                while (true) {
                  if (l.lookahead < Y) {
                    lt(l);
                    if (l.lookahead < Y && N === m) {
                      return u;
                    }
                    if (l.lookahead === 0) {
                      break;
                    }
                  }
                  $ = 0;
                  if (l.lookahead >= T) {
                    l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + T - 1]) & l.hash_mask;
                    $ = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h];
                    l.head[l.ins_h] = l.strstart;
                  }
                  l.prev_length = l.match_length;
                  l.prev_match = l.match_start;
                  l.match_length = T - 1;
                  if ($ !== 0 && l.prev_length < l.max_lazy_match && l.strstart - $ <= l.w_size - Y) {
                    l.match_length = Z(l, $);
                    if (l.match_length <= 5 && (l.strategy === 1 || l.match_length === T && l.strstart - l.match_start > 4096)) {
                      l.match_length = T - 1;
                    }
                  }
                  if (l.prev_length >= T && l.match_length <= l.prev_length) {
                    y = l.strstart + l.lookahead - T;
                    _ = n._tr_tally(l, l.strstart - 1 - l.prev_match, l.prev_length - T);
                    l.lookahead -= l.prev_length - 1;
                    l.prev_length -= 2;
                    while (++l.strstart <= y && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + T - 1]) & l.hash_mask, $ = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), --l.prev_length != 0);
                    l.match_available = 0;
                    l.match_length = T - 1;
                    l.strstart++;
                    if (_ && (I(l, false), l.strm.avail_out === 0)) {
                      return u;
                    }
                  } else if (l.match_available) {
                    if (_ = n._tr_tally(l, 0, l.window[l.strstart - 1])) {
                      I(l, false);
                    }
                    l.strstart++;
                    l.lookahead--;
                    if (l.strm.avail_out === 0) {
                      return u;
                    }
                  } else {
                    l.match_available = 1;
                    l.strstart++;
                    l.lookahead--;
                  }
                }
                if (l.match_available) {
                  _ = n._tr_tally(l, 0, l.window[l.strstart - 1]);
                  l.match_available = 0;
                }
                l.insert = l.strstart < T - 1 ? l.strstart : T - 1;
                if (N === b) {
                  I(l, true);
                  if (l.strm.avail_out === 0) {
                    return tt;
                  } else {
                    return j;
                  }
                } else if (l.last_lit && (I(l, false), l.strm.avail_out === 0)) {
                  return u;
                } else {
                  return R;
                }
              }
              function it(l, N, $, _, y) {
                this.good_length = l;
                this.max_lazy = N;
                this.nice_length = $;
                this.max_chain = _;
                this.func = y;
              }
              function ut() {
                this.strm = null;
                this.status = 0;
                this.pending_buf = null;
                this.pending_buf_size = 0;
                this.pending_out = 0;
                this.pending = 0;
                this.wrap = 0;
                this.gzhead = null;
                this.gzindex = 0;
                this.method = x;
                this.last_flush = -1;
                this.w_size = 0;
                this.w_bits = 0;
                this.w_mask = 0;
                this.window = null;
                this.window_size = 0;
                this.prev = null;
                this.head = null;
                this.ins_h = 0;
                this.hash_size = 0;
                this.hash_bits = 0;
                this.hash_mask = 0;
                this.hash_shift = 0;
                this.block_start = 0;
                this.match_length = 0;
                this.prev_match = 0;
                this.match_available = 0;
                this.strstart = 0;
                this.match_start = 0;
                this.lookahead = 0;
                this.prev_length = 0;
                this.max_chain_length = 0;
                this.max_lazy_match = 0;
                this.level = 0;
                this.strategy = 0;
                this.good_match = 0;
                this.nice_match = 0;
                this.dyn_ltree = new i.Buf16(O * 2);
                this.dyn_dtree = new i.Buf16((C * 2 + 1) * 2);
                this.bl_tree = new i.Buf16((D * 2 + 1) * 2);
                J(this.dyn_ltree);
                J(this.dyn_dtree);
                J(this.bl_tree);
                this.l_desc = null;
                this.d_desc = null;
                this.bl_desc = null;
                this.bl_count = new i.Buf16(P + 1);
                this.heap = new i.Buf16(A * 2 + 1);
                J(this.heap);
                this.heap_len = 0;
                this.heap_max = 0;
                this.depth = new i.Buf16(A * 2 + 1);
                J(this.depth);
                this.l_buf = 0;
                this.lit_bufsize = 0;
                this.last_lit = 0;
                this.d_buf = 0;
                this.opt_len = 0;
                this.static_len = 0;
                this.matches = 0;
                this.insert = 0;
                this.bi_buf = 0;
                this.bi_valid = 0;
              }
              function ct(l) {
                var N;
                if (l && l.state) {
                  l.total_in = l.total_out = 0;
                  l.data_type = g;
                  (N = l.state).pending = 0;
                  N.pending_out = 0;
                  if (N.wrap < 0) {
                    N.wrap = -N.wrap;
                  }
                  N.status = N.wrap ? k : B;
                  l.adler = N.wrap === 2 ? 0 : 1;
                  N.last_flush = m;
                  n._tr_init(N);
                  return f;
                } else {
                  return et(l, v);
                }
              }
              function kt(l) {
                var N = ct(l);
                if (N === f) {
                  (function ($) {
                    $.window_size = $.w_size * 2;
                    J($.head);
                    $.max_lazy_match = r[$.level].max_lazy;
                    $.good_match = r[$.level].good_length;
                    $.nice_match = r[$.level].nice_length;
                    $.max_chain_length = r[$.level].max_chain;
                    $.strstart = 0;
                    $.block_start = 0;
                    $.lookahead = 0;
                    $.insert = 0;
                    $.match_length = $.prev_length = T - 1;
                    $.match_available = 0;
                    $.ins_h = 0;
                  })(l.state);
                }
                return N;
              }
              function _t(l, N, $, _, y, E) {
                if (!l) {
                  return v;
                }
                var M = 1;
                if (N === h) {
                  N = 6;
                }
                if (_ < 0) {
                  M = 0;
                  _ = -_;
                } else if (_ > 15) {
                  M = 2;
                  _ -= 16;
                }
                if (y < 1 || S < y || $ !== x || _ < 8 || _ > 15 || N < 0 || N > 9 || E < 0 || w < E) {
                  return et(l, v);
                }
                if (_ === 8) {
                  _ = 9;
                }
                var F = new ut();
                (l.state = F).strm = l;
                F.wrap = M;
                F.gzhead = null;
                F.w_bits = _;
                F.w_size = 1 << F.w_bits;
                F.w_mask = F.w_size - 1;
                F.hash_bits = y + 7;
                F.hash_size = 1 << F.hash_bits;
                F.hash_mask = F.hash_size - 1;
                F.hash_shift = ~~((F.hash_bits + T - 1) / T);
                F.window = new i.Buf8(F.w_size * 2);
                F.head = new i.Buf16(F.hash_size);
                F.prev = new i.Buf16(F.w_size);
                F.lit_bufsize = 1 << y + 6;
                F.pending_buf_size = F.lit_bufsize * 4;
                F.pending_buf = new i.Buf8(F.pending_buf_size);
                F.d_buf = F.lit_bufsize * 1;
                F.l_buf = F.lit_bufsize * 3;
                F.level = N;
                F.strategy = E;
                F.method = $;
                return kt(l);
              }
              r = [new it(0, 0, 0, 0, function (l, N) {
                var $ = 65535;
                for ($ > l.pending_buf_size - 5 && ($ = l.pending_buf_size - 5); ;) {
                  if (l.lookahead <= 1) {
                    lt(l);
                    if (l.lookahead === 0 && N === m) {
                      return u;
                    }
                    if (l.lookahead === 0) {
                      break;
                    }
                  }
                  l.strstart += l.lookahead;
                  l.lookahead = 0;
                  var _ = l.block_start + $;
                  if ((l.strstart === 0 || l.strstart >= _) && (l.lookahead = l.strstart - _, l.strstart = _, I(l, false), l.strm.avail_out === 0) || l.strstart - l.block_start >= l.w_size - Y && (I(l, false), l.strm.avail_out === 0)) {
                    return u;
                  }
                }
                l.insert = 0;
                if (N === b) {
                  I(l, true);
                  if (l.strm.avail_out === 0) {
                    return tt;
                  } else {
                    return j;
                  }
                } else {
                  if (l.strstart > l.block_start) {
                    I(l, false);
                    l.strm.avail_out;
                  }
                  return u;
                }
              }), new it(4, 4, 8, 4, ht), new it(4, 5, 16, 8, ht), new it(4, 6, 32, 32, ht), new it(4, 4, 16, 16, rt), new it(8, 16, 32, 32, rt), new it(8, 16, 128, 128, rt), new it(8, 32, 128, 256, rt), new it(32, 128, 258, 1024, rt), new it(32, 258, 258, 4096, rt)];
              s.deflateInit = function (l, N) {
                return _t(l, N, x, 15, 8, 0);
              };
              s.deflateInit2 = _t;
              s.deflateReset = kt;
              s.deflateResetKeep = ct;
              s.deflateSetHeader = function (l, N) {
                if (l && l.state) {
                  if (l.state.wrap !== 2) {
                    return v;
                  } else {
                    l.state.gzhead = N;
                    return f;
                  }
                } else {
                  return v;
                }
              };
              s.deflate = function (l, N) {
                var $;
                var _;
                var y;
                var E;
                if (!l || !l.state || N > 5 || N < 0) {
                  if (l) {
                    return et(l, v);
                  } else {
                    return v;
                  }
                }
                _ = l.state;
                if (!l.output || !l.input && l.avail_in !== 0 || _.status === 666 && N !== b) {
                  return et(l, l.avail_out === 0 ? -5 : v);
                }
                _.strm = l;
                $ = _.last_flush;
                _.last_flush = N;
                if (_.status === k) {
                  if (_.wrap === 2) {
                    l.adler = 0;
                    X(_, 31);
                    X(_, 139);
                    X(_, 8);
                    if (_.gzhead) {
                      X(_, (_.gzhead.text ? 1 : 0) + (_.gzhead.hcrc ? 2 : 0) + (_.gzhead.extra ? 4 : 0) + (_.gzhead.name ? 8 : 0) + (_.gzhead.comment ? 16 : 0));
                      X(_, _.gzhead.time & 255);
                      X(_, _.gzhead.time >> 8 & 255);
                      X(_, _.gzhead.time >> 16 & 255);
                      X(_, _.gzhead.time >> 24 & 255);
                      X(_, _.level === 9 ? 2 : _.strategy >= 2 || _.level < 2 ? 4 : 0);
                      X(_, _.gzhead.os & 255);
                      if (_.gzhead.extra && _.gzhead.extra.length) {
                        X(_, _.gzhead.extra.length & 255);
                        X(_, _.gzhead.extra.length >> 8 & 255);
                      }
                      if (_.gzhead.hcrc) {
                        l.adler = d(l.adler, _.pending_buf, _.pending, 0);
                      }
                      _.gzindex = 0;
                      _.status = 69;
                    } else {
                      X(_, 0);
                      X(_, 0);
                      X(_, 0);
                      X(_, 0);
                      X(_, 0);
                      X(_, _.level === 9 ? 2 : _.strategy >= 2 || _.level < 2 ? 4 : 0);
                      X(_, 3);
                      _.status = B;
                    }
                  } else {
                    var M = x + (_.w_bits - 8 << 4) << 8;
                    M |= (_.strategy >= 2 || _.level < 2 ? 0 : _.level < 6 ? 1 : _.level === 6 ? 2 : 3) << 6;
                    if (_.strstart !== 0) {
                      M |= 32;
                    }
                    M += 31 - M % 31;
                    _.status = B;
                    G(_, M);
                    if (_.strstart !== 0) {
                      G(_, l.adler >>> 16);
                      G(_, l.adler & 65535);
                    }
                    l.adler = 1;
                  }
                }
                if (_.status === 69) {
                  if (_.gzhead.extra) {
                    for (y = _.pending; _.gzindex < (_.gzhead.extra.length & 65535) && (_.pending !== _.pending_buf_size || (_.gzhead.hcrc && _.pending > y && (l.adler = d(l.adler, _.pending_buf, _.pending - y, y)), L(l), y = _.pending, _.pending !== _.pending_buf_size));) {
                      X(_, _.gzhead.extra[_.gzindex] & 255);
                      _.gzindex++;
                    }
                    if (_.gzhead.hcrc && _.pending > y) {
                      l.adler = d(l.adler, _.pending_buf, _.pending - y, y);
                    }
                    if (_.gzindex === _.gzhead.extra.length) {
                      _.gzindex = 0;
                      _.status = 73;
                    }
                  } else {
                    _.status = 73;
                  }
                }
                if (_.status === 73) {
                  if (_.gzhead.name) {
                    y = _.pending;
                    do {
                      if (_.pending === _.pending_buf_size && (_.gzhead.hcrc && _.pending > y && (l.adler = d(l.adler, _.pending_buf, _.pending - y, y)), L(l), y = _.pending, _.pending === _.pending_buf_size)) {
                        E = 1;
                        break;
                      }
                      E = _.gzindex < _.gzhead.name.length ? _.gzhead.name.charCodeAt(_.gzindex++) & 255 : 0;
                      X(_, E);
                    } while (E !== 0);
                    if (_.gzhead.hcrc && _.pending > y) {
                      l.adler = d(l.adler, _.pending_buf, _.pending - y, y);
                    }
                    if (E === 0) {
                      _.gzindex = 0;
                      _.status = 91;
                    }
                  } else {
                    _.status = 91;
                  }
                }
                if (_.status === 91) {
                  if (_.gzhead.comment) {
                    y = _.pending;
                    do {
                      if (_.pending === _.pending_buf_size && (_.gzhead.hcrc && _.pending > y && (l.adler = d(l.adler, _.pending_buf, _.pending - y, y)), L(l), y = _.pending, _.pending === _.pending_buf_size)) {
                        E = 1;
                        break;
                      }
                      E = _.gzindex < _.gzhead.comment.length ? _.gzhead.comment.charCodeAt(_.gzindex++) & 255 : 0;
                      X(_, E);
                    } while (E !== 0);
                    if (_.gzhead.hcrc && _.pending > y) {
                      l.adler = d(l.adler, _.pending_buf, _.pending - y, y);
                    }
                    if (E === 0) {
                      _.status = 103;
                    }
                  } else {
                    _.status = 103;
                  }
                }
                if (_.status === 103) {
                  if (_.gzhead.hcrc) {
                    if (_.pending + 2 > _.pending_buf_size) {
                      L(l);
                    }
                    if (_.pending + 2 <= _.pending_buf_size) {
                      X(_, l.adler & 255);
                      X(_, l.adler >> 8 & 255);
                      l.adler = 0;
                      _.status = B;
                    }
                  } else {
                    _.status = B;
                  }
                }
                if (_.pending !== 0) {
                  L(l);
                  if (l.avail_out === 0) {
                    _.last_flush = -1;
                    return f;
                  }
                } else if (l.avail_in === 0 && U(N) <= U($) && N !== b) {
                  return et(l, -5);
                }
                if (_.status === 666 && l.avail_in !== 0) {
                  return et(l, -5);
                }
                if (l.avail_in !== 0 || _.lookahead !== 0 || N !== m && _.status !== 666) {
                  var F = _.strategy === 2 ? function (z, W) {
                    var V;
                    while (true) {
                      if (z.lookahead === 0 && (lt(z), z.lookahead === 0)) {
                        if (W === m) {
                          return u;
                        }
                        break;
                      }
                      z.match_length = 0;
                      V = n._tr_tally(z, 0, z.window[z.strstart]);
                      z.lookahead--;
                      z.strstart++;
                      if (V && (I(z, false), z.strm.avail_out === 0)) {
                        return u;
                      }
                    }
                    z.insert = 0;
                    if (W === b) {
                      I(z, true);
                      if (z.strm.avail_out === 0) {
                        return tt;
                      } else {
                        return j;
                      }
                    } else if (z.last_lit && (I(z, false), z.strm.avail_out === 0)) {
                      return u;
                    } else {
                      return R;
                    }
                  }(_, N) : _.strategy === 3 ? function (z, W) {
                    var V;
                    var H;
                    var K;
                    var st;
                    var nt = z.window;
                    while (true) {
                      if (z.lookahead <= q) {
                        lt(z);
                        if (z.lookahead <= q && W === m) {
                          return u;
                        }
                        if (z.lookahead === 0) {
                          break;
                        }
                      }
                      z.match_length = 0;
                      if (z.lookahead >= T && z.strstart > 0 && (H = nt[K = z.strstart - 1]) === nt[++K] && H === nt[++K] && H === nt[++K]) {
                        st = z.strstart + q;
                        do; while (H === nt[++K] && H === nt[++K] && H === nt[++K] && H === nt[++K] && H === nt[++K] && H === nt[++K] && H === nt[++K] && H === nt[++K] && K < st);
                        z.match_length = q - (st - K);
                        if (z.match_length > z.lookahead) {
                          z.match_length = z.lookahead;
                        }
                      }
                      if (z.match_length >= T) {
                        V = n._tr_tally(z, 1, z.match_length - T);
                        z.lookahead -= z.match_length;
                        z.strstart += z.match_length;
                        z.match_length = 0;
                      } else {
                        V = n._tr_tally(z, 0, z.window[z.strstart]);
                        z.lookahead--;
                        z.strstart++;
                      }
                      if (V && (I(z, false), z.strm.avail_out === 0)) {
                        return u;
                      }
                    }
                    z.insert = 0;
                    if (W === b) {
                      I(z, true);
                      if (z.strm.avail_out === 0) {
                        return tt;
                      } else {
                        return j;
                      }
                    } else if (z.last_lit && (I(z, false), z.strm.avail_out === 0)) {
                      return u;
                    } else {
                      return R;
                    }
                  }(_, N) : r[_.level].func(_, N);
                  if (F === tt || F === j) {
                    _.status = 666;
                  }
                  if (F === u || F === tt) {
                    if (l.avail_out === 0) {
                      _.last_flush = -1;
                    }
                    return f;
                  }
                  if (F === R && (N === 1 ? n._tr_align(_) : N !== 5 && (n._tr_stored_block(_, 0, 0, false), N === 3 && (J(_.head), _.lookahead === 0 && (_.strstart = 0, _.block_start = 0, _.insert = 0))), L(l), l.avail_out === 0)) {
                    _.last_flush = -1;
                    return f;
                  }
                }
                if (N !== b) {
                  return f;
                } else if (_.wrap <= 0) {
                  return 1;
                } else {
                  if (_.wrap === 2) {
                    X(_, l.adler & 255);
                    X(_, l.adler >> 8 & 255);
                    X(_, l.adler >> 16 & 255);
                    X(_, l.adler >> 24 & 255);
                    X(_, l.total_in & 255);
                    X(_, l.total_in >> 8 & 255);
                    X(_, l.total_in >> 16 & 255);
                    X(_, l.total_in >> 24 & 255);
                  } else {
                    G(_, l.adler >>> 16);
                    G(_, l.adler & 65535);
                  }
                  L(l);
                  if (_.wrap > 0) {
                    _.wrap = -_.wrap;
                  }
                  if (_.pending !== 0) {
                    return f;
                  } else {
                    return 1;
                  }
                }
              };
              s.deflateEnd = function (l) {
                var N;
                if (l && l.state) {
                  if ((N = l.state.status) !== k && N !== 69 && N !== 73 && N !== 91 && N !== 103 && N !== B && N !== 666) {
                    return et(l, v);
                  } else {
                    l.state = null;
                    if (N === B) {
                      return et(l, -3);
                    } else {
                      return f;
                    }
                  }
                } else {
                  return v;
                }
              };
              s.deflateSetDictionary = function (l, N) {
                var $;
                var _;
                var y;
                var E;
                var M;
                var F;
                var z;
                var W;
                var V = N.length;
                if (!l || !l.state || (E = ($ = l.state).wrap) === 2 || E === 1 && $.status !== k || $.lookahead) {
                  return v;
                }
                if (E === 1) {
                  l.adler = c(l.adler, N, V, 0);
                }
                $.wrap = 0;
                if (V >= $.w_size) {
                  if (E === 0) {
                    J($.head);
                    $.strstart = 0;
                    $.block_start = 0;
                    $.insert = 0;
                  }
                  W = new i.Buf8($.w_size);
                  i.arraySet(W, N, V - $.w_size, $.w_size, 0);
                  N = W;
                  V = $.w_size;
                }
                M = l.avail_in;
                F = l.next_in;
                z = l.input;
                l.avail_in = V;
                l.next_in = 0;
                l.input = N;
                lt($);
                while ($.lookahead >= T) {
                  _ = $.strstart;
                  y = $.lookahead - (T - 1);
                  while ($.ins_h = ($.ins_h << $.hash_shift ^ $.window[_ + T - 1]) & $.hash_mask, $.prev[_ & $.w_mask] = $.head[$.ins_h], $.head[$.ins_h] = _, _++, --y);
                  $.strstart = _;
                  $.lookahead = T - 1;
                  lt($);
                }
                $.strstart += $.lookahead;
                $.block_start = $.strstart;
                $.insert = $.lookahead;
                $.lookahead = 0;
                $.match_length = $.prev_length = T - 1;
                $.match_available = 0;
                l.next_in = F;
                l.input = z;
                l.avail_in = M;
                $.wrap = E;
                return f;
              };
              s.deflateInfo = "pako deflate (from Nodeca project)";
            }, {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52
            }],
            47: [function (t, o, s) {
              o.exports = function () {
                this.text = 0;
                this.time = 0;
                this.xflags = 0;
                this.os = 0;
                this.extra = null;
                this.extra_len = 0;
                this.name = "";
                this.comment = "";
                this.hcrc = 0;
                this.done = false;
              };
            }, {}],
            48: [function (t, o, s) {
              o.exports = function (r, i) {
                var n;
                var c;
                var d;
                var p;
                var m;
                var b;
                var f;
                var v;
                var h;
                var w;
                var g;
                var x;
                var S;
                var A;
                var C;
                var D;
                var O;
                var P;
                var T;
                var q;
                var Y;
                var k;
                var B;
                var u;
                var R;
                n = r.state;
                c = r.next_in;
                u = r.input;
                d = c + (r.avail_in - 5);
                p = r.next_out;
                R = r.output;
                m = p - (i - r.avail_out);
                b = p + (r.avail_out - 257);
                f = n.dmax;
                v = n.wsize;
                h = n.whave;
                w = n.wnext;
                g = n.window;
                x = n.hold;
                S = n.bits;
                A = n.lencode;
                C = n.distcode;
                D = (1 << n.lenbits) - 1;
                O = (1 << n.distbits) - 1;
                t: do {
                  if (S < 15) {
                    x += u[c++] << S;
                    S += 8;
                    x += u[c++] << S;
                    S += 8;
                  }
                  P = A[x & D];
                  e: while (true) {
                    x >>>= T = P >>> 24;
                    S -= T;
                    if ((T = P >>> 16 & 255) === 0) {
                      R[p++] = P & 65535;
                    } else {
                      if (!(T & 16)) {
                        if ((T & 64) == 0) {
                          P = A[(P & 65535) + (x & (1 << T) - 1)];
                          continue e;
                        }
                        if (T & 32) {
                          n.mode = 12;
                          break t;
                        }
                        r.msg = "invalid literal/length code";
                        n.mode = 30;
                        break t;
                      }
                      q = P & 65535;
                      if (T &= 15) {
                        if (S < T) {
                          x += u[c++] << S;
                          S += 8;
                        }
                        q += x & (1 << T) - 1;
                        x >>>= T;
                        S -= T;
                      }
                      if (S < 15) {
                        x += u[c++] << S;
                        S += 8;
                        x += u[c++] << S;
                        S += 8;
                      }
                      P = C[x & O];
                      r: while (true) {
                        x >>>= T = P >>> 24;
                        S -= T;
                        if (!((T = P >>> 16 & 255) & 16)) {
                          if ((T & 64) == 0) {
                            P = C[(P & 65535) + (x & (1 << T) - 1)];
                            continue r;
                          }
                          r.msg = "invalid distance code";
                          n.mode = 30;
                          break t;
                        }
                        Y = P & 65535;
                        if (S < (T &= 15)) {
                          x += u[c++] << S;
                          if ((S += 8) < T) {
                            x += u[c++] << S;
                            S += 8;
                          }
                        }
                        if (f < (Y += x & (1 << T) - 1)) {
                          r.msg = "invalid distance too far back";
                          n.mode = 30;
                          break t;
                        }
                        x >>>= T;
                        S -= T;
                        if ((T = p - m) < Y) {
                          if (h < (T = Y - T) && n.sane) {
                            r.msg = "invalid distance too far back";
                            n.mode = 30;
                            break t;
                          }
                          B = g;
                          if ((k = 0) === w) {
                            k += v - T;
                            if (T < q) {
                              for (q -= T; R[p++] = g[k++], --T;);
                              k = p - Y;
                              B = R;
                            }
                          } else if (w < T) {
                            k += v + w - T;
                            if ((T -= w) < q) {
                              for (q -= T; R[p++] = g[k++], --T;);
                              k = 0;
                              if (w < q) {
                                for (q -= T = w; R[p++] = g[k++], --T;);
                                k = p - Y;
                                B = R;
                              }
                            }
                          } else {
                            k += w - T;
                            if (T < q) {
                              for (q -= T; R[p++] = g[k++], --T;);
                              k = p - Y;
                              B = R;
                            }
                          }
                          while (q > 2) {
                            R[p++] = B[k++];
                            R[p++] = B[k++];
                            R[p++] = B[k++];
                            q -= 3;
                          }
                          if (q) {
                            R[p++] = B[k++];
                            if (q > 1) {
                              R[p++] = B[k++];
                            }
                          }
                        } else {
                          for (k = p - Y; R[p++] = R[k++], R[p++] = R[k++], R[p++] = R[k++], (q -= 3) > 2;);
                          if (q) {
                            R[p++] = R[k++];
                            if (q > 1) {
                              R[p++] = R[k++];
                            }
                          }
                        }
                        break;
                      }
                    }
                    break;
                  }
                } while (c < d && p < b);
                c -= q = S >> 3;
                x &= (1 << (S -= q << 3)) - 1;
                r.next_in = c;
                r.next_out = p;
                r.avail_in = c < d ? d - c + 5 : 5 - (c - d);
                r.avail_out = p < b ? b - p + 257 : 257 - (p - b);
                n.hold = x;
                n.bits = S;
              };
            }, {}],
            49: [function (t, o, s) {
              var r = t("../utils/common");
              var i = t("./adler32");
              var n = t("./crc32");
              var c = t("./inffast");
              var d = t("./inftrees");
              var p = 1;
              var m = 2;
              var b = 0;
              var f = -2;
              var v = 1;
              var h = 852;
              var w = 592;
              function g(k) {
                return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((k & 65280) << 8) + ((k & 255) << 24);
              }
              function x() {
                this.mode = 0;
                this.last = false;
                this.wrap = 0;
                this.havedict = false;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new r.Buf16(320);
                this.work = new r.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0;
              }
              function S(k) {
                var B;
                if (k && k.state) {
                  B = k.state;
                  k.total_in = k.total_out = B.total = 0;
                  k.msg = "";
                  if (B.wrap) {
                    k.adler = B.wrap & 1;
                  }
                  B.mode = v;
                  B.last = 0;
                  B.havedict = 0;
                  B.dmax = 32768;
                  B.head = null;
                  B.hold = 0;
                  B.bits = 0;
                  B.lencode = B.lendyn = new r.Buf32(h);
                  B.distcode = B.distdyn = new r.Buf32(w);
                  B.sane = 1;
                  B.back = -1;
                  return b;
                } else {
                  return f;
                }
              }
              function A(k) {
                var B;
                if (k && k.state) {
                  (B = k.state).wsize = 0;
                  B.whave = 0;
                  B.wnext = 0;
                  return S(k);
                } else {
                  return f;
                }
              }
              function C(k, B) {
                var u;
                var R;
                if (k && k.state) {
                  R = k.state;
                  if (B < 0) {
                    u = 0;
                    B = -B;
                  } else {
                    u = 1 + (B >> 4);
                    if (B < 48) {
                      B &= 15;
                    }
                  }
                  if (B && (B < 8 || B > 15)) {
                    return f;
                  } else {
                    if (R.window !== null && R.wbits !== B) {
                      R.window = null;
                    }
                    R.wrap = u;
                    R.wbits = B;
                    return A(k);
                  }
                } else {
                  return f;
                }
              }
              function D(k, B) {
                var u;
                var R;
                if (k) {
                  R = new x();
                  (k.state = R).window = null;
                  if ((u = C(k, B)) !== b) {
                    k.state = null;
                  }
                  return u;
                } else {
                  return f;
                }
              }
              var O;
              var P;
              var T = true;
              function q(k) {
                if (T) {
                  var B;
                  O = new r.Buf32(512);
                  P = new r.Buf32(32);
                  B = 0;
                  while (B < 144) {
                    k.lens[B++] = 8;
                  }
                  while (B < 256) {
                    k.lens[B++] = 9;
                  }
                  while (B < 280) {
                    k.lens[B++] = 7;
                  }
                  while (B < 288) {
                    k.lens[B++] = 8;
                  }
                  d(p, k.lens, 0, 288, O, 0, k.work, {
                    bits: 9
                  });
                  B = 0;
                  while (B < 32) {
                    k.lens[B++] = 5;
                  }
                  d(m, k.lens, 0, 32, P, 0, k.work, {
                    bits: 5
                  });
                  T = false;
                }
                k.lencode = O;
                k.lenbits = 9;
                k.distcode = P;
                k.distbits = 5;
              }
              function Y(k, B, u, R) {
                var tt;
                var j = k.state;
                if (j.window === null) {
                  j.wsize = 1 << j.wbits;
                  j.wnext = 0;
                  j.whave = 0;
                  j.window = new r.Buf8(j.wsize);
                }
                if (R >= j.wsize) {
                  r.arraySet(j.window, B, u - j.wsize, j.wsize, 0);
                  j.wnext = 0;
                  j.whave = j.wsize;
                } else {
                  if (R < (tt = j.wsize - j.wnext)) {
                    tt = R;
                  }
                  r.arraySet(j.window, B, u - R, tt, j.wnext);
                  if (R -= tt) {
                    r.arraySet(j.window, B, u - R, R, 0);
                    j.wnext = R;
                    j.whave = j.wsize;
                  } else {
                    j.wnext += tt;
                    if (j.wnext === j.wsize) {
                      j.wnext = 0;
                    }
                    if (j.whave < j.wsize) {
                      j.whave += tt;
                    }
                  }
                }
                return 0;
              }
              s.inflateReset = A;
              s.inflateReset2 = C;
              s.inflateResetKeep = S;
              s.inflateInit = function (k) {
                return D(k, 15);
              };
              s.inflateInit2 = D;
              s.inflate = function (k, B) {
                var u;
                var R;
                var tt;
                var j;
                var et;
                var U;
                var J;
                var L;
                var I;
                var X;
                var G;
                var Z;
                var lt;
                var ht;
                var rt;
                var it;
                var ut;
                var ct;
                var kt;
                var _t;
                var l;
                var N;
                var $;
                var _;
                var y = 0;
                var E = new r.Buf8(4);
                var M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0) {
                  return f;
                }
                if ((u = k.state).mode === 12) {
                  u.mode = 13;
                }
                et = k.next_out;
                tt = k.output;
                J = k.avail_out;
                j = k.next_in;
                R = k.input;
                U = k.avail_in;
                L = u.hold;
                I = u.bits;
                X = U;
                G = J;
                N = b;
                t: while (true) {
                  switch (u.mode) {
                    case v:
                      if (u.wrap === 0) {
                        u.mode = 13;
                        break;
                      }
                      while (I < 16) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if (u.wrap & 2 && L === 35615) {
                        E[u.check = 0] = L & 255;
                        E[1] = L >>> 8 & 255;
                        u.check = n(u.check, E, 2, 0);
                        I = L = 0;
                        u.mode = 2;
                        break;
                      }
                      u.flags = 0;
                      if (u.head) {
                        u.head.done = false;
                      }
                      if (!(u.wrap & 1) || (((L & 255) << 8) + (L >> 8)) % 31) {
                        k.msg = "incorrect header check";
                        u.mode = 30;
                        break;
                      }
                      if ((L & 15) != 8) {
                        k.msg = "unknown compression method";
                        u.mode = 30;
                        break;
                      }
                      I -= 4;
                      l = 8 + ((L >>>= 4) & 15);
                      if (u.wbits === 0) {
                        u.wbits = l;
                      } else if (l > u.wbits) {
                        k.msg = "invalid window size";
                        u.mode = 30;
                        break;
                      }
                      u.dmax = 1 << l;
                      k.adler = u.check = 1;
                      u.mode = L & 512 ? 10 : 12;
                      I = L = 0;
                      break;
                    case 2:
                      while (I < 16) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      u.flags = L;
                      if ((u.flags & 255) != 8) {
                        k.msg = "unknown compression method";
                        u.mode = 30;
                        break;
                      }
                      if (u.flags & 57344) {
                        k.msg = "unknown header flags set";
                        u.mode = 30;
                        break;
                      }
                      if (u.head) {
                        u.head.text = L >> 8 & 1;
                      }
                      if (u.flags & 512) {
                        E[0] = L & 255;
                        E[1] = L >>> 8 & 255;
                        u.check = n(u.check, E, 2, 0);
                      }
                      I = L = 0;
                      u.mode = 3;
                    case 3:
                      while (I < 32) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if (u.head) {
                        u.head.time = L;
                      }
                      if (u.flags & 512) {
                        E[0] = L & 255;
                        E[1] = L >>> 8 & 255;
                        E[2] = L >>> 16 & 255;
                        E[3] = L >>> 24 & 255;
                        u.check = n(u.check, E, 4, 0);
                      }
                      I = L = 0;
                      u.mode = 4;
                    case 4:
                      while (I < 16) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if (u.head) {
                        u.head.xflags = L & 255;
                        u.head.os = L >> 8;
                      }
                      if (u.flags & 512) {
                        E[0] = L & 255;
                        E[1] = L >>> 8 & 255;
                        u.check = n(u.check, E, 2, 0);
                      }
                      I = L = 0;
                      u.mode = 5;
                    case 5:
                      if (u.flags & 1024) {
                        while (I < 16) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        u.length = L;
                        if (u.head) {
                          u.head.extra_len = L;
                        }
                        if (u.flags & 512) {
                          E[0] = L & 255;
                          E[1] = L >>> 8 & 255;
                          u.check = n(u.check, E, 2, 0);
                        }
                        I = L = 0;
                      } else if (u.head) {
                        u.head.extra = null;
                      }
                      u.mode = 6;
                    case 6:
                      if (u.flags & 1024 && (U < (Z = u.length) && (Z = U), Z && (u.head && (l = u.head.extra_len - u.length, u.head.extra ||= new Array(u.head.extra_len), r.arraySet(u.head.extra, R, j, Z, l)), u.flags & 512 && (u.check = n(u.check, R, Z, j)), U -= Z, j += Z, u.length -= Z), u.length)) {
                        break t;
                      }
                      u.length = 0;
                      u.mode = 7;
                    case 7:
                      if (u.flags & 2048) {
                        if (U === 0) {
                          break t;
                        }
                        for (Z = 0; l = R[j + Z++], u.head && l && u.length < 65536 && (u.head.name += String.fromCharCode(l)), l && Z < U;);
                        if (u.flags & 512) {
                          u.check = n(u.check, R, Z, j);
                        }
                        U -= Z;
                        j += Z;
                        if (l) {
                          break t;
                        }
                      } else if (u.head) {
                        u.head.name = null;
                      }
                      u.length = 0;
                      u.mode = 8;
                    case 8:
                      if (u.flags & 4096) {
                        if (U === 0) {
                          break t;
                        }
                        for (Z = 0; l = R[j + Z++], u.head && l && u.length < 65536 && (u.head.comment += String.fromCharCode(l)), l && Z < U;);
                        if (u.flags & 512) {
                          u.check = n(u.check, R, Z, j);
                        }
                        U -= Z;
                        j += Z;
                        if (l) {
                          break t;
                        }
                      } else if (u.head) {
                        u.head.comment = null;
                      }
                      u.mode = 9;
                    case 9:
                      if (u.flags & 512) {
                        while (I < 16) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        if (L !== (u.check & 65535)) {
                          k.msg = "header crc mismatch";
                          u.mode = 30;
                          break;
                        }
                        I = L = 0;
                      }
                      if (u.head) {
                        u.head.hcrc = u.flags >> 9 & 1;
                        u.head.done = true;
                      }
                      k.adler = u.check = 0;
                      u.mode = 12;
                      break;
                    case 10:
                      while (I < 32) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      k.adler = u.check = g(L);
                      I = L = 0;
                      u.mode = 11;
                    case 11:
                      if (u.havedict === 0) {
                        k.next_out = et;
                        k.avail_out = J;
                        k.next_in = j;
                        k.avail_in = U;
                        u.hold = L;
                        u.bits = I;
                        return 2;
                      }
                      k.adler = u.check = 1;
                      u.mode = 12;
                    case 12:
                      if (B === 5 || B === 6) {
                        break t;
                      }
                    case 13:
                      if (u.last) {
                        L >>>= I & 7;
                        I -= I & 7;
                        u.mode = 27;
                        break;
                      }
                      while (I < 3) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      u.last = L & 1;
                      I -= 1;
                      switch ((L >>>= 1) & 3) {
                        case 0:
                          u.mode = 14;
                          break;
                        case 1:
                          q(u);
                          u.mode = 20;
                          if (B !== 6) {
                            break;
                          }
                          L >>>= 2;
                          I -= 2;
                          break t;
                        case 2:
                          u.mode = 17;
                          break;
                        case 3:
                          k.msg = "invalid block type";
                          u.mode = 30;
                      }
                      L >>>= 2;
                      I -= 2;
                      break;
                    case 14:
                      L >>>= I & 7;
                      I -= I & 7;
                      while (I < 32) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if ((L & 65535) != (L >>> 16 ^ 65535)) {
                        k.msg = "invalid stored block lengths";
                        u.mode = 30;
                        break;
                      }
                      u.length = L & 65535;
                      I = L = 0;
                      u.mode = 15;
                      if (B === 6) {
                        break t;
                      }
                    case 15:
                      u.mode = 16;
                    case 16:
                      if (Z = u.length) {
                        if (U < Z) {
                          Z = U;
                        }
                        if (J < Z) {
                          Z = J;
                        }
                        if (Z === 0) {
                          break t;
                        }
                        r.arraySet(tt, R, j, Z, et);
                        U -= Z;
                        j += Z;
                        J -= Z;
                        et += Z;
                        u.length -= Z;
                        break;
                      }
                      u.mode = 12;
                      break;
                    case 17:
                      while (I < 14) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      u.nlen = 257 + (L & 31);
                      L >>>= 5;
                      I -= 5;
                      u.ndist = 1 + (L & 31);
                      L >>>= 5;
                      I -= 5;
                      u.ncode = 4 + (L & 15);
                      L >>>= 4;
                      I -= 4;
                      if (u.nlen > 286 || u.ndist > 30) {
                        k.msg = "too many length or distance symbols";
                        u.mode = 30;
                        break;
                      }
                      u.have = 0;
                      u.mode = 18;
                    case 18:
                      while (u.have < u.ncode) {
                        while (I < 3) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        u.lens[M[u.have++]] = L & 7;
                        L >>>= 3;
                        I -= 3;
                      }
                      while (u.have < 19) {
                        u.lens[M[u.have++]] = 0;
                      }
                      u.lencode = u.lendyn;
                      u.lenbits = 7;
                      $ = {
                        bits: u.lenbits
                      };
                      N = d(0, u.lens, 0, 19, u.lencode, 0, u.work, $);
                      u.lenbits = $.bits;
                      if (N) {
                        k.msg = "invalid code lengths set";
                        u.mode = 30;
                        break;
                      }
                      u.have = 0;
                      u.mode = 19;
                    case 19:
                      while (u.have < u.nlen + u.ndist) {
                        while (it = (y = u.lencode[L & (1 << u.lenbits) - 1]) >>> 16 & 255, ut = y & 65535, !((rt = y >>> 24) <= I)) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        if (ut < 16) {
                          L >>>= rt;
                          I -= rt;
                          u.lens[u.have++] = ut;
                        } else {
                          if (ut === 16) {
                            for (_ = rt + 2; I < _;) {
                              if (U === 0) {
                                break t;
                              }
                              U--;
                              L += R[j++] << I;
                              I += 8;
                            }
                            L >>>= rt;
                            I -= rt;
                            if (u.have === 0) {
                              k.msg = "invalid bit length repeat";
                              u.mode = 30;
                              break;
                            }
                            l = u.lens[u.have - 1];
                            Z = 3 + (L & 3);
                            L >>>= 2;
                            I -= 2;
                          } else if (ut === 17) {
                            for (_ = rt + 3; I < _;) {
                              if (U === 0) {
                                break t;
                              }
                              U--;
                              L += R[j++] << I;
                              I += 8;
                            }
                            I -= rt;
                            l = 0;
                            Z = 3 + ((L >>>= rt) & 7);
                            L >>>= 3;
                            I -= 3;
                          } else {
                            for (_ = rt + 7; I < _;) {
                              if (U === 0) {
                                break t;
                              }
                              U--;
                              L += R[j++] << I;
                              I += 8;
                            }
                            I -= rt;
                            l = 0;
                            Z = 11 + ((L >>>= rt) & 127);
                            L >>>= 7;
                            I -= 7;
                          }
                          if (u.have + Z > u.nlen + u.ndist) {
                            k.msg = "invalid bit length repeat";
                            u.mode = 30;
                            break;
                          }
                          while (Z--) {
                            u.lens[u.have++] = l;
                          }
                        }
                      }
                      if (u.mode === 30) {
                        break;
                      }
                      if (u.lens[256] === 0) {
                        k.msg = "invalid code -- missing end-of-block";
                        u.mode = 30;
                        break;
                      }
                      u.lenbits = 9;
                      $ = {
                        bits: u.lenbits
                      };
                      N = d(p, u.lens, 0, u.nlen, u.lencode, 0, u.work, $);
                      u.lenbits = $.bits;
                      if (N) {
                        k.msg = "invalid literal/lengths set";
                        u.mode = 30;
                        break;
                      }
                      u.distbits = 6;
                      u.distcode = u.distdyn;
                      $ = {
                        bits: u.distbits
                      };
                      N = d(m, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, $);
                      u.distbits = $.bits;
                      if (N) {
                        k.msg = "invalid distances set";
                        u.mode = 30;
                        break;
                      }
                      u.mode = 20;
                      if (B === 6) {
                        break t;
                      }
                    case 20:
                      u.mode = 21;
                    case 21:
                      if (U >= 6 && J >= 258) {
                        k.next_out = et;
                        k.avail_out = J;
                        k.next_in = j;
                        k.avail_in = U;
                        u.hold = L;
                        u.bits = I;
                        c(k, G);
                        et = k.next_out;
                        tt = k.output;
                        J = k.avail_out;
                        j = k.next_in;
                        R = k.input;
                        U = k.avail_in;
                        L = u.hold;
                        I = u.bits;
                        if (u.mode === 12) {
                          u.back = -1;
                        }
                        break;
                      }
                      for (u.back = 0; it = (y = u.lencode[L & (1 << u.lenbits) - 1]) >>> 16 & 255, ut = y & 65535, !((rt = y >>> 24) <= I);) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if (it && (it & 240) == 0) {
                        ct = rt;
                        kt = it;
                        _t = ut;
                        while (it = (y = u.lencode[_t + ((L & (1 << ct + kt) - 1) >> ct)]) >>> 16 & 255, ut = y & 65535, !(ct + (rt = y >>> 24) <= I)) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        L >>>= ct;
                        I -= ct;
                        u.back += ct;
                      }
                      L >>>= rt;
                      I -= rt;
                      u.back += rt;
                      u.length = ut;
                      if (it === 0) {
                        u.mode = 26;
                        break;
                      }
                      if (it & 32) {
                        u.back = -1;
                        u.mode = 12;
                        break;
                      }
                      if (it & 64) {
                        k.msg = "invalid literal/length code";
                        u.mode = 30;
                        break;
                      }
                      u.extra = it & 15;
                      u.mode = 22;
                    case 22:
                      if (u.extra) {
                        for (_ = u.extra; I < _;) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        u.length += L & (1 << u.extra) - 1;
                        L >>>= u.extra;
                        I -= u.extra;
                        u.back += u.extra;
                      }
                      u.was = u.length;
                      u.mode = 23;
                    case 23:
                      while (it = (y = u.distcode[L & (1 << u.distbits) - 1]) >>> 16 & 255, ut = y & 65535, !((rt = y >>> 24) <= I)) {
                        if (U === 0) {
                          break t;
                        }
                        U--;
                        L += R[j++] << I;
                        I += 8;
                      }
                      if ((it & 240) == 0) {
                        ct = rt;
                        kt = it;
                        _t = ut;
                        while (it = (y = u.distcode[_t + ((L & (1 << ct + kt) - 1) >> ct)]) >>> 16 & 255, ut = y & 65535, !(ct + (rt = y >>> 24) <= I)) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        L >>>= ct;
                        I -= ct;
                        u.back += ct;
                      }
                      L >>>= rt;
                      I -= rt;
                      u.back += rt;
                      if (it & 64) {
                        k.msg = "invalid distance code";
                        u.mode = 30;
                        break;
                      }
                      u.offset = ut;
                      u.extra = it & 15;
                      u.mode = 24;
                    case 24:
                      if (u.extra) {
                        for (_ = u.extra; I < _;) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        u.offset += L & (1 << u.extra) - 1;
                        L >>>= u.extra;
                        I -= u.extra;
                        u.back += u.extra;
                      }
                      if (u.offset > u.dmax) {
                        k.msg = "invalid distance too far back";
                        u.mode = 30;
                        break;
                      }
                      u.mode = 25;
                    case 25:
                      if (J === 0) {
                        break t;
                      }
                      Z = G - J;
                      if (u.offset > Z) {
                        if ((Z = u.offset - Z) > u.whave && u.sane) {
                          k.msg = "invalid distance too far back";
                          u.mode = 30;
                          break;
                        }
                        lt = Z > u.wnext ? (Z -= u.wnext, u.wsize - Z) : u.wnext - Z;
                        if (Z > u.length) {
                          Z = u.length;
                        }
                        ht = u.window;
                      } else {
                        ht = tt;
                        lt = et - u.offset;
                        Z = u.length;
                      }
                      if (J < Z) {
                        Z = J;
                      }
                      J -= Z;
                      u.length -= Z;
                      while (tt[et++] = ht[lt++], --Z);
                      if (u.length === 0) {
                        u.mode = 21;
                      }
                      break;
                    case 26:
                      if (J === 0) {
                        break t;
                      }
                      tt[et++] = u.length;
                      J--;
                      u.mode = 21;
                      break;
                    case 27:
                      if (u.wrap) {
                        while (I < 32) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L |= R[j++] << I;
                          I += 8;
                        }
                        G -= J;
                        k.total_out += G;
                        u.total += G;
                        if (G) {
                          k.adler = u.check = u.flags ? n(u.check, tt, G, et - G) : i(u.check, tt, G, et - G);
                        }
                        G = J;
                        if ((u.flags ? L : g(L)) !== u.check) {
                          k.msg = "incorrect data check";
                          u.mode = 30;
                          break;
                        }
                        I = L = 0;
                      }
                      u.mode = 28;
                    case 28:
                      if (u.wrap && u.flags) {
                        while (I < 32) {
                          if (U === 0) {
                            break t;
                          }
                          U--;
                          L += R[j++] << I;
                          I += 8;
                        }
                        if (L !== (u.total & 4294967295)) {
                          k.msg = "incorrect length check";
                          u.mode = 30;
                          break;
                        }
                        I = L = 0;
                      }
                      u.mode = 29;
                    case 29:
                      N = 1;
                      break t;
                    case 30:
                      N = -3;
                      break t;
                    case 31:
                      return -4;
                    case 32:
                    default:
                      return f;
                  }
                }
                k.next_out = et;
                k.avail_out = J;
                k.next_in = j;
                k.avail_in = U;
                u.hold = L;
                u.bits = I;
                if ((u.wsize || G !== k.avail_out && u.mode < 30 && (u.mode < 27 || B !== 4)) && Y(k, k.output, k.next_out, G - k.avail_out)) {
                  u.mode = 31;
                  return -4;
                } else {
                  X -= k.avail_in;
                  G -= k.avail_out;
                  k.total_in += X;
                  k.total_out += G;
                  u.total += G;
                  if (u.wrap && G) {
                    k.adler = u.check = u.flags ? n(u.check, tt, G, k.next_out - G) : i(u.check, tt, G, k.next_out - G);
                  }
                  k.data_type = u.bits + (u.last ? 64 : 0) + (u.mode === 12 ? 128 : 0) + (u.mode === 20 || u.mode === 15 ? 256 : 0);
                  if ((X == 0 && G === 0 || B === 4) && N === b) {
                    N = -5;
                  }
                  return N;
                }
              };
              s.inflateEnd = function (k) {
                if (!k || !k.state) {
                  return f;
                }
                var B = k.state;
                B.window &&= null;
                k.state = null;
                return b;
              };
              s.inflateGetHeader = function (k, B) {
                var u;
                if (k && k.state) {
                  if (((u = k.state).wrap & 2) == 0) {
                    return f;
                  } else {
                    (u.head = B).done = false;
                    return b;
                  }
                } else {
                  return f;
                }
              };
              s.inflateSetDictionary = function (k, B) {
                var u;
                var R = B.length;
                if (k && k.state) {
                  if ((u = k.state).wrap !== 0 && u.mode !== 11) {
                    return f;
                  } else if (u.mode === 11 && i(1, B, R, 0) !== u.check) {
                    return -3;
                  } else if (Y(k, B, R, R)) {
                    u.mode = 31;
                    return -4;
                  } else {
                    u.havedict = 1;
                    return b;
                  }
                } else {
                  return f;
                }
              };
              s.inflateInfo = "pako inflate (from Nodeca project)";
            }, {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50
            }],
            50: [function (t, o, s) {
              var r = t("../utils/common");
              var i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
              var n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
              var c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
              var d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
              o.exports = function (p, m, b, f, v, h, w, g) {
                var x;
                var S;
                var A;
                var C;
                var D;
                var O;
                var P;
                var T;
                var q;
                var Y = g.bits;
                var k = 0;
                var B = 0;
                var u = 0;
                var R = 0;
                var tt = 0;
                var j = 0;
                var et = 0;
                var U = 0;
                var J = 0;
                var L = 0;
                var I = null;
                var X = 0;
                var G = new r.Buf16(16);
                var Z = new r.Buf16(16);
                var lt = null;
                var ht = 0;
                for (k = 0; k <= 15; k++) {
                  G[k] = 0;
                }
                for (B = 0; B < f; B++) {
                  G[m[b + B]]++;
                }
                tt = Y;
                R = 15;
                for (; R >= 1 && G[R] === 0; R--);
                if (R < tt) {
                  tt = R;
                }
                if (R === 0) {
                  v[h++] = 20971520;
                  v[h++] = 20971520;
                  g.bits = 1;
                  return 0;
                }
                for (u = 1; u < R && G[u] === 0; u++);
                if (tt < u) {
                  tt = u;
                }
                k = U = 1;
                for (; k <= 15; k++) {
                  U <<= 1;
                  if ((U -= G[k]) < 0) {
                    return -1;
                  }
                }
                if (U > 0 && (p === 0 || R !== 1)) {
                  return -1;
                }
                Z[1] = 0;
                k = 1;
                for (; k < 15; k++) {
                  Z[k + 1] = Z[k] + G[k];
                }
                for (B = 0; B < f; B++) {
                  if (m[b + B] !== 0) {
                    w[Z[m[b + B]]++] = B;
                  }
                }
                O = p === 0 ? (I = lt = w, 19) : p === 1 ? (I = i, X -= 257, lt = n, ht -= 257, 256) : (I = c, lt = d, -1);
                k = u;
                D = h;
                et = B = L = 0;
                A = -1;
                C = (J = 1 << (j = tt)) - 1;
                if (p === 1 && J > 852 || p === 2 && J > 592) {
                  return 1;
                }
                while (true) {
                  P = k - et;
                  q = w[B] < O ? (T = 0, w[B]) : w[B] > O ? (T = lt[ht + w[B]], I[X + w[B]]) : (T = 96, 0);
                  x = 1 << k - et;
                  u = S = 1 << j;
                  while (v[D + (L >> et) + (S -= x)] = P << 24 | T << 16 | q | 0, S !== 0);
                  for (x = 1 << k - 1; L & x;) {
                    x >>= 1;
                  }
                  if (x !== 0) {
                    L &= x - 1;
                    L += x;
                  } else {
                    L = 0;
                  }
                  B++;
                  if (--G[k] == 0) {
                    if (k === R) {
                      break;
                    }
                    k = m[b + w[B]];
                  }
                  if (tt < k && (L & C) !== A) {
                    if (et === 0) {
                      et = tt;
                    }
                    D += u;
                    U = 1 << (j = k - et);
                    while (j + et < R && !((U -= G[j + et]) <= 0)) {
                      j++;
                      U <<= 1;
                    }
                    J += 1 << j;
                    if (p === 1 && J > 852 || p === 2 && J > 592) {
                      return 1;
                    }
                    v[A = L & C] = tt << 24 | j << 16 | D - h | 0;
                  }
                }
                if (L !== 0) {
                  v[D + L] = k - et << 24 | 4194304 | 0;
                }
                g.bits = tt;
                return 0;
              };
            }, {
              "../utils/common": 41
            }],
            51: [function (t, o, s) {
              o.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
              };
            }, {}],
            52: [function (t, o, s) {
              var r = t("../utils/common");
              var i = 0;
              var n = 1;
              function c(y) {
                for (var E = y.length; --E >= 0;) {
                  y[E] = 0;
                }
              }
              var d = 0;
              var p = 29;
              var m = 256;
              var b = m + 1 + p;
              var f = 30;
              var v = 19;
              var h = b * 2 + 1;
              var w = 15;
              var g = 16;
              var x = 7;
              var S = 256;
              var A = 16;
              var C = 17;
              var D = 18;
              var O = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
              var P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
              var T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
              var q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              var Y = new Array((b + 2) * 2);
              c(Y);
              var k = new Array(f * 2);
              c(k);
              var B = new Array(512);
              c(B);
              var u = new Array(256);
              c(u);
              var R = new Array(p);
              c(R);
              var tt;
              var j;
              var et;
              var U = new Array(f);
              function J(y, E, M, F, z) {
                this.static_tree = y;
                this.extra_bits = E;
                this.extra_base = M;
                this.elems = F;
                this.max_length = z;
                this.has_stree = y && y.length;
              }
              function L(y, E) {
                this.dyn_tree = y;
                this.max_code = 0;
                this.stat_desc = E;
              }
              function I(y) {
                if (y < 256) {
                  return B[y];
                } else {
                  return B[256 + (y >>> 7)];
                }
              }
              function X(y, E) {
                y.pending_buf[y.pending++] = E & 255;
                y.pending_buf[y.pending++] = E >>> 8 & 255;
              }
              function G(y, E, M) {
                if (y.bi_valid > g - M) {
                  y.bi_buf |= E << y.bi_valid & 65535;
                  X(y, y.bi_buf);
                  y.bi_buf = E >> g - y.bi_valid;
                  y.bi_valid += M - g;
                } else {
                  y.bi_buf |= E << y.bi_valid & 65535;
                  y.bi_valid += M;
                }
              }
              function Z(y, E, M) {
                G(y, M[E * 2], M[E * 2 + 1]);
              }
              function lt(y, E) {
                for (var M = 0; M |= y & 1, y >>>= 1, M <<= 1, --E > 0;);
                return M >>> 1;
              }
              function ht(y, E, M) {
                var F;
                var z;
                var W = new Array(w + 1);
                var V = 0;
                for (F = 1; F <= w; F++) {
                  W[F] = V = V + M[F - 1] << 1;
                }
                for (z = 0; z <= E; z++) {
                  var H = y[z * 2 + 1];
                  if (H !== 0) {
                    y[z * 2] = lt(W[H]++, H);
                  }
                }
              }
              function rt(y) {
                var E;
                for (E = 0; E < b; E++) {
                  y.dyn_ltree[E * 2] = 0;
                }
                for (E = 0; E < f; E++) {
                  y.dyn_dtree[E * 2] = 0;
                }
                for (E = 0; E < v; E++) {
                  y.bl_tree[E * 2] = 0;
                }
                y.dyn_ltree[S * 2] = 1;
                y.opt_len = y.static_len = 0;
                y.last_lit = y.matches = 0;
              }
              function it(y) {
                if (y.bi_valid > 8) {
                  X(y, y.bi_buf);
                } else if (y.bi_valid > 0) {
                  y.pending_buf[y.pending++] = y.bi_buf;
                }
                y.bi_buf = 0;
                y.bi_valid = 0;
              }
              function ut(y, E, M, F) {
                var z = E * 2;
                var W = M * 2;
                return y[z] < y[W] || y[z] === y[W] && F[E] <= F[M];
              }
              function ct(y, E, M) {
                for (var F = y.heap[M], z = M << 1; z <= y.heap_len && (z < y.heap_len && ut(E, y.heap[z + 1], y.heap[z], y.depth) && z++, !ut(E, F, y.heap[z], y.depth));) {
                  y.heap[M] = y.heap[z];
                  M = z;
                  z <<= 1;
                }
                y.heap[M] = F;
              }
              function kt(y, E, M) {
                var F;
                var z;
                var W;
                var V;
                var H = 0;
                if (y.last_lit !== 0) {
                  while (F = y.pending_buf[y.d_buf + H * 2] << 8 | y.pending_buf[y.d_buf + H * 2 + 1], z = y.pending_buf[y.l_buf + H], H++, F === 0 ? Z(y, z, E) : (Z(y, (W = u[z]) + m + 1, E), (V = O[W]) !== 0 && G(y, z -= R[W], V), Z(y, W = I(--F), M), (V = P[W]) !== 0 && G(y, F -= U[W], V)), H < y.last_lit);
                }
                Z(y, S, E);
              }
              function _t(y, E) {
                var M;
                var F;
                var z;
                var W = E.dyn_tree;
                var V = E.stat_desc.static_tree;
                var H = E.stat_desc.has_stree;
                var K = E.stat_desc.elems;
                var st = -1;
                y.heap_len = 0;
                y.heap_max = h;
                M = 0;
                for (; M < K; M++) {
                  if (W[M * 2] !== 0) {
                    y.heap[++y.heap_len] = st = M;
                    y.depth[M] = 0;
                  } else {
                    W[M * 2 + 1] = 0;
                  }
                }
                while (y.heap_len < 2) {
                  W[(z = y.heap[++y.heap_len] = st < 2 ? ++st : 0) * 2] = 1;
                  y.depth[z] = 0;
                  y.opt_len--;
                  if (H) {
                    y.static_len -= V[z * 2 + 1];
                  }
                }
                E.max_code = st;
                M = y.heap_len >> 1;
                for (; M >= 1; M--) {
                  ct(y, W, M);
                }
                for (z = K; M = y.heap[1], y.heap[1] = y.heap[y.heap_len--], ct(y, W, 1), F = y.heap[1], y.heap[--y.heap_max] = M, y.heap[--y.heap_max] = F, W[z * 2] = W[M * 2] + W[F * 2], y.depth[z] = (y.depth[M] >= y.depth[F] ? y.depth[M] : y.depth[F]) + 1, W[M * 2 + 1] = W[F * 2 + 1] = z, y.heap[1] = z++, ct(y, W, 1), y.heap_len >= 2;);
                y.heap[--y.heap_max] = y.heap[1];
                (function (nt, yt) {
                  var Jt;
                  var St;
                  var Qt;
                  var dt;
                  var we;
                  var Re;
                  var zt = yt.dyn_tree;
                  var cr = yt.max_code;
                  var jn = yt.stat_desc.static_tree;
                  var Pn = yt.stat_desc.has_stree;
                  var Un = yt.stat_desc.extra_bits;
                  var dr = yt.stat_desc.extra_base;
                  var te = yt.stat_desc.max_length;
                  var _e = 0;
                  for (dt = 0; dt <= w; dt++) {
                    nt.bl_count[dt] = 0;
                  }
                  zt[nt.heap[nt.heap_max] * 2 + 1] = 0;
                  Jt = nt.heap_max + 1;
                  for (; Jt < h; Jt++) {
                    if (te < (dt = zt[zt[(St = nt.heap[Jt]) * 2 + 1] * 2 + 1] + 1)) {
                      dt = te;
                      _e++;
                    }
                    zt[St * 2 + 1] = dt;
                    if (!(cr < St)) {
                      nt.bl_count[dt]++;
                      we = 0;
                      if (dr <= St) {
                        we = Un[St - dr];
                      }
                      Re = zt[St * 2];
                      nt.opt_len += Re * (dt + we);
                      if (Pn) {
                        nt.static_len += Re * (jn[St * 2 + 1] + we);
                      }
                    }
                  }
                  if (_e !== 0) {
                    do {
                      for (dt = te - 1; nt.bl_count[dt] === 0;) {
                        dt--;
                      }
                      nt.bl_count[dt]--;
                      nt.bl_count[dt + 1] += 2;
                      nt.bl_count[te]--;
                      _e -= 2;
                    } while (_e > 0);
                    for (dt = te; dt !== 0; dt--) {
                      for (St = nt.bl_count[dt]; St !== 0;) {
                        if (!(cr < (Qt = nt.heap[--Jt]))) {
                          if (zt[Qt * 2 + 1] !== dt) {
                            nt.opt_len += (dt - zt[Qt * 2 + 1]) * zt[Qt * 2];
                            zt[Qt * 2 + 1] = dt;
                          }
                          St--;
                        }
                      }
                    }
                  }
                })(y, E);
                ht(W, st, y.bl_count);
              }
              function l(y, E, M) {
                var F;
                var z;
                var W = -1;
                var V = E[1];
                var H = 0;
                var K = 7;
                var st = 4;
                if (V === 0) {
                  K = 138;
                  st = 3;
                }
                E[(M + 1) * 2 + 1] = 65535;
                F = 0;
                for (; F <= M; F++) {
                  z = V;
                  V = E[(F + 1) * 2 + 1];
                  if (!(++H < K) || z !== V) {
                    if (H < st) {
                      y.bl_tree[z * 2] += H;
                    } else if (z !== 0) {
                      if (z !== W) {
                        y.bl_tree[z * 2]++;
                      }
                      y.bl_tree[A * 2]++;
                    } else if (H <= 10) {
                      y.bl_tree[C * 2]++;
                    } else {
                      y.bl_tree[D * 2]++;
                    }
                    W = z;
                    st = (H = 0) === V ? (K = 138, 3) : z === V ? (K = 6, 3) : (K = 7, 4);
                  }
                }
              }
              function N(y, E, M) {
                var F;
                var z;
                var W = -1;
                var V = E[1];
                var H = 0;
                var K = 7;
                var st = 4;
                if (V === 0) {
                  K = 138;
                  st = 3;
                }
                F = 0;
                for (; F <= M; F++) {
                  z = V;
                  V = E[(F + 1) * 2 + 1];
                  if (!(++H < K) || z !== V) {
                    if (H < st) {
                      while (Z(y, z, y.bl_tree), --H != 0);
                    } else if (z !== 0) {
                      if (z !== W) {
                        Z(y, z, y.bl_tree);
                        H--;
                      }
                      Z(y, A, y.bl_tree);
                      G(y, H - 3, 2);
                    } else if (H <= 10) {
                      Z(y, C, y.bl_tree);
                      G(y, H - 3, 3);
                    } else {
                      Z(y, D, y.bl_tree);
                      G(y, H - 11, 7);
                    }
                    W = z;
                    st = (H = 0) === V ? (K = 138, 3) : z === V ? (K = 6, 3) : (K = 7, 4);
                  }
                }
              }
              c(U);
              var $ = false;
              function _(y, E, M, F) {
                G(y, (d << 1) + (F ? 1 : 0), 3);
                (function (z, W, V, H) {
                  it(z);
                  X(z, V);
                  X(z, ~V);
                  r.arraySet(z.pending_buf, z.window, W, V, z.pending);
                  z.pending += V;
                })(y, E, M);
              }
              s._tr_init = function (y) {
                if (!$) {
                  (function () {
                    var E;
                    var M;
                    var F;
                    var z;
                    var W;
                    var V = new Array(w + 1);
                    for (z = F = 0; z < p - 1; z++) {
                      R[z] = F;
                      E = 0;
                      for (; E < 1 << O[z]; E++) {
                        u[F++] = z;
                      }
                    }
                    u[F - 1] = z;
                    z = W = 0;
                    for (; z < 16; z++) {
                      U[z] = W;
                      E = 0;
                      for (; E < 1 << P[z]; E++) {
                        B[W++] = z;
                      }
                    }
                    for (W >>= 7; z < f; z++) {
                      U[z] = W << 7;
                      E = 0;
                      for (; E < 1 << P[z] - 7; E++) {
                        B[256 + W++] = z;
                      }
                    }
                    for (M = 0; M <= w; M++) {
                      V[M] = 0;
                    }
                    for (E = 0; E <= 143;) {
                      Y[E * 2 + 1] = 8;
                      E++;
                      V[8]++;
                    }
                    while (E <= 255) {
                      Y[E * 2 + 1] = 9;
                      E++;
                      V[9]++;
                    }
                    while (E <= 279) {
                      Y[E * 2 + 1] = 7;
                      E++;
                      V[7]++;
                    }
                    while (E <= 287) {
                      Y[E * 2 + 1] = 8;
                      E++;
                      V[8]++;
                    }
                    ht(Y, b + 1, V);
                    E = 0;
                    for (; E < f; E++) {
                      k[E * 2 + 1] = 5;
                      k[E * 2] = lt(E, 5);
                    }
                    tt = new J(Y, O, m + 1, b, w);
                    j = new J(k, P, 0, f, w);
                    et = new J(new Array(0), T, 0, v, x);
                  })();
                  $ = true;
                }
                y.l_desc = new L(y.dyn_ltree, tt);
                y.d_desc = new L(y.dyn_dtree, j);
                y.bl_desc = new L(y.bl_tree, et);
                y.bi_buf = 0;
                y.bi_valid = 0;
                rt(y);
              };
              s._tr_stored_block = _;
              s._tr_flush_block = function (y, E, M, F) {
                var z;
                var W;
                var V = 0;
                if (y.level > 0) {
                  if (y.strm.data_type === 2) {
                    y.strm.data_type = function (H) {
                      var K;
                      var st = 4093624447;
                      for (K = 0; K <= 31; K++, st >>>= 1) {
                        if (st & 1 && H.dyn_ltree[K * 2] !== 0) {
                          return i;
                        }
                      }
                      if (H.dyn_ltree[18] !== 0 || H.dyn_ltree[20] !== 0 || H.dyn_ltree[26] !== 0) {
                        return n;
                      }
                      for (K = 32; K < m; K++) {
                        if (H.dyn_ltree[K * 2] !== 0) {
                          return n;
                        }
                      }
                      return i;
                    }(y);
                  }
                  _t(y, y.l_desc);
                  _t(y, y.d_desc);
                  V = function (H) {
                    var K;
                    l(H, H.dyn_ltree, H.l_desc.max_code);
                    l(H, H.dyn_dtree, H.d_desc.max_code);
                    _t(H, H.bl_desc);
                    K = v - 1;
                    for (; K >= 3 && H.bl_tree[q[K] * 2 + 1] === 0; K--);
                    H.opt_len += (K + 1) * 3 + 5 + 5 + 4;
                    return K;
                  }(y);
                  z = y.opt_len + 3 + 7 >>> 3;
                  if ((W = y.static_len + 3 + 7 >>> 3) <= z) {
                    z = W;
                  }
                } else {
                  z = W = M + 5;
                }
                if (M + 4 <= z && E !== -1) {
                  _(y, E, M, F);
                } else if (y.strategy === 4 || W === z) {
                  G(y, 2 + (F ? 1 : 0), 3);
                  kt(y, Y, k);
                } else {
                  G(y, 4 + (F ? 1 : 0), 3);
                  (function (H, K, st, nt) {
                    var yt;
                    G(H, K - 257, 5);
                    G(H, st - 1, 5);
                    G(H, nt - 4, 4);
                    yt = 0;
                    for (; yt < nt; yt++) {
                      G(H, H.bl_tree[q[yt] * 2 + 1], 3);
                    }
                    N(H, H.dyn_ltree, K - 1);
                    N(H, H.dyn_dtree, st - 1);
                  })(y, y.l_desc.max_code + 1, y.d_desc.max_code + 1, V + 1);
                  kt(y, y.dyn_ltree, y.dyn_dtree);
                }
                rt(y);
                if (F) {
                  it(y);
                }
              };
              s._tr_tally = function (y, E, M) {
                y.pending_buf[y.d_buf + y.last_lit * 2] = E >>> 8 & 255;
                y.pending_buf[y.d_buf + y.last_lit * 2 + 1] = E & 255;
                y.pending_buf[y.l_buf + y.last_lit] = M & 255;
                y.last_lit++;
                if (E === 0) {
                  y.dyn_ltree[M * 2]++;
                } else {
                  y.matches++;
                  E--;
                  y.dyn_ltree[(u[M] + m + 1) * 2]++;
                  y.dyn_dtree[I(E) * 2]++;
                }
                return y.last_lit === y.lit_bufsize - 1;
              };
              s._tr_align = function (y) {
                G(y, 2, 3);
                Z(y, S, Y);
                (function (E) {
                  if (E.bi_valid === 16) {
                    X(E, E.bi_buf);
                    E.bi_buf = 0;
                    E.bi_valid = 0;
                  } else if (E.bi_valid >= 8) {
                    E.pending_buf[E.pending++] = E.bi_buf & 255;
                    E.bi_buf >>= 8;
                    E.bi_valid -= 8;
                  }
                })(y);
              };
            }, {
              "../utils/common": 41
            }],
            53: [function (t, o, s) {
              o.exports = function () {
                this.input = null;
                this.next_in = 0;
                this.avail_in = 0;
                this.total_in = 0;
                this.output = null;
                this.next_out = 0;
                this.avail_out = 0;
                this.total_out = 0;
                this.msg = "";
                this.state = null;
                this.data_type = 2;
                this.adler = 0;
              };
            }, {}],
            54: [function (t, o, s) {
              (function (r) {
                (function (i, n) {
                  if (!i.setImmediate) {
                    var c;
                    var d;
                    var p;
                    var m;
                    var b = 1;
                    var f = {};
                    var v = false;
                    var h = i.document;
                    var w = Object.getPrototypeOf && Object.getPrototypeOf(i);
                    w = w && w.setTimeout ? w : i;
                    c = {}.toString.call(i.process) === "[object process]" ? function (A) {
                      process.nextTick(function () {
                        x(A);
                      });
                    } : function () {
                      if (i.postMessage && !i.importScripts) {
                        var A = true;
                        var C = i.onmessage;
                        i.onmessage = function () {
                          A = false;
                        };
                        i.postMessage("", "*");
                        i.onmessage = C;
                        return A;
                      }
                    }() ? (m = "setImmediate$" + Math.random() + "$", i.addEventListener ? i.addEventListener("message", S, false) : i.attachEvent("onmessage", S), function (A) {
                      i.postMessage(m + A, "*");
                    }) : i.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function (A) {
                      x(A.data);
                    }, function (A) {
                      p.port2.postMessage(A);
                    }) : h && "onreadystatechange" in h.createElement("script") ? (d = h.documentElement, function (A) {
                      var C = h.createElement("script");
                      C.onreadystatechange = function () {
                        x(A);
                        C.onreadystatechange = null;
                        d.removeChild(C);
                        C = null;
                      };
                      d.appendChild(C);
                    }) : function (A) {
                      setTimeout(x, 0, A);
                    };
                    w.setImmediate = function (A) {
                      if (typeof A != "function") {
                        A = new Function("" + A);
                      }
                      for (var C = new Array(arguments.length - 1), D = 0; D < C.length; D++) {
                        C[D] = arguments[D + 1];
                      }
                      var O = {
                        callback: A,
                        args: C
                      };
                      f[b] = O;
                      c(b);
                      return b++;
                    };
                    w.clearImmediate = g;
                  }
                  function g(A) {
                    delete f[A];
                  }
                  function x(A) {
                    if (v) {
                      setTimeout(x, 0, A);
                    } else {
                      var C = f[A];
                      if (C) {
                        v = true;
                        try {
                          (function (D) {
                            var O = D.callback;
                            var P = D.args;
                            switch (P.length) {
                              case 0:
                                O();
                                break;
                              case 1:
                                O(P[0]);
                                break;
                              case 2:
                                O(P[0], P[1]);
                                break;
                              case 3:
                                O(P[0], P[1], P[2]);
                                break;
                              default:
                                O.apply(n, P);
                            }
                          })(C);
                        } finally {
                          g(A);
                          v = false;
                        }
                      }
                    }
                  }
                  function S(A) {
                    if (A.source === i && typeof A.data == "string" && A.data.indexOf(m) === 0) {
                      x(+A.data.slice(m.length));
                    }
                  }
                })(typeof self === "undefined" ? r === undefined ? this : r : self);
              }).call(this, typeof ve !== "undefined" ? ve : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            }, {}]
          }, {}, [10])(10);
        });
      })(Oe);
    }
    return Oe.exports;
  }
  var ln = an();
  const cn = sn(ln);
  const dn = "swwc-datatable-host";
  let wt = null;
  let Q = null;
  let mt = "";
  let Mt = false;
  let bt = [];
  let ot = [];
  let gt = "table";
  let vt = {};
  let Ft = null;
  let jt = null;
  function un(e) {
    bt = e.data;
    ot = e.fields;
    mt = "";
    gt = At() ? "grid" : "table";
    Mt = false;
    vt = {};
    fn();
    if (wt) {
      pt();
      return;
    }
    wt = document.createElement("div");
    wt.id = dn;
    wt.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:auto;";
    document.body.appendChild(wt);
    Q = wt.attachShadow({
      mode: "open"
    });
    const a = document.createElement("link");
    a.rel = "stylesheet";
    a.href = "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap";
    Q.appendChild(a);
    const t = document.createElement("style");
    t.textContent = on;
    Q.appendChild(t);
    pt();
    document.addEventListener("keydown", or);
  }
  function Yt() {
    document.removeEventListener("keydown", or);
    if (jt) {
      document.removeEventListener("mousemove", jt.onMouseMove);
      document.removeEventListener("mouseup", jt.onMouseUp);
      jt = null;
    }
    if (wt) {
      wt.remove();
      wt = null;
      Q = null;
    }
    bt = [];
    ot = [];
    gt = "table";
    Mt = false;
    vt = {};
  }
  function or(e) {
    if (e.key === "Escape") {
      Yt();
    }
  }
  function ft(e) {
    const a = document.createElement("div");
    a.textContent = e;
    return a.innerHTML;
  }
  function fn() {
    const a = At();
    for (const t of ot) {
      let o;
      if (a && t.name === "Image URL") {
        o = 360;
      } else {
        switch (t.type) {
          case "image":
            o = 80;
            break;
          case "number":
            o = 100;
            break;
          case "link":
            o = 240;
            break;
          case "html":
            o = 280;
            break;
          default:
            o = 180;
        }
      }
      vt[t.name] = Math.max(o, 80);
    }
  }
  function hn() {
    if (!mt.trim()) {
      return bt;
    }
    const e = mt.toLowerCase();
    return bt.filter(a => ot.some(t => (a[t.name] || "").toLowerCase().includes(e)));
  }
  function Be(e) {
    if (!e || !e.startsWith("http://") && !e.startsWith("https://")) {
      return false;
    } else {
      return /\.(jpg|jpeg|png|gif|webp|avif|ico|bmp|svg)(\?|#|$)/i.test(e);
    }
  }
  function At() {
    return ot.some(e => e.name === "Image URL");
  }
  function sr(e, a) {
    if (!a) {
      return "<span class=\"dt-text\">—</span>";
    }
    if (e.type === "image") {
      return `<img src="${ft(a)}" alt="" class="dt-img" loading="lazy" />`;
    }
    if (e.type === "link" && Be(a)) {
      const t = ft(a);
      return `<div class="dt-img-cell">
      <img src="${t}" alt="" class="dt-img-thumb" loading="lazy" />
      <a href="${t}" target="_blank" rel="noopener noreferrer" class="dt-link dt-link-truncate">${t}</a>
      <button class="dt-dl-btn" data-dl-url="${t}" title="Download image">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>`;
    }
    if (e.type === "link") {
      return `<a href="${ft(a)}" target="_blank" rel="noopener noreferrer" class="dt-link">${ft(a)}</a>`;
    } else if (e.type === "html") {
      return `<div class="dt-code-block">${ft(a)}</div>`;
    } else {
      return `<span class="dt-text">${ft(a)}</span>`;
    }
  }
  function pn() {
    return `
    <div class="dt-header">
      <div class="dt-title">
        <span class="dt-title-text">${At() ? "Image Gallery" : "Data View"}</span>
        <span class="dt-badge">${bt.length} ${At() ? "images" : "rows"}</span>
        ${At() ? "" : `<span class="dt-badge">${ot.length} columns</span>`}
      </div>
      <div class="dt-header-actions">
        ${At() ? `<button class="dt-export-btn" id="swwc-dt-zip" title="Download all images as ZIP">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          ZIP
        </button>` : ""}
        <button class="dt-export-btn" id="swwc-dt-xlsx" title="Export to Excel">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Excel
        </button>
        <button class="dt-export-btn" id="swwc-dt-csv" title="Export to CSV">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M4 7l3 3 3-3M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          CSV
        </button>
        <button class="dt-export-btn" id="swwc-dt-json" title="Export to JSON">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 2C3 2 2 3 2 4v2c0 1-1 1-1 1s1 0 1 1v2c0 1 1 2 2 2M10 2c1 0 2 1 2 2v2c0 1 1 1 1 1s-1 0-1 1v2c0 1-1 2-2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          JSON
        </button>
        <button class="dt-close" id="swwc-dt-minimize" title="Minimize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <button class="dt-close" id="swwc-dt-close" title="Close (Esc)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
  `;
  }
  function mn() {
    const e = gt === "table" ? " dt-view-btn-active" : "";
    const a = gt === "row" ? " dt-view-btn-active" : "";
    const t = gt === "grid" ? " dt-view-btn-active" : "";
    const o = At();
    return `
    <div class="dt-toolbar">
      <div class="dt-toolbar-search">
        <svg class="dt-search-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.5" />
          <path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <input class="dt-search-input" type="text" placeholder="Search rows..." id="swwc-dt-search" value="${ft(mt)}" />
        ${mt ? `<button class="dt-search-clear" id="swwc-dt-clear">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>` : ""}
      </div>
      <div class="dt-view-toggle">
        ${o ? `<button class="dt-view-btn${t}" id="swwc-dt-view-grid" title="Grid view">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2" />
            <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2" />
            <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </button>` : ""}
        <button class="dt-view-btn${e}" id="swwc-dt-view-table" title="Table view">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3h12M2 6.5h12M2 10h12M2 13.5h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          </svg>
        </button>
        <button class="dt-view-btn${a}" id="swwc-dt-view-row" title="Row view">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="12" height="4" rx="1" stroke="currentColor" stroke-width="1.2" />
            <rect x="2" y="10" width="12" height="4" rx="1" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </button>
      </div>
    </div>
  `;
  }
  function gn(e) {
    const a = 32 + ot.reduce((r, i) => r + (vt[i.name] || 180), 0);
    const t = {
      text: {
        bg: "#eff6ff",
        border: "#bfdbfe"
      },
      link: {
        bg: "#faf5ff",
        border: "#e9d5ff"
      },
      image: {
        bg: "#ecfdf5",
        border: "#a7f3d0"
      },
      video: {
        bg: "#fff7ed",
        border: "#fed7aa"
      },
      number: {
        bg: "#fef9ec",
        border: "#fde68a"
      },
      html: {
        bg: "#fdf2f8",
        border: "#fbcfe8"
      }
    };
    const o = ot.map((r, i) => {
      const n = vt[r.name] || 180;
      const c = t[r.type] || t.text;
      return `<th class="dt-th dt-th-field" style="width:${n}px;position:relative;background:${c.bg};border-bottom:2px solid ${c.border}" data-field="${ft(r.name)}" data-field-index="${i}" draggable="true">
      <span class="dt-th-label" data-field-id="${ft(r.id)}">${ft(r.name)}</span>
      <button class="dt-th-delete" data-delete-field="${ft(r.id)}" title="Remove column">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
      <div class="dt-resize-handle" data-resize="${ft(r.name)}"></div>
    </th>`;
    }).join("");
    let s;
    if (e.length === 0) {
      s = `<tr><td class="dt-td dt-empty" colspan="${ot.length + 1}">${mt ? "No matching rows" : "No data"}</td></tr>`;
    } else {
      s = e.map((r, i) => {
        const n = ot.map(c => {
          const d = r[c.name] || "";
          return `<td class="dt-td${c.type === "image" ? " dt-td-img" : ""}" title="${ft(d)}">${sr(c, d)}</td>`;
        }).join("");
        return `<tr class="dt-tr"><td class="dt-td dt-td-num">${i + 1}</td>${n}</tr>`;
      }).join("");
    }
    return `
    <div class="dt-table-wrap" id="swwc-dt-table-wrap">
      <table class="dt-table" style="width:${a}px">
        <thead>
          <tr>
            <th class="dt-th dt-th-num" style="width:32px">#</th>
            ${o}
          </tr>
        </thead>
        <tbody>
          ${s}
        </tbody>
      </table>
    </div>
  `;
  }
  function bn(e) {
    if (e.length === 0) {
      return `<div class="dt-row-view">
      <div class="dt-empty" style="padding:40px">${mt ? "No matching rows" : "No data"}</div>
    </div>`;
    }
    const a = ot.find(r => r.type === "image");
    const t = a ? null : ot.find(r => {
      if (r.type !== "link") {
        return false;
      }
      const i = e.slice(0, 5);
      return i.filter(n => Be(n[r.name] || "")).length >= Math.ceil(i.length / 2);
    });
    const o = a || t;
    return `
    <div class="dt-row-view">
      <div class="dt-row-grid">
        ${e.map((r, i) => {
      const n = o && r[o.name] || "";
      const c = o && n && (o.type === "image" || Be(n));
      const d = {
        text: {
          bg: "#eff6ff",
          border: "#bfdbfe"
        },
        link: {
          bg: "#faf5ff",
          border: "#e9d5ff"
        },
        image: {
          bg: "#ecfdf5",
          border: "#a7f3d0"
        },
        video: {
          bg: "#fff7ed",
          border: "#fed7aa"
        },
        number: {
          bg: "#fef9ec",
          border: "#fde68a"
        },
        html: {
          bg: "#fdf2f8",
          border: "#fbcfe8"
        }
      };
      const m = ot.filter(f => !c || f.id !== o.id).map(f => {
        const v = r[f.name] || "";
        const h = d[f.type] || d.text;
        return `
          <div class="dt-card-field" style="background:${h.bg};border-left:3px solid ${h.border}">
            <div class="dt-card-label">${ft(f.name)}</div>
            <div class="dt-card-value">${sr(f, v)}</div>
          </div>
        `;
      }).join("");
      const b = c ? `
      <div class="dt-card-hero">
        <img src="${ft(n)}" alt="" class="dt-card-hero-img" loading="lazy" />
      </div>
    ` : "";
      return `
      <div class="dt-card${c ? " dt-card-has-hero" : ""}">
        ${b}
        <div class="dt-card-header">
          <span>Row ${i + 1}</span>
        </div>
        <div class="dt-card-body">
          ${m}
        </div>
      </div>
    `;
    }).join("")}
      </div>
    </div>
  `;
  }
  function vn(e) {
    if (e.length === 0) {
      return `<div class="dt-grid-view">
      <div class="dt-empty" style="padding:40px">${mt ? "No matching images" : "No images"}</div>
    </div>`;
    } else {
      return `
    <div class="dt-grid-view">
      ${e.map(t => {
        const o = t["Image URL"] || "";
        const s = t["Alt Text"] || "";
        const r = t.Width || "";
        const i = t.Height || "";
        const n = ft(o);
        const c = r && i ? `${r}×${i}` : "";
        return `
      <div class="dt-pin">
        ${o ? `<img src="${n}" alt="${ft(s)}" class="dt-pin-img" loading="lazy" />` : "<div class=\"dt-pin-placeholder\">No image</div>"}
        <div class="dt-pin-hover">
          ${c ? `<span class="dt-pin-size">${c}</span>` : ""}
          <div class="dt-pin-actions">
            <button class="dt-pin-dl dt-dl-btn" data-dl-url="${n}" title="Download">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M5 8l3 3 3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <a href="${n}" target="_blank" rel="noopener noreferrer" class="dt-pin-open" title="Open in new tab">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.5 2H3.5a1.5 1.5 0 00-1.5 1.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5V9.5M9.5 2H14v4.5M14 2L7.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
      }).join("")}
    </div>
  `;
    }
  }
  function yn(e) {
    const t = At() ? "image" : "row";
    const o = At() ? "images" : "rows";
    let s;
    if (mt && e.length !== bt.length) {
      s = `${e.length} of ${bt.length} ${o} match`;
    } else if (e.length > 500) {
      s = `Showing 500 of ${e.length} ${o}`;
    } else {
      s = `${e.length} ${e.length !== 1 ? o : t}`;
    }
    return `
    <div class="dt-footer">
      <div class="dt-footer-left">${s}</div>
      <div class="dt-footer-right"></div>
    </div>
  `;
  }
  function Ne(e) {
    chrome.runtime.sendMessage({
      action: "DT_FIELDS_CHANGED",
      payload: {
        fields: ot,
        renamedKeys: e || null
      }
    });
  }
  function wn(e, a) {
    const t = ot.find(r => r.id === e);
    if (!t || !a.trim() || a === t.name) {
      return;
    }
    const o = t.name;
    const s = a.trim();
    if (vt[o] !== undefined) {
      vt[s] = vt[o];
      delete vt[o];
    }
    for (const r of bt) {
      if (o in r) {
        r[s] = r[o];
        delete r[o];
      }
    }
    t.name = s;
    Ne({
      [o]: s
    });
    pt();
  }
  function _n(e) {
    const a = ot.findIndex(o => o.id === e);
    if (a < 0) {
      return;
    }
    const t = ot[a].name;
    ot.splice(a, 1);
    delete vt[t];
    for (const o of bt) {
      delete o[t];
    }
    Ne();
    pt();
  }
  function xn(e, a) {
    if (e === a || e < 0 || a < 0 || e >= ot.length || a >= ot.length) {
      return;
    }
    const [t] = ot.splice(e, 1);
    ot.splice(a, 0, t);
    Ne();
    pt();
  }
  function kn() {
    return `
    <div class="dt-minimized-bar" id="swwc-dt-minimized-bar">
      <div class="dt-minimized-left">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.2" />
          <path d="M1 4h12" stroke="currentColor" stroke-width="1.2" />
        </svg>
        <span class="dt-minimized-text">Data View</span>
        <span class="dt-badge">${bt.length} rows</span>
      </div>
      <div class="dt-minimized-actions">
        <button class="dt-minimized-restore" id="swwc-dt-restore" title="Restore">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.2" />
            <path d="M3 3V2a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-1" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </button>
        <button class="dt-minimized-close" id="swwc-dt-min-close" title="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
  `;
  }
  function pt() {
    if (!Q) {
      return;
    }
    const e = Q.querySelector("style");
    const a = Q.querySelector("link");
    Q.innerHTML = "";
    if (a) {
      Q.appendChild(a);
    }
    if (e) {
      Q.appendChild(e);
    }
    if (Mt) {
      wt.style.cssText = "position:fixed;bottom:0;left:0;right:0;height:auto;z-index:2147483647;pointer-events:none;";
      const n = document.createElement("div");
      n.innerHTML = kn();
      Q.appendChild(n);
      const c = Q.getElementById("swwc-dt-restore");
      const d = Q.getElementById("swwc-dt-minimized-bar");
      const p = Q.getElementById("swwc-dt-min-close");
      if (d != null) {
        d.addEventListener("click", m => {
          if (!m.target.closest(".dt-minimized-close")) {
            Mt = false;
            pt();
          }
        });
      }
      if (c != null) {
        c.addEventListener("click", () => {
          Mt = false;
          pt();
        });
      }
      if (p != null) {
        p.addEventListener("click", () => Yt());
      }
      return;
    }
    wt.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:auto;";
    const t = hn();
    const s = t.slice(0, 500);
    const r = gt === "grid" ? vn(s) : gt === "table" ? gn(s) : bn(s);
    const i = document.createElement("div");
    i.className = "dt-overlay";
    i.innerHTML = `
    <div class="dt-modal">
      ${pn()}
      ${mn()}
      ${r}
      ${yn(t)}
    </div>
  `;
    Q.appendChild(i);
    Sn(i);
    En();
    Cn();
    Ln();
    zn();
    An(i);
    $n();
    if (gt === "table") {
      In();
      On();
      Tn();
    }
  }
  function Sn(e) {
    e.addEventListener("click", t => {
      if (t.target.classList.contains("dt-overlay")) {
        Yt();
      }
    });
    const a = Q.getElementById("swwc-dt-close");
    if (a != null) {
      a.addEventListener("click", () => Yt());
    }
  }
  function En() {
    const e = Q.getElementById("swwc-dt-search");
    if (e != null) {
      e.focus();
    }
    if (e && mt) {
      e.setSelectionRange(mt.length, mt.length);
    }
    if (e != null) {
      e.addEventListener("input", t => {
        mt = t.target.value;
        pt();
      });
    }
    const a = Q.getElementById("swwc-dt-clear");
    if (a != null) {
      a.addEventListener("click", () => {
        mt = "";
        pt();
      });
    }
  }
  function Cn() {
    const e = Q.getElementById("swwc-dt-view-grid");
    const a = Q.getElementById("swwc-dt-view-table");
    const t = Q.getElementById("swwc-dt-view-row");
    if (e != null) {
      e.addEventListener("click", () => {
        if (gt !== "grid") {
          gt = "grid";
          pt();
        }
      });
    }
    if (a != null) {
      a.addEventListener("click", () => {
        if (gt !== "table") {
          gt = "table";
          pt();
        }
      });
    }
    if (t != null) {
      t.addEventListener("click", () => {
        if (gt !== "row") {
          gt = "row";
          pt();
        }
      });
    }
  }
  function An(e) {
    e.addEventListener("click", a => {
      const t = a.target.closest("a.dt-link");
      if (t) {
        a.preventDefault();
        a.stopPropagation();
        window.open(t.href, "_blank", "noopener,noreferrer");
      }
    });
  }
  function zn() {
    const e = Q.getElementById("swwc-dt-minimize");
    if (e != null) {
      e.addEventListener("click", () => {
        Mt = true;
        pt();
      });
    }
  }
  function In() {
    if (!Q) {
      return;
    }
    Q.querySelectorAll(".dt-th-delete").forEach(o => {
      o.addEventListener("click", s => {
        s.stopPropagation();
        const r = o.dataset.deleteField;
        _n(r);
      });
    });
    Q.querySelectorAll(".dt-th-label").forEach(o => {
      o.addEventListener("dblclick", s => {
        s.preventDefault();
        s.stopPropagation();
        const r = o;
        const i = r.dataset.fieldId;
        const n = ot.find(m => m.id === i);
        if (!n) {
          return;
        }
        const c = r.closest(".dt-th");
        const d = document.createElement("input");
        d.type = "text";
        d.value = n.name;
        d.className = "dt-th-rename-input";
        const p = () => {
          wn(i, d.value);
        };
        d.addEventListener("blur", p);
        d.addEventListener("keydown", m => {
          if (m.key === "Enter") {
            m.preventDefault();
            d.blur();
          }
          if (m.key === "Escape") {
            d.value = n.name;
            d.blur();
          }
        });
        r.style.display = "none";
        c.insertBefore(d, r.nextSibling);
        d.focus();
        d.select();
      });
    });
    Q.querySelectorAll(".dt-th-field").forEach(o => {
      o.addEventListener("dragstart", s => {
        Ft = parseInt(o.dataset.fieldIndex, 10);
        o.classList.add("dt-th-dragging");
        s.dataTransfer.effectAllowed = "move";
      });
      o.addEventListener("dragover", s => {
        s.preventDefault();
        s.dataTransfer.dropEffect = "move";
        o.classList.add("dt-th-dragover");
      });
      o.addEventListener("dragleave", () => {
        o.classList.remove("dt-th-dragover");
      });
      o.addEventListener("drop", s => {
        s.preventDefault();
        o.classList.remove("dt-th-dragover");
        const r = parseInt(o.dataset.fieldIndex, 10);
        if (Ft !== null && Ft !== r) {
          xn(Ft, r);
        }
        Ft = null;
      });
      o.addEventListener("dragend", () => {
        o.classList.remove("dt-th-dragging");
        Ft = null;
      });
    });
  }
  function Ln() {
    const e = Q.getElementById("swwc-dt-xlsx");
    if (e != null) {
      e.addEventListener("click", () => ar("xlsx"));
    }
    const a = Q.getElementById("swwc-dt-csv");
    if (a != null) {
      a.addEventListener("click", () => ar("csv"));
    }
    const t = Q.getElementById("swwc-dt-json");
    if (t != null) {
      t.addEventListener("click", () => Nn());
    }
    const o = Q.getElementById("swwc-dt-zip");
    if (o != null) {
      o.addEventListener("click", () => Dn());
    }
  }
  function $n() {
    if (Q) {
      Q.querySelectorAll(".dt-dl-btn").forEach(e => {
        e.addEventListener("click", a => {
          a.stopPropagation();
          const t = e.dataset.dlUrl;
          if (t) {
            Rn(t);
          }
        });
      });
    }
  }
  function Tn() {
    const e = Q.getElementById("swwc-dt-table-wrap");
    if (e) {
      e.addEventListener("scroll", () => {
        if (e.scrollTop > 0) {
          e.classList.add("dt-table-wrap-scrolled");
        } else {
          e.classList.remove("dt-table-wrap-scrolled");
        }
      });
    }
  }
  function On() {
    if (!Q) {
      return;
    }
    Q.querySelectorAll(".dt-resize-handle").forEach(a => {
      const t = a;
      const o = t.dataset.resize;
      t.addEventListener("dblclick", s => {
        s.preventDefault();
        Bn(o);
      });
      t.addEventListener("mousedown", s => {
        const r = s;
        r.preventDefault();
        r.stopPropagation();
        const i = t.parentElement;
        const n = r.clientX;
        const c = i.offsetWidth;
        const d = Q.querySelector(".dt-modal");
        if (d) {
          d.style.cursor = "col-resize";
        }
        t.classList.add("dt-resize-handle-active");
        const p = b => {
          const f = b.clientX - n;
          const v = Math.max(80, c + f);
          i.style.width = `${v}px`;
        };
        const m = b => {
          const f = b.clientX - n;
          const v = Math.max(80, c + f);
          vt[o] = v;
          t.classList.remove("dt-resize-handle-active");
          if (d) {
            d.style.cursor = "";
          }
          document.removeEventListener("mousemove", p);
          document.removeEventListener("mouseup", m);
          jt = null;
          pt();
        };
        jt = {
          fieldName: o,
          startX: n,
          startWidth: c,
          thElement: i,
          onMouseMove: p,
          onMouseUp: m
        };
        document.addEventListener("mousemove", p);
        document.addEventListener("mouseup", m);
      });
    });
  }
  function Bn(e) {
    if (!Q) {
      return;
    }
    const a = 80;
    const t = 500;
    const o = 28;
    const s = document.createElement("span");
    s.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;";
    s.textContent = e;
    Q.appendChild(s);
    let r = s.offsetWidth;
    Q.removeChild(s);
    const i = Q.querySelector(".dt-table");
    if (i) {
      const n = ot.findIndex(c => c.name === e);
      if (n >= 0) {
        const c = i.querySelectorAll("tbody tr");
        const d = Math.min(c.length, 20);
        for (let p = 0; p < d; p++) {
          const m = c[p].querySelectorAll("td")[n + 1];
          if (m) {
            r = Math.max(r, m.scrollWidth - o);
          }
        }
      }
    }
    vt[e] = Math.min(Math.max(r + o + 10, a), t);
    pt();
  }
  function ar(e) {
    const t = `scraped-data_${new Date().toISOString().split("T")[0]}`;
    chrome.runtime.sendMessage({
      action: "EXPORT_DATA",
      payload: {
        data: bt,
        fields: ot.map(o => o.name),
        filename: t,
        format: e
      }
    });
  }
  function Nn() {
    const e = new Date().toISOString().split("T")[0];
    const a = ot.map(n => n.name);
    const t = bt.map(n => {
      const c = {};
      for (const d of a) {
        c[d] = n[d] || "";
      }
      return c;
    });
    const o = JSON.stringify(t, null, 2);
    const s = new Blob([o], {
      type: "application/json"
    });
    const r = URL.createObjectURL(s);
    const i = document.createElement("a");
    i.href = r;
    i.download = `scraped-data_${e}.json`;
    i.click();
    URL.revokeObjectURL(r);
  }
  function Rn(e) {
    const a = lr(e);
    chrome.runtime.sendMessage({
      action: "DOWNLOAD_IMAGE",
      payload: {
        url: e,
        filename: a
      }
    });
  }
  async function Dn() {
    const e = bt.map(t => t["Image URL"]).filter(t => t && (t.startsWith("http://") || t.startsWith("https://")));
    if (e.length === 0) {
      return;
    }
    const a = Q == null ? undefined : Q.getElementById("swwc-dt-zip");
    if (a) {
      a.textContent = "Downloading...";
      a.disabled = true;
    }
    try {
      const t = new cn();
      let o = 0;
      for (const n of e) {
        try {
          const c = await fetch(n, {
            mode: "cors"
          });
          if (c.ok) {
            const d = await c.blob();
            const p = lr(n);
            const m = t.file(p) ? `${o}_${p}` : p;
            t.file(m, d);
          }
        } catch { }
        o++;
        if (a) {
          a.textContent = `${o}/${e.length}...`;
        }
      }
      const s = await t.generateAsync({
        type: "blob"
      });
      const r = URL.createObjectURL(s);
      const i = document.createElement("a");
      i.href = r;
      i.download = `images_${new Date().toISOString().split("T")[0]}.zip`;
      i.style.display = "none";
      document.body.appendChild(i);
      i.click();
      document.body.removeChild(i);
      URL.revokeObjectURL(r);
    } catch (t) {
      console.error("[SWWC] ZIP download error:", t);
    } finally {
      if (a) {
        a.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\"><path d=\"M7 1v9M4 7l3 3 3-3M2 12h10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /></svg> ZIP";
        a.disabled = false;
      }
    }
  }
  function lr(e) {
    try {
      const t = new URL(e).pathname.split("/").pop() || "image";
      if (/\.\w{2,5}$/.test(t)) {
        return t;
      } else {
        return `${t}.jpg`;
      }
    } catch {
      return "image.jpg";
    }
  }
  function Mn() {
    chrome.runtime.onMessage.addListener((e, a, t) => {
      Fn(e, t);
      return true;
    });
  }
  async function Fn(e, a) {
    try {
      switch (e.action) {
        case "START_PICKER":
          {
            const t = e.payload;
            Ir(t.fieldId, t.fieldName, t.fieldType);
            a({
              success: true
            });
            break;
          }
        case "STOP_PICKER":
          {
            Zt();
            a({
              success: true
            });
            break;
          }
        case "SCRAPE_PAGE":
          {
            const t = e.payload;
            const o = Dr(t.fields);
            a({
              data: o
            });
            break;
          }
        case "HIGHLIGHT_SELECTOR":
          {
            const t = e.payload;
            xe(t.selector, t.color);
            a({
              success: true
            });
            break;
          }
        case "CLEAR_HIGHLIGHTS":
          {
            Et();
            a({
              success: true
            });
            break;
          }
        case "DETECT_PAGINATION":
          {
            const t = Gr();
            a({
              pagination: t
            });
            break;
          }
        case "CLICK_ELEMENT":
          {
            const t = e.payload;
            const o = document.querySelector(t.selector);
            if (o instanceof HTMLElement) {
              o.click();
              a({
                success: true
              });
            } else {
              a({
                success: false,
                error: "Element not found"
              });
            }
            break;
          }
        case "PREVIEW_FIELD":
          {
            const t = e.payload;
            try {
              const o = document.querySelectorAll(t.selector);
              const s = [];
              o.forEach(r => {
                let i = "";
                switch (t.attribute) {
                  case "href":
                    i = (r instanceof HTMLAnchorElement ? r.href : r.getAttribute("href")) || "";
                    break;
                  case "src":
                    i = (r instanceof HTMLImageElement ? r.src : r.getAttribute("src")) || "";
                    break;
                  case "innerHTML":
                    i = r.innerHTML;
                    break;
                  default:
                    i = (r.textContent || "").trim();
                }
                if (i) {
                  s.push(i.substring(0, 150));
                }
              });
              a({
                values: s
              });
            } catch {
              a({
                values: []
              });
            }
            break;
          }
        case "AUTO_DETECT":
          {
            const t = Yr();
            a({
              structures: t
            });
            break;
          }
        case "START_AUTO_DETECT_PICKER":
          {
            Rr();
            a({
              success: true
            });
            break;
          }
        case "STOP_AUTO_DETECT_PICKER":
          {
            Dt();
            a({
              success: true
            });
            break;
          }
        case "SCRAPE_PAGE_DETAIL":
          {
            const t = e.payload;
            const o = Mr(t.fields);
            a({
              row: o
            });
            break;
          }
        case "SCRAPE_VISIBLE":
          {
            const t = e.payload;
            const o = Ie(t.fields);
            a({
              data: o
            });
            break;
          }
        case "SCROLL_PAGE":
          {
            const t = document.documentElement.scrollHeight;
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth"
            });
            await new Promise(s => setTimeout(s, 1500));
            const o = document.documentElement.scrollHeight;
            a({
              scrolled: true,
              heightChanged: o !== t,
              scrollHeight: o
            });
            break;
          }
        case "SCROLL_COLLECT_ALL":
          {
            const t = e.payload;
            const o = [];
            const s = new Set();
            const r = c => {
              for (const d of c) {
                const p = Object.values(d).join("||");
                if (p.trim() && !s.has(p)) {
                  s.add(p);
                  o.push(d);
                }
              }
            };
            window.scrollTo({
              top: 0
            });
            await new Promise(c => setTimeout(c, 300));
            r(Ie(t.fields));
            const i = 50;
            let n = 0;
            for (let c = 0; c < i; c++) {
              const d = o.length;
              const p = document.documentElement.scrollHeight;
              window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: "instant"
              });
              await new Promise(f => setTimeout(f, 800));
              r(Ie(t.fields));
              const m = document.documentElement.scrollHeight;
              if (window.scrollY + window.innerHeight >= m - 50 && o.length === d && m === p) {
                n++;
                if (n >= 2) {
                  break;
                }
              } else {
                n = 0;
              }
            }
            window.scrollTo({
              top: 0
            });
            a({
              data: o
            });
            break;
          }
        case "EXTRACT_IMAGES":
          {
            const t = Hr();
            a({
              data: t
            });
            break;
          }
        case "GET_PAGE_INFO":
          {
            a({
              title: document.title,
              url: window.location.href,
              elementCount: document.querySelectorAll("*").length
            });
            break;
          }
        case "SHOW_DATA_TABLE":
          {
            const t = e.payload;
            un({
              data: t.data,
              fields: t.fields
            });
            a({
              success: true
            });
            break;
          }
        case "HIDE_DATA_TABLE":
          {
            Yt();
            a({
              success: true
            });
            break;
          }
        default:
          a({
            error: "Unknown action"
          });
      }
    } catch (t) {
      console.error("[SWWC] Content script error:", t);
      a({
        error: String(t)
      });
    }
  }
  Mn();
  console.log("[SWWC] Content script loaded");
})();