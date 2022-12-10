import Card from "../Card";
import Box from "../../box/Box";
import { CustomAvatar, Divider, Text } from "../../../ui";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";

const CardMeetup = () => {
  return (
    <Card className="overflow-hidden">
      <Box display="flex">
        <img
          src={"https://i.ibb.co/CM4WXwy/meetup.jpg"}
          alt="meetup image"
          height={200}
          width="100%"
          style={{ objectFit: "fill" }}
        />
      </Box>
      <Box padding={20}>
        <Box display="flex" align="center" space={0.8}>
          <CustomAvatar varient="rounded" size={60} skin="light" color="skin">
            <Box display="flex" flexDirection="column" py={5}>
              <Text varient="body2" weight="bold" textTransform="capitalize">
                Feb
              </Text>
              <Text size={20} weight="bold">
                13
              </Text>
            </Box>
          </CustomAvatar>
          <Box>
            <Text varient="body1" weight="bold" styles={{ marginBottom: 8 }}>
              Developer Meetup
            </Text>
            <Text varient="caption" paragraph secondary>
              When you reach the end of your rope, tie a knot in it and hang on.
            </Text>
          </Box>
        </Box>
        <Divider styles={{ margin: "16px 0 8px 0" }} />
        <Box display="flex" justify="space-between">
          <MeetupStatus
            title="Interested"
            icon={<Icon icon="mdi:star-outline" />}
          />
          <MeetupStatus
            title="Joined"
            icon={<Icon icon="mdi:check-circle-outline" />}
          />
          <MeetupStatus
            title="Invited"
            icon={<Icon icon="mdi:account-outline" />}
            classes="text-primary"
          />
          <MeetupStatus
            title="More"
            icon={<Icon icon="mdi:dots-horizontal" />}
          />
        </Box>
        <Divider styles={{ margin: "16px 0" }} />
        <Box display="flex" flexDirection="column" space={0.5}>
          <Box display="flex" space={0.8}>
            <Text size={20} secondary>
              <Icon icon="mdi:clock-outline" />
            </Text>
            <Box>
              <Text varient="caption" paragraph>
                Tuesday, 24 january, 10:20 - 12:30
              </Text>
              <Text varient="caption" secondary>
                After 1 Week
              </Text>
            </Box>
          </Box>
          <Box display="flex" space={0.8}>
            <Text size={20} secondary>
              <Icon icon="mdi:map-marker-outline" />
            </Text>
            <Box>
              <Text varient="caption" paragraph>
                TriOLO Corrora
              </Text>
              <Text varient="caption" secondary>
                Damak-9 Jhapa, Nepal
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
export default CardMeetup;

const MeetupStatus = ({
  icon,
  title,
  classes,
}: {
  icon: ReactNode;
  title: string;
  classes?: string;
}) => (
  <Box
    display="flex"
    flexDirection="column"
    align="center"
    justify="center"
    className={classes || ""}
  >
    <Text size={24}>{icon}</Text>
    <Text weight="medium" varient="caption" secondary>
      {title}
    </Text>
  </Box>
);
