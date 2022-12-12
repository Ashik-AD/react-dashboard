import { memo } from "react";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import useTheme from "../../../theme/useTheme";
import genColorShades from "../../../utils/genColorShades";

const CardWidgetTotalVisitor = () => {
  const { theme } = useTheme();
  const chartOptions: { options: ApexOptions; series: any } = {
    options: {
      chart: {
        type: "donut",
        height: 180,
        width: "100%",
      },
      labels: ["JP", "IN", "FR", "USA"],
      dataLabels: {
        enabled: false,
      },

      legend: {
        position: "bottom",
        fontWeight: 600,
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
          vertical: 10,
        },

        labels: {
          colors: theme.mode.textColor,
        },
      },
      colors: [
        theme.primaryColor.color,
        ...genColorShades(theme.primaryColor.color, { total: 2, intensity: 2 }),
        theme.mode.background,
      ],
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: {
                show: true,
                color: theme.mode.textColor,
                fontWeight: 600,
              },
              value: {
                show: true,
                color: theme.mode.textColor,
                fontWeight: 600,
                formatter: (value) => value + "k",
              },
              total: {
                show: true,
                label: "Weekly Visitor",
                fontSize: "15px",
                color: theme.mode.textColor,
                formatter: () => {
                  return 100 + "k";
                },
              },
            },
          },
          expandOnClick: true,
        },
      },
      tooltip: {
        y: {
          formatter: (value) => value + "k",
        },
      },
      stroke: {
        show: false,
      },
    },
    series: [25, 15, 10, 50],
  };
  return (
    <Card>
      <CardTitle title="total visitors" />
      <Box pb={20} mt={8}>
        <ReactApexChart
          type="donut"
          height={310}
          options={chartOptions.options}
          series={chartOptions.series}
        />
      </Box>
    </Card>
  );
};

export default memo(CardWidgetTotalVisitor);
