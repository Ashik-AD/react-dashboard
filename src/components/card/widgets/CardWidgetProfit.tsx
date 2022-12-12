import { AttachMoney, Leaderboard, TrendingUp } from "@mui/icons-material";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import useTheme from "../../../theme/useTheme";
import { Button, CustomAvatar, Text } from "../../../ui";
import addCurrancy from "../../../utils/addCurrancy";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";
import CardItemAnalyticsWithIcon from "../../card-items/CardItemAnalyticsWithIcon";
import { GridInnerContainer, GridItem } from "../../layout";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardWidgetProfit = () => {
  const { theme } = useTheme();
  const chartOptions: { series: any; option: ApexOptions } = {
    option: {
      chart: {
        type: "bar",
        stacked: true,
        width: "100%",
        height: "100%",
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                columnWidth: "50%",
              },
            },
          },
        },
      ],
      stroke: {
        width: 6,
        colors: [theme.mode.foreground],
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
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
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          show: false,
          opacity: 0,
        },
        labels: {
          style: {
            colors: theme.mode.textColor,
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: theme.mode.textColor,
          },
          formatter: (value) => value + "k",
        },
        crosshairs: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 8,
        borderColor:
          theme.mode.name === "dark"
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0,0,0,0.1)",
      },
    },
    series: [
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
    ],
  };

  const total = [
    {
      id: 1,
      label: "Total Profit",
      amount: 323239.99,
      icon: <TrendingUp />,
      color: "success",
    },
    {
      id: 2,
      label: "Total Income",
      amount: 38382.3,
      icon: <AttachMoney />,
      color: theme.primaryColor.color,
    },
    {
      id: 3,
      label: "Total Expense",
      amount: 1232.02,
      icon: <Leaderboard />,
      color: "warning",
    },
  ];
  return (
    <Card>
      <GridInnerContainer
        noShifting={true}
        columnSpacing={0}
        rowSpacing={{ xs: 1.6, lg: 0 }}
      >
        <GridItem xs={12} sm={7}>
          <Box display="flex" flexDirection="column">
            <CardTitle title="Total profit" showIcon={false} />
            <ReactApexChart
              type="bar"
              height="290px"
              width="100%"
              options={chartOptions.option}
              series={chartOptions.series}
            />
          </Box>
        </GridItem>
        <GridItem xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <CustomCardTitle
              title={<Text heading="h5">$793.85k</Text>}
              subTitle={
                <Text varient="body2" secondary={true}>
                  Last month balance $234.40k
                </Text>
              }
            />
            <Box
              display="flex"
              flexDirection="column"
              space={0.8}
              pt={10}
              mt={8}
            >
              {total.map((item) => (
                <CardItemAnalyticsWithIcon
                  label={addCurrancy(formatNumber(item.amount))}
                  icon={
                    <CustomAvatar
                      varient="rounded"
                      skin="light"
                      color={item.color}
                    >
                      {item.icon}
                    </CustomAvatar>
                  }
                  tag={item.label}
                  key={item.id}
                  marginBottom={8}
                />
              ))}
              <Box
                display="flex"
                flexDirection="column"
                justify="center"
                px={20}
              >
                <Button varient="contained">view report</Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </GridInnerContainer>
    </Card>
  );
};

export default CardWidgetProfit;
