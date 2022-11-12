import { Avatar, Text } from "../../../ui";
import Box from "../../box/Box";
import {
  Timeline,
  TimelineItem,
  TimelineItemContent,
  TimelineSeparator,
} from "../../timeline";
import Nini from "../../../image/humans/7.png";
const UserActivity = () => {
  return (
    <Timeline title="User actvitiy timeline">
      <TimelineItem>
        <TimelineSeparator color="error" />
        <TimelineItemContent
          subject="User login"
          description="User login at 2:30pm"
          timestamp="4 hr ago"
        />
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="skin" />
        <TimelineItemContent
          subject="Meeting with John"
          description="React project meeting with John @5:45PM"
          timestamp="4 hr ago"
        >
          <Box display="flex" align="center" space={0.6}>
            <Avatar src={Nini} alt="nini my girl" />
            <Box>
              <Text varient="body2" weight="bold" paragraph>
                Nini Wang (Client)
              </Text>
              <Text varient="body2" secondary>
                CEO of Likied
              </Text>
            </Box>
          </Box>
        </TimelineItemContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="info" />
        <TimelineItemContent
          subject="Create a new React project for client"
          description="Add Redux store 🏪"
          timestamp="6 hr ago"
        />
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="skin" />
        <TimelineItemContent
          subject="Create invoice for client"
          description="A new invoice is created and sended to Nini"
          timestamp="1 day ago"
        />
      </TimelineItem>
    </Timeline>
  );
};
export default UserActivity;
