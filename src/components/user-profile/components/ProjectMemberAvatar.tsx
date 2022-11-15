import { FC } from "react";
import AvatarGroup from "../../../ui/avatar/AvatarGroup";
type Props = { avatar: string; name: string }[];
const ProjectMemberAvatar: FC<{ membersAvatar: Props }> = ({
  membersAvatar,
}) => {
  return <AvatarGroup avatars={membersAvatar} avatarSize={34} />;
};
export default ProjectMemberAvatar;
