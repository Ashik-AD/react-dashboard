import { useLocation } from "react-router-dom"

const useTabindex = (tabs: Record<string, number>) => {
    const { pathname } = useLocation();
    const toPathArr = pathname.trim().split("/").reverse();
    const matchedKey = Object.keys(tabs).find(tabKey => toPathArr.includes(tabKey));
    return matchedKey ? tabs[matchedKey] : -1;
}
export default useTabindex;