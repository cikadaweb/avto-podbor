export const commonConfig = {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
};

export const websocketConfig = {
    baseURL: import.meta.env.VITE_API_BASE_WS,
    headers: {
        'Content-Type': 'application/json',
    }
};