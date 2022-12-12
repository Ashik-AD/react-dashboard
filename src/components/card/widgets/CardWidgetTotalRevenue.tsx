import { FC } from "react";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { colorPallets } from "../../../theme/colors";
import useTheme from "../../../theme/useTheme";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import formatNumber from "../../../utils/formatNumber";
import { Text } from "../../../ui";

const CardWidgetTotalRevenue = () => {
  const { theme } = useTheme();
  const stat = [
    {
      total: 345,
      title: "Returning",
      color: colorPallets[3].color,
    },
    {
      total: 856,
      title: "New Users",
      color: colorPallets[1].color,
    },
    {
      total: 285,
      title: "Referrals",
      color: colorPallets[4].color,
    },
  ];
  const chartOptions: { series: any; option: ApexOptions } = {
    option: {
      chart: {
        width: "100%",
        height: 250,
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "round",
      },
      colors: [
        colorPallets[3].color,
        colorPallets[1].color,
        colorPallets[4].color,
      ],
      labels: ["Returning", "New Users", "Referrals"],
      plotOptions: {
        radialBar: {
          track: {
            show: false,
            margin: 8,
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "13px",
              fontWeight: 400,
            },
            value: {
              show: true,
              color: theme.mode.textColor,
              fontSize: "2rem",
              fontWeight: 600,
            },
            total: {
              show: true,
              label: "2022",
              color: theme.mode.textColor,
              formatter: (obj) => {
                return (
                  obj.globals.series.reduce(
                    (acc: number, cur: number) => acc + cur,
                    0
                  ) + "k"
                );
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
    },
    series: [85, 75, 95],
  };
  return (
    <Card>
      <CardTitle title="Total revenue" />
      <Box display="flex" flexDirection="column">
        <ReactApexChart
          type="radialBar"
          options={chartOptions.option}
          series={chartOptions.series}
          height={275}
        />

        <Box px={28} pb={25} display="flex" justify="space-evenly" space={1}>
          {stat.map((item) => (
            <Tags key={item.total} {...item} />
          ))}
        </Box>
      </Box>
    </Card>
  );
};

const Tags: FC<{
  total: number;
  title: string;
  color: string;
  border?: boolean;
}> = (props) => {
  return (
    <Box display="flex" flexDirection="column" justify="center" space={0.4}>
      <Box display="flex" align="center" space={0.5}>
        <div
          style={{
            height: 10,
            width: 10,
            background: props.color,
            borderRadius: 8,
          }}
        ></div>
        <Text varient="body1" weight="bold">
          {formatNumber(props.total)}
        </Text>
      </Box>
      <Text varient="caption" secondary={true}>
        {props.title}
      </Text>
    </Box>
  );
};

export default CardWidgetTotalRevenue;
