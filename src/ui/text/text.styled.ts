import styled from 'styled-components';
import TextType, { fontWeight } from './type';
import { alertColor, Colors } from '../color/alert';

export const Paragraph = styled('p') <TextType>`
    font-size: ${({ size }) => size && `${size}px`};
    text-align: ${({ align }) => align};
    color: ${({ color, theme }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.mode.textColor};
    color: ${({ secondary, theme }) => secondary && (theme.mode.name === 'dark' ? 'rgb(211 211 211 / 68%);' : 'rgb(25 25 25 / 72%);')}
    letter-spacing: 0.15px;
    font-weight: ${({ weight }) => weight && fontWeight[weight]};
`;

export const TextSpan = styled('span') <TextType>`
    font-size: ${({ size }) => size && `${size}px`};
    text-align: ${({ align }) => align};
    color: ${({ color, theme }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.mode.textColor};
    color: ${({ secondary, theme }) => secondary && (theme.mode.name === 'dark' ? 'rgb(211 211 211 / 68%);' : 'rgb(25 25 25 / 72%);')}

    letter-spacing: 0.15px;
    font-weight: ${({ weight }) => weight && fontWeight[weight]};
`;