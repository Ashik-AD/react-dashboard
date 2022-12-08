import { Route, Routes } from "react-router-dom"
import PageNotFound from "../404/PageNotFound";
import ApexCharts from "./ApexCharts"
import ChartJs from "./Chartjs";
import ReCharts from "./ReCharts";

const Charts = () => {
    return(
        <Routes>
            <Route path="/apex-charts/" element={<ApexCharts />} />
            <Route path="/recharts/" element={<ReCharts />} />
            <Route path="/chartjs/" element={<ChartJs />} />
            <Route path="/*" element={<PageNotFound />} />
=        </Routes>
    )
}
export default Charts;