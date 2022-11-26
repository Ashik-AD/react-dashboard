import Box from "../box/Box";
import { Text } from "../../ui";
const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box mb={24}>
    <Text heading="h6" textTransform="capitalize">
      {title}
    </Text>
    <Text varient="body2" lineHeight="1rem" paragraph secondary>
      {description}
    </Text>
  </Box>
);
export default Title;
