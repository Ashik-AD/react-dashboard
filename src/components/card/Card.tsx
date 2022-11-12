import { FC } from "react";
import useTheme from "../../theme/useTheme";
import CardProps from "./type";
import { CardWrapper } from "./card.styled";

const Card: FC<CardProps> = (props) => {
  const {
    theme: { mode, primaryColor, skin },
  } = useTheme();
  return (
    <CardWrapper
      theme={{ mode, primaryColor, skin }}
      {...props}
      className={props.className}
    >
      {props.children}
    </CardWrapper>
  );
};

export default Card;
