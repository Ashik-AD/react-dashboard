import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface Base {
    varient?: 'circular' | 'rounded' | 'square';
    size?: number;
    classes?: string;
    styles?: CSSProperties;
}

export interface AvatarProps extends Base {
    src: string;
    alt: string;
}

export interface CustomAvatarProps extends Base {
    children: ReactNode | string;
    color?: string;
    skin?: 'light' | 'light-static';

}