import Box from "../../box/Box";
import { Choice } from "../../../ui";
import useTheme from "../../../theme/useTheme";
import AppLogo from "./AppLogo";
function NavHeading() {
  const {
    theme: {
      menuStyle: { collapse },
    },
    dispatch,
  } = useTheme();
  return (
    <Box
      display="flex"
      align="center"
      justify="space-between"
      px={20}
      mt={8}
      py={16}
    >
      <AppLogo />
      <Choice
        name="menu-collaps"
        onChange={dispatch?.handleChangeMenuCollapse}
        selected={collapse ? "" : "collapsed"}
        value="collapsed"
        label=""
      />
    </Box>
  );
}
export default NavHeading;
