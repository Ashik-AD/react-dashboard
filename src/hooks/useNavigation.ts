import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
const useNavigation = (defaultUrl?: string) => {
    const navigation = useNavigate();
    const handleNavigation = useCallback((url: string) => {
        const navUrl = defaultUrl ? `${defaultUrl}${url}` : url;
        navigation(navUrl)
    }, []);
    return { navigate: handleNavigation } as const;
}
export default useNavigation;