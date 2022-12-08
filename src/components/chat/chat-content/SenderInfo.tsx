import Box from "../../box/Box";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import UserAvatar from "../UserAvatar";
import { IconButton, Text } from "../../../ui";
import ContactProfile from "../profile/contact/ContactProfile";
import { shallowEqual } from "react-redux";
import { useContext, useState } from "react";
import { Menu } from "@mui/icons-material";
import { chatModalCtx } from "../../../page/chat/chunk/Content";
const selectRequireOnly = (state: RootState) => {
  const { role, user_name, avatar_src, icon, color, uid, status } =
    state.chat.selectedChat?.profile!;
  return {
    uid,
    userName: user_name,
    avatarSrc: avatar_src,
    icon,
    color,
    status,
    role,
  };
};
const SenderInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const { handleModal } = useContext(chatModalCtx);
  const { userName, avatarSrc, icon, color, status, role } = useAppSelector(
    selectRequireOnly,
    shallowEqual
  );
  const toggleShowModal = () => void setShowModal((prevState) => !prevState);

  return (
    <Box
      display="flex"
      align="center"
      px={16}
      py={12}
      space={0.8}
      className="zIndex-2"
    >
      <span className="xs-visible md-hidden">
        <IconButton
          varient="text"
          contentOpacity={5}
          size={35}
          fontSize={26}
          onClick={handleModal}
        >
          <Menu />
        </IconButton>
      </span>
      <Box
        display="flex"
        align="center"
        space={0.8}
        onClick={toggleShowModal}
        className="cursor-pointer"
      >
        <UserAvatar
          avatarSrc={avatarSrc}
          alt={userName}
          icon={icon}
          color={color}
          status={status}
        />

        <Box display="flex" flexDirection="column" justify="flex-start">
          <Text varient="body2" weight="bold" textOverflow="ellipsis" paragraph>
            {userName}
          </Text>
          <Text
            varient="caption"
            weight="medium"
            textOverflow="ellipsis"
            secondary
          >
            {role}
          </Text>
        </Box>
      </Box>
      <ContactProfile
        shouldShow={showModal}
        handleCloseModal={toggleShowModal}
      />
    </Box>
  );
};
export default SenderInfo;
