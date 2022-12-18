import { ThemeModeName } from './type.d';
import SettingType, { SettingThemeLocalstorage } from './type';

const setting = JSON.parse(localStorage.getItem("triolo-settings") as string) as SettingThemeLocalstorage;

const modeName: ThemeModeName = setting?.mode === "light" ? "light" : "dark";

const themeSettings: SettingType = {
    mode: {
        name: modeName,
        background: modeName === "light" ? "#f8f5ff" : "#1B2430",
        foreground: modeName === "light" ? "#fffffd" : '#252d3a',
        textColor: modeName === "light" ? "#3a3541de" : '#d3d3d3'
    } as any,
    layout: {
        appBarBlur: setting?.hasOwnProperty('appbarBlur') ? setting.appbarBlur! : true,
        appBarPosition: setting?.appBarPosition ? setting.appBarPosition : "fixed",
        footerPosition: setting?.footerPosition ? setting.footerPosition : 'static'
    },
    primaryColor: {
        name: setting?.primaryColor?.name ? setting.primaryColor.name : 'purple',
        color: setting?.primaryColor?.color ? setting?.primaryColor.color : "rgba(166, 108, 255, 1)"
    },
    menuStyle: {
        collapse: setting?.menuCollapse ? setting.menuCollapse : false,
        layout: setting?.menuLayout ? setting.menuLayout : "vertical",
        openStyle: setting?.menuOpenStyle ? setting.menuOpenStyle : 'accordion',
        visible: setting?.menuVisible ? setting.menuVisible : false
    },
    skin: setting?.skin ? setting.skin : "default"
}

export default themeSettings;