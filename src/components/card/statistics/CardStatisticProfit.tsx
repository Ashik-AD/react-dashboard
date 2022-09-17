import CardStatistic from ".";
import StatisticLineChartRegular from "../../charts/apex/statistics/StatisticLineChartRegular";

const CardStatisticProfit = () => {
  return (
    <CardStatistic
      label="$35.3k"
      tag="Total Revenue"
      chart={
        <StatisticLineChartRegular data={[{ data: [10, 18, 15, 35, 31] }]} />
      }
    />
  );
};
export default CardStatisticProfit;
