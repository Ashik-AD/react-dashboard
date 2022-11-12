import React, { CSSProperties, ReactNode } from "react";

type Varient = 'text' | 'contained' | 'outlined';
type Color = 'success' | 'info' | 'warning' | 'error';
type Size = 'small' | 'medium' | 'large';

export interface ButtonType {
  varient?: Varient;
  children: string | ReactNode;
  color?: Color | string;
  onClick?: (eve: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
  width?: string;
  styles?: CSSProperties;
  type?: "button" | "submit";
}

export interface IconButtonProps extends ButtonType {
  size?: number;
  roundness?: 'circle' | 'rounded' | 'square';
  fontSize?: number;
  contentOpacity?: number;
}