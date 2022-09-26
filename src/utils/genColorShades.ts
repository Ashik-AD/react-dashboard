const genColorShades = (color: string, option?: { total?: number, intensity?: number, from?: number }): string[] => {
    const colors = Array(option?.total ? option.total : 9).fill(0);
    const colorCodes = color.toString().split(/\D+/).join().split(",").splice(1, 3).join(", ").toString();
    return colors.map((_, index) => (`rgba(${colorCodes}, 0.${option?.intensity ? option.intensity : (option?.from ? option.from : 9) - index})`))
}

type numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
export const addOpacityInHex = (hexColor: string, intensity: { initiator?: numbers, follower?: numbers }) => {
    let hex = hexColor.replace("#", '');
    if (hex.length < 6) {
        return;
    }
    if (hex.length === 8) {
        hex = hex.split('').splice(0, 6).join("");
    }
    const { initiator, follower } = intensity;
    return `#${hex}${initiator && follower ? `${initiator}${follower}` : !initiator ? `0${follower}` : !follower ? `${initiator}${initiator}` : "d9"}`
}
export default genColorShades