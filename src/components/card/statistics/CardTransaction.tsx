import { FC, ReactNode } from "react";
import { CustomAvatar, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";
import { GridContainer, GridItem } from "../../layout";
import Card from "../Card";
import CardTitle from "../CardTitle";

const CardTransaction: FC<PropsType> = (props) => {
  const { title, items } = props;
  return (
    <Card>
      <CardTitle title={title} />
      <Box padding={20}>
        <GridContainer>
          {items.map((item) => (
            <GridItem key={item.id} lg={3} md={3} xs={6}>
              <Box display="flex" align="center" space={1} pt={5}>
                <CustomAvatar color={item.color} varient="rounded">
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
