import { Text } from "../../../ui";
import Box from "../../box/Box";
import CustomCardTitle from "../titles/CustomCardTitle";

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
    "https://i.ibb.co/nbr4npc/gumroad.png",
    "Gumroad Account",
    "Sell UI Kit",
    43453
  ),
  formatData(
    "https://i.ibb.co/VVkhLjH/mastercard-label.png",
    "Mastercard",
    "Wallet Deposit",
    240023
  ),
  formatData(
    "https://i.ibb.co/hFTkBsc/stripe.png",
    "Stripe",
    "Android Application",
    1299
  ),
  formatData(
    "https://i.ibb.co/n1XxBRm/american-bank.png",
    "American Bank",
    "Bank Transfer",
    12000
  ),
  formatData(
    "https://i.ibb.co/kBJSqG4/citi-bank.png",
    "Bank Account",
    "Wallet desosit",
    4453
  ),
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
