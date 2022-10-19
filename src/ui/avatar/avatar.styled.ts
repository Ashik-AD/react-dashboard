import styled from 'styled-components';
import { alertColor, Colors } from '../color/alert';
import { CustomAvatarProps, StyleBaseProps } from './type';

export const AvtarWrapper = styled.span<StyleBaseProps>`
    position: relative;
    display: flex;
    min-height: ${({ size }) => size ? size : 40}px;    
    min-width: ${({ size }) => size ? size : 40}px;    
    height: ${({ size }) => size ? size : 40}px;    
    width: ${({ size }) => size ? size : 40}px;    
    border-radius: ${({ varient }) => varient === 'rounded' ? '10%' : varient === 'square' ? '1%' : "50%"};
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
    color: ${({ theme, color, skin }) => color ? skin ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : '#fff' : theme.mode.textColor};
    border-radius: ${({ varient }) => varient === 'rounded' ? '10%' : varient === 'square' ? '1%' : "50%"};
    font-size: ${({ size, fontSize }) => fontSize ? fontSize : size ? ((size * 50) / 100) : '20'}px;
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
        background: ${({ theme, color }) => color ? color === 'skin' ? theme.primaryColor.color : alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.mode.background};
        ${({ skin }) => skin && skin === 'light' ? `filter: opacity(20%);` : ''}
        z-index: -1;
    }

    & > svg {
        font-size: ${({ size, fontSize }) => fontSize ? fontSize : size ? ((size * 100) / 30) * 0.16 : '30'}px;
    }
`;