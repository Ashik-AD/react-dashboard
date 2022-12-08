import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import AreaChartJs from "../../components/charts/chartjs/AreaChartJs";
import BubbleChartJs from "../../components/charts/chartjs/BubbleChartJs";
import HorizontalBarChartJs from "../../components/charts/chartjs/HorizontalBarChartJs";
import LineChartJs from "../../components/charts/chartjs/LineChartjs";
import PolarChartJs from "../../components/charts/chartjs/PolarChartJs";
import RadarChartJs from "../../components/charts/chartjs/RadarChartJs";
import ScatterChartJs from "../../components/charts/chartjs/ScatterChartJs";
import VerticalBarChartJs from "../../components/charts/chartjs/VerticalBarChartJs";
import ChartTitle from "../../components/charts/components/ChartTitle";
import { GridInnerContainer, GridItem } from "../../components/layout";
import { Text } from "../../ui";

const ChartJs = () => {
  return (
    <section>
      <Box mb={26}>
        <a
          href="https://github.com/reactchartjs/react-chartjs-2"
          className="h5"
        >
          ChartJs-2
        </a>
        <Text varient="body2" weight="medium" secondary paragraph>
          React wrapper for Chart.js
        </Text>
      </Box>

      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="New technologie data" subtitle="Line Chart" />
            <LineChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Most Loved Color" subtitle="Radar Chart" />
            <RadarChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Average Skills" subtitle="Polar Chart" />
            <PolarChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle
              title="JavaScript vs TypeScript"
              subtitle="Bubble Chart"
            />
            <BubbleChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Streaming Platform" subtitle="Scatter Chart" />
            <ScatterChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Data Science" subtitle="Area Chart" />
            <AreaChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Latest Statistic" subtitle="Bar Chart" />
            <VerticalBarChartJs />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Expense" subtitle="Bar Chart" />
            <HorizontalBarChartJs />
          </Card>
        </GridItem>
      </GridInnerContainer>
    </section>
  );
};
export default ChartJs;
