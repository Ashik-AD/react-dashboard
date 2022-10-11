import { CSSProperties, ReactNode } from "react";

export interface BoxProps {
    children: ReactNode;
    position?: "relative" | "absolute" | "fixed" | "sticky";
    display?: 'flex' | 'block' | 'inline-block';
    justify?: 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'center' | 'flex-end';
    align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch' | 'normal';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flex?: string | number;
    wrap?: "wrap" | 'nowrap';
    space?: number;
    className?: string;
    margin?: number;
    mx?: number;
    my?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    padding?: number;
    py?: number;
    px?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    style?: CSSProperties;
    onClick?: () => void;
}

export interface ColorBoxProps extends BoxProps {
    transparency?: number;
    color?: string;
    border?: boolean;
    borderSize?: number;
    borderLeft?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderTop?: boolean;
    borderRadius?: number;
    backgroundTheme?: "foreground" | "background";
}