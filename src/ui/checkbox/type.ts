import React, { ReactNode } from "react";
import { AlertColorType } from "../color/alert";

interface BaseProps {
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    color?: AlertColorType | string;
    size?: 'medium' | 'small' | number;
}

export default interface CheckboxPropsType extends BaseProps {
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkedLabelColor?: AlertColorType | string;
    labelColor?: AlertColorType | string;
    label?: string;
}

export interface CheckPlaceholderProps extends BaseProps {
    children: ReactNode;
}

export interface LabelTextProps {
    disabled?: boolean;
    labelColor?: AlertColorType | string;
    checkedLabelColor?: AlertColorType | string;
    checked?: boolean;
    children: string | undefined;
}

