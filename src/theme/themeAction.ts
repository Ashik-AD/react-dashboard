import {PrimaryColor} from "./colors";
import { LayoutStyle, Skin } from "./setting-types";

export default interface ThemeActionType {
  handleChangeTheme: () => void;
  handleChangePrimaryColor: (color: PrimaryColor) => void; 
  handleChangeSkin: (skin: Skin) => void;
  handleAppBarPosition: (position: LayoutStyle) => void; 
}