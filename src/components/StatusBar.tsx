import React from 'react';
import { formatTimeRemaining } from '../licence.js';
import { FIELD_COLORS, generateId, extractUrls } from '../utils.js';

export function StatusBar({
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
