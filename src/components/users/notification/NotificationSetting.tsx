import useFetch from "../../../hooks/useFetch";
import { Button } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import NotificationSettings, {
  NotificationsList,
} from "../../notification-setting/NotificationSettings";

const NotificationSetting = () => {
  const { data, loading } = useFetch<Array<NotificationsList>>(
    "/6395f1d06a51bc4f704ce24a/notificationSettings"
  );
  if (loading || !data) return <></>;
  return (
    <Card py="1.25rem">
      <NotificationSettings list={data} permission={true}>
        <Box display="flex" pt={24} px={20} space={1.6}>
          <Button>Save change</Button>
          <Button varient="outlined">Discard</Button>
        </Box>
      </NotificationSettings>
    </Card>
  );
};
export default NotificationSetting;
