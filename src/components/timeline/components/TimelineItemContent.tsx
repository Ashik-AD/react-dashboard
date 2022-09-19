import { FC, ReactNode } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import { BoxProps } from "../../box/type";

const TimelineItemContent: FC<Props> = (props) => {
  const { subject, timestamp, description, children, style, banner } = props;
  return (
    <Box
      display="flex"
      flexDirection={!banner ? "column" : "row"}
      space={banner ? 0.4 : 0.6}
      {...style}
      pl={16}
      pb={8}
    >
      {banner && <Box display="flex">{banner}</Box>}
      <Box display="flex" pt={6}>
        <Text weight="bold" varient="body1" styles={{ flex: "1 1 auto" }}>
          {subject}
        </Text>
        <Text varient="caption" secondary={true}>
          {timestamp}
        </Text>
      </Box>
      <Text varient="body2" paragraph={true}>
        {description}
      </Text>
      {children && (
        <Box display="flex" flexDirection="column">
          {children}
        </Box>
      )}
    </Box>
  );
};

interface Props {
  subject: string;
  timestamp: string;
  description: string;
  children?: ReactNode;
  style?: BoxProps;
  banner?: ReactNode;
}

export default TimelineItemContent;
