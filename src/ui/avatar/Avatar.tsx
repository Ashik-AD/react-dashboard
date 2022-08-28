import { FC } from "react";
import { AvatarImage, AvtarWrapper } from "./avatar.styled";
import { AvatarProps } from "./type";

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, size } = props;
  return (
    <AvtarWrapper size={size}>
      <AvatarImage src={src} alt={alt} />
    </AvtarWrapper>
  );
};
export default Avatar;
