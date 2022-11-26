import React, { createContext, FC, useCallback, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import themeSettings from "./setting";
import SettingType, { SettingThemeLocalstorage, Skin } from "./setting-types";
import ThemeActionType from "./themeAction";

export const ThemeContext = createContext<{
  state: SettingType;
  dispatch?: ThemeActionType;
}>({
  state: themeSettings,
});
ThemeContext.displayName = "AppTheme";

const Theme: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeSetting, setThemeSetting] = useState<SettingType>(themeSettings);
  const { storage, addLocalStorage } =
    useLocalStorage<SettingThemeLocalstorage>("triolo-settings");

  const changeTheme = useCallback(() => {
    const currentTheme = themeSetting.mode.name;
    setThemeSetting((prevState) => ({
      ...prevState,
      mode:
        currentTheme === "dark"
          ? {
              name: "light",
              textColor: "#3a3541de",
              background: "#f8f5ff",
              foreground: "#fffffd",
            }
          : {
              name: "dark",
              textColor: "#d3d3d3",
              background: "#1B2430",
              foreground: "#252d3a",
            },
    }));
    addLocalStorage({
      ...storage,
      mode: currentTheme === "dark" ? "light" : "dark",
    });
  }, [storage]);

  const changePrimaryColor = useCallback(
    (primaryColor: typeof themeSetting.primaryColor) => {
      setThemeSetting((prevState) => ({ ...prevState, primaryColor }));
      addLocalStorage({ ...storage, primaryColor });
    },
    [storage]
  );

  const changeSkin = useCallback(
    (skin: Skin) => {
      setThemeSetting((prevState) => ({ ...prevState, skin }));
      addLocalStorage({ ...storage, skin });
    },
    [storage]
  );

  const handleAppBarPosition = useCallback(
    (position: typeof themeSetting.layout.appBarPosition) => {
      setThemeSetting((prevState) => ({
        ...prevState,
        layout: {
          ...prevState.layout,
          appBarPosition: position,
        },
      }));
      addLocalStorage({ ...storage, appBarPosition: position });
    },
    [storage]
  );
  const handleAppFooterPosition = useCallback(
    (position: typeof themeSetting.layout.footerPosition) => {
      setThemeSetting((prevState) => ({
        ...prevState,
        layout: {
          ...prevState.layout,
          footerPositoin: position,
        },
      }));
      addLocalStorage({ ...storage, footerPosition: position });
    },
    [storage]
  );

  const handleChangeAppBarBlur = useCallback(() => {
    setThemeSetting((prevState) => ({
      ...prevState,
      layout: {
        ...prevState.layout,
        appBarBlur: !prevState.layout.appBarBlur,
      },
    }));
    addLocalStorage({
      ...storage,
      appbarBlur: !themeSetting.layout.appBarBlur,
    });
  }, [storage]);

  const handleChangeMenuLayout = useCallback(
    (layout: typeof themeSetting.menuStyle.layout) => {
      setThemeSetting((prevState) => ({
        ...prevState,
        menuStyle: {
          ...prevState.menuStyle,
          layout,
        },
      }));
      addLocalStorage({ ...storage, menuLayout: layout });
    },
    [storage]
  );

  const handleChangeMenuOpenStyle = useCallback(
    (style: typeof themeSetting.menuStyle.openStyle) => {
      setThemeSetting((prevState) => ({
        ...prevState,
        menuStyle: {
          ...prevState.menuStyle,
          openStyle: style,
        },
      }));
      addLocalStorage({ ...storage, menuOpenStyle: style });
    },
    [storage]
  );

  const handleChangeMenuCollapse = useCallback(() => {
    setThemeSetting((prevState) => ({
      ...prevState,
      menuStyle: {
        ...prevState.menuStyle,
        collapse: !prevState.menuStyle.collapse,
      },
    }));
    addLocalStorage({
      ...storage,
      menuCollapse: !themeSetting.menuStyle.collapse,
    });
  }, [storage]);

  const handleChangeMenuHidden = useCallback(() => {
    setThemeSetting((prevState) => ({
      ...prevState,
      menuStyle: {
        ...prevState.menuStyle,
        visible: !prevState.menuStyle.visible,
      },
    }));
    addLocalStorage({
      ...storage,
      menuVisible: !themeSetting.menuStyle.visible,
    });
  }, [storage]);

  const dispatch: ThemeActionType = {
    handleChangeTheme: changeTheme,
    handleChangePrimaryColor: changePrimaryColor,
    handleChangeSkin: changeSkin,
    handleAppBarPosition,
    handleAppFooterPosition,
    handleChangeAppBarBlur,
    handleChangeMenuLayout,
    handleChangeMenuOpenStyle,
    handleChangeMenuCollapse,
    handleChangeMenuHidden,
  };
  return (
    <ThemeContext.Provider value={{ state: themeSetting, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
