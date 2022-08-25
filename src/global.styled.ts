import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

button {
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
`;

export default GlobalStyle;