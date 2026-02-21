export function generateId() {
    return crypto.randomUUID();
}

export function extractUrls(t) {
    return t.split(/[\r\n]+/)
        .map(i => (i.includes(",") ? i.split(",")[0] : i).trim())
        .filter(i => i.length > 0 && (i.startsWith("http://") || i.startsWith("https://")));
}

export const FIELD_COLORS = {
    text: {
        bg: "#eff6ff",
        border: "#bfdbfe"
    },
    link: {
        bg: "#faf5ff",
        border: "#e9d5ff"
    },
    image: {
        bg: "#ecfdf5",
        border: "#a7f3d0"
    },
    video: {
        bg: "#fff7ed",
        border: "#fed7aa"
    },
    number: {
        bg: "#fef9ec",
        border: "#fde68a"
    },
    html: {
        bg: "#fdf2f8",
        border: "#fbcfe8"
    }
};

export const createDefaultRecipe = () => ({
    id: generateId(),
    name: "",
    urlPattern: "",
    fields: [],
    pagination: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    isPrebuilt: false
});
