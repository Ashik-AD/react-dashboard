import React, { createContext, FC, useState } from "react";
import settings from "./setting";
import SettingType from "./setting-types";
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
              background: "#F1F3F4",
              foreground: "#F7F6F2",
            }
          : {
              name: "dark",
              textColor: "#d3d3d3",
              background: "#1B2430",
              foreground: "#2C3639",
            },
    }));
  };

  const changePrimaryColor = (
    primaryColor: typeof themeSetting.primaryColor
  ) => {
    setThemeSetting((prevState) => ({ ...prevState, primaryColor }));
  };

  const changeSkin = (skin: typeof themeSetting.skin) => {
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
