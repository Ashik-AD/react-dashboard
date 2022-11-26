import { FC } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";

const PriceTag: FC<Props> = ({ price, type, slug }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      mt={24}
    >
      <Box display="flex" align="flex-end">
        <Box display="flex">
          <Text
            varient="body2"
            weight="extraBold"
            styles={{ marginLeft: 3, paddingTop: 8 }}
            secondary
            paragraph
          >
            $
          </Text>
          <Text heading="h2" weight="bold" skinColor>
            {price}
          </Text>
        </Box>
        <Text
          varient="body2"
          weight="bold"
          styles={{ marginBottom: 6 }}
          secondary
          paragraph
        >
          /{type}
        </Text>
      </Box>
      {slug ? (
        <Text
          varient="caption"
          align="center"
          lineHeight="0"
          paragraph
          secondary
        >
          {slug}
        </Text>
      ) : (
        ""
      )}
    </Box>
  );
};
export default PriceTag;

interface Props {
  price: number;
  type: "year" | "month" | "day" | "hours" | "minute" | "second";
  slug?: string;
}
