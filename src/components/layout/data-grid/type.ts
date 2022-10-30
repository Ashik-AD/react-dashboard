import { ReactNode } from "react";
export default interface DataGridOptions<T> {
    rows: T[];
    renderGridData: (row: T, column: { [field: string]: DataGridColoumn }) => ReactNode;
    gridDataKey: (item: T) => string | number;
    columns: DataGridColoumn[];
    rowPerPage?: number;
    rowPerPageOption?: number[];
    pagination?: boolean;
    height?: string;
    width?: string;
}

export interface DataGridColoumn {
    fieldId: string;
    label: string | ReactNode;
    width: number | string;
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
