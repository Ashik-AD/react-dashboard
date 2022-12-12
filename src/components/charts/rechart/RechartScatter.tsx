import { ScatterChart, ZAxis } from "recharts";
import { Scatter } from "recharts";
import { Legend } from "recharts";
import { ResponsiveContainer, XAxis, YAxis } from "recharts";
import useFetch from "../../../hooks/useFetch";
import ChartPlaceholder from "../components/ChartPlaceholder";
import CustomLegend from "./component/CustomLegend";

const RechartScatter = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f2606a51bc4f704ce29c/frameworkUsage"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={data} margin={{ left: -20 }}>
        <XAxis dataKey={"x"} fontSize=".856rem" tickCount={4} />
        <YAxis dataKey={"y"} fontSize={".856rem"} />
        <ZAxis dataKey={"z"} range={[64, 140]} name="score" />
        <Legend
          verticalAlign="top"
          align="left"
          content={<CustomLegend style={{ marginLeft: 24 }} />}
          height={50}
        />
        <Scatter name="React" data={data[0]} fill="#3b8ff6" />
        <Scatter name="Angular" data={data[1]} fill="#fc3737" />
        <Scatter name="Vue" data={data[2]} fill="#aa48ff" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RechartScatter;
