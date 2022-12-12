import Box from "../../../../components/box/Box";

import CancelPlanModal from "../../../../components/plan/CancelPlanModal";
import CurrentPlan from "../../../../components/plan/CurrentPlan";
import UpgradePlanModal from "../../../../components/plan/UpgradePlanModal";
import BillingAddress from "../../../../components/user-profile/BillingAddress";
import UserPaymentOptions from "../../../../components/user-profile/UserPaymentOptions";

const Billing = () => {
  return (
    <Box display="flex" flexDirection="column" space={1.6}>
      <CurrentPlan
        currentPlan="Enterprise"
        UpgradePlan={<UpgradePlanModal plan="Enterprise" />}
        CancelPlan={<CancelPlanModal />}
      />
      <UserPaymentOptions />
      <BillingAddress />
    </Box>
  );
};
export default Billing;
