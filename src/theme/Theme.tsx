import React, { createContext, FC, useState } from "react";
import settings from "./setting";
import SettingType, { Skin } from "./setting-types";
import ThemeActionType from "./themeAction";

export const ThemeContext = createContext<{
  state: SettingType;
  dispatch?: ThemeActionType;
}>({
  state: settings,
});
ThemeContext.displayName = "AppTheme";

const Theme: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeSetting, setThemeSetting] = useState<SettingType>(settings);

  const changeTheme = () => {
    const currentTheme = themeSetting.mode.name;
    setThemeSetting((prevState) => ({
      ...prevState,
      mode:
        currentTheme === "dark"
          ? {
              name: "light",
              textColor: "#191919",
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
  };

  const changePrimaryColor = (
    primaryColor: typeof themeSetting.primaryColor
  ) => {
    setThemeSetting((prevState) => ({ ...prevState, primaryColor }));
  };

  const changeSkin = (skin: Skin) => {
    setThemeSetting((prevState) => ({ ...prevState, skin }));
  };

  const handleAppBarPosition = (
    position: typeof themeSetting.layout.appBarPosition
  ) => {
    setThemeSetting((prevState) => ({
      ...prevState,
      layout: {
        ...prevState.layout,
        appBarPosition: position,
      },
    }));
  };

  const dispatch: ThemeActionType = {
    handleChangeTheme: changeTheme,
    handleChangePrimaryColor: changePrimaryColor,
    handleChangeSkin: changeSkin,
    handleAppBarPosition,
  };
  return (
    <ThemeContext.Provider value={{ state: themeSetting, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
