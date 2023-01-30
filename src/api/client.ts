
// const rootPath = import.meta.env.PROD ? "https://react-dashboard-server-production.up.railway.app/api" : "/api";
const rootPath = "/api";

export async function client(endpoint: string, { body, ...customConfig } :any = {}) {
    const headers = { 'Content-Type': 'application/json' }
    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        }
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    let data;
    try {
        const response = await window.fetch(`${rootPath}${endpoint}`, config);
        const data = await response.json();
        if (response.ok) {
             return data;
        }
        throw new Error(response.statusText)
    }
    catch (err: any) {
        return Promise.reject(err.message ? err.message : data);
    }
}

client.get = function (endpoint: string, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: "GET" })
}
client.post = function (endpoint: string, body: any, customConfig = {}) {
    return client(endpoint, { ...customConfig, body })
}
