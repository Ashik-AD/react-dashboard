import { FC } from "react";
import { AvatarImage, AvtarWrapper } from "./avatar.styled";
import { AvatarProps } from "./type";

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt, size, styles, classes, varient, onClick } = props;
  return (
    <AvtarWrapper
      size={size}
      varient={varient}
      style={{ ...styles }}
      className={`avatar ${classes ? classes : {}}`}
    >
      <AvatarImage src={src} alt={alt} onClick={onClick} />
    </AvtarWrapper>
  );
};
export default Avatar;
