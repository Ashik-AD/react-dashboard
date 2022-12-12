import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import ChartTitle from "../../components/charts/components/ChartTitle";
import AreaRechart from "../../components/charts/rechart/AreaRechart";
import BarRechart from "../../components/charts/rechart/BarRechart";
import PieRechart from "../../components/charts/rechart/PieRechart";
import LineRechart from "../../components/charts/rechart/LineRechart";
import RadarRechart from "../../components/charts/rechart/RadarRechart";
import RechartScatter from "../../components/charts/rechart/RechartScatter";
import { GridInnerContainer, GridItem } from "../../components/layout";
import { Text } from "../../ui";

const ReCharts = () => {
  return (
    <Box>
      <Box mb={26}>
        <a
          href="https://github.com/recharts/recharts"
          className="h5"
          target={"_blank"}
        >
          Recharts
        </a>
        <Text varient="body2" weight="medium" secondary paragraph>
          Redfined chart library built with React & D3
        </Text>
      </Box>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="website data" subtitle="Area chart" />
            <AreaRechart />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle
              title="Commercial network & enterprises"
              subtitle="Line chart"
            />
            <LineRechart />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Frame work usage" subtitle="Scatter Chart" />
            <RechartScatter />
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Company turn over" subtitle="Bar Chart" />
            <BarRechart />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Mobile Comparison" subtitle="Radar Chart" />
            <RadarRechart />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card padding="1.4rem 1.2rem">
            <ChartTitle title="Expense Ratio" subtitle="Pie Chart" />
            <PieRechart />
          </Card>
        </GridItem>
      </GridInnerContainer>
    </Box>
  );
};
export default ReCharts;
