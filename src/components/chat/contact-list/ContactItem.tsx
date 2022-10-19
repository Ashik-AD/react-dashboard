import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import UserAvatar from "../UserAvatar";
import ChatItemWrapper from "../ChatItemWrapper";

const selectContactById = (state: RootState, uid: string | number) =>
  state.chat.contacts.find((contact) => contact.uid === uid);

const ContactItem = ({ uid, onSelectChat }: Props) => {
  const cnt = useAppSelector((state) => selectContactById(state, uid));

  const handleClicks = () => {
    onSelectChat(uid);
  };
  return (
    <ChatItemWrapper uid={uid} onClick={handleClicks}>
      <UserAvatar
        avatarSrc={cnt?.avatar_src}
        alt={cnt?.user_name}
        color={cnt?.color}
        icon={cnt?.icon}
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
          {cnt?.user_name}
        </Text>
        <Text varient="body2" weight="medium" textOverflow="ellipsis" secondary>
          {cnt?.about}
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
