import { FC } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import TextType from "../../ui/text/type";
const TableCell: FC<PropsType> = (props) => {
  const {
    theme: { mode },
  } = useTheme();
  const { value, label, align, border, compact, as } = props;
  return (
    <Cell
      aria-label={`table-data ${label ? label : ""}`}
      className="table-cell"
      as={as ? as : "td"}
      align={align}
      border={border}
      compact={compact}
      theme={{ mode }}
    >
      {value}
    </Cell>
  );
};

const Cell = styled("td")<StyledProps>`
  padding: ${({ compact }) => (compact ? ".4rem" : "1rem")};
  ${({ align }) => align && `text-align: ${align};`}
  border-bottom: 1px solid
    ${({ theme }) =>
    theme.mode.name === "dark" ? "rgb(84 84 84)" : "rgb(221 221 221)"};
  ${({ border }) =>
    border &&
    `
        ${border.show && !border.show && `border: none;`}
        ${border.top && `border-top: 1px solid;`}
        ${border.right && `border-right: 1px solid;`}
        ${border.bottom && `border-bottom: 1px solid;`}
        ${border.left && `border-left: 1px solid;`}
    `}
`;

interface StyledProps {
  align?: "center" | "left" | "right";
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
  value: string | number;
  label?: string | number;
  as?: "td" | "th";
}

export default TableCell;
