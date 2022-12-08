import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import useFetch from "../../../hooks/useFetch";
import Box from "../../box/Box";
import CustomLegend from "./component/CustomLegend";
import CustomTooltip from "./component/CustomTooltip";

const RadarRechart = () => {
    const {data, loading} = useFetch<any[]>('/api/chart-data/rechart/mobileComparison')
    if(!data || loading) return <Box height="400px">{""}</Box>
    return(
        <ResponsiveContainer width={"100%"} height={400}>
            <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey={"category"} fontSize={14} />
                <PolarRadiusAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} layout="vertical" align="center" />
                <Radar dataKey={"samsung"} name="Samsung Galaxy 23U" fill="#b26fdd" />
                <Radar dataKey={"iphon"} name="Iphone 14P" fill="#bf4f43" opacity={0.8} />
            </RadarChart>
        </ResponsiveContainer>
    )
}
export default RadarRechart;