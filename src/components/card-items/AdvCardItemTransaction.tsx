import { FC, ReactNode } from "react";
import Box from "../box/Box";
import { CustomAvatar, Avatar, Text } from "../../ui";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AdvCardItemTransaction: FC<CardItemTransactionProps> = (props) => {
  const {
    title,
    tag,
    total,
    currency,
    status,
    color,
    arrow,
    iconColor,
    trending,
    avatar: { type, icon, image },
  } = props;
  return (
    <Box display="flex" justify="space-between" px={20} mb={16}>
      <Box display="flex" space={0.5}>
        {type === "icon" ? (
          <CustomAvatar varient="rounded" skin="light" color={iconColor}>
            {icon}
          </CustomAvatar>
        ) : type === "image" ? (
          <>{image}</>
        ) : (
          ""
        )}

        <Box>
          <Text paragraph={true} weight="medium">
            {title}
          </Text>
          <Text
            paragraph={true}
            varient="caption"
            secondary={true}
            styles={{ marginTop: 5, opacity: 0.5 }}
          >
            {tag}
          </Text>
        </Box>
      </Box>
      <Box display="flex" align="center">
        <Text paragraph={true} weight="bold" color={color} varient="body1">
          {trending && trending.show && (status === "increase" ? "+" : "-")}
          {currency && "$"}
          {total}
        </Text>
        {arrow &&
          (status === "increase" ? (
            <ExpandLess color="success" />
          ) : (
            <ExpandMore color="error" />
          ))}
      </Box>
    </Box>
  );
};

export interface CardItemTransactionProps {
  avatar: {
    type: "icon" | "image";
    icon?: ReactNode;
    image?: ReactNode;
  };
  title: string;
  tag?: string;
  total: number | string;
  currency?: boolean;
  status?: "increase" | "decrease";
  iconColor?: string;
  color?: string;
  arrow?: boolean;
  trending?: { show: boolean };
}

export default AdvCardItemTransaction;
