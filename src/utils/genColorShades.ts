const genColorShades = (color: string, option?: { total?: number, intensity?: number }): string[] => {
    const colors = Array(option?.total ? option.total : 9).fill(0);
    const colorCodes = color.toString().split(/\D+/).join().split(",").splice(1, 3).join(", ").toString();
    return colors.map((_, index) => (`rgba(${colorCodes}, 0.${9 - (option?.intensity ? option?.intensity * index + 1 : index)})`))
}
export default genColorShades