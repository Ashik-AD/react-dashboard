
const isAppInProd = import.meta.env.PROD;
const rootPath = !isAppInProd ? import.meta.env.VITE_DEV_API_URL : import.meta.env.VITE_PROD_API_URL;

export async function client(endpoint: string, { body, ...customConfig } :any = {}) {
    const headers = { 'Content-Type': 'application/json' }
    const paths = endpoint.replaceAll("/", " ").trim().split(" ");
    // const modeProdJsonPath = paths.length >= 2 ? paths[paths.length - 1]: ""
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
        const response = await window.fetch(`${rootPath}${!isAppInProd ? endpoint : `/${paths[0]}/`}`, config);
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
