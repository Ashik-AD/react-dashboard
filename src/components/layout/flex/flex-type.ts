import React from "react";
import { CSSProperties } from "styled-components";

export type Direction = "row" | 'column';

export type Gap = 'sm' | 'regular' | 'medium' | 'large';

export type Wrap = 'wrap' | 'nowrap';

export type AlignContent = "start" | 'center' | 'bottom';

export type JustifyContent = "start" | 'center' | "between" | 'around' | 'evenly';

export default interface FlexType {
    direction?: Direction;
    gap?: Gap;
    wrap?: Wrap;
    alignment?: AlignContent;
    justify?: JustifyContent;
    children: React.ReactNode;
    styles?: CSSProperties;
}
