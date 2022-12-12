import { BarChart, CartesianGrid, Tooltip, YAxis } from "recharts";
import { XAxis } from "recharts";
import { Legend } from "recharts";
import { Bar } from "recharts";
import { ResponsiveContainer } from "recharts";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import CustomLegend from "./component/CustomLegend";
import CustomTooltip from "./component/CustomTooltip";

const BarRechart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f2606a51bc4f704ce29c/turnover"
  );
  if (!data || loading) return <Box height="400px">{""}</Box>;
  return (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={data}
        barCategoryGap="10%"
        barSize={15}
        barGap={4}
        margin={{ left: -20 }}
      >
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.1 }} />
        <Legend
          verticalAlign="top"
          height={50}
          content={<CustomLegend style={{ marginLeft: 24 }} />}
        />
        <CartesianGrid strokeDasharray={3} strokeOpacity={0.2} />
        <Bar dataKey={"apple"} stackId="a" fill="#a35e2b" width={30} />
        <Bar dataKey={"samsung"} stackId="a" fill="#d38e3c" width={30} />
        <Bar
          dataKey={"sony"}
          stackId="a"
          fill="#dba65c"
          width={30}
          radius={[15, 15, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarRechart;
