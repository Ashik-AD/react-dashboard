import {} from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeCustomizer from "./components/customizer/Customizer";
import { Flex } from "./components/layout";
import AppLayout from "./components/layout/AppLayout";
import "./global.css";
import "./styles/Table.css";
import CRM from "./page/crm/CRM";
import TestComponents from "./TestComponents";
import Analytics from "./page/analytics";
import Ecommerce from "./page/ecommerce";
import Duuu from "./page/Duuuu";
import Nav from "./components/nav/Nav";
import AppBar from "./components/appbar/AppBar";
import Email from "./page/email";

const App = () => {
  return (
    <AppLayout>
      <Nav />
      <Flex direction="column" styles={{ minHeight: "100vh" }} gap="medium">
        <AppBar />
        <main
          style={{
            padding: `1.5rem`,
            width: "100%",
            flex: 1,
            marginTop: "-20px",
          }}
        >
          <Routes>
            <Route index element={<CRM />} />
            <Route path="/crm/" element={<CRM />} />
            <Route path="/test" element={<TestComponents />} />
            <Route path="/analytics/" element={<Analytics />} />
            <Route path="/ecommerce/" element={<Ecommerce />} />
            <Route path="/apps/email/*" element={<Email />} />
            <Route path="/duu/" element={<Duuu />} />
          </Routes>
        </main>
      </Flex>
      <ThemeCustomizer />
    </AppLayout>
  );
};
export default App;
