import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthBanner from "../../components/auth/AuthBanner";
import Login, { LoginFormDate } from "../../components/auth/Login";
import ColorBox from "../../components/box/ColorBox";
import AuthLayout from "../../components/layout/auth-form/AuthLayout";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useNavigation from "../../hooks/useNavigation";

const Signin = () => {
  const { isAuthenticated } = useAuth();
  const { addLocalStorage } = useLocalStorage("userData");
  const { navigate } = useNavigation();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboards/crm/");
    }
  }, [isAuthenticated]);
  const handleSubmit = (inputs: LoginFormDate) => {
    addLocalStorage({
      fullname: "John Doe",
      username: "@moruo",
      id: "2K3KJK23",
      email: "johndoe@email.com",
    });
    return navigate("/dashboards/crm/");
  };
  return (
    <AuthLayout
      RightContent={
        <ColorBox backgroundTheme="foreground">
          <Login onSubmit={handleSubmit} />
        </ColorBox>
      }
      LeftContent={
        <AuthBanner
          bgDark="https://i.ibb.co/n8YcMNb/login-dark.png"
          bgLight="https://i.ibb.co/n8YcMNb/login-light.png"
        />
      }
    />
  );
};
export default Signin;
