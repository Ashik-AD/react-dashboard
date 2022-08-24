import 'styled-components';
import { PrimaryColor, ThemeMode } from './colors';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeMode, PrimaryColor  {
    }
}