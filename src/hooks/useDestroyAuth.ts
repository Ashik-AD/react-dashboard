import useLocalStorage from "./useLocalStorage";
import useNavigation from "./useNavigation";

/***
 * Use this hook to logout & redirect to page
 * 
 *  By Default after logout, it'll redirect to login | home page or just pass   your url
 * @params { redirectPath?: string }
 * @return destroy()
 */

const useDestroyAuth = (redirectPath?: string) => {
    const {navigate} = useNavigation();
    const {removeLocalStorage} = useLocalStorage("user-data");
   return () => {
        removeLocalStorage();
        navigate(redirectPath || "/auth/login/")
   }
}
export default useDestroyAuth;