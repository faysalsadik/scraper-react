import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function LicencePage({
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
