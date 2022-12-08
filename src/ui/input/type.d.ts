import { ChangeEvent, CSSProperties, KeyboardEventHandler, ReactNode } from "react";
import { AlertColorType } from "../color/alert";

type InputType = "text" | "password" | "email" | "file" | "number" | "checkbox" | 'radio' | 'range';
export type InputVarient = "filled" | 'standard' | 'regular';
type TextFieldChange = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

type InputEvents = {
    multiRow?: false; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
} | {
    multiRow: true; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

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
    as?: string;

}
export type Inputs = {
    type?: InputType;
    name: string;
    defaultValue?: string | number;
    placeholder?: string;
    required?: boolean;
    label?: string;
    id?: string;
    classes?: string;
    hypertext?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    style?: CSSProperties;
    autoFocus?: boolean;
    value?: number | string | undefined;
    maxValue?: number;
    minValue?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
} & InputOptions & InputEvents