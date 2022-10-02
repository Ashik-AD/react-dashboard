import { Link } from "react-router-dom";
import styled from "styled-components";

import Box from "../../box/Box";
import AppLogo from "../../../assets/logo-2.png";
import { Text, Toggle } from "../../../ui";
import useTheme from "../../../theme/useTheme";
function NavHeading() {
  const {
    theme: {
      menuStyle: { collapse },
    },
    dispatch: { handleChangeMenuCollapse },
  } = useTheme();
  return (
    <Box display="flex" justify="space-between" px={20} mt={8} py={16}>
      <Link to="/">
        <Box display="flex" align="center" space={0.4}>
          <StyledLogo src={AppLogo} alt="app logo" />
          <Text heading="h6" styles={{ fontWeight: 600 }}>
            TRIOLO
          </Text>
        </Box>
      </Link>
      <Toggle
        toggled={!collapse}
        size="small"
        onToggle={handleChangeMenuCollapse}
      />
    </Box>
  );
}

const StyledLogo = styled("img")`
  height: 30px;
  width: 35px;
  object-fit: contained;
`;

export default NavHeading;
