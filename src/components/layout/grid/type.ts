import { ReactNode } from "react";
interface Spacing {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xlg?: number;
}
// interface Margins {
//     margin?: number;
//     ml?: number;
//     mr?: number;
//     mt?: number;
//     mb?: number;
// }
// interface Paddings {
//     padding?: number;
//     pt?: number;
//     pr?: number;
//     pb?: number;
//     pl?: number;
// }
export interface GridLayoutProps {
    children: ReactNode;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    spacing?: number | Spacing;
    rowSpacing?: number | Spacing;
    columnSpacing?: number | Spacing;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around';
    classes?: string;
    noShifting?: boolean;
}
