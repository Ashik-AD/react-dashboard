import { FC, ReactNode } from "react";
import { CustomAvatar, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";
import { GridContainer, GridItem } from "../../layout";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardTransaction: FC<PropsType> = (props) => {
  const { title, items, subtitle } = props;
  return (
    <Card>
      <CustomCardTitle title={title} subTitle={subtitle} />
      <Box px={20} pb={16}>
        <GridContainer>
          {items.map((item) => (
            <GridItem
              key={item.id}
              xs={12}
              sm={4}
              md={4}
              lg={(12 / items.length) as any}
            >
              <Box display="flex" align="center" space={1}>
                <CustomAvatar
                  color={item.color}
                  varient="rounded"
                  styles={{ minWidth: 45 }}
                >
                  {item.icon}
                </CustomAvatar>
                <Box display="flex" flexDirection="column" space={0.3}>
                  <Text
                    varient="caption"
                    secondary={true}
                    styles={{ textTransform: "capitalize", fontWeight: 500 }}
                  >
                    {item.title}
                  </Text>
                  <Text heading="h6" styles={{ fontWeight: 600 }}>
                    {item.currency && "$"}
                    {formatNumber(item.total, 1000)}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </GridContainer>
      </Box>
    </Card>
  );
};

interface PropsType {
  title: string;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  items: {
    id: number | string;
    icon: ReactNode;
    title: string;
    total: number;
    currency?: boolean;
    color?: string;
  }[];
}

export default CardTransaction;
