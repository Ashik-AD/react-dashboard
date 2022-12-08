import { KeyboardArrowLeft } from "@mui/icons-material";
import styled from "styled-components";
import Box from "../../../components/box/Box";
import ColorBox from "../../../components/box/ColorBox";
import ContentAction from "../../../components/email/read-email/ContentAction";
import MailSubject from "../../../components/email/read-email/MailSubject";
import Message from "../../../components/email/read-email/Message";
import PrevNext from "../../../components/email/read-email/PrevNext";
import ReplyForward from "../../../components/email/read-email/RplyForward";
import Sender from "../../../components/email/read-email/Sender";
import TimeStamp from "../../../components/email/read-email/TimeStamp";
import Toolbar from "../../../components/email/read-email/Toolbar";
import ScrollContainer from "../../../components/scroll-container/ScrollContainer";
import { clearCurrentOpenMail } from "../../../features/emails/creator";
import { useAppDispatch, useAppSelector } from "../../../hooks/";
import { Divider, IconButton } from "../../../ui";

const ReadEmail = () => {
  const currentOpenMail = useAppSelector(
    (state) => state.email.currentOpenMail
  );
  const dispatch = useAppDispatch();

  if (!currentOpenMail) return <></>;
  const onClearCurrentOpenMail = () => {
    dispatch(clearCurrentOpenMail());
  };
  const {
    subject,
    labels,
    from,
    timestamp,
    message,
    attachments,
    id,
    isStarred,
  } = currentOpenMail;
  return (
    <StyledContentWrapper>
      <ColorBox backgroundTheme="foreground" className="mail-content-wrapper">
        <Box display="flex" align="center" justify="space-between">
          <Box display="flex" flex={1} align="center" space={0.8} pr={16}>
            <IconButton
              varient="text"
              size={40}
              fontSize={30}
              contentOpacity={6}
              onClick={onClearCurrentOpenMail}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <MailSubject subject={subject} labels={labels} />
            <PrevNext id={id} />
          </Box>
        </Box>
        <Divider />
        <Toolbar mailId={id} starred={isStarred} />
        <Divider />
        <ScrollContainer maxHeight="65vh">
          <ColorBox
            padding={20}
            transparency={4}
            borderRadius={"4px"}
            className="overflow-hidden"
          >
            <ColorBox
              backgroundTheme="foreground"
              padding={16}
              borderRadius={"6px"}
              className="overflow-hidden"
            >
              <Box
                display="flex"
                align="center"
                justify="space-between"
                wrap="wrap"
              >
                <Sender {...from} />
                <Box display="flex" align="center">
                  <TimeStamp timestamp={timestamp} />
                  <ContentAction
                    hasAttachments={attachments.length > 0 ? true : false}
                  />
                </Box>
              </Box>
              <Divider styles={{ margin: "16px auto" }} />
              <Message message={message} attachments={attachments} />
            </ColorBox>
            <ReplyForward />
          </ColorBox>
        </ScrollContainer>
      </ColorBox>
    </StyledContentWrapper>
  );
};

export default ReadEmail;

const StyledContentWrapper = styled("main")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: inherite;
  z-index: 5;
  & > .mail-content-wrapper {
    height: 100%;
  }
`;
