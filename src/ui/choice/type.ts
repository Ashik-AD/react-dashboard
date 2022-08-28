export interface ChoiceProps {
    label: string;
    name: string;
    onChange?: (value: string) => void;
    value: string | number;
    selected: string;
}
export interface ChoiceCircleProps {
    selected?: boolean;
}
export interface DotProps extends ChoiceCircleProps { }