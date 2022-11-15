import React, { CSSProperties } from "react";

export type Headings = | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Varient = 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | 'inherit';

export type Alignment = 'left' | 'center' | 'right' | 'justify' | 'inherit';

export enum fontWeight {
    light = 300,
    regular = 400,
    medium = 500,
    bold = 600,
    extraBold = 800
}

type weight = "light" | 'regular' | 'medium' | 'bold' | 'extraBold';
type TextTransform = "uppercase" | 'lowercase' | 'capitalize' | "none";

type TextOverflow = "ellipsis" | "clip" | "unset";

export default interface TextType {
    size?: number;
    color?: string;
    varient?: Varient;
    heading?: Headings;
    align?: Alignment;
    children: string | number | React.ReactNode;
    paragraph?: boolean;
    styles?: CSSProperties;
    weight?: weight;
    secondary?: boolean;
    skinColor?: boolean;
    textTransform?: TextTransform;
    classes?: string;
    textOverflow?: TextOverflow;
    lineHeight?: string;
}