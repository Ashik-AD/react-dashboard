type Size = "small" | "regular";
export interface TogglerProps {
    toggled?: boolean;
    label?: string;
    onToggle?: () => void;
    label2?: string;
    size?: Size;
}
export interface ToggleElProps {
    toggled: boolean;
    size?: Size;
}
