import { CSSProperties } from 'react'

export default interface DotProps {
    color?: string;
    size?: "small" | "regular" | "large";
    outlined?: boolean;
    outlineColor?: string;
    varient?: "rounded" | "circle" | "rectangle";
    skin?: "light" | "semi-transparent";
    styles?: CSSProperties;
}
