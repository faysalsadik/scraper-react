import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';
import { FieldRow } from './FieldRow.tsx';

export function FieldList({
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
