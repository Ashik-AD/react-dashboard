import styled from 'styled-components';
import TextType, { fontWeight } from './type';
import { alertColor, Colors } from '../color/alert';

export const Paragraph = styled('p') <TextType>`
text-align: ${({ align }) => align};
color: ${({ color, theme }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.mode.textColor};
${({ secondary, theme, color }) => secondary ? `color: ${secondary && color ? color : (theme.mode.name === 'dark' ? 'rgb(211 211 211 / 68%);' : 'rgb(25 25 25 / 72%);')}` : ''}
letter-spacing: 0.15px;
${({ skinColor, theme }) => skinColor ? `color: ${theme.primaryColor.color};` : ''}
font-weight: ${({ weight }) => weight && fontWeight[weight]};
${({ size }) => size && `font-size: ${size}px;`}
    & svg {
       ${({ size }) => size && `font-size: ${size}px`};
    }
`;

export const TextSpan = styled('span') <TextType>`
    text-align: ${({ align }) => align};
    color: ${({ color, theme }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as keyof Colors] : color : theme.mode.textColor};
   ${({ secondary, theme, color }) => secondary ? color ? color : `color: ${secondary && (theme.mode.name === 'dark' ? 'rgb(211 211 211 / 68%);' : 'rgb(25 25 25 / 72%);')}` : ''}
   ${({ skinColor, theme }) => skinColor ? `color: ${theme.primaryColor.color};` : ''}
    letter-spacing: 0.15px;
    font-weight: ${({ weight }) => weight && fontWeight[weight]};
    ${({ size }) => size && `font-size: ${size}px;`}

    & svg {
        ${({ size }) => size && `font-size: ${size}px;`}
    }
`;