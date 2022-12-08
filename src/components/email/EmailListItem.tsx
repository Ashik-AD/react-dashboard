import React, { FC, memo } from "react";
import styled from "styled-components";
import { Checkbox } from "../../ui";
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

const selectMailItem = (mails: Mail[], mailId: MailId) =>
  mails.find((mail) => mail?.id === mailId);

const EmailListItem: FC<{ mailId: MailId }> = ({ mailId }) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  const dispatch = useAppDispatch();
  const mailItem = useAppSelector((state) =>
    selectMailItem(state.email.mails!, mailId)
  );
  const selectedMail = useAppSelector((state) => {
    if (mailItem) {
      return state.email.selectedMails.includes(mailItem.id);
    }
  });

  const onSelect = (eve: React.ChangeEvent<HTMLInputElement>) => {
    eve.stopPropagation();
    if (mailItem) {
      dispatch(selectEmail(mailItem?.id));
    }
  };

  const onStarred = (eve: React.ChangeEvent<HTMLInputElement>) => {
    eve.stopPropagation();
    if (mailItem) {
      dispatch(starredEmail(mailItem?.id));
    }
  };
  const selectCurrentMail = () => {
    if (mailItem) {
      dispatch(setCurrentOpenMail(mailItem));
    }
  };

  if (!mailItem) return <></>;
  return (
    <StyledEmailListItem
      display="flex"
      align="center"
      pl={20}
      pr={12}
      py={14}
      className={`${!mailItem?.isRead ? "unreaded-email" : ""}`}
      theme={{ mode, primaryColor }}
      key={mailItem?.id}
      onClick={selectCurrentMail}
    >
      <Box display="flex" align="center" flex={1} space={0.6}>
        <Box display="flex">
          <Checkbox checked={selectedMail} onChange={onSelect} />
          <span className="xs-hidden sm-visible">
            <Checkbox
              icon={<StarOutline />}
              checkedIcon={<Star />}
              checked={mailItem.isStarred}
              onChange={onStarred}
            />
          </span>
        </Box>
        <Sender
          avatar_src={mailItem.from.avatar_src!}
          full_name={mailItem.from.full_name}
          subject={mailItem.subject}
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
            <ItemLabels labels={mailItem.labels} />
          </article>
          <TimeStamp time={mailItem.timestamp} />
        </Box>
        <ItemActions isRead={mailItem.isRead} id={mailItem.id} />
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
