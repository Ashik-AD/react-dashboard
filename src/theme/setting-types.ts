import {PrimaryColor, ThemeMode} from "./colors";

export interface Skin {
    type: 'default' | 'bordered'
}

export type LayoutStyle = "fixed" | "static" | "hidden";

export interface Layout {
    appBarPosition: LayoutStyle;
    footerPositioin: LayoutStyle;
    appBarBlur: boolean;
}

export interface MenuStyle {
    layout: "x" | "y";
    toggle: "collapse" | "accordion";
    collapse: boolean;
    visible: boolean;
}

export default interface SettingType {
    mode: ThemeMode;
    primaryColor: PrimaryColor;
    skin: Skin;
    layout: Layout;
    menuStyle: MenuStyle;
}