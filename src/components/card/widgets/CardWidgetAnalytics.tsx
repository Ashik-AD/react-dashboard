import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import useTheme from "../../../theme/useTheme";
import Table from "../../layout/table/Table";
import TableRow from "../../table/TableRow";
import TableCell from "../../table/TableCell";
import ArrowIndicator from "../../../ui/arrow/ArrowIndicator";
const series = [
  {
    name: "Product 1",
    data: [21, 43, 54, 32, 12, 6, 40],
  },
  {
    name: "Product 2",
    data: [34, 21, 43, 32, 25, 23, 19],
  },
  {
    name: "Product 3",
    data: [21, 23, 34, 21, 12, 23, 43],
  },
];
const CardWidgetAnalytics = () => {
  const { theme } = useTheme();
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      width: "100%",
      height: "100%",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: {
      width: 6,
      colors: [theme.mode.foreground],
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: [8],
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        show: false,
        opacity: 0,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      crosshairs: {
        show: false,
      },
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 8,
      borderColor:
        theme.mode.name === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0,0,0,0.1)",
    },
  };

  return (
    <Card>
      <CardTitle title="Analytics" />
      <Box px={20}>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="bar"
          height={170}
        />
      </Box>
      <Box pt={38} pb={16}>
        <Table
          row={[
            {
              id: 1,
              label: "Revenue",
              amount: "$822.67k",
              growth: "75%",
              status: "inc",
            },
            {
              id: 2,
              label: "Transaction",
              amount: "$500k",
              growth: "45%",
              status: "dec",
            },
            {
              id: 3,
              label: "Total Profit",
              amount: "$400k",
              growth: "25%",
              status: "inc",
            },
          ]}
          itemKey={(item) => item.id}
          renderRow={(item) => (
            <TableRow compact={true}>
              <TableCell
                value={item.label}
                weight={600}
                border={{ show: false }}
              />
              <TableCell
                value={item.amount}
                align="right"
                border={{ show: false }}
              />
              <TableCell
                value={item.growth}
                weight={600}
                align="right"
                border={{ show: false }}
              />
              <TableCell
                value={
                  <ArrowIndicator status={item.status as any} color={true} />
                }
                align="right"
                border={{ show: false }}
              />
            </TableRow>
          )}
        />
      </Box>
    </Card>
  );
};

export default CardWidgetAnalytics;
