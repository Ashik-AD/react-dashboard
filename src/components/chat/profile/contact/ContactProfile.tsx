import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import ScrollContainer from "../../../scroll-container/ScrollContainer";
import ProfileAbout from "../About";
import ProfileAvatar from "../ProfileAvatar";
import ProfileLayout from "../../layout/ProfileLayout";
import ContactOptions from "./ContactOptions";
import PersonalInfo from "./PersonalInfo";

const ContactProfile: FC<Props> = ({ shouldShow, handleCloseModal }) => {
  const cnt = useAppSelector((state) => state.chat.selectedChat?.profile);
  if (!cnt) return <></>;
  return (
    <ProfileLayout
      shouldShow={shouldShow}
      handleCloseModal={handleCloseModal}
      direction="right"
    >
      <ProfileAvatar {...cnt} />
      <ScrollContainer maxHeight="56vh" padding={20}>
        <ProfileAbout about={cnt?.about!} />
        <PersonalInfo userName={cnt?.user_name!} />
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
