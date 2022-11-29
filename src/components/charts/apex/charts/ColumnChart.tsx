import { ApexOptions } from "apexcharts"
import Apex from "../Apex"

const ColumnChart = () => {
    const chartOptions: ApexOptions = 
    {
        chart: {
            type: "bar",
            stacked: true,
        },
        legend: {
            position:'top',
            horizontalAlign: "left"
        },
        xaxis: {
            axisBorder: {show: false},
            type: "category",
            categories: ["1/12", "7/12", "9/12", "11/12", "15/12", "18/12", "21/12", "26/12", "28/12"],
        },
        yaxis: { 
            labels: {show: true},
        },
        grid: {
            show: true,
            position:'back',
            xaxis: {lines: {show: true}}
        },
       dataLabels: {
        enabled: false
       },
       plotOptions: {
        bar: {
            columnWidth: "26px",
            borderRadius: 16
        }
       }
    }
    
    const series = [{
        name: "Apple",
        data: [90, 120, 55, 100, 80, 125, 175, 70, 88],
        color: "#9e82d5"
    },
    {
        name: 'Samsung',
        data: [85, 130, 76, 80, 105, 145, 157, 89, 90],
        color: "#a595f9"
    }
]

    return(
        <>
        <Apex type="bar" height={400} width="100%" series={series} options={chartOptions}  />
        </>
    )
}
export default ColumnChart