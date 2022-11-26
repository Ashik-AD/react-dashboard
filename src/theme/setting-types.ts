import { PrimaryColor, ThemeMode } from "./colors";

export type Skin = 'default' | 'bordered'

export type LayoutStyle = "fixed" | "static" | "hidden";
export type MenuLayout = 'vertical' | 'horizontal';
export type MenuOpenStyle = "collapse" | "accordion";

export interface Layout {
    appBarPosition: LayoutStyle;
    footerPosition: LayoutStyle;
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

export interface SettingThemeLocalstorage {
    mode?: "dark" | "light";
    skin?: Skin;
    primaryColor?: PrimaryColor;
    appBarPosition?: LayoutStyle;
    footerPosition?: LayoutStyle;
    appbarBlur?: boolean;
    menuLayout?: MenuLayout;
    menuOpenStyle?: MenuOpenStyle;
    menuCollapse?: boolean;
    menuVisible?: boolean;
}