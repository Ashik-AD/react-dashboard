import { CalendarTodayOutlined } from "@mui/icons-material";
import { FC } from "react";
import { Avatar, Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const AdvanceCardMeeting: FC<Props> = (props) => {
  const { title, items } = props;
  return (
    <Card>
      <CardTitle title={title} />
      <Box px={20} display="flex" flexDirection="column">
        {items.map((item) => (
          <Box
            display="flex"
            mb={28}
            justify="space-between"
            align="center"
            key={item.title}
          >
            <Box display="flex" align="center" space={0.7}>
              <Avatar src={item.profile} alt="meeting person" />
              <Box display="flex" flexDirection="column" space={0.3}>
                <Text weight="medium" varient="body1">
                  {item.title}
                </Text>
                <Text
                  varient="caption"
                  styles={{ display: "flex", alignItems: "center" }}
                  secondary={true}
                >
                  <CalendarTodayOutlined
                    fontSize="inherit"
                    style={{ marginRight: 5 }}
                  />
                  {item.date.day} {item.date.month} | {item.date.from} -{" "}
                  {item.date.to}
                </Text>
              </Box>
            </Box>
            <Chip
              label={item.tag}
              skin="light"
              color={item.color}
              size="small"
              styles={{ fontWeight: 600 }}
            />
          </Box>
        ))}
      </Box>
    </Card>
  );
};

interface Props {
  title: string;
  items: {
    profile: string;
    title: string;
    date: {
      month: string;
      day: number;
      from: string;
      to: string;
    };
    tag: string;
    color?: string;
  }[];
}
export default AdvanceCardMeeting;
