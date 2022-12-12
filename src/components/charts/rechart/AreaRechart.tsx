import { CartesianGrid, XAxis } from "recharts";
import { Area } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { ResponsiveContainer } from "recharts";
import { YAxis } from "recharts";
import { AreaChart } from "recharts";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import CustomLegend from "./component/CustomLegend";
import CustomTooltip from "./component/CustomTooltip";

const AreaRechart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f2606a51bc4f704ce29c/websiteAnalytic"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} layout="horizontal" margin={{ left: -20 }}>
        <YAxis fontSize="0.856rem" orientation="left" />
        <XAxis dataKey="name" fontSize="0.856rem" />
        <CartesianGrid strokeOpacity={0.2} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          content={<CustomLegend style={{ marginLeft: 24 }} />}
          verticalAlign="top"
          height={50}
          margin={{ left: 50 }}
        />
        <Area
          type="monotone"
          dataKey={"visits"}
          fill="#8e49ff"
          fillOpacity={0.7}
          strokeWidth={0}
        />
        <Area
          type="monotone"
          dataKey={"clicks"}
          fill="#a77eff"
          strokeWidth={0}
        />
        <Area
          type="monotone"
          dataKey={"sales"}
          fill="#ddd1ff"
          strokeWidth={0}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreaRechart;
