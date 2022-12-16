import { FC, useState } from "react";
import { Skin } from "../../theme/type";
import useTheme from "../../theme/useTheme";
import { Divider, IconButton, Text } from "../../ui";
import { Flex } from "../layout";
import ThemeSkin from "./components/ThemeSkin";
import SectionBox from "./components/SectionBox";
import CustomizerTitle from "./components/CustomizerTitle";
import ThemeMode from "./components/ThemeMode";
import ThemeSkinColor from "./components/ThemeSkinColor";
import LayoutType from "./components/LayoutType";
import MenuLayout from "./components/MenuLayout";
import MenuToggle from "./components/MenuToggle";
import CustomizerSwitch from "./components/CustomizerSwitch";
import { Close, Settings } from "@mui/icons-material";
import CustomizerBody, { CustomizerToggle } from "./cutomizer.styled";

const ThemeCustomizer: FC = () => {
  const { theme, dispatch } = useTheme();
  const [isVisible, setVisibility] = useState(false);

  const changeSkin = (skin: string) => dispatch?.handleChangeSkin(skin as Skin);
  return (
    <div className="theme-customizer" style={{ zIndex: 1500 }}>
      <CustomizerBody theme={theme.mode} visible={isVisible}>
        <Flex
          justify="between"
          alignment="center"
          styles={{ padding: "14px 20px" }}
        >
          <span>
            <Text
              heading="h6"
              weight="bold"
              textTransform="uppercase"
              styles={{
                letterSpacing: 0.15,
              }}
            >
              Theme customizer
            </Text>
            <Text>Customize & Preview in Real Time</Text>
          </span>
          <IconButton varient="text" onClick={() => setVisibility(false)}>
            <Close />
          </IconButton>
        </Flex>
        <Divider />
        <div className="customizer-body">
          <SectionBox>
            <Flex direction="column" gap="sm">
              <CustomizerTitle title="Theming" />
              <ThemeSkin skin={theme.skin} handleChangeSkin={changeSkin} />
              <ThemeMode
                themeName={theme.mode.name}
                onChange={dispatch?.handleChangeTheme}
              />
              <ThemeSkinColor
                onChange={dispatch?.handleChangePrimaryColor}
                currentColor={theme.primaryColor}
                themeMode={theme.mode.name}
              />
            </Flex>
          </SectionBox>
          <Divider />
          {/* LAYOUT  */}
          <SectionBox>
            <Flex direction="column" gap="sm">
              <CustomizerTitle title="layout" />
              <LayoutType
                layoutPosition={theme.layout.appBarPosition}
                onChange={dispatch?.handleAppBarPosition}
                title="AppBar Type"
                name="appbar position"
              />
              <LayoutType
                layoutPosition={theme.layout.footerPosition}
                onChange={dispatch?.handleAppFooterPosition}
                title="AppFooter Type"
                name="app footer position"
              />
              <CustomizerSwitch
                title="AppBar Blur"
                switched={theme.layout.appBarBlur}
                onChange={dispatch?.handleChangeAppBarBlur}
              />
            </Flex>
          </SectionBox>
          <Divider />
          <SectionBox>
            <Flex direction="column" gap="sm">
              <CustomizerTitle title="Menu" />
              <MenuLayout
                layout={theme.menuStyle.layout}
                onChange={dispatch?.handleChangeMenuLayout}
              />
              <MenuToggle
                toggle={theme.menuStyle.openStyle}
                onChange={dispatch?.handleChangeMenuOpenStyle}
              />

              <CustomizerSwitch
                title="Menu Collapsed"
                switched={theme.menuStyle.collapse}
                onChange={dispatch?.handleChangeMenuCollapse}
              />
              <CustomizerSwitch
                title="Menu Hidden"
                switched={theme.menuStyle.visible}
                onChange={dispatch?.handleChangeMenuHidden}
              />
            </Flex>
          </SectionBox>
        </div>
      </CustomizerBody>
      <CustomizerToggle
        theme={{ color: theme.primaryColor.color }}
        onClick={() => setVisibility((prevState) => !prevState)}
      >
        <Settings />
      </CustomizerToggle>
    </div>
  );
};
export default ThemeCustomizer;
