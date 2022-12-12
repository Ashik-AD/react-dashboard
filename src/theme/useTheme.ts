import { useContext } from 'react';
import SettingType from './type';
import { ThemeContext } from './Theme';
import ThemeActionType from './themeAction';

const useTheme = (): { theme: SettingType, dispatch: ThemeActionType } => {
    const { state: theme, dispatch } = useContext(ThemeContext);
    return { theme, dispatch: dispatch! };
}
export default useTheme;