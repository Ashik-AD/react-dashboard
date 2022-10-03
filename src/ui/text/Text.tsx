import { FC } from "react";
import useTheme from "../../theme/useTheme";
import TextType, { HeadingType } from "./type";
import { Paragraph, TextSpan } from "./styled";

const Text: FC<TextType> = ({
  children,
  align = "inherit",
  paragraph,
  size,
  varient = "inherit",
  heading,
  color,
  styles,
  weight,
  secondary,
  skinColor,
  textTransform,
}) => {
  const { theme } = useTheme();
  return (
    <>
      {paragraph ? (
        <Paragraph
          className={`${varient}`}
          size={size}
          align={align}
          theme={{ mode: theme.mode, primaryColor: theme.primaryColor }}
          weight={weight}
          style={{ ...styles }}
          color={color}
          secondary={secondary}
          skinColor={skinColor}
          textTransform={textTransform}
        >
          {children}
        </Paragraph>
      ) : heading ? (
        <Heading
          varient={heading}
          color={color ? color : theme.mode.textColor}
          align={align}
          styles={styles}
        >
          {children}
        </Heading>
      ) : (
        <TextSpan
          as={"span"}
          className={`${varient}`}
          size={size}
          color={color}
          align={align}
          theme={{ mode: theme.mode, primaryColor: theme.primaryColor }}
          style={{ ...styles }}
          weight={weight}
          secondary={secondary}
          skinColor={skinColor}
          textTransform={textTransform}
        >
          {children}
        </TextSpan>
      )}
    </>
  );
};

const Heading: FC<HeadingType> = ({
  varient,
  children,
  align,
  size,
  color,
  styles,
}) => {
  switch (varient) {
    case "h1":
      return (
        <h1
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align, ...styles }}
        >
          {children}
        </h6>
      );
    default:
      return <></>;
  }
};

export default Text;
