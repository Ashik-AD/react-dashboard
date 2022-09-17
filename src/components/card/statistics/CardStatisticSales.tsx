import CardStatistic from ".";
import StatisticRadialChart from "../../charts/apex/statistics/StatisticRadialChart";

const CardStatisticSales = () => {
  return (
    <CardStatistic
      label="$35.3k"
      tag="Total Sales"
      chart={<StatisticRadialChart data={[75]} />}
    />
  );
};
export default CardStatisticSales;
