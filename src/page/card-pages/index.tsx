import { Routes, Route } from "react-router-dom";
import CardAdvanced from "./chunk/CardAdvanced";
import PageNotFound from "../404/PageNotFound";
import Widgets from "./chunk/Widgets";
import CdStat from "./chunk/CdStat";
const CardPages = () => {
  return (
    <Routes>
      <Route path="/advanced/" element={<CardAdvanced />} />
      <Route path="/statistics/" element={<CdStat />} />
      <Route path="/widgets/" element={<Widgets />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default CardPages;
