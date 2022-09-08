import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { Text } from "../../ui";
import Box from "../box/Box";

const CardItemSalesWithIcon: FC<Props> = (props) => {
  const { label, total, icon, avatar, category, growth, status, tag } = props;
  return (
    <Box display="flex" align="center" justify="space-between" px={20} mb={16}>
      <Box display="flex" align="center" space={0.5}>
        <Box display="flex">{avatar ? avatar : icon ? icon : ""}</Box>
        <Box display="flex" flexDirection="column" space={0.3}>
          <Box display="flex">
            <Text paragraph={true} weight="bold">
              {label}
            </Text>
            <Box
              display="flex"
              align="center"
              className={`${
                status === "increase"
                  ? "alert-success-text"
                  : "alert-error-text"
              }`}
            >
              {status === "increase" ? (
                <ExpandLess />
              ) : status === "decrease" ? (
                <ExpandMore />
              ) : (
                ""
              )}
              <Text
                varient="caption"
                weight="bold"
                color={`${status === "increase" ? "success" : "error"}`}
              >
                {growth}%
              </Text>
            </Box>
          </Box>
          <Text varient="caption" secondary={true}>
            {tag}
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justify="flex-end" space={0.3}>
        <Text varient="body2" weight="bold" align="right">
          {total}
        </Text>
        {category && (
          <Text
            varient="caption"
            weight="medium"
            secondary={true}
            styles={{ marginTop: 1, textTransform: "capitalize" }}
            align="right"
          >
            {category}
          </Text>
        )}
      </Box>
    </Box>
  );
};

interface Props {
  avatar?: ReactNode;
  icon?: ReactNode;
  label: string;
  tag?: string;
  total: string | number;
  growth?: string | number;
  category?: string;
  status?: "increase" | "decrease";
}

export default CardItemSalesWithIcon;
