import { ReactNode } from "react";

export interface StyledProps {
    height?: string;
    width?: string;
}

export default interface DataGridOptions<T> extends StyledProps {
    columns: DataGridColoumn[];
    rows: T[];
    renderGridData: (row: T, column: { [field: string]: DataGridColoumn }) => ReactNode;
    gridDataKey: (item: T) => string;
    rowPerPage?: number;
    rowPerPageOption?: number[];
    pagination?: boolean;
}

export interface DataGridColoumn {
    fieldId: string;
    label: string;
    width: number;
}

type FieldName = string | "";
type BySort = 'asc' | 'desc' | "";
export interface SortOption {
    fieldName: FieldName;
    by: BySort;
}

export interface DataOptionContext {
    sortByAsc: (option: SortOption) => void;
    sortByDesc: (option: SortOption) => void;
    hideColumn: (fieldId: FieldName) => void;
    handleOpenColumnsCustomizer: () => void;
    handleShowFilter: () => void;
}
