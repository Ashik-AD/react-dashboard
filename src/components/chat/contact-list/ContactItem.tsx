import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import UserAvatar from "../UserAvatar";
import ChatItemWrapper from "../ChatItemWrapper";

const selectContactById = (state: RootState, uid: string | number) =>
  state.chat.contacts.find((contact) => contact.profile.uid === uid);

const ContactItem = ({ uid, onSelectChat }: Props) => {
  const cnt = useAppSelector((state) => selectContactById(state, uid));

  const handleClicks = () => {
    onSelectChat(uid);
  };
  return (
    <ChatItemWrapper uid={uid} onClick={handleClicks}>
      <UserAvatar
        avatarSrc={cnt?.profile.avatar_src}
        alt={cnt?.profile.user_name}
        color={cnt?.profile.color}
        icon={cnt?.profile.icon}
      />
      <Box
        display="flex"
        flexDirection="column"
        flex={"1 1 auto"}
        style={{ minWidth: 0 }}
        ml={8}
        mr={12}
      >
        <Text varient="body2" weight="bold">
          {cnt?.profile.user_name}
        </Text>
        <Text varient="body2" weight="medium" textOverflow="ellipsis" secondary>
          {cnt?.profile.about}
        </Text>
      </Box>
    </ChatItemWrapper>
  );
};

export default ContactItem;
interface Props {
  uid: string | number;
  onSelectChat: (uid: string | number) => void;
}
