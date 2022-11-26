import { Navigate, useNavigate } from "react-router-dom";
import AuthBanner from "../../components/auth/AuthBanner";
import Login, { LoginFormDate } from "../../components/auth/Login";
import ColorBox from "../../components/box/ColorBox";
import AuthLayout from "../../components/layout/auth-form/AuthLayout";
import useLocalStorage from "../../hooks/useLocalStorage";

const Signin = () => {
  const { addLocalStorage } = useLocalStorage("userData");
  const navigate = useNavigate();
  const handleSubmit = (inputs: LoginFormDate) => {
    addLocalStorage({
      fullname: "John Doe",
      username: "@moruo",
      id: "2K3KJK23",
      email: "johndoe@email.com",
    });
    return navigate("/dashboard/crm/", { replace: true });
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
          bgDark="/src/image/auth/login-dark.png"
          bgLight="/src/image/auth/login-light.png"
        />
      }
    />
  );
};
export default Signin;
