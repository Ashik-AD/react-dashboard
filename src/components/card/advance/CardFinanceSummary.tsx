import { AttachMoney } from "@mui/icons-material";
import useTheme from "../../../theme/useTheme";
import { Chip, CustomAvatar, Text } from "../../../ui";
import AvatarGroup from "../../../ui/avatar/AvatarGroup";
import ProgressLinear from "../../../ui/progress/Progress";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";
import { GridContainer, GridItem } from "../../layout";
import Card from "../Card";
import CustomCardTitle from "../titles/CustomCardTitle";

const CardFinanceSummary = () => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <Card>
      <CustomCardTitle
        title="Finance Summary"
        subTitle={
          <Text varient="body2" secondary={true}>
            Check out each Column for more details
          </Text>
        }
        icons={
          <CustomAvatar skin="light" color={primaryColor.color}>
            <AttachMoney />
          </CustomAvatar>
        }
      />
      <Box px={16}>
        <GridContainer rowSpacing={1.6}>
          <GridItem xs={12} md={6}>
            <Text varient="body2" secondary={true}>
              Annual Companies Taxes
            </Text>
            <Text heading="h6">${formatNumber(1450.5)}</Text>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Text varient="body2" secondary={true}>
              Next Tax Review Date
            </Text>
            <Text heading="h6">Feb 13, 2023</Text>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Text varient="body2" secondary={true}>
              Average Product Price
            </Text>
            <Text heading="h6">${formatNumber(85.32)}</Text>
          </GridItem>
          <GridItem xs={12} md={6}>
            <Text
              varient="body2"
              secondary={true}
              paragraph={true}
              styles={{ paddingBottom: 12 }}
            >
              Satisfaction Rate
            </Text>
            <ProgressLinear start={76} size="small" label="76%" />
          </GridItem>
          <GridItem xs={8} md={6}>
            <AvatarGroup
              avatars={[
                {
                  avatar: "https://i.ibb.co/41vBfv2/3.png",
                  name: "Ashik",
                },
                {
                  avatar: "https://i.ibb.co/pR2DQtZ/1.png",
                  name: "Jane",
                },
                {
                  avatar: "https://i.ibb.co/YT68xSC/5.png",
                  name: "John",
                },
                {
                  avatar: "https://i.ibb.co/DVxRbB7/2.png",
                  name: "Mitchel",
                },
              ]}
              extraAvtar={3}
            />
          </GridItem>
          <GridItem xs={3} md={6}>
            <Chip
              label="124 days remaining"
              skin="light"
              size="small"
              styles={{ fontWeight: 600 }}
            />
          </GridItem>
        </GridContainer>
      </Box>
    </Card>
  );
};

export default CardFinanceSummary;
