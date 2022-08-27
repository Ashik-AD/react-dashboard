import styled from "styled-components";
import { alertColor, Colors } from "../color/alert";
import { CheckPlaceholderProps, LabelTextProps } from "./type";

export const CheckPlaceholder = styled.span<CheckPlaceholderProps>`
    display: flex;
    color: ${({ theme, color, checked }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : !checked ? theme.mode.name === 'dark' ? '#A8A4CE' : '#14274E' : theme.primaryColor.color};
    cursor: pointer;
    ${({ size }) => size && `
    &, & svg {
        font-size: ${size === 'small' ? 20 : size === 'medium' ? 24 : size}px;
    }
    `}
`;

export const Input = styled.input`
    vibility: hidden;
    opacity: 0;
    position: absolute;
`
export const Label = styled.label<{ hasLabel: boolean, disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    ${({ hasLabel }) => hasLabel && `
            gap: 10px;
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