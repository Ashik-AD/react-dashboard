import { FC } from "react";
import { BusinessCenter } from "@mui/icons-material";
import { Button, CustomAvatar, Text } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import TextField from "../../../ui/input/text-field/TextField";
const CardPackagePlan = () => {
  return (
    <Card>
      <CardTitle title="upgrade your plan" />
      <Box display="flex" flexDirection="column" px={20} space={0.8} pb={20}>
        <Text
          varient="caption"
          lineHeight="20px"
          weight="medium"
          secondary
          paragraph
        >
          Please make the payment to start enjoying all the features of our
          premium plan as soon as possible.
        </Text>
        <ColorBox
          padding={12}
          transparency={1}
          display="flex"
          align="center"
          space={0.6}
          className="overflow-hidden"
          borderRadius="6px"
        >
          <CustomAvatar
            varient="rounded"
            skin="light"
            color="info"
            size={40}
            fontSize={25}
          >
            <BusinessCenter />
          </CustomAvatar>
          <Box
            display="flex"
            align="center"
            wrap="wrap"
            justify="space-between"
            space={0.5}
          >
            <Box>
              <Text varient="body2" weight="medium" lineHeight="10px" paragraph>
                Titanium
              </Text>
              <Text varient="caption" skinColor weight="medium">
                Upgrade plan
              </Text>
            </Box>
            <Box>
              <sup>$</sup>
              <Text size={26} weight="bold">
                3,000
              </Text>
              <sub>/year</sub>
            </Box>
          </Box>
        </ColorBox>
        <Text varient="body2" weight="bold">
          Payment details
        </Text>
        <Box display="flex" flexDirection="column" space={0.6}>
          <CreaditLists
            logo={"https://i.ibb.co/VVkhLjH/mastercard-label.png"}
            name="mastercard-cvc"
            cardpin={["4232", "0890"]}
          />
          <CreaditLists
            logo={"https://i.ibb.co/n1XxBRm/american-bank.png"}
            name="american-cvc"
            cardpin={["8822", "6764"]}
          />
        </Box>
        <Text varient="caption" weight="bold" lineHeight="30px" skinColor>
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
  <Box display="flex" align="center" space={0.8}>
    <img src={logo} alt="mastercard" width={35} height={32} />
    <Box
      display="flex"
      align="center"
      wrap="wrap"
      justify="space-between"
      space={0.3}
      flex={1}
    >
      <Box>
        <Text varient="body2" weight="medium" lineHeight="15px" paragraph>
          Credit card
        </Text>
        <Text varient="caption" weight="medium" lineHeight="0px" secondary>
          {cardpin[0]} xxxx xxxx {cardpin[1]}
        </Text>
      </Box>
      <TextField
        type="number"
        name={name}
        label="CVC"
        sizes="small"
        style={{ width: "76px", height: 40 }}
      />
    </Box>
  </Box>
);

export default CardPackagePlan;
