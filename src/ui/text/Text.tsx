import { FC } from "react";
import useTheme from "../../theme/useTheme";
import TextType, { HeadingType } from "./type";
import { Paragraph, TextSpan } from "./styled";

const Text: FC<TextType> = (props) => {
  const {
    children,
    align,
    paragraph,
    varient,
    heading,
    color,
    styles,
    classes,
  } = props;
  const { theme } = useTheme();
  return (
    <>
      {paragraph ? (
        <Paragraph
          {...props}
          className={`${varient ? varient : "inherit"} ${
            classes ? classes : ""
          }`}
          align={align ? align : "inherit"}
          theme={{ mode: theme.mode, primaryColor: theme.primaryColor }}
          style={{ ...styles }}
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
          {...props}
          as={"span"}
          className={`${varient ? varient : "inherit"} ${
            classes ? classes : ""
          }`}
          align={align ? align : "inherit"}
          theme={{ mode: theme.mode, primaryColor: theme.primaryColor }}
          style={{ ...styles }}
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
