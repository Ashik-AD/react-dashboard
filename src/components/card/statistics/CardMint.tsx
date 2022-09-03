import { FC, ReactNode } from "react";
import Card from "../Card";
import CardTitle from "../CardTitle";
import Box from "../../box/Box";
import { CustomAvatar, Text } from "../../../ui";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import formatNumber from "../../../utils/formatNumber";

const CardMint: FC<PropsType> = (props) => {
  const { title, icon, total, status, growth, iconBackground, tag, currency } =
    props;
  return (
    <Card>
      <CardTitle
        styles={{
          alignItems: "flex-start",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
        title={<CustomAvatar color={iconBackground}>{icon}</CustomAvatar>}
      />
      <Box display="flex" flexDirection="column" px={16} pb={20}>
        <Text
          varient="body1"
          styles={{ textTransform: "capitalize", marginBottom: 4 }}
        >
          {title}
        </Text>
        <Box display="flex" mb={10} align="baseline">
          <Text heading="h5" styles={{ fontWeight: 500 }}>
            {currency && "$"}
            {formatNumber(total, 1000)}
          </Text>
          <sup>
            <Box
              display="flex"
              align="center"
              className={
                status === "inc" ? "alert-success-text" : "alert-error-text"
              }
            >
              <span className="caption" style={{ display: "flex" }}>
                {status === "inc" ? <ExpandLess /> : <ExpandMore />}
              </span>
              <span className="text-bold caption">{growth}%</span>
            </Box>
          </sup>
        </Box>
        <Text varient="caption" styles={{ textTransform: "capitalize" }}>
          {tag}
        </Text>
      </Box>
    </Card>
  );
};

interface PropsType {
  icon: ReactNode;
  iconBackground?: string;
  title: string;
  total: number;
  tag: string;
  growth: number;
  status: "inc" | "desc";
  currency?: boolean;
}

export default CardMint;
