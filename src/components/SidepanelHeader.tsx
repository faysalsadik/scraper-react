import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function SidepanelHeader({
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
  return <div className="sidepanel-header-wrap">{<div className="sidepanel-header">{<div className="sidepanel-header-left">{isLicensed ? <input className="header-name-input" type="text" placeholder="Recipe name" value={recipeName} onChange={j => onNameChange(j.target.value)} /> : <a className={`header-trial-link ${k || trialExpired ? "header-trial-link-urgent" : ""}`} href="https://technofelia.com/" target="_blank" rel="noopener noreferrer">{trialExpired ? "Trial expired — Get Lifetime Access" : <>Trial: {<strong>{formatTimeRemaining(trialRemainingMs)}</strong>} — Get Lifetime Access</>}{<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{<path d="M5 1h6v6M11 1L4.5 7.5" />}</svg>}</a>}</div>}{<div className="header-actions">{<button className="save-icon-btn" onClick={onOpenLicence} title={isLicensed ? "Licence active" : "Activate licence"}>{<svg width="16" height="16" viewBox="0 0 24 24" fill="none">{<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke={isLicensed ? "#16A34A" : "currentColor"} strokeWidth="1.5" />}{<path d="M7 11V7a5 5 0 0110 0v4" stroke={isLicensed ? "#16A34A" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}{<button className="save-icon-btn" onClick={onOpenRecipes} title="Saved recipes">{<svg width="16" height="16" viewBox="0 0 24 24" fill="none">{<path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</button>}{<button className="save-icon-btn" onClick={onSave} disabled={!canSave || saveStatus === "saving"} title={saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Save failed" : "Save recipe"}>{saveStatus === "saved" ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M3 8.5l3.5 3.5 6.5-7" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}</svg> : saveStatus === "saving" ? <div className="spinner" style={{
            width: 14,
            height: 14
          }} /> : saveStatus === "error" ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M4 4l8 8M12 4l-8 8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />}</svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<path d="M12.67 2H3.33C2.6 2 2 2.6 2 3.33v9.34C2 13.4 2.6 14 3.33 14h9.34c.73 0 1.33-.6 1.33-1.33V5.33L12.67 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}{<path d="M11.33 14V9.33H4.67V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}{<path d="M4.67 2v3.33h5.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</button>}</div>}</div>}{!isLicensed && <div className="header-sub-row">{<input className="header-name-input" type="text" placeholder="Recipe name" value={recipeName} onChange={j => onNameChange(j.target.value)} />}{<span className="header-sub-divider" />}{<input className="header-url-input" type="text" placeholder="URL pattern (e.g. amazon.com)" value={urlPattern} onChange={j => onUrlChange(j.target.value)} />}</div>}</div>;
}
