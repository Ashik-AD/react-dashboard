import ConnectedAccounts from "../../../../components/account-connection/ConnectedAccounts";
import { AccountConnectionAPI } from "../../../../components/account-connection/type";
import Card from "../../../../components/card/Card";
import { GridInnerContainer, GridItem } from "../../../../components/layout";
import Loading from "../../../../components/loading/Loading";
import useFetch from "../../../../hooks/useFetch";

const Connections = () => {
  const { data, loading } = useFetch<AccountConnectionAPI>(
    "/6395f1e7c5b3a64f1bc908ba/connectedAccounts"
  );

  if (loading) return <Loading />;

  return (
    <Card padding="1.6rem">
      <GridInnerContainer justifyContent="space-between" spacing={1.6}>
        <GridItem xs={12} md={5}>
          {data?.main && <ConnectedAccounts list={data.main} />}
        </GridItem>
        <GridItem xs={12} md={5}>
          {data?.social && <ConnectedAccounts list={data.social} />}
        </GridItem>
      </GridInnerContainer>
    </Card>
  );
};
export default Connections;
