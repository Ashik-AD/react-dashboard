import { ReactNode } from "react";

export default interface CardProps {
    height?: string;
    width?: string;
    border?: string;
    borderColor?: "skin" | string;
    margin?: string;
    mt?: string;
    ml?: string;
    mr?: string;
    mb?: string;
    my?: string;
    mx?: string;
    padding?: string;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;
    py?: string;
    px?: string;
    background?: string;
    position?: 'absolute' | 'relative' | 'fixed' | 'inherite';
    shadow?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    className?: string;
}