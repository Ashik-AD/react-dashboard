import ProgressLinear from "../../../ui/progress/Progress";
import CardItemWithIconProgress from "../../card-items/CardItemWithIconProgress";
import { CustomAvatar, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import { AllInclusive, ArrowDropUp, Bolt, Diamond } from "@mui/icons-material";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import Box from "../../box/Box";

const formatData = (
  title: string,
  tag: string,
  count: number,
  color: string,
  icon: any,
  iconColor: string,
  score: number
) => ({
  title,
  tag,
  icon,
  count,
  color,
  iconColor,
  score,
});
const sources = [
  formatData(
    "Zipcar",
    "Vuejs, React & HTML",
    23232.32,
    "info",
    <Diamond />,
    "info",
    54
  ),
  formatData(
    "BitBank",
    "Sketch, Figma & XD",
    5433,
    "warning",
    <Bolt />,
    "warning",
    89
  ),
  formatData(
    "Aviot",
    "HTML, Svelte, Nodejs",
    43423,
    "success",
    <AllInclusive />,
    "success",
    34
  ),
];
const CardTotalEarning = () => {
  const items = sources.map((item, index) => (
    <CardItemWithIconProgress
      key={`item-${index}`}
      label={item.title}
      tag={item.tag}
      total={`$${formatNumber(item.count)}`}
      icon={
        <CustomAvatar
          varient="rounded"
          skin="light"
          color={item.iconColor}
          size={40}
          fontSize={28}
        >
          {item.icon}
        </CustomAvatar>
      }
      progress={
        <ProgressLinear start={item.score} color={item.color} size="xsmall" />
      }
    />
  ));
  return (
    <Card>
      <CardTitle title="Total earning" />
      <Box px={20} py={20}>
        <Box display="flex" align="center" space={0.1}>
          <Text heading="h4" weight="bold">
            ${formatNumber(43235)}
          </Text>
          <Text color="success" size={35}>
            <ArrowDropUp />
          </Text>
          <Text color="success" varient="body2" weight="medium">
            10%
          </Text>
        </Box>
        <Text varient="caption" weight="medium" secondary>
          Compared to $84,325 last year
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" space={0.8} pb={6}>
        {items}
      </Box>
    </Card>
  );
};
export default CardTotalEarning;
