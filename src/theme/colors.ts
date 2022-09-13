export type red = {
    name: 'red',
    color: '#FD5D5D'
}

export type green = {
    name: 'green',
    color: '#3CCF4E'
}

export type purple = {
    name: 'purple',
    color: '#A66CFF'
}
export type blue = {
    name: 'blue',
    color: '#00D7FF'
}

export type orange = {
    name: 'orange',
    color: '#FF5B00'
}
export type pinky = {
    name: 'pinky',
    color: '#F94892'
}

export interface Dark {
    name: 'dark';
    background: '#1B2430';
    foreground: '#252d3a';
    textColor: '#d3d3d3';
}
export interface Light {
    name: 'light';
    background: '#f8f5ff';
    foreground: '#fffffd';
    textColor: '#3a3541de';
}

export type ThemeMode = Dark | Light;
export type PrimaryColor = red | green | purple | blue | orange | pinky;
export const colorPallets: PrimaryColor[] = [
    { name: 'red', color: "#FD5D5D" },
    { name: 'green', color: "#3CCF4E" },
    { name: 'blue', color: "#00D7FF" },
    { name: 'purple', color: "#A66CFF" },
    { name: 'orange', color: "#FF5B00" },
    { name: 'pinky', color: "#F94892" },
];