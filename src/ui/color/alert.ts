export type AlertColorType = 'success' | 'info' | 'warning' | 'error';
export type AlertColor = string | Omit<string, AlertColorType>
export interface Colors {
    success: string; info: string; warning: string; error: string
}
export const alertColor: Colors = {
    success: 'rgb(86, 202, 0)',
    info: 'rgb(22, 177, 255)',
    warning: 'rgb(255, 180, 0)',
    error: 'rgb(255, 76, 81)'
}
