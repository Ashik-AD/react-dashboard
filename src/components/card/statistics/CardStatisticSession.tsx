import StatisticBarChart from "../../charts/apex/statistics/StatisticBarChart";
import CardStatistic from ".";

const CardStatisticSession = () => {
  return (
    <CardStatistic
      label="4,402"
      tag="sessions"
      chart={<StatisticBarChart data={[{ data: [32, 43, 12, 54, 34] }]} />}
    />
  );
};

export default CardStatisticSession;
