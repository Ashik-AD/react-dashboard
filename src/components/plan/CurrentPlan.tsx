import { FC, ReactNode } from "react";
import { Chip, Text } from "../../ui";
import ProgressLinear from "../../ui/progress/Progress";
import Box from "../box/Box";
import ColorBox from "../box/ColorBox";
import Card from "../card/Card";
import { GridInnerContainer, GridItem } from "../layout";

interface Props {
  currentPlan?: string;
  UpgradePlan?: ReactNode;
  CancelPlan?: ReactNode;
}

const CurrentPlan: FC<Props> = ({ currentPlan, UpgradePlan, CancelPlan }) => {
  return (
    <Card padding="1.2rem 1.4rem">
      <Box display="flex" flexDirection="column" space={2.25}>
        <Text heading="h6">Current Plan</Text>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12} md={6}>
            <Box display="flex" flexDirection="column" space={1}>
              <Text varient="body2" paragraph>
                Your current plan is <b>{currentPlan?.toLocaleUpperCase()}</b>{" "}
                <br />A simple start for everyone
              </Text>
              <Box>
                <Text varient="body2" weight="bold" paragraph>
                  Active until Feb 13, 2023
                </Text>
                <Text varient="body2" paragraph secondary>
                  We will send you a notification upon Subscription expiration
                </Text>
              </Box>
              <Box>
                <Box display="flex" align="center" space={0.6}>
                  <Text varient="body2" weight="bold">
                    $99 Per Month
                  </Text>
                  <Chip label="Fabulous" size="small" skin="light" />
                </Box>
                <Text varient="body2" paragraph secondary>
                  Standard plan for whatever your needs
                </Text>
              </Box>
            </Box>
          </GridItem>

          <GridItem xs={12} md={6}>
            <ColorBox
              color="warning"
              padding={12}
              transparency={2}
              border={{ show: true, size: "0px", radius: "6px" }}
            >
              <Text varient="body1" color="warning" weight="bold" paragraph>
                We need your attention!
              </Text>
              <Text varient="body2" color="warning" lineHeight="26px" paragraph>
                Your plan requires updates
              </Text>
            </ColorBox>
            <Box display="flex" justify="space-between" mt={12} mb={6}>
              <Text varient="body2" weight="bold">
                Days
              </Text>
              <Text varient="body2" weight="bold">
                23 of 30 Days
              </Text>
            </Box>
            <ProgressLinear start={89} size="small" varient="rounded" />
            <Text varient="caption" lineHeight="26px" paragraph secondary>
              Your plan requires update
            </Text>
          </GridItem>
        </GridInnerContainer>
        <Box display="flex" wrap="wrap" space={1}>
          {UpgradePlan && UpgradePlan}
          {CancelPlan && CancelPlan}
        </Box>
      </Box>
    </Card>
  );
};
export default CurrentPlan;
