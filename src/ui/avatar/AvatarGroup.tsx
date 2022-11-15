import { FC, memo } from "react";
import useTheme from "../../theme/useTheme";
import styled from "styled-components";
import Avatar from "./Avatar";
import CustomAvatar from "./CustomAvatar";

const AvatarGroup: FC<PropsType> = (props) => {
  const {
    theme: {
      mode: { foreground },
    },
  } = useTheme();
  const { avatars, classes, avatarSize, extraAvtar, justifyContent } = props;
  const totalAvatar = avatars.length;
  const avatarList = avatars.map((item, index) => (
    <Avatar
      key={item.name}
      src={item.avatar}
      alt={item.name}
      classes="avatar-group-item"
      styles={{ zIndex: totalAvatar - index }}
      size={avatarSize}
    />
  ));
  return (
    <StyledGroups
      className={`avatar-group ${classes ? classes : ""}`}
      theme={{ color: foreground }}
      justifyContent={justifyContent}
    >
      {avatarList}
      {extraAvtar ? (
        <CustomAvatar
          size={avatarSize ? avatarSize : 40}
          classes="avatar-group-item"
          styles={{ zIndex: 0 }}
          fontSize={16}
        >
          +{extraAvtar}
        </CustomAvatar>
      ) : (
        ""
      )}
    </StyledGroups>
  );
};
const StyledGroups = styled("div")<Styles>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  .avatar-group-item {
    margin-left: -8px;
    border: 2px solid ${({ theme }) => theme.color};
    cursor: pointer;
    transition: 200ms;
  }
  .avatar-group-item:first-child {
    margin-left: 0;
  }
  .avatar-group-item:hover {
    transform: translateY(-6px);
    z-index: 1000 !important;
    transition: 200ms transform linear;
  }
`;
interface Styles {
  avatarSize?: number;
  justifyContent?: "flex-start" | "center" | "flex-end";
}

interface PropsType extends Styles {
  avatars: { avatar: string; name: string }[];
  extraAvtar?: number;
  classes?: string;
}
export default memo(AvatarGroup);
