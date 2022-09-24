import { FC } from "react";
import Box from "../../box/Box";
import Card from "../Card";
import { Text } from "../../../ui";
import { GridContainer, GridItem } from "../../layout";

const CardGimificationLarge: FC<Props> = (props) => {
  const { greet, message, banner } = props;
  return (
    <Card className="overflow-unset-important">
      <GridContainer columnSpacing={1.5} noShifting={true}>
        <GridItem xs={12} sm={6} lg={6}>
          <Box display="flex" flexDirection="column" space={1.3} py={25}>
            <Text heading="h5" styles={{ fontWeight: 600 }}>
              {greet}
            </Text>
            <Text
              paragraph={true}
              secondary={true}
              varient="body2"
              weight="medium"
            >
              {message}
            </Text>
          </Box>
        </GridItem>
        <GridItem xs={12} sm={6} lg={6}>
          <Box display="flex">
            <img
              src={banner}
              alt=""
              style={{
                width: "100%",
                height: 200,
                objectFit: "contain",
                marginTop: -35,
              }}
            />
          </Box>
        </GridItem>
      </GridContainer>
    </Card>
  );
};

interface Props {
  greet: string;
  message: string;
  banner: string;
}

export default CardGimificationLarge;
