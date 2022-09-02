export default function formatNumber(value: number, divider?: number): string {
    if (!divider || value < divider!) {
        return addComma(value);
    }
    else {
        return `${Math.abs(value / divider).toFixed(2)}${units(divider.toString().length)}`;
    }
}

function units(length: number) {
    if (length >= 4 && length <= 5) {
        return 'K';
    }
    else if (length >= 6 && length <= 8) {
        return 'M';
    }
    else if (length >= 9 && length <= 10) {
        return 'B';
    }
    return;
}

function addComma(value: number) {
    return new Intl.NumberFormat().format(value)
}