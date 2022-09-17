import CardStatistic from ".";
import StatisticAreaChart from "../../charts/apex/statistics/StatisticAreaChart";

const CardStatisticGrowth = () => {
  return (
    <CardStatistic
      label="42.6k"
      tag="Total Growth"
      chart={
        <StatisticAreaChart data={[{ data: [0, 8, 6, 19, 10, 25, 21] }]} />
      }
    />
  );
};
export default CardStatisticGrowth;
