import { CartesianGrid, LineChart } from "recharts";
import { Line } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { XAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import CustomTooltip from "./component/CustomTooltip";

const LineRechart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f2606a51bc4f704ce29c/balance"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ left: -20 }}>
        <XAxis dataKey={"name"} fontSize=".856rem" />
        <YAxis fontSize={".856rem"} />
        <Tooltip label={"name"} content={<CustomTooltip />} />
        <CartesianGrid strokeOpacity={0.2} />
        <Line type={"monotone"} dataKey="pv" stroke="#0fa92e" strokeWidth={4} />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineRechart;
