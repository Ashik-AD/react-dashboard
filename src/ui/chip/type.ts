import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface ChipProps {
    label: string;
    varient?: "outlined" | 'fill';
    skin?: "light" | 'glass';
    color?: string;
    size?: "small" | 'large';
    children?: ReactNode;
    styles?: CSSProperties;
}