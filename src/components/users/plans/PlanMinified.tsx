import { UserPlan } from "../../../features/users/types/definition";
import { Button, Chip, Text } from "../../../ui";
import ProgressLinear from "../../../ui/progress/Progress";
import Box from "../../box/Box";
import Card from "../../card/Card";

import { Circle } from "@mui/icons-material";

const PlanMinified = ({ planName }: { planName: UserPlan }) => {
  return (
    <Card padding="1rem" py="1.4rem" border="2px solid" borderColor="skin">
      <Box display="flex" justify="space-between">
        <Chip
          label={planName}
          size="small"
          skin="light"
          styles={{
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: 16,
          }}
        />
        <Box display="flex" align="baseline">
          <Text heading="h3" weight="bold" skinColor>
            <sup style={{ fontSize: 14 }}>$</sup>99
          </Text>
          <sub style={{ fontSize: 16 }}> / month</sub>
        </Box>
      </Box>

      <ul style={{ margin: "1.6rem 0rem" }}>
        <PlanFeature title="10 Users" />
        <PlanFeature title="Up to 10GB Storage" />
        <PlanFeature title="Basic Support" />
      </ul>

      <Box display="flex" flexDirection="column">
        <Box display="flex" justify="space-between" mb={8}>
          <Text weight="bold" varient="body2">
            Days
          </Text>
          <Text weight="bold" varient="body2">
            26 of 30 Days
          </Text>
        </Box>
        <ProgressLinear start={85} varient="rounded" size="small" />
        <Text varient="body2" lineHeight="36px" secondary paragraph>
          4 days remaining
        </Text>
      </Box>
      <Button width="100%">upgrade plan</Button>
    </Card>
  );
};
export default PlanMinified;

const PlanFeature = ({ title }: { title: string }) => (
  <li
    style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0px" }}
  >
    <Circle style={{ fontSize: 12 }} />
    <Text varient="body2" paragraph>
      {title}
    </Text>
  </li>
);
