import styled from 'styled-components';
import { alertColor, Colors } from '../color/alert';
import { CustomAvatarProps } from './type';

export const AvtarWrapper = styled.span<{ size?: number }>`
    position: relative;
    display: inline-flex;
    min-height: ${({ size }) => size ? size : 40}px;    
    min-width: ${({ size }) => size ? size : 40}px;    
    height: ${({ size }) => size ? size : 40}px;    
    width: ${({ size }) => size ? size : 40}px;    
    border-radius: 50%;
    overflow: hidden;
`

export const AvatarImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
`

export const CustomeAvatarWrapper = styled('span') <CustomAvatarProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${({ size }) => size ? size : 45}px;
    min-width: ${({ size }) => size ? size : 45}px;
    height: ${({ size }) => size ? size : 45}px;
    width: ${({ size }) => size ? size : 45}px;
    color: ${({ theme, color, skin }) => color ? skin ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : '#fff' : theme.textColor};
    border-radius: ${({ varient }) => varient === 'rounded' ? '10%' : varient === 'square' ? '1%' : "50%"};
    font-size: ${({ size }) => size ? ((size * 50) / 100) : '20'}px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    overflow: hidden;
    user-select: none;
    z-index: 1;

    &::after {
        position: absolute;
        height: 100%;
        width: 100%;
        content: '';
        top: 0;
        left: 0;
        background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.name === 'dark' ? '#565555' : '#c8c5c5'};
        ${({ skin }) => skin && skin === 'light' ? `filter: opacity(10%);` : ''}
        z-index: -1;
    }

    & > svg {
        font-size: ${({ size }) => size ? ((size * 100) / 30) * 0.16 : '30'}px;
    }
`;