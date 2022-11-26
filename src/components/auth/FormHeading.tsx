import Box from "../box/Box";
import { Text } from "../../ui";
import { FC, ReactNode } from "react";

const FormHeading: FC<Props> = ({ title, subtitle }) => {
  return (
    <Box display="flex" flexDirection="column" space={0.6} my={32}>
      {typeof title === "string" ? (
        <Text heading="h5" weight="extraBold">
          {title}
        </Text>
      ) : (
        title
      )}
      {typeof subtitle === "string" ? (
        <Text varient="body2" weight="medium" paragraph secondary>
          {subtitle}
        </Text>
      ) : (
        subtitle
      )}
    </Box>
  );
};
export default FormHeading;
interface Props {
  title: string | ReactNode;
  subtitle: string | ReactNode;
}
