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

export interface Dark {
    name: 'dark';
    background: '#1B2430';
    foreground: '#161b24';
    textColor: '#d3d3d3';
}
export interface Light {
    name: 'light';
    background: '#DFDFDE';
    foreground: '#fffffd';
    textColor: '#191919';
}

export type ThemeMode = Dark | Light;
export type PrimaryColor = red | green | purple | blue;