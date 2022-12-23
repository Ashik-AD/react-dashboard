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
            <Box height="400px" width="100%">
              <LineChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Most Loved Color" subtitle="Radar Chart" />
            <Box height="400px" width="100%">
              <RadarChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Average Skills" subtitle="Polar Chart" />
            <Box height="400px" width="100%">
              <PolarChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle
              title="JavaScript vs TypeScript"
              subtitle="Bubble Chart"
            />
            <Box width="100%" height="400px">
              <BubbleChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Streaming Platform" subtitle="Scatter Chart" />
            <Box height="400px" width="100%">
              <ScatterChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Data Science" subtitle="Area Chart" />
            <Box height="400px" width="100%">
              <AreaChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Latest Statistic" subtitle="Bar Chart" />
            <Box height="400px" width="100%">
              <VerticalBarChartJs />
            </Box>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Expense" subtitle="Bar Chart" />
            <Box height="400px" width="100%">
              <HorizontalBarChartJs />
            </Box>
          </Card>
        </GridItem>
      </GridInnerContainer>
    </section>
  );
};
export default ChartJs;
