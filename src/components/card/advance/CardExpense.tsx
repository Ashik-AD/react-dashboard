import Box from "../../box/Box";
import CustomCardTitle from "../titles/CustomCardTitle";
import { Text } from "../../../ui";

import google from "../../../image/logo/google.png";
import github from "../../../image/logo/github.png";
import slack from "../../../image/logo/slack.png";
import digitalOcen from "../../../image/logo/digital-ocean.png";
import amazon from "../../../image/logo/aws.png";
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
  formatData(google, "Google Adsense", "Paypal deposit", 453),
  formatData(github, "Github Enterprise", "Security & complaince", 1212),
  formatData(slack, "Upgrade slack plan", "Debit card despoit", 300),
  formatData(digitalOcen, "Digital Ocean", "Cloud Hosting", 234),
  formatData(amazon, "AWS account", "Choosing a Cloud Platform", 4453),
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
    status={"decrease"}
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
      <Box>{items}</Box>
    </Box>
  );
};
export default CardExpense;
