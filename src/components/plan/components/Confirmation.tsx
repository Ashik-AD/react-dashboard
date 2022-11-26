import { FC, ReactNode } from "react";
import { Button, Text } from "../../../ui";
import Box from "../../box/Box";

const ConfirmationFinish: FC<ConfirmationProps> = (props) => {
  const { icon, iconColor, title, subtitle, onConfirmDone } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      space={1}
    >
      <Text size={86} color={iconColor}>
        {icon}
      </Text>
      <Text
        size={28}
        weight="medium"
        styles={{ letterSpacing: 1.5, margin: "2rem 0rem" }}
        paragraph
      >
        {title}
      </Text>
      <Text>{subtitle}</Text>
      <Button onClick={onConfirmDone}>Ok</Button>
    </Box>
  );
};
export default ConfirmationFinish;

export interface ConfirmationProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  onConfirmDone: () => void;
}
