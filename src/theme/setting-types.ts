import { PrimaryColor, ThemeMode } from "./colors";

export type Skin = 'default' | 'bordered'

export type LayoutStyle = "fixed" | "static" | "hidden";
export type MenuLayout = 'x' | 'y';
export type MenuOpenStyle = "collapse" | "accordion";

export interface Layout {
    appBarPosition: LayoutStyle;
    footerPositioin: LayoutStyle;
    appBarBlur: boolean;
}

export interface MenuStyle {
    layout: MenuLayout;
    openStyle: MenuOpenStyle
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