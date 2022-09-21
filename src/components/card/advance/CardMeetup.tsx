import Card from "../Card";
import meetupImage from "../../../image/meetup.jpg";
import Box from "../../box/Box";
import { CustomAvatar, Divider, Text } from "../../../ui";
import useTheme from "../../../theme/useTheme";
import {
  AccessTimeOutlined,
  CheckCircleOutline,
  MoreHoriz,
  PersonOutline,
  RoomOutlined,
  StarOutline,
} from "@mui/icons-material";
const CardMeetup = () => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <Card className="overflow-hidden">
      <Box display="flex">
        <img
          src={meetupImage}
          alt="meetup image"
          height={200}
          width="100%"
          style={{ objectFit: "fill" }}
        />
      </Box>
      <Box padding={20}>
        <Box display="flex" align="center" space={0.8}>
          <CustomAvatar
            varient="rounded"
            size={60}
            skin="light"
            color={primaryColor.color}
          >
            <Box display="flex" flexDirection="column" py={5}>
              <Text
                varient="body2"
                weight="bold"
                styles={{ textTransform: "capitalize" }}
              >
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
            <Text paragraph={true} varient="caption" secondary={true}>
              When you reach the end of your rope, tie a knot in it and hang on.
            </Text>
          </Box>
        </Box>
        <Divider styles={{ margin: "16px 0 8px 0" }} />
        <Box display="flex" justify="space-between">
          <Box
            display="flex"
            flexDirection="column"
            align="center"
            justify="center"
          >
            <StarOutline style={{ fontSize: 26 }} />
            <Text weight="medium" varient="body2">
              Interested
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            align="center"
            justify="center"
          >
            <CheckCircleOutline style={{ fontSize: 26 }} />
            <Text weight="medium" varient="body2">
              Joined
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            align="center"
            justify="center"
          >
            <PersonOutline
              style={{ fontSize: 26, color: primaryColor.color }}
            />
            <Text weight="medium" varient="body2" color={primaryColor.color}>
              Invited
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            align="center"
            justify="center"
          >
            <MoreHoriz style={{ fontSize: 26 }} />
            <Text weight="medium" varient="body2">
              More
            </Text>
          </Box>
        </Box>
        <Divider styles={{ margin: "16px 0" }} />
        <Box display="flex" flexDirection="column" space={0.5}>
          <Box display="flex" space={0.8}>
            <AccessTimeOutlined />
            <Box>
              <Text varient="body2" paragraph={true}>
                Tuesday, 24 january, 10:20 - 12:30
              </Text>
              <Text varient="caption" secondary={true}>
                After 1 Week
              </Text>
            </Box>
          </Box>
          <Box display="flex" space={0.8}>
            <RoomOutlined />
            <Box>
              <Text varient="body2" paragraph={true}>
                TriOLO Corrora
              </Text>
              <Text varient="caption" secondary={true}>
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
