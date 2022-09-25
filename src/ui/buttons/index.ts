import { ReactNode } from "react";

type Varient = 'text' | 'contained' | 'outlined';
type Color = 'success' | 'info' | 'warning' | 'error';
type Size = 'small' | 'medium' | 'large';

export interface ButtonType {
  readonly varient?: Varient;
  readonly children: string | ReactNode;
  readonly color?: Color | string;
  readonly onClick?: () => void;
  readonly className?: string;
}

export interface IconButtonProps extends ButtonType {
  readonly size?: number;
  readonly roundness?: 'circle' | 'rounded' | 'square';
  readonly fontSize?: number;
}