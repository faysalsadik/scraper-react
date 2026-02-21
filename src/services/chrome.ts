import { Recipe, Pagination } from '../types';

export const chromeService = {
    async getActiveTabId(): Promise<number | null> {
        return new Promise((resolve) => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                resolve(tabs[0]?.id || null);
            });
        });
    },

    startScrape(recipe: Recipe, tabId: number) {
        if (recipe.pagination?.type === "infinite-scroll") {
            chrome.runtime.sendMessage({
                action: "START_SCROLL_SCRAPE",
                payload: { recipe, tabId }
            });
        } else {
            chrome.runtime.sendMessage({
                action: "START_MULTI_SCRAPE",
                payload: { recipe, tabId }
            });
        }
    },

    startImageScrape(pagination: Pagination | null, tabId: number) {
        if (pagination) {
            if (pagination.type === "infinite-scroll") {
                chrome.runtime.sendMessage({
                    action: "START_SCROLL_IMAGE_SCRAPE",
                    payload: { maxScrolls: pagination.maxPages, delayMs: pagination.delayMs, tabId }
                });
            } else {
                chrome.runtime.sendMessage({
                    action: "START_PAGINATED_IMAGE_SCRAPE",
                    payload: { pagination, tabId }
                });
            }
        }
    },

    stopScrape() {
        chrome.runtime.sendMessage({ action: "STOP_SCRAPE" });
    }
};
