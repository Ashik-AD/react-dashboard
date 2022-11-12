import { lazy, Suspense } from "react";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import Loading from "../../../components/loading/Loading";
const ConnectedSocialAccounts = lazy(
  () => import("../../../components/users/connections/ConncetedSocialAccounts")
);
const ConnectedAccounts = lazy(
  () => import("../../../components/users/connections/ConnectedAccounts")
);

const Connections = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12}>
          <ConnectedAccounts />
        </GridItem>
        <GridItem xs={12}>
          <ConnectedSocialAccounts />
        </GridItem>
      </GridInnerContainer>
    </Suspense>
  );
};
export default Connections;
