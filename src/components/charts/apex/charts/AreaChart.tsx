import { ApexOptions } from "apexcharts"
import useFetch from "../../../../hooks/useFetch"
import Apex from "../Apex"

const AreaChart = () => {
    const {data, loading} = useFetch<any[]>("/api/chart-data/websiteAnalytic")
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
    if(!data || loading) return <></>
    return(
        <>
        <Apex type="area" height={400} width="100%" series={data} options={chartOptions}  />
        </>
    )
}
export default AreaChart