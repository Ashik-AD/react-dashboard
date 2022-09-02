import { FC } from "react";
import { AvatarImage, AvtarWrapper } from "./avatar.styled";
import { AvatarProps } from "./type";

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, size, styles } = props;
  return (
    <AvtarWrapper size={size} style={{ ...styles }}>
      <AvatarImage src={src} alt={alt} />
    </AvtarWrapper>
  );
};
export default Avatar;
