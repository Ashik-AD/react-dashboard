import styled from 'styled-components';

import { GridLayoutProps } from "./type";

const GridLayout = styled('div') <GridLayoutProps>`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    width: calc(100% + ${({ spacing, columnSpacing }) => (spacing || columnSpacing || 0) + "rem"})};
    margin-left: ${({ spacing, columnSpacing }) => (spacing || columnSpacing) ? `-${(spacing || columnSpacing)}rem` : 0};
    ${({ noShifting }) => noShifting && "margin-left: 0rem; width: 100%;"}

    flex-direction: ${({ direction }) => direction === 'column' ? 'column' : direction === 'row-reverse' ? 'row-reverse' : direction === 'column-reverse' ? 'column-reverse' : 'row'};

    align-items: ${({ alignItems }) => alignItems === 'flex-start' ? 'flex-start' : alignItems === 'center' ? 'center' : alignItems === 'flex-end' ? 'flex-end' : alignItems === 'stretch' ? 'stretch' : alignItems === 'baseline' ? 'baseline' : 'flex-start'};

    justify-content: ${({ justifyContent }) => justifyContent === 'flex-start' ? 'flex-start' : justifyContent === 'center' ? 'center' : justifyContent === 'flex-end' ? 'flex-end' : justifyContent === 'space-around' ? 'space-around' : justifyContent === 'space-between' ? 'space-between' : justifyContent === 'space-evenly' ? 'space-evenly' : 'initial'};

    // spacing
    ${({ spacing }) => typeof spacing === 'number' && `& > .grid-item {padding-left: ${spacing}rem; padding-bottom: ${spacing}rem;}`}

    // row gap
    ${({ rowSpacing }) => typeof rowSpacing === 'number' && `& > .grid-item {padding-bottom: ${rowSpacing}rem;}`}

    // column gap
    ${({ columnSpacing }) => typeof columnSpacing === 'number' && `& > .grid-item {padding-left: ${columnSpacing}rem;}`}
    @media screen and (min-width: 0px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && ` .grid-item {padding-left: ${spacing.xs}rem; padding-bottom: ${spacing.xs}rem;}`
    }
            ${({ rowSpacing }) => typeof rowSpacing === 'object' && ` .grid-item {padding-bottom: ${rowSpacing.xs}rem;}`
    }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && ` .grid-item {padding-left: ${columnSpacing.xs}rem;}`
    }
}
    }

    @media screen and (min-width: 600px){

            & {
                ${({ spacing }) => typeof spacing === 'object' && ` .grid-item {padding-left: ${spacing.sm}rem; padding-bottom: ${spacing.sm}rem;}`
    }
                ${({ rowSpacing }) => typeof rowSpacing === 'object' && ` .grid-item {padding-bottom: ${rowSpacing.sm}rem;}`
    }
                ${({ columnSpacing }) => typeof columnSpacing === 'object' && ` .grid-item {padding-left: ${columnSpacing.sm}rem;}`
    }
            }
    }
    @media screen and (min-width: 900px){
            ${({ spacing }) => typeof spacing === 'object' && `& .grid-item {padding-left: ${spacing.md}rem; padding-bottom: ${spacing.md}rem;}`
    }
            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `& .grid-item {padding-bottom: ${rowSpacing.md}rem;}`
    }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `& .grid-item {padding-left: ${columnSpacing.md}rem;}`
    }
    }
    @media screen and (min-width: 1200px){

        // ${({ spacing, columnSpacing }) => (spacing || columnSpacing) && `margin-left: -${(spacing || columnSpacing)}rem;`}
        ${({ spacing }) => typeof spacing === 'object' && `& .grid-item {padding-left: ${spacing.lg}rem; padding-bottom: ${spacing.lg}rem;}`
    }
        ${({ rowSpacing }) => typeof rowSpacing === 'object' && `& .grid-item {padding-bottom: ${rowSpacing.lg}rem;}`
    }
        ${({ columnSpacing }) => typeof columnSpacing === 'object' && `& .grid-item {padding-left: ${columnSpacing.lg}rem;}`
    }
    }
    @media screen and (min-width: 1536px){
        
            ${({ spacing }) => typeof spacing === 'object' && `& .grid-item {padding-left: ${spacing.xlg}rem; padding-bottom: ${spacing.xlg}rem;}`
    }
            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `& .grid-item {padding-bottom: ${rowSpacing.xlg}rem;}`
    }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `& .grid-item {padding-left: ${columnSpacing.xlg}rem;}`
    }
    }
`;
export const StyledGridInner = styled(GridLayout) <GridLayoutProps>`
    width: ${({ spacing, columnSpacing }) => (spacing || columnSpacing) ? `calc(100% + ${spacing || columnSpacing}rem)` : `100%`};
    margin-left: ${({ spacing, columnSpacing }) => (spacing || columnSpacing) ? -(spacing! || columnSpacing!) : 0}rem;
    margin-bottom: ${({ spacing, rowSpacing }) => (spacing || rowSpacing) ? -(spacing! || rowSpacing!) : 0}rem;
    .grid-item {
        ${({ columnSpacing, spacing }) => !(columnSpacing || spacing) && "padding-left: 0;"}
    }
`
export default GridLayout;
