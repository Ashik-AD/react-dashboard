import { CSSProperties, ReactNode } from "react";

export interface BoxProps {
    children: ReactNode;
    width?: string;
    height?: string;
    position?: "relative" | "absolute" | "fixed" | "sticky";
    display?: 'flex' | 'block' | 'inline-block';
    justify?: 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'center' | 'flex-end';
    align?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch' | 'initial';
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
    padding?: number | string;
    py?: number;
    px?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    borderRadius?: string;
}

export interface ColorBoxProps extends BoxProps {
    transparency?: number;
    color?: string;
    border?: {
        show: boolean;
        size: string;
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
        radius?: string;
        color?: string;
    };
    backgroundTheme?: "foreground" | "background" | "";
}