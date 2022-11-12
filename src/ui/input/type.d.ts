import { ChangeEvent, CSSProperties, KeyboardEventHandler, ReactNode } from "react";
import { AlertColorType } from "../color/alert";

type InputType = "text" | "password" | "email" | "file" | "number" | "checkbox" | 'radio' | 'range';
export type InputVarient = "filled" | 'standard' | 'regular';
export interface InputOptions {
    disable?: boolean;
    varient?: InputVarient;
    sizes?: "small" | "normal";
    color?: AlertColorType;
    error?: boolean;
    hasLabel?: boolean;
    borderRadius?: string;
    width?: string;
    maxWidth?: string;

}
export interface Inputs extends InputOptions {
    type?: InputType;
    name: string;
    defaultValue?: string | number;
    placeholder?: string;
    required?: boolean;
    label?: string;
    id?: string;
    classes?: string;
    hypertext?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    style?: CSSProperties;
    autoFocus?: boolean;
    multiRow?: boolean;
    value?: number | string | undefined;
    maxValue?: number;
    minValue?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}