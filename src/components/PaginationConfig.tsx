import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function PaginationConfig({
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
