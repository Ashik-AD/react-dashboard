import {  useState, useLayoutEffect } from "react"

export interface IAuth {
    fullname: string;
    id: string;
    role: string;
    username: string;
    email: string;
    accessToken: string;
}

const useAuth = () => {
    const [userData, setUserData] = useState<Partial<IAuth> | null>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    useLayoutEffect(() => {
        let fetchUserData = null;
        fetchUserData = async () => {
            if(!userData){
                const getUser = await JSON.parse(localStorage.getItem('userData') as string) as IAuth;
                if(getUser){
                    setUserData(getUser)
                    setIsAuthenticated(true);
                }
                else {
                    setIsAuthenticated(false)
    
                }
            }

        }
        fetchUserData()
        return () => { fetchUserData = null}
    }, [])
    return { userData, isAuthenticated } as const;
}
export default useAuth;