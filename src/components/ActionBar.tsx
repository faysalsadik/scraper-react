import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function ActionBar({
  onViewData: onViewData,
  onScrape: onScrape,
  hasData: hasData,
  dataCount: dataCount,
  canScrape: canScrape
}) {
  return <div className="action-bar">{<button className="btn btn-secondary action-btn" onClick={onViewData} disabled={!hasData}>{hasData ? `View Data (${dataCount})` : "View Data"}</button>}{<button className="btn btn-primary action-btn" onClick={onScrape} disabled={!canScrape}>Scrape</button>}</div>;
}
