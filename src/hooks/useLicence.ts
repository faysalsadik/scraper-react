import { useState, useEffect, useCallback } from 'react';

export function useLicence() {
    const [licenceState, setLicenceState] = useState({
        isLicensed: false,
        isTrial: true,
        trialExpired: false,
        trialRemainingMs: 0,
        licenceData: null
    });
    const [forceTrialExpired, setForceTrialExpired] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchLicenceState = useCallback(() => {
        chrome.runtime.sendMessage({ action: "GET_LICENCE_STATE" }, (state) => {
            if (state) {
                setLicenceState(state);
            }
        });
    }, []);

    useEffect(() => {
        chrome.runtime.sendMessage({ action: "GET_LICENCE_STATE" }, (state) => {
            if (state) {
                setLicenceState(state);
                if (state.trialExpired && !state.isLicensed) {
                    setForceTrialExpired(true);
                }
            }
            setIsLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (licenceState.isLicensed || licenceState.trialExpired) return;

        const interval = setInterval(() => {
            setLicenceState((prev) => {
                if (prev.trialRemainingMs <= 0) return prev;

                const remaining = Math.max(0, prev.trialRemainingMs - 1000);
                if (remaining <= 0) {
                    setForceTrialExpired(true);
                    return {
                        ...prev,
                        trialRemainingMs: 0,
                        trialExpired: true,
                        isTrial: false
                    };
                }
                return { ...prev, trialRemainingMs: remaining };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [licenceState.isLicensed, licenceState.trialExpired]);

    return {
        licenceState,
        forceTrialExpired,
        setForceTrialExpired,
        isLoaded,
        fetchLicenceState
    };
}
