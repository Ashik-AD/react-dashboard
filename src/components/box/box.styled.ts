import styled
    from "styled-components";
import { BoxProps } from "./type";

const box = styled('div') <BoxProps>`
    position: relative;
    display: ${({ display }) => display ? display : 'block'};
    ${({ display, align, justify, flexDirection, space, wrap }) => display === 'flex' && `
        align-items: ${align ? align : 'initial'}};
        justify-content: ${justify ? justify : 'initial'}};
        flex-direction: ${flexDirection ? flexDirection : 'row'};
        flex-wrap: ${wrap};
        gap: ${space}rem;
        `
    }
    ${({ margin }) => margin && `margin: ${margin}px;`}
    ${({ mx }) => mx && `margin-left: ${mx}px; margin-right: ${mx}px;`}
    ${({ my }) => my && `margin-top: ${my}px; margin-bottom: ${my}px;`}
    ${({ mt }) => mt && `margin-top: ${mt}px;`}
    ${({ mr }) => mr && `margin-right: ${mr}px;`}
    ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
    ${({ ml }) => ml && `margin-left: ${ml}px;`}

    ${({ padding }) => padding && `padding: ${padding}px;`}
    ${({ px }) => px && `padding-left: ${px}px; padding-right: ${px}px;`}
    ${({ py }) => py && `padding-top: ${py}px; padding-bottom: ${py}px;`}
    ${({ pt }) => pt && `padding-top: ${pt}px;`}
    ${({ pr }) => pr && `padding-right: ${pr}px;`}
    ${({ pb }) => pb && `padding-bottom: ${pb}px;`}
    ${({ pl }) => pl && `padding-left: ${pl}px;`}
 `
export default box;