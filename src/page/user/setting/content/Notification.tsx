import Box from "../../../../components/box/Box";
import Card from "../../../../components/card/Card";
import Loading from "../../../../components/loading/Loading";
import NotificationSettings, {
  NotificationsList,
} from "../../../../components/notification-setting/NotificationSettings";
import useFetch from "../../../../hooks/useFetch";
import { Button, Select, SelectItem, Text } from "../../../../ui";

const Notification = () => {
  const { data, loading } = useFetch<Array<NotificationsList>>(
    "/6395f1e7c5b3a64f1bc908ba/notificationSetting"
  );
  if (loading) return <Loading />;
  if (!data) return <></>;
  return (
    <Card padding="1.6rem 0rem">
      <NotificationSettings list={data} permission={false}>
        <Box display="flex" flexDirection="column" space={1.4} px={21} mt={16}>
          <Text heading="h6">When should we send you notifications?</Text>
          <Box>
            <Select width="250px" containerWidth="250px" defaultValue="online">
              <SelectItem value="online" label="Only when i'm online" />
              <SelectItem value="always" label="Anytime" />
            </Select>
          </Box>
          <Box display="flex" space={1}>
            <Button>save changes</Button>
            <Button varient="outlined">discard</Button>
          </Box>
        </Box>
      </NotificationSettings>
    </Card>
  );
};
export default Notification;
