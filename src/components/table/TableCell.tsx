import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
const TableCell: FC<PropsType> = (props) => {
  const {
    theme: { mode },
  } = useTheme();
  const { value, label, align, border, compact, as, weight, style, fontSize } =
    props;
  return (
    <Cell
      aria-label={`table-data ${label ? label : ""}`}
      className={`table-cell ${fontSize ? fontSize : ""}`}
      as={as ? as : "td"}
      align={align}
      weight={weight}
      border={border}
      compact={compact}
      theme={{ mode }}
      style={style}
      fontSize={fontSize}
    >
      {value}
    </Cell>
  );
};
const color = (mode: "dark" | "light") =>
  mode === "dark" ? "rgb(84 84 84)" : "rgb(221 221 221)";

const Cell = styled("td")<StyledProps>`
  padding: ${({ compact }) => (compact ? "0.4rem 1rem" : "1rem")};
  ${({ align }) => align && `text-align: ${align};`}
  border-bottom: 1px solid ${({ theme }) => color(theme.mode.name)};
  vertical-align: middle;
  white-space: nowrap;

  ${({ border, theme }) =>
    border &&
    `
        ${!border.show ? `border: none;` : ""}
        ${border.top ? `border-top: 1px solid ${color(theme.mode.name)};` : ""}
        ${
          border.right
            ? `border-right: 1px solid ${color(theme.mode.name)};`
            : ""
        }
        ${
          border.bottom
            ? `border-bottom: 1px solid ${color(theme.mode.name)};`
            : ""
        }
        ${
          border.left ? `border-left: 1px solid ${color(theme.mode.name)};` : ""
        }
    `}
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
`;

interface StyledProps {
  align?: "center" | "left" | "right";
  weight?: number;
  fontSize?: string;
  border?: {
    show?: boolean;
    size?: string | number;
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
  };
  compact?: boolean;
}

interface PropsType extends StyledProps {
  value: string | number | ReactNode;
  label?: string | number;
  as?: "td" | "th";
  style?: CSSProperties;
}

export default TableCell;
