import { FC } from "react";
import useTheme from "../../theme/useTheme";
import TextType, { HeadingType } from "./type";
import TextGlobal, { Paragraph, TextSpan } from "./text.styled";

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
}) => {
  const { theme } = useTheme();
  return (
    <>
      <TextGlobal />
      {paragraph ? (
        <Paragraph
          className={`${varient}`}
          size={size}
          align={align}
          theme={{ mode: theme.mode }}
          weight={weight}
          style={{ ...styles }}
          color={color}
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
          className={`${varient}`}
          size={size}
          color={color}
          align={align}
          theme={{ mode: theme.mode }}
          style={{ ...styles }}
          weight={weight}
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
