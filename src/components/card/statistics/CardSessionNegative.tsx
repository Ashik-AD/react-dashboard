import StatisticBarChartNegative from "../../charts/apex/statistics/StatisticBarChartNegative";
import CardStatistic from ".";

const CardSessionNegative = () => {
  return (
    <CardStatistic
      label="4,402"
      tag="sessions"
      chart={
        <StatisticBarChartNegative
          data={[
            {
              data: [30, 20, 40, 25, 15],
            },
            {
              data: [-10, -19, -14, -8, -18],
            },
          ]}
        />
      }
    />
  );
};

export default CardSessionNegative;
