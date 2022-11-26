
const parseToString = (data: any) => JSON.parse(data);

const parseToJSON = (data: any) => JSON.stringify(data);
const storage = localStorage;

const getItem = <T extends unknown>(key: string) => {
    if (!key) {
        throw "storage key is missing :(";
    }
    const value = storage.getItem(key)
    return parseToString(value) as T;
}

const setItem = (key: string, value: any) => {
    if (!key) {
        throw "Storage key is missing :(";
    }
    storage.setItem(key, parseToJSON(value))
}
export { getItem, setItem };