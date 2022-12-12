import Box from "../../../../components/box/Box";
import TwoStepAuth from "../../../../components/security/TwoStepAuth";
import APIkeyList from "../../../../components/user-profile/APIkeyList";
import ChangePassword from "../../../../components/user-profile/ChangePassword";
import CreateAPIkey from "../../../../components/user-profile/CreatAPIkey";
import RecentLoggedDevices from "../../../../components/users/security/RecentLoggedDevices";

const Security = () => {
  return (
    <Box display="flex" flexDirection="column" space={1.6}>
      <ChangePassword />
      <TwoStepAuth isEnabled={false} />
      <CreateAPIkey />
      <APIkeyList />
      <RecentLoggedDevices url="/6395f1e7c5b3a64f1bc908ba/loginHistory" />
    </Box>
  );
};
export default Security;
