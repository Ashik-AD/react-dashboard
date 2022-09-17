import { FC, ReactNode } from "react";
import Card from "../Card";
import Box from "../../box/Box";
import CustomCardTitle from "../titles/CustomCardTitle";
import { Text } from "../../../ui";

const CardStatistic: FC<Props> = ({ label, tag, chart }) => {
  return (
    <Card>
      <CustomCardTitle
        title={
          <Text heading="h6" styles={{ textTransform: "capitalize" }}>
            {label}
          </Text>
        }
        showIcon={false}
        styles={{ paddingBottom: 4 }}
      />
      <Box display="flex" flexDirection="column" px={16} pb={20} space={0.8}>
        {chart}
        {tag && (
          <Text
            varient="body2"
            weight="bold"
            align="center"
            paragraph={true}
            styles={{ textTransform: "capitalize" }}
          >
            {tag}
          </Text>
        )}
      </Box>
    </Card>
  );
};

interface Props {
  label: string;
  tag?: string;
  chart: ReactNode;
}

export default CardStatistic;
