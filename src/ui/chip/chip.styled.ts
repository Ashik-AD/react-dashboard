import styled from 'styled-components'
import { alertColor, Colors } from '../color/alert'
import { ChipProps } from './type'

const ChipWrapper = styled("span") <ChipProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    background: ${({ theme, varient, color, skin }) => varient === 'outlined' || skin ? 'transparent' : varient === 'fill' && color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.color};
    color: ${({ color, varient, theme, skin }) => varient === 'outlined' || skin === 'light' ? color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.color : "#fff"};
    padding: ${({ size }) => size === "small" ? "0.5px 10px" : "3px 12px"};
    font-size: ${({ size }) => size === 'small' ? '12px' : '15px'};
    ${({labelWeight}) => labelWeight && `font-weight: ${labelWeight};`}
    border-radius: 20px;
    max-height: 40px;
    border:2px solid ${({ varient, theme }) => varient === 'outlined' ? theme.color : 'transparent'};
    cursor: default;
    overflow: hidden;
    z-index: 1;

    ${({ skin, theme, color }) => skin === 'light' && `
        &:after {
            position: absolute;
            height: 100%;
            width: 100%;
            content: '';
            top: 0;
            left: 0;
            background: ${color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.color};
            opacity: 0.12;
            z-index: 0;
        }
        `
    }

    & .avatar-icon-wrapper {
        display: flex;
        align-items: center;
        margin-left: -8px;
        margin-right: 5px;
    }
    & svg {
        font-size: ${({ size }) => size === 'small' ? '1.2rem' : '1.5rem'};
    }
    & .avatar-icon-wrapper > * {
        height: ${({ size }) => size === 'small' ? '1.2rem' : '1.5rem'};
        width: ${({ size }) => size === 'small' ? '1.2rem' : '1.5rem'};
    }
`
export default ChipWrapper;