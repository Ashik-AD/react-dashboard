import { Route, Routes } from "react-router-dom";
import UserProfile from "../user/Profile/UserProfile";
import AccountSetting from "../user/setting/AccountSetting";
import FAQ from "./faq/FAQ";
import Pricing from "./pricing/Pricing";

const Pages = () => {
  return (
    <Routes>
      <Route path="/user-profile/*" element={<UserProfile />} />
      <Route path="/account-settings/*" element={<AccountSetting />} />
      <Route path="/pricing/" element={<Pricing />} />
      <Route path="/faq/" element={<FAQ />} />
      <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};
export default Pages;
