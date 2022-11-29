import { useState } from "react"

const useLocalStorage = <T>(key: string) => {
    const getItem = JSON.parse(localStorage.getItem(key)!)
    const [data, setData] = useState<T | null>(getItem);

    const addLocalStorage = (value: T) => {
        (async () => {
            const prepareData = JSON.stringify(value);
            localStorage.setItem(key, prepareData);
            setData(value)
        })()
    };
    const removeLocalStorage = () : void => {
        if(!key) throw Error("Key is missing :(");
        localStorage.removeItem(key);
        return;
    }

    return { storage: data, addLocalStorage, removeLocalStorage } as const;
}
export default useLocalStorage;