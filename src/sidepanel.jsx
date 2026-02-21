import React from 'react';
import ReactDOM from 'react-dom/client';
import { formatTimeRemaining } from "./licence.js";
function generateId() {
  return crypto.randomUUID();
}
function SidepanelHeader({
  recipeName: recipeName,
  onNameChange: onNameChange,
  onSave: onSave,
  saveStatus: saveStatus,
  canSave: canSave,
  onOpenRecipes: onOpenRecipes,
  isLicensed: isLicensed,
  trialExpired: trialExpired,
  trialRemainingMs: trialRemainingMs,
  onOpenLicence: onOpenLicence,
  urlPattern: urlPattern,
  onUrlChange: onUrlChange
}) {
  const k = trialRemainingMs < 3600000;
  return <div className="sidepanel-header-wrap">{<div className="sidepanel-header">{<div className="sidepanel-header-left">{isLicensed ? <input className="header-name-input" type="text" placeholder="Recipe name" value={recipeName} onChange={j => onNameChange(j.target.value)} /> : <a className={`header-trial-link ${k || trialExpired ? "header-trial-link-urgent" : ""}`} href="https://nocodewebscraper.com/" target="_blank" rel="noopener noreferrer">{trialExpired ? "Trial expired — Get Lifetime Access" : <>Trial: {<strong>{formatTimeRemaining(trialRemainingMs)}</strong>} — Get Lifetime Access</>}{<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{<path d="M5 1h6v6M11 1L4.5 7.5" />}</svg>}</a>}</div>}{<div className="header-actions">{<button className="save-icon-btn" onClick={onOpenLicence} title={isLicensed ? "Licence active" : "Activate licence"}>{<svg width="16" height="16" viewBox="0 0 24 24" fill="none">{<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke={isLicensed ? "#16A34A" : "currentColor"} strokeWidth="1.5" />}{<path d="M7 11V7a5 5 0 0110 0v4" stroke={isLicensed ? "#16A34A" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}{<button className="save-icon-btn" onClick={onOpenRecipes} title="Saved recipes">{<svg width="16" height="16" viewBox="0 0 24 24" fill="none">{<path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</button>}{<button className="save-icon-btn" onClick={onSave} disabled={!canSave || saveStatus === "saving"} title={saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Save failed" : "Save recipe"}>{saveStatus === "saved" ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M3 8.5l3.5 3.5 6.5-7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}</svg> : saveStatus === "saving" ? <div className="spinner" style={{
            width: 14,
            height: 14
          }} /> : saveStatus === "error" ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M4 4l8 8M12 4l-8 8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />}</svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M12.67 2H3.33C2.6 2 2 2.6 2 3.33v9.34C2 13.4 2.6 14 3.33 14h9.34c.73 0 1.33-.6 1.33-1.33V5.33L12.67 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}{<path d="M11.33 14V9.33H4.67V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}{<path d="M4.67 2v3.33h5.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</button>}</div>}</div>}{!isLicensed && <div className="header-sub-row">{<input className="header-name-input" type="text" placeholder="Recipe name" value={recipeName} onChange={j => onNameChange(j.target.value)} />}{<span className="header-sub-divider" />}{<input className="header-url-input" type="text" placeholder="URL pattern (e.g. amazon.com)" value={urlPattern} onChange={j => onUrlChange(j.target.value)} />}</div>}</div>;
}
const FIELD_COLORS = {
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
function FieldRow({
  field: field,
  index: index,
  isActive: isActive,
  onUpdate: onUpdate,
  onRemove: onRemove,
  onPick: onPick,
  onSelect: onSelect,
  availableSelectors: availableSelectors,
  onDragStart: onDragStart,
  onDragOver: onDragOver,
  onDrop: onDrop,
  onDragEnd: onDragEnd,
  isDragging: isDragging
}) {
  const j = h => {
    const M = h.target.value;
    const S = availableSelectors.find(I => I.selector === M);
    if (S) {
      onUpdate({
        selector: S.selector,
        attribute: S.attribute,
        type: S.type
      });
    }
  };
  const u = h => {
    h.stopPropagation();
    if (!isActive) {
      onSelect();
    }
    onPick();
  };
  return <div className={`field-row ${isActive ? "field-row-active" : ""} ${isDragging ? "field-row-dragging" : ""}`} style={isActive ? undefined : {
    background: (FIELD_COLORS[field.type] || FIELD_COLORS.text).bg,
    borderColor: (FIELD_COLORS[field.type] || FIELD_COLORS.text).border
  }} onClick={onSelect} draggable={true} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} onDragEnd={onDragEnd}>{<div className="field-row-header">{<div className="field-row-drag" onMouseDown={h => h.stopPropagation()}>{<svg width="12" height="12" viewBox="0 0 12 12" fill="none">{<circle cx="4" cy="2.5" r="1" fill="currentColor" />}{<circle cx="8" cy="2.5" r="1" fill="currentColor" />}{<circle cx="4" cy="6" r="1" fill="currentColor" />}{<circle cx="8" cy="6" r="1" fill="currentColor" />}{<circle cx="4" cy="9.5" r="1" fill="currentColor" />}{<circle cx="8" cy="9.5" r="1" fill="currentColor" />}</svg>}</div>}{<span className={`field-row-index ${isActive ? "field-row-index-active" : ""}`}>{index + 1}</span>}{<input className="input input-sm field-name-input" type="text" value={field.name} onChange={h => onUpdate({
        name: h.target.value
      })} onClick={h => h.stopPropagation()} placeholder="Field name" />}{<select className="select field-type-select" value={field.type} onClick={h => h.stopPropagation()} onChange={h => {
        const M = h.target.value;
        onUpdate({
          type: M,
          attribute: {
            text: "textContent",
            link: "href",
            image: "src",
            video: "src",
            number: "textContent",
            html: "innerHTML"
          }[M]
        });
      }}>{<option value="text">Text</option>}{<option value="link">Link</option>}{<option value="image">Image</option>}{<option value="video">Video</option>}{<option value="number">Number</option>}{<option value="html">HTML</option>}</select>}{<button className="btn btn-ghost btn-sm" onClick={h => {
        h.stopPropagation();
        onRemove();
      }} title="Remove field">{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}</div>}{<div className="field-row-selector">{availableSelectors.length > 0 ? <select className="select input-sm field-selector-select" value={field.selector} onClick={h => h.stopPropagation()} onChange={j}>{!field.selector && <option value="">Select a data field...</option>}{availableSelectors.map((h, M) => <option value={h.selector}>{h.name} — {h.sampleValue ? h.sampleValue.substring(0, 50) : "(empty)"}</option>)}</select> : <div className="selector-display">{field.selector ? <code className="selector-text">{field.selector}</code> : <span className="selector-placeholder">No selector — click Pick to select an element</span>}</div>}{<button className="btn btn-primary btn-sm" onClick={u} title="Pick element">{<svg width="16" height="16" viewBox="0 0 24 24" fill="none">{<path d="M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</button>}</div>}</div>;
}
function FieldList({
  fields: fields,
  activeFieldId: activeFieldId,
  onUpdateField: onUpdateField,
  onRemoveField: onRemoveField,
  onPickField: onPickField,
  onSelectField: onSelectField,
  onReorderFields: onReorderFields,
  availableSelectors: availableSelectors
}) {
  const [f, v] = React.useState(null);
  if (fields.length === 0) {
    return <div className="empty-state" style={{
      padding: "var(--space-lg)"
    }}>{<div className="empty-state-text">Click "+ Add" to start defining what data to scrape</div>}</div>;
  }
  const E = u => h => {
    v(u);
    h.dataTransfer.effectAllowed = "move";
  };
  const A = u => {
    u.preventDefault();
    u.dataTransfer.dropEffect = "move";
  };
  const k = u => h => {
    h.preventDefault();
    if (f !== null && f !== u) {
      onReorderFields(f, u);
    }
    v(null);
  };
  const j = () => {
    v(null);
  };
  return <div className="field-list">{fields.map((u, h) => <FieldRow field={u} index={h} isActive={activeFieldId === u.id} onUpdate={M => onUpdateField(u.id, M)} onRemove={() => onRemoveField(u.id)} onPick={() => onPickField(u.id, u.name, u.type)} onSelect={() => onSelectField(activeFieldId === u.id ? null : u.id)} availableSelectors={availableSelectors} onDragStart={E(h)} onDragOver={A} onDrop={k(h)} onDragEnd={j} isDragging={f === h} />)}</div>;
}
function PaginationConfig({
  pagination: pagination,
  onChange: onChange
}) {
  const d = pagination !== null;
  const m = () => {
    onChange(d ? null : {
      type: "click-next",
      nextButtonSelector: "",
      maxPages: 5,
      delayMs: 2000
    });
  };
  const p = async () => {
    const [o] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (o != null && o.id) {
      chrome.tabs.sendMessage(o.id, {
        action: "DETECT_PAGINATION"
      }, r => {
        if (r != null && r.pagination) {
          onChange(r.pagination);
        }
      });
    }
  };
  const x = async () => {
    const [o] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    if (o == null || !o.id) {
      return;
    }
    chrome.tabs.sendMessage(o.id, {
      action: "START_PICKER",
      payload: {
        fieldId: "__pagination_next__",
        fieldName: "Next Page Button"
      }
    });
    const r = f => {
      if (f.action === "ELEMENT_PICKED") {
        const v = f.payload;
        if (v.fieldId !== "__pagination_next__") {
          return;
        }
        if (pagination) {
          onChange({
            ...pagination,
            nextButtonSelector: v.selector
          });
        }
        chrome.runtime.onMessage.removeListener(r);
      }
    };
    chrome.runtime.onMessage.addListener(r);
  };
  return <div className="pagination-section">{<div className="fields-header" style={{
      padding: 0
    }}>{<label className="label" style={{
        marginBottom: 0
      }}>Multi-page Scraping</label>}{<label className="toggle-label">{<input type="checkbox" checked={d} onChange={m} className="toggle-input" />}{<span className="toggle-switch" />}</label>}</div>}{d && pagination && <div className="pagination-config">{<div className="pagination-row">{<label className="label">Pagination Type</label>}{<select className="select" value={pagination.type} onChange={o => onChange({
          ...pagination,
          type: o.target.value
        })}>{<option value="click-next">Click Next Button</option>}{<option value="infinite-scroll">Scroll & Scrape</option>}{<option value="url-pattern">URL Pattern</option>}</select>}</div>}{pagination.type === "click-next" && <div className="pagination-row">{<label className="label">Next Button Selector</label>}{<div className="flex gap-sm">{<input className="input input-sm" type="text" placeholder="CSS selector for next button" value={pagination.nextButtonSelector || ""} onChange={o => onChange({
            ...pagination,
            nextButtonSelector: o.target.value
          })} />}{<button className="btn btn-secondary btn-sm" onClick={x}>Pick</button>}{<button className="btn btn-ghost btn-sm" onClick={p}>Auto</button>}</div>}</div>}{pagination.type === "infinite-scroll" && <div className="pagination-row">{<div className="text-xs text-muted">Automatically scrolls the page to load more content (like Twitter, Reddit, etc.)</div>}</div>}{pagination.type === "url-pattern" && <div className="pagination-row">{<label className="label">URL Template</label>}{<input className="input input-sm" type="text" placeholder="e.g. https://example.com/page/{page}" value={pagination.urlTemplate || ""} onChange={o => onChange({
          ...pagination,
          urlTemplate: o.target.value
        })} />}{<div className="text-xs text-muted" style={{
          marginTop: "var(--space-xs)"
        }}>Use {page} as placeholder for page number</div>}</div>}{<div className="pagination-row-inline">{<div>{<label className="label">{pagination.type === "infinite-scroll" ? "Max Scrolls" : "Max Pages"}</label>}{<input className="input input-sm" type="number" min={1} max={50} value={pagination.maxPages} onChange={o => onChange({
            ...pagination,
            maxPages: Math.min(50, Math.max(1, parseInt(o.target.value) || 1))
          })} style={{
            width: "80px"
          }} />}</div>}{<div>{<label className="label">{pagination.type === "infinite-scroll" ? "Scroll Delay (ms)" : "Delay (ms)"}</label>}{<input className="input input-sm" type="number" min={500} max={10000} step={500} value={pagination.delayMs} onChange={o => onChange({
            ...pagination,
            delayMs: Math.min(10000, Math.max(500, parseInt(o.target.value) || 2000))
          })} style={{
            width: "100px"
          }} />}</div>}</div>}</div>}</div>;
}
function extractUrls(t) {
  return t.split(/[\r\n]+/).map(i => (i.includes(",") ? i.split(",")[0] : i).trim()).filter(i => i.length > 0 && (i.startsWith("http://") || i.startsWith("https://")));
}
function BulkUrlConfig({
  urls: urls,
  onChange: onChange
}) {
  const d = React.useRef(null);
  const m = x => {
    onChange(extractUrls(x.target.value));
  };
  const p = x => {
    var f;
    const o = (f = x.target.files) == null ? undefined : f[0];
    if (!o) {
      return;
    }
    const r = new FileReader();
    r.onload = () => {
      const v = r.result;
      onChange(extractUrls(v));
    };
    r.readAsText(o);
    x.target.value = "";
  };
  return <div className="bulk-config">{<textarea className="input bulk-textarea" rows={5} placeholder="Paste URLs, one per line..." defaultValue={urls.join(`
`)} onChange={m} />}{<div className="bulk-footer">{<div className="bulk-footer-left">{<input ref={d} type="file" accept=".csv,.txt" onChange={p} style={{
          display: "none"
        }} />}{<button className="btn btn-secondary btn-sm" onClick={() => {
          var x;
          if ((x = d.current) == null) {
            return undefined;
          } else {
            return x.click();
          }
        }}>Import CSV</button>}{urls.length > 0 && <button className="btn btn-ghost btn-sm" onClick={() => onChange([])}>Clear</button>}</div>}{urls.length > 0 && <span className="bulk-count">{urls.length} URL{urls.length !== 1 ? "s" : ""} loaded</span>}</div>}</div>;
}
function ActionBar({
  onViewData: onViewData,
  onScrape: onScrape,
  hasData: hasData,
  dataCount: dataCount,
  canScrape: canScrape
}) {
  return <div className="action-bar">{<button className="btn btn-secondary action-btn" onClick={onViewData} disabled={!hasData}>{hasData ? `View Data (${dataCount})` : "View Data"}</button>}{<button className="btn btn-primary action-btn" onClick={onScrape} disabled={!canScrape}>Scrape</button>}</div>;
}
function StatusBar({
  status: status,
  currentPage: currentPage,
  totalPages: totalPages,
  onStop: onStop
}) {
  if (status === "idle" || status === "complete") {
    return null;
  }
  const p = status === "scraping" || status === "paginating" || status === "scrolling" || status === "page-detail";
  const x = () => {
    switch (status) {
      case "picking":
        return "Click an element on the page...";
      case "scraping":
        return "Scraping data...";
      case "paginating":
        return `Scraping page ${currentPage} of ${totalPages}...`;
      case "scrolling":
        return `Scrolling & scraping — scroll ${currentPage} of ${totalPages}...`;
      case "page-detail":
        return `Scraping URL ${currentPage} of ${totalPages}...`;
      case "error":
        return "An error occurred";
      default:
        return "";
    }
  };
  const o = totalPages > 0 ? currentPage / totalPages * 100 : 0;
  return <div className={`status-bar ${status === "error" ? "status-bar-error" : ""}`}>{<div className="status-bar-content">{p ? <div className="spinner" style={{
        width: 14,
        height: 14
      }} /> : null}{<span className="status-bar-text">{x()}</span>}{p && <button className="btn btn-ghost btn-sm" onClick={onStop}>Stop</button>}</div>}{(status === "paginating" || status === "scrolling" || status === "page-detail") && totalPages > 0 && <div className="status-bar-progress">{<div className="status-bar-progress-fill" style={{
        width: `${o}%`
      }} />}</div>}</div>;
}
function SavedRecipesOverlay({
  onLoad: onLoad,
  onClose: onClose
}) {
  const [d, m] = React.useState([]);
  const [p, x] = React.useState(true);
  React.useEffect(() => {
    chrome.runtime.sendMessage({
      action: "GET_RECIPES"
    }, r => {
      if (r != null && r.recipes) {
        m(r.recipes);
      }
      x(false);
    });
  }, []);
  const o = r => {
    chrome.runtime.sendMessage({
      action: "DELETE_RECIPE",
      payload: {
        id: r
      }
    }, () => {
      m(f => f.filter(v => v.id !== r));
    });
  };
  return <div className="saved-recipes-overlay" onClick={onClose}>{<div className="saved-recipes-panel" onClick={r => r.stopPropagation()}>{<div className="saved-recipes-header">{<span className="saved-recipes-title">Saved Recipes</span>}{<button className="save-icon-btn" onClick={onClose} title="Close">{<svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}</div>}{<div className="saved-recipes-body">{p ? <div className="saved-recipes-empty">{<div className="spinner" />}</div> : d.length === 0 ? <div className="saved-recipes-empty">{<svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{
            opacity: 0.3,
            marginBottom: 8
          }}>{<path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}{<span>No saved recipes yet</span>}</div> : d.map(r => <div className="saved-recipe-item">{<div className="saved-recipe-info" onClick={() => {
            onLoad(r);
            onClose();
          }}>{<div className="saved-recipe-name">{r.name || "Untitled"}</div>}{<div className="saved-recipe-meta">{r.fields.length} field{r.fields.length !== 1 ? "s" : ""}{r.urlPattern && <> · {r.urlPattern}</>}</div>}</div>}{<button className="save-icon-btn" onClick={() => o(r.id)} title="Delete">{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}</div>)}</div>}</div>}</div>;
}
function LicencePage({
  onActivated: onActivated,
  onBack: onBack,
  trialExpired: trialExpired,
  licenceData: licenceData,
  onDeactivate: onDeactivate
}) {
  const [x, o] = React.useState("");
  const [r, f] = React.useState("idle");
  const [v, E] = React.useState("");
  const A = () => {
    const j = x.trim();
    if (j) {
      f("validating");
      E("");
      chrome.runtime.sendMessage({
        action: "VALIDATE_LICENCE",
        payload: {
          licenceKey: j
        }
      }, u => {
        if (u != null && u.valid) {
          f("idle");
          onActivated();
        } else {
          f("error");
          E((u == null ? undefined : u.error) || "Invalid licence key");
        }
      });
    }
  };
  const k = () => {
    chrome.runtime.sendMessage({
      action: "DEACTIVATE_LICENCE"
    }, () => {
      onDeactivate();
    });
  };
  if (licenceData) {
    return <div className="licence-page">{<div className="licence-page-content">{<div className="licence-icon licence-icon-active">{<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />}{<path d="M22 4L12 14.01l-3-3" />}</svg>}</div>}{<h2 className="licence-title">Lifetime Access Active</h2>}{<p className="licence-subtitle">Your licence is active. Enjoy unlimited scraping!</p>}{<div className="licence-info-card">{<div className="licence-info-row">{<span className="licence-info-label">Email</span>}{<span className="licence-info-value">{licenceData.email}</span>}</div>}{<div className="licence-info-row">{<span className="licence-info-label">Status</span>}{<span className="licence-info-value licence-status-active">Active</span>}</div>}</div>}{<button className="btn btn-ghost btn-sm licence-deactivate-btn" onClick={k}>Deactivate Licence</button>}{<button className="btn btn-secondary licence-back-btn" onClick={onBack}>Back to Scraper</button>}</div>}</div>;
  } else {
    return <div className="licence-page">{<div className="licence-page-content">{<div className="licence-icon">{<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />}{<path d="M7 11V7a5 5 0 0110 0v4" />}</svg>}</div>}{<h2 className="licence-title">{trialExpired ? "Trial Expired" : "Activate Licence"}</h2>}{<p className="licence-subtitle">{trialExpired ? "Your 24-hour trial has ended. Enter your licence key to continue using the scraper." : "Enter your licence key to unlock lifetime access."}</p>}{<div className="licence-input-group">{<input className="input licence-key-input" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" value={x} onChange={j => {
            o(j.target.value.toUpperCase());
            if (r === "error") {
              f("idle");
            }
          }} onKeyDown={j => {
            if (j.key === "Enter") {
              A();
            }
          }} disabled={r === "validating"} />}{<button className="btn btn-primary licence-activate-btn" onClick={A} disabled={!x.trim() || r === "validating"}>{r === "validating" ? <>{<div className="spinner" style={{
                width: 14,
                height: 14
              }} />} Validating...</> : "Activate"}</button>}</div>}{r === "error" && <div className="licence-error">{v}</div>}{<a className="licence-buy-link" href="https://nocodewebscraper.com" target="_blank" rel="noopener noreferrer">Don't have a licence? Get one here</a>}{!trialExpired && <button className="btn btn-ghost licence-back-btn" onClick={onBack}>Back to Scraper</button>}</div>}</div>;
  }
}
const createDefaultRecipe = () => ({
  id: generateId(),
  name: "",
  urlPattern: "",
  fields: [],
  pagination: null,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  isPrebuilt: false
});
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
          } catch {}
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
ReactDOM.createRoot(document.getElementById("root")).render(<>{<SidePanelApp />}</>);