import { FC } from "react";
import { Divider, Text } from "../../ui";
import Box from "../box/Box";
import type { NewItemHandle } from "./item/type";

const taxPercent = 15;
const applyTax = (amt: number, percent: number) => amt - (amt * percent) / 100;
const applyDiscount = (
  amt: number,
  discount: { total: number; percent?: boolean }
) => (discount.percent ? (amt * discount.total) / 100 : amt - discount.total);

const TotalAmount: FC<NewItemHandle> = ({ items }) => {
  const subTotal = items.reduce((acc, cur) => cur.cost * cur.hours + acc, 0);
  const totalDiscount = items.reduce((acc, cur) => cur.discount + acc, 0);
  const totalAmt = applyTax(
    applyDiscount(subTotal, { total: totalDiscount }),
    taxPercent
  );
  return (
    <Box display="flex" flexDirection="column" space={0.6}>
      <Box display="flex" justify="space-between">
        <Text varient="body2" secondary>
          Subtotal:
        </Text>
        <Text varient="body2" weight="bold" align="right" secondary>
          ${subTotal}
        </Text>
      </Box>
      <Box display="flex" justify="space-between">
        <Text varient="body2" secondary>
          Discount:
        </Text>
        <Text varient="body2" weight="bold" align="right" secondary>
          ${totalDiscount}
        </Text>
      </Box>
      <Box display="flex" justify="space-between">
        <Text varient="body2" secondary>
          Tax:
        </Text>
        <Text varient="body2" weight="bold" align="right" secondary>
          {taxPercent}%
        </Text>
      </Box>
      <Divider />
      <Box display="flex" justify="space-between">
        <Text varient="body2" secondary>
          Total:
        </Text>
        <Text varient="body2" weight="bold" align="right" secondary>
          ${totalAmt.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
};
export default TotalAmount;
