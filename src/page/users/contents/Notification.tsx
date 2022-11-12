import { lazy, Suspense } from "react";
import Loading from "../../../components/loading/Loading";

const NotificationSetting = lazy(
  () => import("../../../components/users/notification/NotificationSetting")
);

const ViewNotificationSetting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NotificationSetting />
    </Suspense>
  );
};
export default ViewNotificationSetting;
