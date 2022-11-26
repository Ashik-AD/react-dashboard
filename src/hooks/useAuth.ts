import { useEffect, useState } from "react"

interface IAuth {
    fullname: string;
    id: string;
    role: string;
    username: string;
    email: string;
    accessToken: string;
}

const useAuth = () => {
    const [userData, setUserData] = useState<Partial<IAuth> | null>();
    useEffect(() => {
        (async () => {
            const getUser = JSON.parse(localStorage.getItem('userData') as string) as IAuth;
            setUserData(getUser)
        })()
    }, [])
    return { userData, isAuthorized: userData ? true : false } as const;
}
export default useAuth;