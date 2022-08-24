import {ReactNode} from "react";

export interface GridType {
    children: ReactNode;
    direction?: 'row' | 'column';
    count?: number;
    gap?: number;
    rowGap?: number;
    colGap?: number;
}