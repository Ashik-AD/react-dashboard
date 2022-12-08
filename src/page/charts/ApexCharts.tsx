import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import ColumnChart from "../../components/charts/apex/charts/ColumnChart";
import AreaChart from "../../components/charts/apex/charts/AreaChart";
import ScatterChart from "../../components/charts/apex/charts/ScatterChart";
import { GridInnerContainer, GridItem } from "../../components/layout"
import { Text } from "../../ui";
import LineChart from "../../components/charts/apex/charts/LineChart";
import BarChart from "../../components/charts/apex/charts/BarChart";
import CandleChart from "../../components/charts/apex/charts/CandleChart";
import HeatmapChart from "../../components/charts/apex/charts/HeatmapChart";
import RadialBarChart from "../../components/charts/apex/charts/RadialBarChart";
import RadarChart from "../../components/charts/apex/charts/RadarChart";
import DonutChart from "../../components/charts/apex/charts/DonutChart";
import LineAnArea from "../../components/charts/apex/charts/mixed/LineAnArea";
import ChartTitle from "../../components/charts/components/ChartTitle";

const ApexCharts = () => {
    return(
        <section>
        <Box display="flex" flexDirection="column" mb={24}>
            <a href="https://github.com/apexcharts/react-apexcharts" target={"_blank"}>
            <Text heading="h5" skinColor>
                React ApexCharts
            </Text>
            </a>
            <Text varient="body2" paragraph secondary>React Component for ApexCharts</Text>
        </Box>
        <GridInnerContainer spacing={1.6}>
            <GridItem xs={12}>
                <Card pt="1.4rem" px="1.2rem" pb="1.6rem">
                    <ChartTitle title="Commercial Networks" subtitle="Line Chart" />
                <AreaChart />
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card px="1.2rem" pt="1.4rem" pb="1.6rem">
                    <Box mb={16}>
                        <Text heading="h6">Column/Bar Chart</Text>
                    </Box>
                    <ColumnChart />
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card px="1.2rem" pt="1.4rem"  pb="1.6rem">
                    <Box mb={16}>
                        <Text heading="h6">Scatter Chart</Text>
                    </Box>
                    <ScatterChart />
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card px="1.2rem" pt="1.4rem" pb="1.6rem">
                    <ChartTitle title="Line Chart" subtitle="Commercial networks & enterprise" />
                    <LineChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="1.4rem">
                    <ChartTitle title="Vertical Barchart" subtitle="$23,434" />
                    <BarChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="1.4rem">
                    <ChartTitle title="Candlestick Chart" subtitle="Stock price" />
                    <CandleChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="1.4rem">
                    <ChartTitle title="Heatmap Chart" subtitle="Daily salse" />
                    <HeatmapChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="2.6rem">
                    <ChartTitle title="Statistic" subtitle="Radialbar Chart" />
                    <RadialBarChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="1.4rem">
                    <ChartTitle title="Mobile Comparison" subtitle="Radar Chart" />
                    <RadarChart />
                </Card>
            </GridItem>
            <GridItem xs={12} md={6}>
                <Card px="1.2rem" pt="1.4rem" pb="2.6rem">  
                    <ChartTitle title="Expense Ratio" subtitle="Donut Chart" />
                    <DonutChart  />
                </Card>
            </GridItem>
            <GridItem xs={12}>
                <Card px="1.2rem" pt="1.4rem" pb="2.6rem">  
                    <ChartTitle title="New Clients" subtitle="Mixed Chart" />
                    <LineAnArea  />
                </Card>
            </GridItem>
        </GridInnerContainer>
        </section>
    )
}
export default ApexCharts;
