import { createGlobalStyle } from 'styled-components';
interface ThemeOptions {
    textColor: string;
    backgroundColor: string;
    skinColor: string;
    skin: "bordered" | "default";
    foregroundColor: string;
}
const GlobalStyle = createGlobalStyle<ThemeOptions>`
    body {
        color: ${({ textColor }) => textColor};
        background: ${({ backgroundColor, skin, foregroundColor }) => skin === "bordered" ? foregroundColor : backgroundColor};
    }
    a {
        color: ${({ skinColor }) => skinColor};
        text-decoration: none;
        font-size: inherit;
    }
    .bg-primary {
        background: ${({ skinColor }) => skinColor};
    }
    .text-primary {
        color: ${({ skinColor }) => skinColor};
    }

    button {
        color: inherit;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.75;
        padding: 5px 16px;
        border-radius: 6px;
        min-width: 64px;
        display: inline-flex;
        cursor: pointer;
        letter-spacing: 0.3px;
    }

    .input-radio, .input-checkbox {
        position: absolute;
        opacity: 0;
        z-index: 0;
        visibility: hidden;
    }
`;

export default GlobalStyle;