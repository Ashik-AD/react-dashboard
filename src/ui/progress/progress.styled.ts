import styled from 'styled-components'
import { alertColor, Colors } from '../color/alert';
import ProgressProps from './type'

const progress = styled('div') <ProgressProps>`
    position: relative;
    display: flex;
    width: 100%;
    height: ${({ size }) => size === 'xsmall' ? 0.3 : size === 'small' ? 0.5 : 1}rem;
    border-radius: ${({ varient }) => varient === 'rounded' ? 1 : 0.1}rem;
    overflow: hidden;
    & .progress-inner {
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.primaryColor.color};
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0.3;
    }
    
    & .progress-outer {
        position: relative;
        height: 100%;
        width: ${({ start }) => start}%;
        background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.primaryColor.color};
        border-radius: ${({ varient }) => varient === 'rounded' ? 1 : 0.1}rem;
        transition: 200ms width ease-out;
        z-index: 2;
    }
`;
export default progress;