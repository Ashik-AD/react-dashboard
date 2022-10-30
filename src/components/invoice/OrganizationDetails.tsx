import { Text } from "../../ui";
import Box from "../box/Box";
import Logo from "../logo/Logo";

const OragnizationDetail = () => (
  <Box display="flex" flexDirection="column" px={20}>
    <Box display="flex" align="center" space={0.4} mb={16}>
      <Logo height="26px" width="30px" />
      <Text heading="h6" weight="bold" textTransform="uppercase">
        triolo
      </Text>
    </Box>
    <InfoText text="Office 257, 100 North Face Damak" />
    <InfoText text="Noxus, Life Is Feather" />
    <InfoText text="+977-98-2-4965817, 090909900" />
  </Box>
);

const InfoText = ({ text }: { text: string }) => (
  <Text varient="body2" weight="medium" lineHeight="24px" secondary paragraph>
    {text}
  </Text>
);
export default OragnizationDetail;
