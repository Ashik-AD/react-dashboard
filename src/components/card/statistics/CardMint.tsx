import { FC, ReactNode } from "react";
import Card from "../Card";
import Box from "../../box/Box";
import { CustomAvatar, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardMint: FC<PropsType> = (props) => {
  const { title, icon, total, status, growth, iconBackground, tag, currency } =
    props;
  return (
    <Card>
      <CustomCardTitle
        styles={{
          alignItems: "flex-start",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
        title={
          <CustomAvatar color={iconBackground} size={40}>
            {icon}
          </CustomAvatar>
        }
      />
      <Box
        display="flex"
        flexDirection="column"
        px={16}
        pb={26}
        pt={8}
        space={0.4}
        className="car-body"
      >
        <Text
          varient="body2"
          weight="bold"
          styles={{ textTransform: "capitalize", marginBottom: 4 }}
        >
          {title}
        </Text>
        <Box display="flex" mb={16} space={0.5}>
          <Text heading="h6" styles={{ fontWeight: 500 }}>
            {currency && "$"}
            {formatNumber(total, 1000)}
          </Text>
          <sup>
            <Box
              display="flex"
              className={
                status === "inc" ? "alert-success-text" : "alert-error-text"
              }
            >
              <sup className="caption" style={{ fontWeight: 600 }}>
                {status === "inc" ? "+" : "-"}
              </sup>
              <span className="text-bold caption">{growth}%</span>
            </Box>
          </sup>
        </Box>
        <Text
          varient="caption"
          secondary={true}
          weight="medium"
          styles={{ textTransform: "capitalize" }}
        >
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
