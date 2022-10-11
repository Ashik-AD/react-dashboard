import { FC, memo } from "react";
import styled from "styled-components";
import { Checkbox, Text } from "../../ui";
import Box from "../box/Box";
import useTheme from "../../theme/useTheme";
import { Star, StarOutline } from "@mui/icons-material";
import {
  selectEmail,
  setCurrentOpenMail,
  starredEmail,
} from "../../features/emails/creator/";
import { Mail, MailId } from "../../features/emails/types/type";
import { useAppDispatch, useAppSelector } from "../../hooks";
import TimeStamp from "./email-item/TimeStamp";
import Sender from "./email-item/Sender";
import ItemActions from "./email-item/ItemActions";
import ItemLabels from "./email-item/ItemLabels";

const mailItem = (mails: Mail[], mailId: MailId): Mail =>
  mails.find((mail: Mail) => mail.id === mailId);

const EmailListItem: FC<{ mailId: MailId }> = ({ mailId }) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  const dispatch = useAppDispatch();
  const emailItem = useAppSelector((state) =>
    mailItem(state.email.mails, mailId)
  );
  const { id, labels, isRead, from, isStarred, subject, timestamp } = emailItem;
  const selectedMail = useAppSelector((state) =>
    state.email.selectedMails.includes(id)
  );

  const onSelect = (eve) => {
    eve.stopPropagation();
    dispatch(selectEmail(id));
  };

  const onStarred = (eve) => {
    eve.stopPropagation();
    dispatch(starredEmail(id));
  };
  const selectCurrentMail = () => {
    dispatch(setCurrentOpenMail(emailItem));
  };
  return (
    <StyledEmailListItem
      display="flex"
      align="center"
      pl={20}
      pr={12}
      py={14}
      className={`${!isRead ? "unreaded-email" : ""}`}
      theme={{ mode, primaryColor }}
      key={id}
      onClick={selectCurrentMail}
    >
      <Box display="flex" align="center" flex={1} space={0.6}>
        <Box display="flex">
          <Checkbox checked={selectedMail} onChange={onSelect} />
          <span className="xs-hidden sm-visible">
            <Checkbox
              icon={<StarOutline />}
              checkedIcon={<Star />}
              checked={isStarred}
              onChange={onStarred}
            />
          </span>
        </Box>
        <Sender
          avatar_src={from.avatar_src!}
          full_name={from.full_name}
          subject={subject}
        />
      </Box>
      <Box display="flex" align="center">
        <Box
          display="flex"
          align="center"
          className="item-meta-info"
          space={0.6}
        >
          <article className="xs-hidden sm-visible">
            <ItemLabels labels={labels} />
          </article>
          <TimeStamp time={timestamp} />
        </Box>
        <ItemActions isRead={isRead} id={id} />
      </Box>
    </StyledEmailListItem>
  );
};

export default memo(EmailListItem);

const StyledEmailListItem = styled(Box)`
  position: relative;
  background: ${({ theme }) => theme.mode.foreground};
  top: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) =>
    theme.mode.name === "dark"
      ? `rgba(255, 255, 255, 10%)`
      : `rgba(0, 0, 0, 10%)`};
  cursor: pointer;
  transition: 200ms;

  &.unreaded-email {
    background: ${({ theme }) =>
      theme.mode.name === "dark"
        ? "rgba(255, 255, 255, 4%)"
        : `rgba(0, 0, 0, 3%)`};
  }
  &:hover {
    top: -3px;
    z-index: 2;
  }

  .item-actions-container {
    display: none;
  }
  &:hover .item-actions-container {
    display: flex;
  }
  &:hover .item-meta-info {
    display: none;
  }
`;
