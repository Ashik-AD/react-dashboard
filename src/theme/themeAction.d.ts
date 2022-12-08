import { PrimaryColor } from "./colors";
import { LayoutStyle, MenuLayout, MenuOpenStyle, Skin } from "./type";

export default interface ThemeActionType {
  handleChangeTheme: () => void;
  handleChangePrimaryColor: (color: PrimaryColor) => void;
  handleChangeSkin: (skin: Skin) => void;
  handleAppBarPosition: (position: LayoutStyle) => void;
  handleAppFooterPosition: (position: LayoutStyle) => void;
  handleChangeAppBarBlur: () => void;
  handleChangeMenuLayout: (layout: MenuLayout) => void;
  handleChangeMenuOpenStyle: (style: MenuOpenStyle) => void;
  handleChangeMenuCollapse: () => void;
  handleChangeMenuHidden: () => void;
}