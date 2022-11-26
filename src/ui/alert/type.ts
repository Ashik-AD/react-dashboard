import { ReactNode } from "react";

export interface AlertOptions {
    alertTitle?: string | ReactNode;
    severity: "error" | "warning" | "info" | "success";
    varient?: "outlined" | "filled";
    action?: ReactNode;
    children?: string | ReactNode;
}