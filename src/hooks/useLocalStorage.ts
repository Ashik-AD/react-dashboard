import { useEffect, useLayoutEffect, useState } from "react"

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

    return { storage: data, addLocalStorage } as const;
}
export default useLocalStorage;