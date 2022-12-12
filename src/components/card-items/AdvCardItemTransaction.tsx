import { FC, ReactNode } from "react";
import Box from "../box/Box";
import { CustomAvatar, Text } from "../../ui";
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
    titleStyle,
    totalStyle,
  } = props;
  return (
    <Box display="flex" justify="space-between" px={20} mb={16}>
      <Box display="flex" space={0.8}>
        {type === "icon" ? (
          <CustomAvatar
            varient="rounded"
            skin="light"
            color={iconColor}
            fontSize={24}
          >
            {icon}
          </CustomAvatar>
        ) : type === "image" ? (
          <>{image}</>
        ) : (
          ""
        )}

        <Box>
          <Text
            paragraph={true}
            weight={titleStyle?.fontWeight ? titleStyle.fontWeight : "medium"}
            size={titleStyle?.fontSize && titleStyle.fontSize}
          >
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
        <Text
          paragraph={true}
          weight={totalStyle?.fontWeight ? totalStyle.fontWeight : "bold"}
          color={color}
          varient="body2"
          size={totalStyle?.fontSize && totalStyle.fontSize}
        >
          {trending && trending.show && (status === "inc" ? "+" : "-")}
          {currency && "$"}
          {total}
        </Text>
        {arrow &&
          (status === "inc" ? (
            <ExpandLess color="success" />
          ) : (
            <ExpandMore color="error" />
          ))}
      </Box>
    </Box>
  );
};

interface FontStyle {
  fontSize?: number;
  fontWeight?: "bold" | "medium" | "regular";
}
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
  status?: "inc" | "dec";
  iconColor?: string;
  color?: string;
  arrow?: boolean;
  trending?: { show: boolean };
  titleStyle?: FontStyle;
  totalStyle?: FontStyle;
}

export default AdvCardItemTransaction;
