import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useFetch from "../../../hooks/useFetch";
import ChartPlaceholder from "../components/ChartPlaceholder";
import CustomLegend from "./component/CustomLegend";
import CustomTooltip from "./component/CustomTooltip";

const RadarRechart = () => {
  const { data, loading } = useFetch<any[]>(
    "/6395f2606a51bc4f704ce29c/mobileComparison"
  );
  if (!data || loading) return <ChartPlaceholder />;
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={"category"} fontSize={14} />
        <PolarRadiusAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} layout="vertical" align="center" />
        <Radar dataKey={"samsung"} name="Samsung Galaxy 23U" fill="#b26fdd" />
        <Radar
          dataKey={"iphon"}
          name="Iphone 14P"
          fill="#bf4f43"
          opacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default RadarRechart;
