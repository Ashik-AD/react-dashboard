import { ReactNode } from "react";

export interface Base {
    varient?: 'circular' | 'rounded' | 'square';
    size?: number;
    classes?: string;
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