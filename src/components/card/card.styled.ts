import styled from 'styled-components'
import CardProps from './type'
import { alertColor, AlertColorType } from '../../ui/color/alert';

export const CardWrapper = styled('div') <CardProps>`
    position: ${({ position }) => position};
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    background: ${({ theme, background }) => background ? background : theme.mode.foreground};
    color: ${({ theme }) => theme.mode.textColor};

    // margin 
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ mt }) => mt && `margin-top: ${mt};`}
    ${({ mr }) => mr && `margin-right: ${mr};`}
    ${({ mb }) => mb && `margin-bottom: ${mb};`}
    ${({ ml }) => ml && `margin-left: ${ml};`}
    ${({ mx }) => mx && `margin-left: ${mx}; margin-right: ${mx};`}
    ${({ my }) => my && `margin-top: ${my}; margin-bottom: ${my};`}

    // padding 
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ pt }) => pt && `padding-top: ${pt};`}
    ${({ pr }) => pr && `padding-right: ${pr};`}
    ${({ pb }) => pb && `padding-bottom: ${pb};`}
    ${({ pl }) => pl && `padding-left: ${pl};`}
    ${({ px }) => px && `padding-left: ${px}; padding-right: ${px};`}
    ${({ py }) => py && `padding-top: ${py}; padding-bottom: ${py};`}

    // Shadow
    ${({ shadow, theme }) => shadow && `box-shadow: ${shadow === 'small' ? '0px 31px 18px -32px ' : shadow === 'medium' ? '0px 39px 60px -56px ' : '0px 54px 60px -30px ' && theme.mode.name === 'dark' ? 'rgba(25,52,64,1)' : 'rgba(166,166,166,1);'}`
    }

    // border
    ${({ theme }) => theme.skin === 'bordered' && (`border: 1px solid ${theme.mode.name === 'dark' ? ' #3d3e48' : '#e7e7e7'};`)}
    ${({ border }) => border && `border: ${border};`}
    ${({ borderColor, theme }) => borderColor ? `border-color: ${borderColor === 'skin' ? theme.primaryColor.color : alertColor.hasOwnProperty(borderColor) ? alertColor[borderColor as AlertColorType] : borderColor};` : ""}
    border-radius: 6px;

    //shadow
    box-shadow: ${({ theme }) => theme.skin === 'default' && '0px 2px 10px 0px'} ${({ theme }) => theme.skin === 'default' ? theme.mode.name === 'light' ? "#d9d5d5" : "#1b24303b" : "none"};

    ${({ theme }) => theme.skin === "bordered" ? `box-shadow: none!important;` : ""}
`;
