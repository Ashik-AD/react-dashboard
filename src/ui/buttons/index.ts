import React, { CSSProperties, ReactNode } from "react";

type Varient = 'text' | 'contained' | 'outlined';
type Color = 'success' | 'info' | 'warning' | 'error';

export interface ButtonType {
  varient?: Varient;
  children: string | ReactNode;
  color?: Color | string;
  onClick?: (eve: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
  width?: string;
  styles?: CSSProperties;
  type?: "button" | "submit" | "reset";
}

export interface IconButtonProps extends ButtonType {
  size?: number;
  roundness?: 'circle' | 'rounded' | 'square';
  fontSize?: number;
  contentOpacity?: number;
}