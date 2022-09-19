import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
const TableCell: FC<PropsType> = (props) => {
  const {
    theme: { mode },
  } = useTheme();
  const { value, label, align, border, compact, as, weight } = props;
  return (
    <Cell
      aria-label={`table-data ${label ? label : ""}`}
      className="table-cell"
      as={as ? as : "td"}
      align={align}
      weight={weight}
      border={border}
      compact={compact}
      theme={{ mode }}
    >
      {value}
    </Cell>
  );
};

const Cell = styled("td")<StyledProps>`
  padding: ${({ compact }) => (compact ? "0.2rem 1rem" : "1rem")};
  ${({ align }) => align && `text-align: ${align};`}
  border-bottom: 1px solid
    ${({ theme }) =>
    theme.mode.name === "dark" ? "rgb(84 84 84)" : "rgb(221 221 221)"};
  ${({ border }) =>
    border &&
    `
        ${!border.show ? `border: none;` : ""}
        ${border.top ? `border-top: 1px solid;` : ""}
        ${border.right ? `border-right: 1px solid;` : ""}
        ${border.bottom ? `border-bottom: 1px solid;` : ""}
        ${border.left ? `border-left: 1px solid;` : ""}
    `}
  font-size: 0.875rem;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
`;

interface StyledProps {
  align?: "center" | "left" | "right";
  weight?: number;
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
}

export default TableCell;
