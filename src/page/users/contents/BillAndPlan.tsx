import { lazy, Suspense, useContext } from "react";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import Loading from "../../../components/loading/Loading";
import { UserDetailCtx } from "../chunk/UserView.page";

const PaymentMethods = lazy(
  () => import("../../../components/users/payment/PaymentMethods")
);
const CurrentPlan = lazy(
  () => import("../../../components/users/plans/CurrentPlan")
);
const BillingAddress = lazy(
  () => import("../../../components/users/billlings/BillingAddress")
);
const BillAndPlan = () => {
  const userDetail = useContext(UserDetailCtx);
  const { currentPlan, company, contact, country, email } = userDetail;
  return (
    <Suspense fallback={<Loading />}>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12}>
          <CurrentPlan currentPlan={currentPlan || ""} />
        </GridItem>
        <GridItem xs={12}>
          <PaymentMethods />
        </GridItem>
        <GridItem xs={12}>
          <BillingAddress
            email={email}
            company={company}
            contact={contact}
            country={country}
          />
        </GridItem>
      </GridInnerContainer>
    </Suspense>
  );
};
export default BillAndPlan;
