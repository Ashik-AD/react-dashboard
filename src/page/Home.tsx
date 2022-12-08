import { Routes, Route } from "react-router-dom";
import AppBar from "../components/appbar/AppBar";
import ThemeCustomizer from "../components/customizer/Customizer";
import { Flex } from "../components/layout";
import AppLayout from "../components/layout/AppLayout";
import Nav from "../components/nav/Nav";
import PageNotFound from "./404/PageNotFound";
import Analytics from "./analytics";
import Charts from "./charts/Charts";
import Chat from "./chat";
import CRM from "./crm/CRM";
import Ecommerce from "./ecommerce";
import Email from "./email";
import Invoice from "./invoice";
import Pages from "./pages/Pages";
import Users from "./users";
import CardPages from "./card-pages/index";
const Home = () => {
  return (
    <AppLayout>
      <Nav />
      <Flex direction="column" styles={{ minHeight: "100vh" }} gap="medium">
        <AppBar />
        <main
          style={{
            padding: `1.2rem`,
            width: "100%",
            flex: 1,
            marginTop: "-20px",
          }}
        >
          <Routes>
            <Route index element={<CRM />} />
            <Route path="/dashboards/crm/" element={<CRM />} />
            <Route path="/dashboards/analytics/" element={<Analytics />} />
            <Route path="/dashboards/ecommerce/" element={<Ecommerce />} />
            <Route path="/apps/email/*" element={<Email />} />
            <Route path="/apps/chat/*" element={<Chat />} />
            <Route path="/invoice/*" element={<Invoice />} />
            <Route path="/user/*" element={<Users />} />
            <Route path="/pages/*" element={<Pages />} />
            <Route path="/charts/*" element={<Charts />} />
            <Route path="/ui/cards/*" element={<CardPages />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Flex>
      <ThemeCustomizer />
    </AppLayout>
  );
};
export default Home;
