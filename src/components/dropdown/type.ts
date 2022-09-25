import { ReactNode, CSSProperties } from 'react'

export default interface DropDownProps {
    data: { label: string | number, id?: string | number, handler: (eve?: any) => void }[];
    label: ReactNode;
    className?: string;
    styles?: CSSProperties;
    handler?: any;
    visible: boolean;
    dropdownId: string;
}
