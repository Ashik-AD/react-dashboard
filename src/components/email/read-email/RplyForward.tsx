import { Text } from "../../../ui";
import ColorBox from "../../box/ColorBox";

const ReplyForward = () => (
  <ColorBox
    backgroundTheme="foreground"
    mt={18}
    borderRadius={"6px"}
    className="overflow-hidden"
    padding={20}
  >
    <Text varient="body1" weight="medium">
      Click here to <Text skinColor>Reply</Text> or{" "}
      <Text skinColor>Forward</Text>
    </Text>
  </ColorBox>
);
export default ReplyForward;
