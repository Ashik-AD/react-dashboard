import { ApexOptions } from 'apexcharts'
import React from 'react'
import Apex from '../Apex'

const CandleChart = () => {
    const chartOptions: ApexOptions = 
    {
        chart: {
            type: "candlestick",
            stacked: true,
        },
        legend: {
            position:'top',
            horizontalAlign: "left"
        },
        xaxis: {
            axisBorder: {show: false},
           type: "datetime",
           labels: {
            datetimeUTC: true
           }
        },
        yaxis: { 
            labels: {show: true},
        },
        grid: {
            show: true,
            position: 'back',
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
    const series = [{ data: [{x: "7/12/2022", y: [150, 170, 50, 100] }, { x: "8/12/2022", y: [200, 400, 170, 330] }, { x: "9/12/2022", y: [330, 340, 250, 280] }, { x: "10/12/2022", y: [300, 330, 200, 320] }, { x: "11/12/2022", y: [320, 450, 280, 350] }, { x: "12/12/2022", y: [300, 350, 80, 250] }, { x: "13/12/2022", y: [200, 330, 170, 300] }, { x: "14/12/2022", y: [200, 220, 70, 130] }, { x: "15/12/2022", y: [220, 270, 180, 250] }, { x: "16/12/2022", y: [200, 250, 80, 100] }, { x: "17/12/2022", y: [150, 170, 50, 120] }, { x: "18/12/2022", y: [110, 450, 10, 420] }, { x: "19/12/2022", y: [400, 480, 300, 320] }, { x: "20/12/2022", y: [380, 480, 350, 450] }]}]
  return (
    <Apex type="candlestick" height={400} width="100%" series={series} options={chartOptions}  />  )
}

export default CandleChart
