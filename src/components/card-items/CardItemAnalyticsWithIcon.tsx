import { FC, ReactNode } from "react";
import { Text } from "../../ui";
import Box from "../box/Box";

const CardItemAnalyticsWithIcon: FC<Props> = (props) => {
  const { icon, avatar, label, tag, marginBottom } = props;
  return (
    <Box
      display="flex"
      align="center"
      space={0.8}
      px={20}
      mb={marginBottom ? marginBottom : 16}
    >
      <Box display="flex">{avatar ? avatar : icon ? icon : ""}</Box>
      <Box display="flex" flexDirection="column">
        <Text heading="h6" weight="medium">
          {label}
        </Text>
        {tag && (
          <Text varient="caption" styles={{ marginTop: 1 }}>
            {tag}
          </Text>
        )}
      </Box>
    </Box>
  );
};

interface Props {
  icon?: ReactNode;
  avatar?: ReactNode;
  label: string;
  tag?: string;
  marginBottom?: number;
}
export default CardItemAnalyticsWithIcon;
