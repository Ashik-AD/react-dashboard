export type red = {
    name: 'red',
    color: 'rgba(253, 93, 93, 1)'
}

export type green = {
    name: 'green',
    color: 'rgba(60, 207, 78, 1)'
}

export type purple = {
    name: 'purple',
    color: 'rgba(166, 108, 255, 1)'
}
export type blue = {
    name: 'blue',
    color: 'rgba(0, 215, 255, 1)'
}

export type orange = {
    name: 'orange',
    color: 'rgba(255, 91, 0, 1)'
}
export type pinky = {
    name: 'pinky',
    color: 'rgba(249, 72, 146, 1)'
}
export interface Dark {
    background: '#1B2430';
    foreground: '#252d3a';
    textColor: '#d3d3d3';
}
export interface Light {
    background: '#f8f5ff';
    foreground: '#fffffd';
    textColor: '#3a3541de';
}

export type ThemeMode = Dark | Light;
type ColorPallets = red | green | purple | blue | orange | pinky;
export type PrimaryColorName = ColorPallets["name"]
export type PrimaryColorCode = ColorPallets['color']
export type PrimaryColor = {
    name: PrimaryColorName;
    color: PrimaryColorCode;
}
export const colorPallets: Array<PrimaryColor> = [
    { name: 'red', color: "rgba(253, 93, 93, 1)" },
    { name: 'green', color: "rgba(60, 207, 78, 1)" },
    { name: 'blue', color: "rgba(0, 215, 255, 1)" },
    { name: 'purple', color: "rgba(166, 108, 255, 1)" },
    { name: 'orange', color: "rgba(255, 91, 0, 1)" },
    { name: 'pinky', color: "rgba(249, 72, 146, 1)" },
];