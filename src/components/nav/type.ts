import { ReactNode } from "react";
export interface Parent {
    title: string;
    icon: ReactNode;
    rootPath: string;
}
export interface Childrens {
    parent?: Parent;
    label?: string;
    path?: string;
    icon?: ReactNode;
    childrens?: Childrens[];
    hideIcon?: boolean;
}

export interface NavItemType {
    label: string;
    path: string;
    icon?: ReactNode;
    hideIcon?: boolean;
}

export default interface NavOptions {
    icon?: ReactNode;
    label?: string;
    path?: string;
    parent?: Parent;
    childrens?: Childrens[];
    hideIcon?: boolean;
}