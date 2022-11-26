import { FC, ReactNode } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";

const PriceCardHeader: FC<Props> = ({ icon, cardTitle, cardSlug }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      space={1.25}
    >
      <Box>
        {typeof icon === "string" ? (
          <img src={icon} alt={cardTitle} height={120} />
        ) : (
          icon
        )}
      </Box>
      <Box display="flex" flexDirection="column" space={0.6}>
        <Text heading="h5" align="center">
          {cardTitle}
        </Text>
        {cardSlug ? (
          <Text varient="body2" align="center" paragraph secondary>
            {cardSlug}
          </Text>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
export default PriceCardHeader;

interface Props {
  icon?: string | ReactNode;
  cardTitle: string;
  cardSlug?: string;
}
