import { FC } from "react";
import { Divider } from "../../../ui";
import Box from "../../box/Box";
import parseHTMLStringToComponent from "html-react-parser";
import Attachments from "./Attachments";
import styled from "styled-components";
const Message: FC<Props> = ({ message, attachments }) => {
  return (
    <Box display="flex" flexDirection="column">
      <StyledMessageContent>
        {parseHTMLStringToComponent(message)}
      </StyledMessageContent>
      {attachments.length > 0 ? (
        <>
          <Divider styles={{ marginTop: 24 }} />
          <Attachments value={attachments} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default Message;
interface Props {
  message: string;
  attachments: string[];
}

const StyledMessageContent = styled("article")`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
