import Box from "../../box/Box";
import CustomCardTitle from "../titles/CustomCardTitle";
import { Text } from "../../../ui";

import AdvCardItemTransaction from "../../card-items/AdvCardItemTransaction";
import formatNumber from "../../../utils/formatNumber";

const formatData = (
  logo: string,
  label: string,
  tag: string,
  total: number
) => ({
  logo,
  label,
  tag,
  total,
});

const desposits = [
  formatData(
    "https://i.ibb.co/qkxNynH/google.png",
    "Google Adsense",
    "Paypal deposit",
    453
  ),
  formatData(
    "https://i.ibb.co/nspVWrb/github.png",
    "Github Enterprise",
    "Security & complaince",
    1212
  ),
  formatData(
    "https://i.ibb.co/D1BVm8t/slack.png",
    "Upgrade slack plan",
    "Debit card despoit",
    300
  ),
  formatData(
    "https://i.ibb.co/6bjxdZp/digital-ocean.png",
    "Digital Ocean",
    "Cloud Hosting",
    234
  ),
  formatData(
    "https://i.ibb.co/drvxnms/aws.png",
    "AWS account",
    "Choosing a Cloud Platform",
    4453
  ),
];

const items = desposits.map((item) => (
  <AdvCardItemTransaction
    avatar={{
      type: "image",
      image: (
        <img
          src={item.logo}
          alt={item.label}
          width={30}
          height={28}
          style={{ objectFit: "contain", marginRight: 8, marginBottom: 16 }}
        />
      ),
    }}
    title={item.label}
    tag={item.tag}
    total={formatNumber(item.total)}
    color="error"
    currency={true}
    status={"dec"}
    trending={{ show: true }}
    titleStyle={{ fontSize: 14 }}
  />
));

const CardExpense = () => {
  return (
    <Box className="expense-card">
      <CustomCardTitle
        title="Withdraw"
        icons={
          <Text skinColor={true} varient="caption">
            View All
          </Text>
        }
      />
      <Box mt={12} pb={8}>
        {items}
      </Box>
    </Box>
  );
};
export default CardExpense;
