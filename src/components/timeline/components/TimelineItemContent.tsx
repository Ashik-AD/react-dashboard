import { FC, ReactNode } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import { BoxProps } from "../../box/type";

const TimelineItemContent: FC<Props> = (props) => {
  const { subject, timestamp, description, children, style, banner, colors } =
    props;
  return (
    <Box
      display="flex"
      flexDirection={!banner ? "column" : "row"}
      space={banner ? 0.4 : 0.6}
      {...style}
      pl={16}
      pb={8}
      flex="1 1 auto"
    >
      {banner && <Box display="flex">{banner}</Box>}
      <Box display="flex" pt={6} wrap="wrap" align="center">
        <Text
          weight="bold"
          varient="body2"
          styles={{ flex: "1 1 auto" }}
          color={colors?.subject}
        >
          {subject}
        </Text>
        <Text varient="caption" weight="medium" secondary>
          {timestamp}
        </Text>
      </Box>
      {description && (
        <Text varient="body2" color={colors?.description} secondary paragraph>
          {description}
        </Text>
      )}
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
  description?: string;
  children?: ReactNode;
  style?: BoxProps;
  banner?: ReactNode;
  colors?: {
    subject?: string;
    description?: string;
  };
}

export default TimelineItemContent;
