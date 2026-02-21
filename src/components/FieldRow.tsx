import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function FieldRow({
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
