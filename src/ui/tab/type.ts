import { ReactNode } from "react";

export interface TabsProps {
    children: ReactNode;
    value: number;
    varient?: "standard" | "regular";
    direction?: "horizontal" | "vertical";
}