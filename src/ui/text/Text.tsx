import { FC } from "react";
import useTheme from "../../theme/useTheme";
import TextType, { HeadingType } from "./text-type";
import TextGlobal from "./text.styled";

const Text: FC<TextType> = ({
  children,
  align = "inherit",
  paragraph,
  size,
  varient = "inherit",
  heading,
  color,
}) => {
  const {
    theme: {
      mode: { textColor },
    },
  } = useTheme();
  return (
    <>
      <TextGlobal />
      {paragraph ? (
        <p
          className={`${varient}`}
          style={{
            fontSize: size,
            textAlign: align,
            color: color ? color : textColor,
          }}
        >
          {children}
        </p>
      ) : heading ? (
        <Heading
          varient={heading}
          color={color ? color : textColor}
          align={align}
        >
          {children}
        </Heading>
      ) : (
        <span
          className={`${varient}`}
          style={{
            fontSize: size,
            textAlign: align,
            color: color ? color : textColor,
          }}
        >
          {children}
        </span>
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
}) => {
  switch (varient) {
    case "h1":
      return (
        <h1
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${varient}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h6>
      );
    default:
      return <></>;
  }
};

export default Text;
