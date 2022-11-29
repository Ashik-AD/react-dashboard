import { ApexOptions } from "apexcharts"
import Apex from "../Apex"

const AreaChart = () => {
    const chartOptions: ApexOptions = 
    {
        chart: {
            type: "area"
        },
        fill: {
            type: "color"
        },
        stroke: {
            curve: "straight",
            show: false
        },
        legend: {
            position:'top',
            horizontalAlign: "left"
        },
        xaxis: {
            axisBorder: {show: false},
            
        },
        yaxis: { 
            labels: {show: true}
        },
        grid: {
            show: true,
            borderColor: "lightgray",
            position:'back',
            xaxis: {lines: {show: true}}
        },
       dataLabels: {
        enabled: false
       },
    }
    
    const series = [{
        name: "visits",
        data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
        color: "#f0dcff"
    },
    {
        name: 'Clicks',
        data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
        color: "#c19edb"
    },
    {
        name: 'Sales',
        data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
        color: "#a76cd3"
    },
]

    return(
        <>
        <Apex type="area" height={400} width="100%" series={series} options={chartOptions}  />
        </>
    )
}
export default AreaChart