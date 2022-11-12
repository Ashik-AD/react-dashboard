import { lazy, Suspense } from "react";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import Loading from "../../../components/loading/Loading";
const ProjectList = lazy(
  () => import("../../../components/users/view/tables/UserProjectList")
);
const UserActivity = lazy(
  () => import("../../../components/users/view/UserActivity")
);
const UserInvoiceList = lazy(
  () => import("../../../components/users/view/ViewUserInvoiceList")
);

const Overview = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <Suspense fallback={<Loading />}>
        <GridItem xs={12}>
          <ProjectList />
        </GridItem>

        <GridItem xs={12}>
          <UserActivity />
        </GridItem>
        <GridItem xs={12}>
          <UserInvoiceList />
        </GridItem>
      </Suspense>
    </GridInnerContainer>
  );
};
export default Overview;
