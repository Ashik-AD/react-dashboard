import { FC, ReactNode } from "react";
import { Text } from "../../ui";
import ArrowIndicator from "../../ui/arrow/ArrowIndicator";
import Box from "../box/Box";

const CardItemSalesWithIcon: FC<Props> = (props) => {
  const { label, total, icon, avatar, category, growth, status, tag } = props;
  return (
    <Box
      display="flex"
      align="center"
      justify="space-between"
      px={20}
      mb={16}
      className="overflow-hidden"
      space={0.8}
    >
      <Box display="flex">{avatar ? avatar : icon ? icon : ""}</Box>
      <Box
        display="flex"
        align="center"
        justify="space-between"
        wrap="wrap"
        space={0.4}
        flex={1}
      >
        <Box display="flex" flexDirection="column" space={0.1} pr={4}>
          <Box display="flex">
            <Text paragraph={true} weight="bold">
              {label}
            </Text>
            <Box
              display="flex"
              align="center"
              className={`${
                status === "inc" ? "alert-success-text" : "alert-error-text"
              }`}
            >
              {status ? <ArrowIndicator status={status} color={true} /> : ""}
              <Text
                varient="caption"
                weight="bold"
                color={`${status === "inc" ? "success" : "error"}`}
              >
                {growth}%
              </Text>
            </Box>
          </Box>
          <Text varient="caption" secondary={true}>
            {tag}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justify="flex-end"
          space={0.3}
        >
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
  status?: "inc" | "dec";
}

export default CardItemSalesWithIcon;
