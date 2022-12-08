import { Text } from "../../../ui";
import Box from "../../box/Box";
import CustomCardTitle from "../titles/CustomCardTitle";

import gumroad from "../../../image/logo/gumroad.png";
import mastercard from "../../../image/logo/mastercard-label.png";
import stripe from "../../../image/logo/stripe.png";
import americano from "../../../image/logo/american-bank.png";
import citibank from "../../../image/logo/citi-bank.png";
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
  formatData(gumroad, "Gumroad Account", "Sell UI Kit", 43453),
  formatData(mastercard, "Mastercard", "Wallet Deposit", 240023),
  formatData(stripe, "Stripe", "Android Application", 1299),
  formatData(americano, "American Bank", "Bank Transfer", 12000),
  formatData(citibank, "Bank Account", "Wallet desosit", 4453),
];

const CardDeposit = () => {
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
      color="success"
      currency={true}
      status={"inc"}
      trending={{ show: true }}
      titleStyle={{ fontSize: 14 }}
    />
  ));
  return (
    <div className="card-deposit">
      <CustomCardTitle
        title="Deposit"
        icons={
          <Text skinColor={true} varient="caption">
            View All
          </Text>
        }
      />
      <Box mt={12} pb={8}>
        {items}
      </Box>
    </div>
  );
};
export default CardDeposit;
