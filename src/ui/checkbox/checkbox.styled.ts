import styled from "styled-components";
import { alertColor, Colors } from "../color/alert";
import { CheckPlaceholderProps, LabelTextProps } from "./type";

const backgroundStyle = (themeColor: string, color?: string) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : themeColor;


export const CheckPlaceholder = styled.span<CheckPlaceholderProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: ${({ theme, color, checked }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : !checked ? theme.mode.name === 'dark' ? '#A8A4CE' : '#808080' : theme.primaryColor.color};
    border-radius: 50%;
    background: transparent;
    ${({ size }) => size && `
    &, & svg {
        font-size: ${size === 'small' ? 20 : size === 'medium' ? 24 : size}px;
    }
    `}
    cursor: pointer;
    z-index: 1;
    overflow: hidden;

    &::after {
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        z-index: -1;
        top: 0;
        left: 0;
        // background: #fff;
    }

     &:hover::after {
        background: ${({ theme, color }) => backgroundStyle(theme.primaryColor.color, color)};
        opacity: 0.2;
    }
`;

export const Input = styled.input`
    vibility: hidden;
    opacity: 0;
    position: absolute;
`
export const Label = styled.span<{ hasLabel: boolean, disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    ${({ hasLabel }) => hasLabel && `
            font-size: 14px;
        `
    }
    ${({ disabled }) => disabled && `
        user-select: none;
        pointer-events: none;
        & * {
            color: #73777B!important;
        }
    `}
`
export const LabelText = styled.span<LabelTextProps>`
color: ${({ theme, labelColor, checked, checkedLabelColor }) => checked ? alertColor[checkedLabelColor as keyof Colors] : labelColor ? alertColor[labelColor as keyof Colors] : theme.mode.name === 'dark' ? '#A8A4CE' : '#14274E'};
cursor: pointer;
`