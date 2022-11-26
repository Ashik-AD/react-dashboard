import CancelPlanModal from "../../plan/CancelPlanModal";
import CurrentPlan from "../../plan/CurrentPlan";
import UpgradePlanModal from "../../plan/UpgradePlanModal";

const Plan = ({ currentPlan }: { currentPlan?: string }) => {
  return (
    <>
      <CurrentPlan
        currentPlan={currentPlan || "basic"}
        UpgradePlan={<UpgradePlanModal plan={currentPlan || "basic"} />}
        CancelPlan={<CancelPlanModal />}
      />
    </>
  );
};
export default Plan;
