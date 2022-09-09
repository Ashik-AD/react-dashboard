export default function formatNumber(value: number, divider?: number, option?: { toFixed?: number, currancy?: boolean }): string {
    if (!divider || value < divider!) {
        return addComma(value);
    }
    else {
        const calc = value % divider > 0 ? +Math.abs(value / divider).toFixed(option?.toFixed ? option.toFixed : 2) : value / divider;
        return `${addComma(calc)}${units(divider.toString().length)}`;
    }
}

function units(length: number) {
    if (length >= 4 && length <= 5) {
        return 'k';
    }
    else if (length >= 6 && length <= 8) {
        return 'm';
    }
    else if (length >= 9 && length <= 10) {
        return 'b';
    }
    return;
}

function addComma(value: number) {
    return new Intl.NumberFormat().format(value)
}