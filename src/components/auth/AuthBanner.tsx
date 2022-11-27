import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
const AuthBanner: FC<Props> = ({ children, bgDark, bgLight }) => {
  const {
    theme: {
      mode: { name },
    },
  } = useTheme();
  return (
    <Banner bannerUrl={name === "dark" ? bgDark : bgLight}>
      {children && children}
    </Banner>
  );
};
export default AuthBanner;
interface Props {
  children?: ReactNode;
  bgDark: string;
  bgLight: string;
}

const Banner = styled("div")<{ bannerUrl: string }>`
  display: flex;
  height: 100%;
  padding: 3rem 0;
  background-repeat: no-repeat;
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position-y: 80px;
  background-position-x: center;
  transition: background 300ms;

  & > img {
    position: absolute;
    bottom: 30px;
    left: 80px;
  }
`;
