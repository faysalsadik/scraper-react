import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function SavedRecipesOverlay({
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
