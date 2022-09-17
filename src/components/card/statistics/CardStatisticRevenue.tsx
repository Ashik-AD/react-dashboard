import CardStatistic from ".";
import StatisticLineChartFancy from "../../charts/apex/statistics/StatisticLineChartFancy";

const CardStatisticRevenue = () => {
  return (
    <CardStatistic
      label="$35.3k"
      tag="Total Revenue"
      chart={
        <StatisticLineChartFancy data={[{ data: [10, 18, 15, 35, 31] }]} />
      }
    />
  );
};
export default CardStatisticRevenue;
