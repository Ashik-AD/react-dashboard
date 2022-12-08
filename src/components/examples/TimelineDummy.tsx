import Box from "../box/Box";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import {
  Timeline,
  TimelineItem,
  TimelineItemContent,
  TimelineSeparator,
} from "../timeline";
import { Avatar, Text } from "../../ui";

const TimelineDummy = () => {
  return (
    <Timeline title="Mama mia! 😁">
      <TimelineItem>
        <TimelineSeparator color="error" />
        <TimelineItemContent
          subject="8 Invoices have been paid"
          description="Invoices have been paid to the company."
          timestamp="Tuesday"
        >
          <Box display="flex" align="center" space={0.4}>
            <Text color="error" size={26}>
              <BsFileEarmarkPdfFill />
            </Text>
            <Text varient="body2" weight="bold">
              bookingCard.pdf
            </Text>
          </Box>
        </TimelineItemContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="error" />
        <TimelineItemContent
          subject="Create a new project for client 😎"
          description="Invoices have been paid to the company."
          timestamp="Yesterday"
        >
          <Box display="flex" align="center" space={0.4}>
            <Avatar
              src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-4/images/avatars/1.png"
              alt="it's john"
              size={26}
            />
            <Text varient="body2" weight="bold">
              John Doe 😍😘
            </Text>
          </Box>
        </TimelineItemContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="info" />
        <TimelineItemContent
          subject="Order #37745 from September"
          description="Invoices have been paid to the company."
          timestamp="February, 13"
        ></TimelineItemContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="warning" />
        <TimelineItemContent
          subject="Hola, Amigo 👒"
          description="Need to learn some spanish! Amigo"
          timestamp="February, 14"
        ></TimelineItemContent>
      </TimelineItem>
    </Timeline>
  );
};
export default TimelineDummy;
