import { FC } from "react";
import useTheme from "../../theme/useTheme";
import TextType from "./type";
import StyledText from "./styled";

const Text: FC<TextType> = (props) => {
  const { children, align, paragraph, varient, heading, styles, classes } =
    props;
  const { theme } = useTheme();
  return (
    <StyledText
      {...props}
      as={paragraph ? "p" : heading ? heading : "span"}
      className={`${varient ? varient : "inherit"} ${classes ? classes : ""} ${
        heading ? heading : ""
      } ${props.skinColor ? "text-primary" : ""}`}
      align={align ? align : "inherit"}
      theme={{ mode: theme.mode, primaryColor: theme.primaryColor }}
      style={{ ...styles }}
    >
      {children}
    </StyledText>
  );
};

export default Text;
