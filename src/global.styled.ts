import { createGlobalStyle } from 'styled-components';
interface ThemeOptions {
    textColor: string;
    backgroundColor: string;
    skinColor: string;
    skin: "bordered" | "default";
    foregroundColor: string;
    mode: "dark" | "light"
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

    .apexcharts-gridline {
        stroke: ${({mode}) => mode === "dark" ? "#9b9b9b30" : "#b1b4c338"}!important;
    }
    .apexcharts-text > * {
        color: ${({mode}) => mode === "dark" ? "#727272" : "#898989"};
        fill: ${({mode}) => mode === "dark" ? "#727272" : "#898989"};
        font-weight: 600;
    }
    .apexcharts-legend-text {
        color: ${({mode}) => mode === "dark" ? "#a7a7a7" : "#898989"}!important;
    }
    .apexcharts-tooltip   { 
        background-color: ${({foregroundColor}) => foregroundColor}!important;
        & .apexcharts-tooltip-text {
           color: ${({mode}) => mode === "dark" ? "#c1c1c1" : "#919191"}!important;       
        } 

        & > div {
            background-color: ${({foregroundColor}) => foregroundColor}!important;
            border-color: ${({mode}) => mode === "dark" ? "#5a5a5a" : "initial"};
            box-shadow: unset;
        }
    }
`;

export default GlobalStyle;