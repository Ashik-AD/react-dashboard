import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface ChipProps {
    label: string;
    varient?: "outlined" | 'fill';
    skin?: "light" | 'glass';
    color?: string;
    size?: "small" | 'medium';
    icon?: ReactNode;
    styles?: CSSProperties;
    avatar?: ReactNode;
    labelWeight?: number;
}