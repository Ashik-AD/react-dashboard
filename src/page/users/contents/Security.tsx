import { lazy, Suspense } from "react";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import Loading from "../../../components/loading/Loading";
const ChangePassword = lazy(
  () => import("../../../components/users/security/ChangePassword")
);
const RecentLoggedDevices = lazy(
  () => import("../../../components/users/security/RecentLoggedDevices")
);
const TwoStepAuth = lazy(
  () => import("../../../components/users/security/TwoStepAuth")
);

const Security = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <Suspense fallback={<Loading />}>
        <GridItem xs={12}>
          <ChangePassword />
        </GridItem>
        <GridItem xs={12}>
          <TwoStepAuth />
        </GridItem>
        <GridItem xs={12}>
          <RecentLoggedDevices />
        </GridItem>
      </Suspense>
    </GridInnerContainer>
  );
};
export default Security;
