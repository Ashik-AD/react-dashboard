import { ApexOptions } from "apexcharts"
import useTheme from "../../../../theme/useTheme"
import Apex from "../Apex"

const HeatmapChart = () => {
    const {theme: {mode: {foreground}}} = useTheme()
    const options: ApexOptions = {
        chart: {
            type: "heatmap",
            parentHeightOffset: 0
        },
        colors: ["#d7baf8", "#d7b4fe", "#bd82fe", "#be84fc", "#a555f7", "#9033ea"],
        stroke: {
            colors: [foreground]
        },
        plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [
                        {color: "#d7baf8", from: 0, to: 10},
                        {color: "#d7b4fe", from: 10, to: 20},
                        {color: "#bd82fe", from: 20, to: 30},
                        {color: "#be84fc", from: 30, to: 40},
                        {color: "#a555f7", from: 40, to: 50},
                        {color: "#9033ea", from: 50, to: 60},
                    ]
                }
            }
        },
        legend: {
            show: true,
            position: "bottom",
            floating: true,
            markers: {
                offsetY: 0,
                offsetX: -3
            }  
        },
        xaxis: {
            axisTicks: {show: false},   
            axisBorder: {show: false},
            labels: {show: false}
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
       }
    }
    const series = [{name:"SUN",data:[{x:"w1",y:24},{x:"w2",y:10},{x:"w3",y:53},{x:"w4",y:8},{x:"w5",y:59},{x:"w6",y:16},{x:"w7",y:29},{x:"w8",y:0},{x:"w9",y:41},{x:"w10",y:1},{x:"w11",y:0},{x:"w12",y:27},{x:"w13",y:8},{x:"w14",y:30},{x:"w15",y:15},{x:"w16",y:50},{x:"w17",y:25},{x:"w18",y:42},{x:"w19",y:2},{x:"w20",y:58},{x:"w21",y:59},{x:"w22",y:48},{x:"w23",y:15},{x:"w24",y:42}]},{name:"MON",data:[{x:"w1",y:7},{x:"w2",y:59},{x:"w3",y:28},{x:"w4",y:24},{x:"w5",y:48},{x:"w6",y:1},{x:"w7",y:6},{x:"w8",y:3},{x:"w9",y:52},{x:"w10",y:2},{x:"w11",y:44},{x:"w12",y:3},{x:"w13",y:10},{x:"w14",y:55},{x:"w15",y:38},{x:"w16",y:1},{x:"w17",y:28},{x:"w18",y:45},{x:"w19",y:14},{x:"w20",y:46},{x:"w21",y:22},{x:"w22",y:0},{x:"w23",y:40},{x:"w24",y:24}]},{name:"TUE",data:[{x:"w1",y:39},{x:"w2",y:23},{x:"w3",y:44},{x:"w4",y:24},{x:"w5",y:49},{x:"w6",y:60},{x:"w7",y:0},{x:"w8",y:50},{x:"w9",y:29},{x:"w10",y:36},{x:"w11",y:36},{x:"w12",y:14},{x:"w13",y:47},{x:"w14",y:43},{x:"w15",y:4},{x:"w16",y:7},{x:"w17",y:8},{x:"w18",y:49},{x:"w19",y:35},{x:"w20",y:50},{x:"w21",y:38},{x:"w22",y:26},{x:"w23",y:34},{x:"w24",y:46}]},{name:"WED",data:[{x:"w1",y:31},{x:"w2",y:54},{x:"w3",y:39},{x:"w4",y:1},{x:"w5",y:33},{x:"w6",y:31},{x:"w7",y:7},{x:"w8",y:51},{x:"w9",y:32},{x:"w10",y:18},{x:"w11",y:14},{x:"w12",y:58},{x:"w13",y:18},{x:"w14",y:25},{x:"w15",y:56},{x:"w16",y:53},{x:"w17",y:59},{x:"w18",y:23},{x:"w19",y:16},{x:"w20",y:44},{x:"w21",y:43},{x:"w22",y:39},{x:"w23",y:54},{x:"w24",y:32}]},{name:"THU",data:[{x:"w1",y:48},{x:"w2",y:9},{x:"w3",y:10},{x:"w4",y:3},{x:"w5",y:38},{x:"w6",y:19},{x:"w7",y:40},{x:"w8",y:12},{x:"w9",y:4},{x:"w10",y:49},{x:"w11",y:54},{x:"w12",y:39},{x:"w13",y:13},{x:"w14",y:38},{x:"w15",y:48},{x:"w16",y:7},{x:"w17",y:5},{x:"w18",y:53},{x:"w19",y:54},{x:"w20",y:12},{x:"w21",y:42},{x:"w22",y:26},{x:"w23",y:11},{x:"w24",y:21}]},{name:"FRI",data:[{x:"w1",y:46},{x:"w2",y:58},{x:"w3",y:0},{x:"w4",y:48},{x:"w5",y:4},{x:"w6",y:56},{x:"w7",y:12},{x:"w8",y:57},{x:"w9",y:5},{x:"w10",y:5},{x:"w11",y:52},{x:"w12",y:14},{x:"w13",y:8},{x:"w14",y:28},{x:"w15",y:45},{x:"w16",y:60},{x:"w17",y:6},{x:"w18",y:40},{x:"w19",y:20},{x:"w20",y:44},{x:"w21",y:20},{x:"w22",y:8},{x:"w23",y:7},{x:"w24",y:45}]},{name:"SAT",data:[{x:"w1",y:40},{x:"w2",y:58},{x:"w3",y:49},{x:"w4",y:7},{x:"w5",y:34},{x:"w6",y:36},{x:"w7",y:13},{x:"w8",y:43},{x:"w9",y:0},{x:"w10",y:23},{x:"w11",y:33},{x:"w12",y:58},{x:"w13",y:45},{x:"w14",y:42},{x:"w15",y:3},{x:"w16",y:59},{x:"w17",y:39},{x:"w18",y:22},{x:"w19",y:20},{x:"w20",y:41},{x:"w21",y:2},{x:"w22",y:51},{x:"w23",y:58},{x:"w24",y:45}]}]
    
    return(
        <Apex type="heatmap" options={options} series={series} height={400} width="100%" />
    )
}
export default HeatmapChart;