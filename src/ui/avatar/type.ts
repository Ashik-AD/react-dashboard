import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type varient = 'circular' | 'rounded' | 'square';
type size = number;
export interface Base {
    classes?: string;
    styles?: CSSProperties;
    varient?: varient;
    size?: size;
    onClick?: () => void;
}

export interface AvatarProps extends Base {
    src: string;
    alt: string;
    avatar?: string;
    name?: string;
}
export interface StyleBaseProps {
    size?: size;
    varient?: varient;
}
export interface CustomAvatarProps extends Base {
    children: ReactNode | string;
    color?: string | 'skin';
    skin?: 'light' | 'light-static';
    fontSize?: number;
}