import { Route, Routes } from "react-router-dom"
import PageNotFound from "../404/PageNotFound";
import ApexCharts from "./ApexCharts"

const Charts = () => {
    return(
        <Routes>
            <Route path="/apex-charts/" element={<ApexCharts />} />
            <Route path="/*" element={<PageNotFound />} />
=        </Routes>
    )
}
export default Charts;