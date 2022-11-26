import { lazy, Suspense } from "react";
import { AccountConnectionAPI } from "../../../components/account-connection/type";
import Card from "../../../components/card/Card";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import Loading from "../../../components/loading/Loading";
import useFetch from "../../../hooks/useFetch";
const ConnectedSocialAccounts = lazy(
  () => import("../../../components/account-connection/ConncetedSocialAccounts")
);
const ConnectedAccounts = lazy(
  () => import("../../../components/account-connection/ConnectedAccounts")
);

const Connections = () => {
  const { data } = useFetch<AccountConnectionAPI>("/api/users/connections");
  return (
    <Suspense fallback={<Loading />}>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12}>
          {data?.main && (
            <Card px="1.25rem" py="1.25rem">
              <ConnectedAccounts list={data.main} />
            </Card>
          )}
        </GridItem>
        <GridItem xs={12}>
          {data?.social && (
            <Card px="1.25rem" py="1.25rem">
              {" "}
              <ConnectedSocialAccounts list={data.social} />{" "}
            </Card>
          )}
        </GridItem>
      </GridInnerContainer>
    </Suspense>
  );
};
export default Connections;
