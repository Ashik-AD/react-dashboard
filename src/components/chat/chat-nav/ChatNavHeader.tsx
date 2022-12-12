import React, { FC, useContext, useState } from "react";
import { shallowEqual } from "react-redux";
import type { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks";
import CurrentUserProfile from "../profile/user/CurrentUserProfile";
import UserAvatar from "../UserAvatar";
import Box from "../../box/Box";
import { TextField, Text, IconButton } from "../../../ui";

import { Close, Search } from "@mui/icons-material";
import styled from "styled-components";
import { chatModalCtx } from "../../../page/chat/chunk/Content";

const selectUserProfile = (state: RootState) => state.chat.currentUser;

const ChatNavHeader: FC<Props> = ({ handleOnInputChange }) => {
  const { closeModal: closeMobileChatNav } = useContext(chatModalCtx);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const currentUser = useAppSelector(selectUserProfile, shallowEqual);
  const { user_name, avatar_src, icon, color, status } = currentUser;
  const { handleModal } = useContext(chatModalCtx);

  const handleTooggleModal = () => {
    setShowUserProfileModal((prevState) => !prevState);
    closeMobileChatNav && closeMobileChatNav();
  };
  return (
    <StyledChatNavHeader
      display="flex"
      align="center"
      py={16}
      space={0.8}
      px={18}
    >
      <Box display="flex" flex={1} space={0.9} className="avatar-input">
        <UserAvatar
          avatarSrc={avatar_src}
          alt={user_name}
          icon={icon}
          color={color}
          status={status}
          onClick={handleTooggleModal}
          classes="cursor-pointer"
        />
        <CurrentUserProfile
          show={showUserProfileModal}
          handleCloseModal={handleTooggleModal}
        />
        <TextField
          type="text"
          name="search-chat-list"
          onChange={handleOnInputChange}
          sizes="small"
          placeholder="Search for contact..."
          startAdornment={
            <Text size={19} styles={{ display: "flex", marginLeft: 12 }}>
              <Search />
            </Text>
          }
          varient="regular"
          borderRadius="24px"
          style={{ paddingLeft: 36 }}
        />
      </Box>
      <span className="xs-visible md-hidden">
        <IconButton varient="text" contentOpacity={4} onClick={handleModal}>
          <Close />
        </IconButton>
      </span>
    </StyledChatNavHeader>
  );
};
export default ChatNavHeader;

interface Props {
  handleOnInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledChatNavHeader = styled(Box)``;
