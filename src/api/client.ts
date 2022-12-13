
const mode = import.meta.env.DEV ? "dev" : "prod";
const rootPath = mode === "dev" ? import.meta.env.VITE_DEV_API_ENDPOINT : import.meta.env.VITE_PROD_API_ENDPOINT;

export async function client(endpoint: string, { body, ...customConfig } :any = {}) {
    const headers = { 'Content-Type': 'application/json' }
    const paths = endpoint.replaceAll("/", " ").trim().split(" ");
    // const modeProdJsonPath = paths.length >= 2 ? paths[paths.length - 1]: ""
    const modeProdJsonPath = mode === "prod" && paths.length >= 2 ? paths[paths.length - 1]: ""
    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
            "X-MASTER-KEY": mode === "prod" ? `$2b$10$${import.meta.env.VITE_API_KEY}` : "",
            "X-JSON-path": mode === "prod" && modeProdJsonPath ? `$.${modeProdJsonPath}` : "",
            "Access-Control-Allow-Origin": "*"
        }
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    let data;
    try {
        const response = await window.fetch(`${rootPath}${mode === "dev" ? endpoint : `/${paths[0]}/`}`, config);
        const data = await response.json();
        if (response.ok) {
             return mode === "dev"  ? data : Array.isArray(data.record) ?  data.record?.length > 1 ? data.record : data.record[0] : data.record;
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
