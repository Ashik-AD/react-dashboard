import { FC } from "react";
import { Chats, ChatState } from "../../../../features/chats/definition";
import { useAppSelector } from "../../../../hooks";
import ScrollContainer from "../../../scroll-container/ScrollContainer";
import ProfileAbout from "../About";
import ProfileAvatar from "../ProfileAvatar";
import ProfileLayout from "../../layout/ProfileLayout";
import ContactOptions from "./ContactOptions";
import PersonalInfo from "./PersonalInfo";

const extract = (cnt: Chats) => ({
  userName: cnt.user_name,
  avatarSrc: cnt.avatar_src,
  icon: cnt.icon,
  color: cnt.color,
  about: cnt.about,
  role: cnt.role,
  status: cnt.status,
});
const selectContactInfo = (chat: ChatState) => extract(chat.selectedChat);

const ContactProfile: FC<Props> = ({ shouldShow, handleCloseModal }) => {
  const cnt = useAppSelector((state) => selectContactInfo(state.chat));
  return (
    <ProfileLayout
      shouldShow={shouldShow}
      handleCloseModal={handleCloseModal}
      direction="right"
    >
      <ProfileAvatar {...cnt} />
      <ScrollContainer maxHeight="56vh" padding={20}>
        <ProfileAbout about={cnt.about} />
        <PersonalInfo userName={cnt.userName} />
        <ContactOptions />
      </ScrollContainer>
    </ProfileLayout>
  );
};
export default ContactProfile;
interface Props {
  shouldShow: boolean;
  handleCloseModal: () => void;
}
