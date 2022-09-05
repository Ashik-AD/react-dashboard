import styled from 'styled-components'
import { alertColor, Colors } from '../color/alert'
import { ChipProps } from './type'

const ChipWrapper = styled("div") <ChipProps>`
    position: relative;
    display: flex;
    width: fit-content;
    background: ${({ theme, varient, color, skin }) => varient === 'outlined' || skin ? 'transparent' : varient === 'fill' && color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.color};
    color: ${({ color, varient, theme, skin }) => varient === 'outlined' || skin === 'light' ? color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.color : "#fff"};
    padding: 0 8px;
    line-height: 1.8    ;
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
`
export default ChipWrapper