import ProfileLayout from "../../layout/ProfileLayout";
import ProfileAvatar from "../ProfileAvatar";
import { RootState } from "../../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import ProfileAbout from "../About";
import ScrollContainer from "../../../scroll-container/ScrollContainer";
import ChangeStatus from "./ChangeStatus";
import { Status } from "../../../../features/chats/definition";
import { changeUserStatus } from "../../../../features/chats/creator";
import UserOptions from "./UserOptions";
import { Button } from "../../../../ui";
import { FC } from "react";
import ChatModal from "../../modal/ChatModal";
const selectUser = (state: RootState) => state.chat.currentUser;

const CurrentUserProfile: FC<Props> = ({ handleCloseModal, show }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectUser);
  const onChangeUserStatus = (status: string) => {
    dispatch(changeUserStatus(status as Status));
  };
  return (
    <ChatModal>
      <ProfileLayout
        direction="left"
        shouldShow={show}
        handleCloseModal={handleCloseModal}
      >
        <ProfileAvatar {...data} />
        <ScrollContainer maxHeight="56vh" px={20} py={20}>
          <ProfileAbout about={data.about} />
          <ChangeStatus
            status={data.status}
            onChangeStatus={onChangeUserStatus}
          />
          <UserOptions />
          <Button styles={{ marginTop: 18 }}>logout</Button>
        </ScrollContainer>
      </ProfileLayout>
    </ChatModal>
  );
};
export default CurrentUserProfile;
interface Props {
  handleCloseModal: () => void;
  show: boolean;
}
