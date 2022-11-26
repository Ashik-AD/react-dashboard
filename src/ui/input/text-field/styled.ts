import styled from 'styled-components';
import { alertColor, AlertColorType } from '../../color/alert';
import { InputOptions } from '../type';

type themeMode = 'dark' | 'light';
const alertColors = (colorName: AlertColorType) => alertColor[colorName];
const borderColor = (modeName: themeMode) => modeName === 'dark' ? '#878787d1' : "#c9c9c9c4";
const disableColor = (modeName: themeMode) => modeName === 'dark' ? "#7a7a7a" : "#b3b3b3";

export const InputWrapper = styled("div") <InputOptions>`
    position: relative;
    min-width: ${({ width }) => width ? width : '0px'};
    ${({ maxWidth }) => maxWidth ? `max-width: ${maxWidth};` : ''}
    display: flex;
    flex-direction: column;
    ${({ disable }) => disable && `pointer-events: none;`}
    
    & .input-label {
        position: absolute;
        background: ${({ theme, varient }) => varient === 'filled' ? 'transparent' : theme.mode.foreground};
        ${({ disable, theme, error }) => (disable || error) && `color: ${error ? alertColors('error') : disableColor(theme.mode.name)};`}
        color: ${({ theme }) => theme.mode.name === "dark" ? "#989898" : "#9e9e9e"};
        font-weight: 500;
        font-size: 1rem;
        left: ${({ varient }) => varient === 'standard' ? 0 : 0.6}rem;
        top: 50%;
        transform: translateY(-50%);
        text-transform: capitalize;
        font-weight: 400;
        letter-spacing: 0.168px;
        padding: 0 ${({ varient }) => varient === 'standard' ? 0 : 4}px;
        pointer-events: none;
        transition: all .2s ease-in-out;
    }

    input:focus + .floating-label,
     .input-button:focus + .floating-label,
     .input-button:focus-within + .floating-label {
        top: ${({ varient }) => varient === 'filled' ? 8 : -10}px;
        left: ${({ varient }) => varient === 'standard' ? 0 : 0.5}rem;
        color: ${({ theme, color, error }) => error ? alertColors('error') : color ? alertColors(color) : theme.primaryColor.color};
        transform: scale(0.9);
        font-size:13px;
        font-weight: 400;
        transition: all .15s linear;
    }
    & .floating-label-top {
        top: ${({ varient }) => varient === 'filled' ? 8 : -10}px;
        left: ${({ varient }) => varient === 'standard' ? 0 : 0.5}rem;
        color: ${({ theme, disable, error }) => disable ? disableColor(theme.mode.name) : error ? alertColors('error') : theme.primaryColor.color};
        font-size: 13px;
        font-weight:500;
        transform: scale(0.9);
    }

    .input-border {
        position: relative;
        width: 100%;
        height: 1px;
        background: ${({ theme, error }) => error ? alertColors('error') : borderColor(theme.mode.name)};

        &:after {
            position: absolute;
            content: '';
            top: 0.6px;
            height: 2px;
            background: ${({ theme, color, error }) => error ? alertColors('error') : color ? alertColors(color) : theme.primaryColor.color};
            width: 100%;
            transform: scaleX(0);
            transition: transform 0.2s linear;
        }

    }
    input:focus ~ .input-border:after, .input-button:focus ~ .input-border-after, .active-border-transition:after  {
        transform: scaleX(1)!important;
    }

    .field-describe {
        padding-top: 6px;
        padding-left: 8px;
        ${({ error }) => error && `color: ${alertColors('error')};`}
    }

    .input-adornment {
        display: flex;
        align-item: center;
        justify-content: center;
        position: absolute;
        max-width: 30px;
        width: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
    .start-adornment {
        left: 0;
    }
    .end-adornment {
        right: 0px;
    }
    .adornment-left {
        padding-left: 32px;
    }
    .adornment-right {
        padding-right: 32px;
    }
`;


export const Input = styled('input') <InputOptions>`
    min-width: 0px;
    width: 100%;
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
    background: ${({ theme, varient }) => varient === 'filled' ? theme.mode.name === 'dark' ? "#7070702e" : "#dbdbdb73" : 'transparent'};
    color: ${({ theme, disable }) => disable ? disableColor(theme.mode.name) : theme.mode.textColor};
    border: 1.5px solid ${({ theme, varient, error }) => (varient === 'filled' || varient === 'standard') ? 'transparent' : error ? alertColors('error') : borderColor(theme.mode.name)};
    padding: ${({ sizes }) => sizes === 'small' ? 0.6 : 1}rem 0.8rem;
    ${({ varient }) => varient === 'filled' && `padding-bottom: 6px; padding-top: 26px; border-bottom-right-radius: 0px!important; border-bottom-left-radius: 0px!important;`}
    ${({ varient }) => varient === 'standard' && `padding: 4px 0px; padding-top: 16px;`}
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '8px'};
    ${({ disable }) => disable && `pointer-events: none;`}

    &:focus,
    &:focus-visible {
        border-color: ${({ theme, varient }) => (varient === 'filled' || varient === 'standard') ? 'transparent' : theme.primaryColor.color};
        outline: ${({ theme, error }) => error ? alertColors('error') : theme.primaryColor.color} solid 2px;
        ${({ varient }) => (varient === 'filled' || varient === 'standard') ? 'outline: 0;' : ''}
        outline-offset: -1px;   
    }
    &::placeholder {opacity: ${({ hasLabel }) => hasLabel ? 0 : 1};}
    &:focus::placeholder {
        opacity: 1;
    }
`;

export const StyledTextarea = styled(Input) <InputOptions>`
    padding-top: 8px;
    padding-bottom: 8px;
    resize: none;
`; 