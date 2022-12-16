import styled
    from "styled-components";
import { alertColor, AlertColorType } from "../../ui/color/alert";
import { BoxProps, ColorBoxProps } from "./type";

const box = styled('div') <BoxProps>`
    ${({ position }) => position ? `position: ${position};` : ""}
    ${({ width }) => width ? `width: ${width};` : ""}
    ${({ height }) => height ? `height: ${height};` : ""}
    display: ${({ display }) => display ? display : 'block'};
    ${({ display, align, justify, flexDirection, space, wrap, flex }) => display === 'flex' && `
         ${align ? `align-items: ${align};` : ''}};
        ${justify ? `justify-content: ${justify};` : ''}};
        ${flexDirection ? `flex-direction: ${flexDirection};` : ""}
        ${wrap ? `flex-wrap: ${wrap};` : ""}
        ${space ? `gap: ${space}rem;` : ""}
        ${flex ? `flex: ${flex};` : ""}
        `
    }

    ${({ margin }) => margin && `margin: ${margin}px;`}
    ${({ mx }) => mx && `margin-left: ${mx}px; margin-right: ${mx}px;`}
    ${({ my }) => my && `margin-top: ${my}px; margin-bottom: ${my}px;`}
    ${({ mt }) => mt && `margin-top: ${mt}px;`}
    ${({ mr }) => mr && `margin-right: ${mr}px;`}
    ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
    ${({ ml }) => ml && `margin-left: ${ml}px;`}

    ${({ padding }) => padding && `padding: ${padding}${typeof padding === "number" ? "px" : "" };`}
    ${({ px }) => px && `padding-left: ${px}px; padding-right: ${px}px;`}
    ${({ py }) => py && `padding-top: ${py}px; padding-bottom: ${py}px;`}
    ${({ pt }) => pt && `padding-top: ${pt}px;`}
    ${({ pr }) => pr && `padding-right: ${pr}px;`}
    ${({ pb }) => pb && `padding-bottom: ${pb}px;`}
    ${({ pl }) => pl && `padding-left: ${pl}px;`}
    ${({ borderRadius }) => borderRadius ? `border-radius: ${borderRadius};` : ""}

 `

export const StyledColorBox = styled(box) <ColorBoxProps>`
    position: ${({ position }) => position ? position : 'relative'};
    ${({ border, theme }) => border?.show ? `
    border-style: solid;
    border-width: ${border.size ? `${border.size}` : `1px`};
    border-color: ${border.color ? alertColor.hasOwnProperty(border.color) ? alertColor[border.color as AlertColorType] : border.color : theme.mode.name === "dark" ? "rgb(255 255 255 / 12%)" : "rgb(0 0 0 / 12%)"};
    border-left-width: ${border.left ? `${border.left}` : border.size};
    border-right-width: ${border.right ? `${border.right}` : border.size};
    border-bottom-width: ${border.bottom ? `${border.bottom}` : border.size};
    border-top-width: ${border.top ? `${border.top}` : border.size};
    border-radius: ${border.radius ? border.radius : 0};
    ` : ""}};

    z-index: 1;
    overflow: hidden;
    &:after {
        position: absolute;
        content: '';
        background: ${({ theme, color }) => color ? alertColor.hasOwnProperty(color) ? alertColor[color as AlertColorType] : color : theme.primaryColor.color};
        ${({ backgroundTheme, theme }) => backgroundTheme ? `background: ${backgroundTheme === 'background' ? theme.mode.background : backgroundTheme === "foreground" ? theme.mode.foreground : ""};` : ""}
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: ${({ transparency }) => transparency ? `0.${transparency}` : 1};
        ${({ borderRadius }) => borderRadius ? `border-radius: ${borderRadius};` : ""}
        z-index: -1;
    }
 `
export default box;