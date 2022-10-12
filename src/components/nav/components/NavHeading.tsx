import Box from "../../box/Box";
import { Toggle } from "../../../ui";
import useTheme from "../../../theme/useTheme";
import AppLogo from "./AppLogo";
function NavHeading() {
  const {
    theme: {
      menuStyle: { collapse },
    },
    dispatch: { handleChangeMenuCollapse },
  } = useTheme();
  return (
    <Box display="flex" justify="space-between" px={20} mt={8} py={16}>
      <AppLogo />
      <Toggle
        toggled={!collapse}
        size="small"
        onToggle={handleChangeMenuCollapse}
      />
    </Box>
  );
}
export default NavHeading;
