import useLocalStorage from "./useLocalStorage"
import useNavigation from "./useNavigation";

const useLogout = () => {
    const {removeLocalStorage} = useLocalStorage("userData");
    const {navigate} = useNavigation()
    return () => {
        removeLocalStorage();
        navigate("/auth/login/")
    }
}
export default useLogout;