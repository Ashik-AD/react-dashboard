import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components';


export default interface DropDownProps<T> {
    renderItem: (item: T) => ReactNode;
    extractKey: (item: T) => string;
    data: T[];
    label: ReactNode;
    className?: string;
    styles?: CSSProperties;
}
