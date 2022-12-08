
type Theme = {mode: "dark" | "light"}

export default function ChartConfig(chart: any){
        const  theme = JSON.parse(localStorage.getItem("triolo-settings") as string) as Theme;
        chart.defaults.scale.grid.color = theme?.mode === "dark" ? "#F9FFE823" : "#F0F0F0";
        chart.defaults.borderColor = theme?.mode === "dark" ? "#F9FFE823" : "#F0F0F0";
        chart.defaults.color = theme?.mode === "dark" ? "#B8B8B8" : "#535353";
        chart.defaults.plugins.legend.labels.boxWidth = 16;
        chart.defaults.plugins.legend.labels.boxHeight = 16;
        chart.defaults.plugins.legend.labels.borderRadius = 8;
        chart.defaults.plugins.legend.labels.boxPadding = 0;
        chart.defaults.plugins.legend.labels.useBorderRadius = true;
        chart.defaults.plugins.legend.labels.pointStyle= "circle";
}