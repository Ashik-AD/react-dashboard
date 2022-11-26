import AuthBanner from "../../components/auth/AuthBanner";
import Register, { FormData } from "../../components/auth/Register";
import ColorBox from "../../components/box/ColorBox";
import AuthLayout from "../../components/layout/auth-form/AuthLayout";

const Signup = () => {
  const handleSubmit = ({ username, email, password }: FormData) => {};
  return (
    <AuthLayout
      LeftContent={
        <AuthBanner
          bgDark="/src/image/auth/signup-dark.png"
          bgLight="/src/image/auth/signup-light.png"
        />
      }
      RightContent={
        <ColorBox backgroundTheme="foreground" width="100%">
          <Register onSubmit={handleSubmit} />
        </ColorBox>
      }
    />
  );
};
export default Signup;
