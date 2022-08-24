import styled from 'styled-components';

import { GridType } from "./grid-type";

const GridLayout = styled.div<GridType>`
    display: grid;

    // gird row or column
    ${({direction, count}) => direction === 'column' ? `grid-template-columns: repeat(${count ? count : 12}, 1fr)` : direction === 'row' ? `grid-template-rows: repeat(${count ? count : 12}, 1fr)` : null};

    // gap
    ${({gap}) => gap && `gap: ${gap}px;`}

    // row gap
    ${({rowGap}) => rowGap && `row-gap: ${rowGap}px;`}

    // column gap
    ${({colGap}) => colGap && `column-gap: ${colGap}px;`}
`;
export default GridLayout;
