import { AttachMoney } from "@mui/icons-material";
import type { ApexOptions } from "apexcharts";
import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { CustomAvatar, Divider, Dot, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import genColorShades from "../../../utils/genColorShades";
import Box from "../../box/Box";
import { GridItem } from "../../layout";
import GridInnerContainer from "../../layout/grid/GridInnerContainer";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const CardWidgetSalesOverview = () => {
  const { theme } = useTheme();
  const barColors = [
    theme.primaryColor.color,
    ...genColorShades(theme.primaryColor.color, { total: 2, intensity: 2 }),
    theme.mode.background,
  ];
  const labels = ["Apparel", "Electronic", "FMCG", "Other Sales"];
  const data = [12150, 24900, 12750, 50200];
  const totalSales = () => data.reduce((prev, cur) => prev + cur, 0);
  const chartOption: ApexOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
      height: 300,
    },
    labels,
    colors: barColors,
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              fontSize: "12px",
              color: theme.mode.textColor,
            },
            value: {
              color: theme.mode.textColor,
              show: true,
              fontWeight: 600,
              formatter: (value) => value + "k",
            },
            total: {
              show: true,
              label: "Weekly Sales",
              color: theme.mode.textColor,
              fontSize: "14px",
              fontWeight: 500,
              formatter: () => series.reduce((x, y) => x + y, 0) + "k",
            },
          },
        },
      },
    },
    stroke: { show: false },
    legend: { show: false },
    dataLabels: { enabled: false },
  };
  const series = [12, 25, 13, 50];
  return (
    <Card>
      <CardTitle title="Sales Overview" />
      <Box py={20}>
        <GridInnerContainer>
          <GridItem xs={12} sm={6}>
            <ReactApexChart
              options={chartOption}
              series={series}
              type="donut"
              height={250}
            />
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Box display="flex" flexDirection="column" px={20}>
              <Box display="flex" align="center" space={0.8}>
                <CustomAvatar
                  varient="rounded"
                  skin="light"
                  color={theme.primaryColor.color}
                >
                  <AttachMoney />
                </CustomAvatar>
                <Box>
                  <Text varient="body2" secondary={true}>
                    Number of sales
                  </Text>
                  <Text heading="h6">${formatNumber(totalSales())}</Text>
                </Box>
              </Box>
              <Divider styles={{ margin: "16px 0" }} />
              <GridInnerContainer rowSpacing={1}>
                {data.map((total, index) => (
                  <SaleStats
                    key={index}
                    total={total}
                    color={barColors[index]}
                    label={labels[index]}
                  />
                ))}
              </GridInnerContainer>
            </Box>
          </GridItem>
        </GridInnerContainer>
      </Box>
    </Card>
  );
};

const SaleStats: FC<{ label: string; color: string; total: number }> = ({
  label,
  color,
  total,
}) => {
  return (
    <GridItem xs={6}>
      <Box display="flex" flexDirection="column" space={0.5}>
        <Box display="flex" align="center" space={0.3}>
          <Dot size="small" color={color} />
          <Text varient="body2" secondary={true}>
            {label}
          </Text>
        </Box>
        <Text varient="body1" weight="bold">
          ${formatNumber(total)}
        </Text>
      </Box>
    </GridItem>
  );
};

export default CardWidgetSalesOverview;
