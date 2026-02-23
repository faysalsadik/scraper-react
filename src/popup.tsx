import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
function PopupHeader({
  url: currentUrl
}) {
  const shortUrl = currentUrl.length > 45 ? currentUrl.substring(0, 45) + "..." : currentUrl;
  return <div className="popup-header">{<div className="popup-header-top">{<div className="popup-logo">{<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">{<rect width="24" height="24" rx="6" fill="#4F46E5" />}{<path d="M7 8h10M7 12h7M7 16h10" stroke="white" strokeWidth="2" strokeLinecap="round" />}</svg>}{<span className="popup-title">Easy No Code Web Scraper</span>}</div>}</div>}{currentUrl && <div className="popup-url" title={currentUrl}>{shortUrl}</div>}</div>;
}
function QuickActions({
  tabId: activeTabId
}) {
  const handleStartScraping = () => {
    if (activeTabId) {
      chrome.runtime.sendMessage({
        action: "OPEN_SIDE_PANEL",
        payload: {
          tabId: activeTabId
        }
      });
      window.close();
    }
  };
  const handleOpenSidePanel = () => {
    if (activeTabId) {
      chrome.runtime.sendMessage({
        action: "OPEN_SIDE_PANEL",
        payload: {
          tabId: activeTabId
        }
      });
      window.close();
    }
  };
  return <div className="quick-actions">{<button className="btn btn-primary btn-block" onClick={handleStartScraping}>{<svg width="16" height="16" viewBox="0 0 16 16" fill="none">{<circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />}{<path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}</svg>}Start Scraping</button>}{<button className="btn btn-secondary btn-block" onClick={handleOpenSidePanel}>Open Side Panel</button>}</div>;
}
function RecipeCard({
  recipe: recipeData,
  onRun: handleRun,
  onDelete: handleDelete
}) {
  return <div className="recipe-card">{<div className="recipe-card-info">{<div className="recipe-card-name">{recipeData.name}</div>}{<div className="recipe-card-meta">{recipeData.fields.length} field{recipeData.fields.length !== 1 ? "s" : ""}{<span className="recipe-card-dot">·</span>}{recipeData.urlPattern || "Any page"}</div>}</div>}{<div className="recipe-card-actions">{<button className="btn btn-primary btn-sm" onClick={handleRun}>Run</button>}{<button className="btn btn-ghost btn-sm" onClick={handleDelete}>{<svg width="14" height="14" viewBox="0 0 14 14" fill="none">{<path d="M2 4h10M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}</svg>}</button>}</div>}</div>;
}
function RecipeListSection({
  url: currentUrl,
  tabId: activeTabId
}) {
  const [recipes, setRecipes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    chrome.runtime.sendMessage({
      action: "GET_RECIPES"
    }, response => {
      if (response != null && response.recipes) {
        setRecipes(response.recipes);
      }
      setIsLoading(false);
    });
  }, []);
  const handleDeleteRecipe = recipeId => {
    chrome.runtime.sendMessage({
      action: "DELETE_RECIPE",
      payload: {
        id: recipeId
      }
    }, () => {
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
    });
  };
  const handleRunRecipe = recipe => {
    if (activeTabId) {
      chrome.runtime.sendMessage({
        action: "OPEN_SIDE_PANEL",
        payload: {
          tabId: activeTabId,
          recipeId: recipe.id
        }
      });
      window.close();
    }
  };
  if (isLoading) {
    return <div className="recipe-list-section">{<div className="section-title">Saved Recipes</div>}{<div className="flex items-center justify-center" style={{
      padding: "var(--space-xl)"
    }}>{<div className="spinner" />}</div>}</div>;
  } else {
    return <div className="recipe-list-section">{<div className="section-title">Saved Recipes</div>}{recipes.length === 0 ? <div className="empty-state">{<div className="empty-state-text">No saved recipes yet</div>}</div> : <div className="recipe-list">{recipes.map(recipe => <RecipeCard recipe={recipe} onRun={() => handleRunRecipe(recipe)} onDelete={() => handleDeleteRecipe(recipe.id)} />)}</div>}</div>;
  }
}
function SiteDetector({
  url: currentUrl,
  tabId: activeTabId
}) {
  const [prebuiltRecipe, setPrebuiltRecipe] = React.useState(null);
  React.useEffect(() => {
    if (currentUrl) {
      chrome.runtime.sendMessage({
        action: "DETECT_PREBUILT",
        payload: {
          url: currentUrl
        }
      }, response => {
        if (response != null && response.recipe) {
          setPrebuiltRecipe(response.recipe);
        }
      });
    }
  }, [currentUrl]);
  if (!prebuiltRecipe) {
    return null;
  }
  const handleRunPrebuilt = () => {
    if (activeTabId) {
      chrome.runtime.sendMessage({
        action: "OPEN_SIDE_PANEL",
        payload: {
          tabId: activeTabId,
          prebuiltId: prebuiltRecipe.id
        }
      });
      window.close();
    }
  };
  return <div className="site-detector">{<div className="site-detector-card" onClick={handleRunPrebuilt}>{<div className="site-detector-icon">{prebuiltRecipe.icon}</div>}{<div className="site-detector-info">{<div className="site-detector-name">{prebuiltRecipe.name}</div>}{<div className="site-detector-desc">1-click scrape available</div>}</div>}{<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="site-detector-arrow">{<path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}</svg>}</div>}</div>;
}
function PopupApp() {
  const [currentUrl, setCurrentUrl] = React.useState("");
  const [activeTabId, setActiveTabId] = React.useState(null);
  React.useEffect(() => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      if (tabs[0]) {
        setCurrentUrl(tabs[0].url || "");
        setActiveTabId(tabs[0].id || null);
      }
    });
  }, []);
  return <div className="popup">{<PopupHeader url={currentUrl} />}{<SiteDetector url={currentUrl} tabId={activeTabId} />}{<QuickActions tabId={activeTabId} />}{<RecipeListSection url={currentUrl} tabId={activeTabId} />}</div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<><ErrorBoundary><PopupApp /></ErrorBoundary></>);