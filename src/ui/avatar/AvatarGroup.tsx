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
  const { avatars, max, classes, avatarSize, justifyContent } = props;

  const avatarList = avatars
    .slice(0, max)
    .map((item, index) => (
      <Avatar
        key={item.alt}
        src={item.src}
        alt={item.alt}
        classes="avatar-group-item"
        styles={{ zIndex: max - index }}
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
      <CustomAvatar
        size={avatarSize ? avatarSize : 40}
        classes="avatar-group-item"
        styles={{ zIndex: 0 }}
      >
        +{avatars.length - max}
      </CustomAvatar>
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
  }
  .avatar-group-item:first-child {
    margin-left: 0;
  }
`;
interface Styles {
  avatarSize?: number;
  justifyContent?: "flex-start" | "center" | "flex-end";
}

interface PropsType extends Styles {
  avatars: { src: string; alt: string }[];
  max: number;
  classes?: string;
}
export default memo(AvatarGroup);
