import { Legend, Pie } from "recharts";
import { PieChart } from "recharts";
import { Tooltip } from "recharts";
import { Cell } from "recharts";
import { ResponsiveContainer } from "recharts";
import useFetch from "../../../../hooks/useFetch";
import Box from "../../../box/Box";
import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomTooltip";

const colors = ["#ec86d4", "#36baaa", "#ebbb24", "#f58c42"]

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" className="body1" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${value}%`}
    </text>
  );
};
const PieRechart = () => {
    const {data, loading} = useFetch<any[]>('/api/chart-data/rechart/expense');
    if(!data || loading) return <Box height="400px">{""}</Box>
    return(
        <ResponsiveContainer width={"100%"} height={400}>
            <PieChart>
                <Tooltip content={<CustomTooltip />} />
                <Legend layout="vertical" align="center" content={<CustomLegend />} />
                <Pie dataKey={"value"} data={data} innerRadius={90} label={renderCustomizedLabel} labelLine={false}>
                    {
                        data.map((ex, index) => (<Cell key={`expense-${index}`} fill={colors[index]} />))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default PieRechart;