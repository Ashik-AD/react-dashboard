import { FC } from "react";
import { BusinessCenter } from "@mui/icons-material";
import { Button, CustomAvatar, Text } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import mastercard from "../../../image/logo/mastercard-label.png";
import amerikano from "../../../image/logo/american-bank.png";
import TextField from "../../../ui/input/text-field/TextField";
const CardPackagePlan = () => {
  return (
    <Card>
      <CardTitle title="upgrade your plan" />
      <Box display="flex" flexDirection="column" px={20} space={0.8} pb={20}>
        <Text
          varient="caption"
          paragraph={true}
          secondary={true}
          weight="medium"
          styles={{ lineHeight: "20px" }}
        >
          Please make the payment to start enjoying all the features of our
          premium plan as soon as possible.
        </Text>
        <ColorBox
          padding={12}
          transparency={2}
          display="flex"
          align="center"
          justify="space-between"
          space={0.6}
          style={{ borderRadius: 6, overflow: "hidden" }}
        >
          <Box display="flex" align="center" space={0.5}>
            <CustomAvatar
              varient="rounded"
              skin="light"
              color="info"
              size={40}
              fontSize={25}
            >
              <BusinessCenter />
            </CustomAvatar>
            <span>
              <Text
                paragraph={true}
                varient="body2"
                weight="medium"
                styles={{ lineHeight: "10px" }}
              >
                Titanium
              </Text>
              <Text varient="caption" skinColor={true} weight="medium">
                Upgrade plan
              </Text>
            </span>
          </Box>
          <Box>
            <sup>$</sup>
            <Text size={26} weight="bold">
              3,000
            </Text>
            <sub>/year</sub>
          </Box>
        </ColorBox>
        <Text varient="body2" weight="bold">
          Payment details
        </Text>
        <Box display="flex" flexDirection="column" space={0.6}>
          <CreaditLists
            logo={mastercard}
            name="mastercard-cvc"
            cardpin={["4232", "0890"]}
          />
          <CreaditLists
            logo={amerikano}
            name="american-cvc"
            cardpin={["8822", "6764"]}
          />
        </Box>
        <Text
          varient="caption"
          weight="bold"
          skinColor={true}
          styles={{ lineHeight: "30px" }}
        >
          Add Payment Method
        </Text>
        <TextField
          name="email-address"
          type="text"
          label="email address"
          sizes="small"
        />
        <Button varient="contained">proceed to payment</Button>
      </Box>
    </Card>
  );
};

const CreaditLists: FC<{
  cardpin: [string, string];
  logo: string;
  name: string;
}> = ({ cardpin, logo, name }) => (
  <Box display="flex" align="center" justify="space-between">
    <Box display="flex" align="center" space={0.8}>
      <img src={logo} alt="mastercard" width={35} height={32} />
      <Box>
        <Text
          varient="body2"
          weight="medium"
          paragraph={true}
          styles={{ lineHeight: "15px" }}
        >
          Credit card
        </Text>
        <Text
          varient="caption"
          secondary={true}
          weight="medium"
          styles={{ lineHeight: 0 }}
        >
          {cardpin[0]} xxxx xxxx {cardpin[1]}
        </Text>
      </Box>
    </Box>
    <TextField
      type="number"
      name={name}
      label="CVC"
      sizes="small"
      style={{ width: "76px" }}
    />
  </Box>
);

export default CardPackagePlan;
