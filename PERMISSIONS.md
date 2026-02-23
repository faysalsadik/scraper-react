# Easy Web Scraper - Extension Documentation

## Single Purpose Description

**Easy Web Scraper** is a browser extension that enables users to extract structured data from any website without writing code. Users can visually select elements on a webpage using a point-and-click interface, and the extension automatically generates selectors to scrape the selected data. The scraped data can be exported in various formats including CSV and Excel.

---

## Permissions Justification

### 1. activeTab Permission

**Justification:** The `activeTab` permission is required to access the currently active tab when the user invokes the extension. This permission is essential for:

- Reading the DOM of the current webpage to extract data
- Injecting the visual element picker overlay
- Communicating between the side panel and the active webpage
- Ensuring the extension only operates on the tab the user is currently viewing

**Why not `<all_urls>` for tabs?** The `activeTab` permission provides a privacy-friendly approach by only granting access to the tab when the user explicitly activates the extension, rather than having persistent access to all open tabs.

---

### 2. sidePanel Permission

**Justification:** The `sidePanel` permission is required to display the extension's main UI in a side panel. This is essential because:

- The side panel serves as the primary interface for configuring scrapes
- Users can browse and select elements while viewing the webpage
- It provides a persistent workspace for managing extracted data fields
- It allows real-time preview of scraped data before export

**Alternative considered:** A popup was considered but was too limited in size for the complex data extraction interface this extension requires.

---

### 3. content_scripts Permission

**Justification:** The `content_scripts` permission is required to inject JavaScript into webpages for:

- **Element Selection:** Injecting the visual selector that highlights elements on hover
- **DOM Manipulation:** Reading and extracting data from the webpage's DOM structure
- **Element Picker:** Creating an interactive overlay that captures user clicks on elements to scrape
- **Data Extraction:** Running extraction logic directly in the context of the target page

The content script runs on `<all_urls>` because the extension must be able to scrape data from any website the user chooses to target.

---

### 4. storage Permission

**Justification:** The `storage` permission is required for:

- **Saving Recipes:** Persisting scraper configurations (recipes) for reuse across sessions
- **User Preferences:** Storing user settings and preferences
- **Caching:** Temporarily storing extracted data before export
- **Licence Information:** Storing licence status and validation data
- **Extension State:** Maintaining the state of ongoing scraping operations

This data must persist across browser sessions, making `chrome.storage.local` the appropriate choice. The extension does not use `chrome.storage.sync` as the data volume may exceed sync storage limits.

---

### 5. tabs Permission

**Justification:** The `tabs` permission is required for:

- **Tab Management:** Creating new tabs for data export/preview
- **URL Reading:** Determining the current page URL for creating export filenames
- **Tab Communication:** Facilitating message passing between different parts of the extension
- **Navigation:** Opening exported files or preview pages in new tabs

This permission is necessary because `activeTab` alone does not provide sufficient information about tab properties like URLs, titles, and IDs needed for certain operations.

---

### 6. downloads Permission

**Justification:** The `downloads` permission is required for:

- **Exporting Data:** Saving scraped data to the user's local filesystem in formats like:
  - CSV (Comma-Separated Values)
  - Excel (.xlsx)
  - JSON
  - Plain text
- **File Naming:** Automatically generating filenames based on the source URL and timestamp
- **Download Management:** Controlling download behavior, including filename and location

This is a core functionality of the extension - the primary purpose is to extract and download data from websites.

---

### 7. scripting Permission

**Justification:** The `scripting` permission is required for:

- **Advanced DOM Access:** Executing scripts to extract complex data structures
- **Function Injection:** Running custom extraction functions in the context of web pages
- **Page Manipulation:** Performing operations that require script execution privileges beyond what content scripts provide

This permission provides additional flexibility for advanced scraping scenarios where the content script alone may not suffice.

---

## Host Permissions Justification

### `<all_urls>` (All URLs)

**Justification:** The `<all_urls>` host permission is required because:

1. **Universal Scraping:** Users must be able to extract data from any website without restrictions
2. **No Predefined Target List:** The extension is designed as a general-purpose tool, not limited to specific websites
3. **Dynamic Content:** Modern websites often load content dynamically, requiring access to various domains
4. **User-Initiated Only:** The extension only accesses pages when explicitly activated by the user via the `activeTab` permission

**Privacy Considerations:**
- The extension does not automatically scrape any website
- All scraping operations are explicitly initiated by the user
- No data is sent to external servers - all processing happens locally
- The `<all_urls>` permission is necessary in conjunction with `activeTab` to allow the content script to run on the currently active tab

---

## Summary

| Permission | Purpose | Risk Level |
|------------|---------|-------------|
| activeTab | Access current tab on user action | Low |
| sidePanel | Display extension UI | Low |
| content_scripts | Inject scripts for element selection | Medium |
| storage | Persist user data and recipes | Low |
| tabs | Manage tab operations | Low |
| downloads | Export scraped data | Low |
| scripting | Execute advanced scripts | Medium |
| `<all_urls>` | Access any website | High (but mitigated by activeTab) |

The extension follows the principle of least privilege by only accessing websites when explicitly triggered by the user, and all data processing occurs locally on the user's device.
