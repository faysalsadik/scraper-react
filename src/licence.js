const StorageKeys = {
  RECIPES: "ncws_recipes",
  SETTINGS: "ncws_settings",
  LAST_SESSION: "ncws_last_session",
  TRIAL_START: "ncws_trial_start",
  LICENCE_KEY: "ncws_licence_key",
  LICENCE_DATA: "ncws_licence_data"
};
async function getStorageItem(key) {
  return (await chrome.storage.local.get(key))[key];
}
async function setStorageItem(key, data) {
  await chrome.storage.local.set({
    [key]: data
  });
}
async function removeStorageItem(key) {
  await chrome.storage.local.remove(key);
}
const TRIAL_DURATION_MS = 86400000;
async function initializeTrial() {
  if (!(await getStorageItem(StorageKeys.TRIAL_START))) {
    await setStorageItem(StorageKeys.TRIAL_START, Date.now());
  }
}
async function getLicenceState() {
  const licenceData = await getStorageItem(StorageKeys.LICENCE_DATA);
  if (licenceData) {
    return {
      isLicensed: true,
      isTrial: false,
      trialExpired: false,
      trialRemainingMs: 0,
      licenceData: licenceData
    };
  }
  const trialStart = await getStorageItem(StorageKeys.TRIAL_START);
  if (!trialStart) {
    await initializeTrial();
    return {
      isLicensed: false,
      isTrial: true,
      trialExpired: false,
      trialRemainingMs: TRIAL_DURATION_MS,
      licenceData: null
    };
  }
  const timeElapsed = Date.now() - trialStart;
  const timeRemaining = Math.max(0, TRIAL_DURATION_MS - timeElapsed);
  return {
    isLicensed: false,
    isTrial: timeRemaining > 0,
    trialExpired: timeRemaining <= 0,
    trialRemainingMs: timeRemaining,
    licenceData: null
  };
}
async function validateLicence(licenceKey) {
  try {
    const responseData = await (await fetch("https://nocodewebscraper.com/api/validate-licence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        licence_key: licenceKey
      })
    })).json();
    if (responseData.valid && responseData.licence) {
      const savedLicenceData = {
        email: responseData.licence.email,
        status: responseData.licence.status,
        createdAt: responseData.licence.createdAt
      };
      await setStorageItem(StorageKeys.LICENCE_KEY, licenceKey);
      await setStorageItem(StorageKeys.LICENCE_DATA, savedLicenceData);
      return {
        valid: true,
        licence: savedLicenceData
      };
    }
    return {
      valid: false,
      error: responseData.error || "Invalid licence key"
    };
  } catch {
    return {
      valid: false,
      error: "Network error. Please check your connection."
    };
  }
}
async function deactivateLicence() {
  await removeStorageItem(StorageKeys.LICENCE_KEY);
  await removeStorageItem(StorageKeys.LICENCE_DATA);
}
function formatTimeRemaining(ms) {
  if (ms <= 0) {
    return "0:00:00";
  }
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = totalSeconds % 60;
  return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
export { StorageKeys, getLicenceState, deactivateLicence, formatTimeRemaining, getStorageItem, initializeTrial, setStorageItem, validateLicence };