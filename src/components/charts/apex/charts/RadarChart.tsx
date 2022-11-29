import { ApexOptions } from 'apexcharts'
import React from 'react'
import Apex from '../Apex'

const RadarChart = () => {
    const options: ApexOptions ={
        chart: {
            parentHeightOffset: 0
        },
        colors: ["#fa4639", "#148afc"],
        fill: {opacity: [1, 0.8]},
        labels: ["Camera", "Battery", "Screen", "Speaker", "Software", "CPU", "GPU", "Price"],
        stroke: {show: false},
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: "rgba(231, 227, 252, 0.12)",
                    connectorColors: "rgba(231, 227, 252, 0.12)"
                }
            }
        },
        legend: {
            floating: true
        },
        markers: { width: 4, strokeWidth: 4, strokeOpacity: 0.5, strokeColors: "#f1a5ff"},
        yaxis: {show: false}
    }
    const series = [
        {
            name: "Iphone 14",
            data: [41, 64, 81, 60, 42, 42, 33, 23]
        },
        {
            name: 'Samsung S22',
            data: [65, 46, 42, 25, 58, 63, 76, 43]
        }
    ]
  return (
    <Apex type="radar" height={400} width="100%" series={series} options={options}  />

  )
}

export default RadarChart