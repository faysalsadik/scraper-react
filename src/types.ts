export interface Field {
    id: string;
    name: string;
    selector: string;
    attribute: string;
    type: string;
    sampleValue?: string;
}

export interface Pagination {
    type: string;
    nextButtonSelector?: string;
    urlTemplate?: string;
    maxPages: number;
    delayMs: number;
}

export interface Recipe {
    id: string;
    name: string;
    urlPattern: string;
    fields: Field[];
    pagination: Pagination | null;
    createdAt: number;
    updatedAt: number;
    isPrebuilt?: boolean;
    icon?: string;
    description?: string;
}

export interface ScraperStatus {
    id: string;
    recipeId: string;
    status: string;
    data: any[];
    currentPage: number;
    totalPages: number;
    errors: Array<{ page: number; message: string; timestamp: number }>;
    startedAt: number | null;
    completedAt: number | null;
}

export interface LicenceState {
    isLicensed: boolean;
    isTrial: boolean;
    trialExpired: boolean;
    trialRemainingMs: number;
    licenceData: any | null;
}
