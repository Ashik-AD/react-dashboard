import { FC } from "react";
import styled from "styled-components";
import { Text } from "../../../ui";
import ColorBox from "../../box/ColorBox";

const MsgBox: FC<Props> = ({ msg, from }) => {
  return (
    <StyledMsgBox
      backgroundTheme={from === "me" ? "background" : ""}
      transparency={8}
      px={16}
      py={8}
      className="overflow-hidden"
      mb={6}
    >
      <Text varient="body2" weight="medium" color={from !== "me" ? "#fff" : ""}>
        {msg}
      </Text>
    </StyledMsgBox>
  );
};
export default MsgBox;
interface Props {
  msg: string;
  from?: "me" | "other";
}

const StyledMsgBox = styled(ColorBox)`
  max-width: calc(100% - 3rem);
  border-radius: 8px;
  border-top-left-radius: 4px;
  @media screen and (min-width: 600px) {
    max-width: 65%;
  }
`;
