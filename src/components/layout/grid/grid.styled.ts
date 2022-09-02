import styled from 'styled-components';

import { GridLayoutProps } from "./grid-type";

const GridLayout = styled.section<GridLayoutProps>`
    display: flex;
    flex-wrap: wrap;

    flex-direction: ${({ direction }) => direction === 'column' ? 'column' : direction === 'row-reverse' ? 'row-reverse' : direction === 'column-reverse' ? 'column-reverse' : 'row'};

    align-items: ${({ alignItems }) => alignItems === 'flex-start' ? 'flex-start' : alignItems === 'center' ? 'center' : alignItems === 'flex-end' ? 'flex-end' : alignItems === 'stretch' ? 'stretch' : alignItems === 'baseline' ? 'baseline' : 'flex-start'};

    justify-content: ${({ justifyContent }) => justifyContent === 'flex-start' ? 'flex-start' : justifyContent === 'center' ? 'center' : justifyContent === 'flex-end' ? 'flex-end' : justifyContent === 'space-around' ? 'space-around' : justifyContent === 'space-between' ? 'space-between' : justifyContent === 'space-evenly' ? 'space-evenly' : 'flex-start'};

    // spacing
    ${({ spacing }) => typeof spacing === 'number' && `gap: ${spacing}rem;`}

    // row gap
    ${({ rowSpacing }) => typeof rowSpacing === 'number' && `row-gap: ${rowSpacing}rem;`}

    // column gap
    ${({ columnSpacing }) => typeof columnSpacing === 'number' && `column-gap: ${columnSpacing}rem;`}

    @media screen and (min-width: 0px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && `gap: ${spacing.xs}rem;`
        }
            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `row-gap: ${rowSpacing.xs};`
        }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `column-gap: ${columnSpacing.xs};`
        }
        }
    }

    @media screen and (min-width: 600px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && `gap: ${spacing.sm};`
        }

            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `row-gap: ${rowSpacing.sm};`
        }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `column-gap: ${columnSpacing.sm};`
        }
        }
    }
    @media screen and (min-width: 900px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && `gap: ${spacing.md};`
        }

            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `row-gap: ${rowSpacing.md};`
        }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `column-gap: ${columnSpacing.md};`
        }
        }
    }
    @media screen and (min-width: 1200px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && `gap: ${spacing.lg};`
        }

            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `row-gap: ${rowSpacing.lg};`
        }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `column-gap: ${columnSpacing.lg};`
        }
        }
    }
    @media screen and (min-width: 1536px){
        & {
            ${({ spacing }) => typeof spacing === 'object' && `gap: ${spacing.xlg};`
        }

            ${({ rowSpacing }) => typeof rowSpacing === 'object' && `row-gap: ${rowSpacing.xlg};`
        }
            ${({ columnSpacing }) => typeof columnSpacing === 'object' && `column-gap: ${columnSpacing.xlg};`
        }
        }
    }
`;
export default GridLayout;
