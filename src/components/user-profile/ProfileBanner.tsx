import styled from "styled-components";
import useTheme from "../../theme/useTheme";
const ProfileBanner = () => {
  const {
    theme: { mode },
  } = useTheme();
  return <StyledBannerWrapper theme={{ mode: mode.name }} />;
};
export default ProfileBanner;

const StyledBannerWrapper = styled("div")`
  position: relative;
  width: 100%;
  min-height: 0px;
  height: 280px;
  background-repeat: no-repeat;
  background: linear-gradient(45deg, #9795ef, #f9c5d1);
  background-image: url(${({ theme }) =>
    theme.mode === "dark"
      ? "https://i.ibb.co/qdYPB6Z/grass.jpg"
      : "https://i.ibb.co/yFZ2KV4/shape.jpg"});
  background-size: cover;
  background-position: center;
  transition: background 200ms ease-in;

  @media (max-width: 600px) {
    height: 180px;
  }
`;
