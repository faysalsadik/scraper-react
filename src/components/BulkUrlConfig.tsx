import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function BulkUrlConfig({
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
