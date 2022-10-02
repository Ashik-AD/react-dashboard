import { ReactNode } from "react";


export interface Parent {
    title: string;
    icon: ReactNode;
}

export interface Childrens {
    parent?: Parent;
    label?: string;
    path?: string;
    icon?: ReactNode;
    childrens?: Childrens[]
}

export interface NavItemType {
    label: string;
    path: string;
    icon?: ReactNode;
}

export default interface NavOptions {
    icon?: ReactNode;
    label?: string;
    path?: string;
    parent?: Parent;
    childrens?: Childrens[]
}