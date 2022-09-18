import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import genColorShades from "../../utils/genColorShades";
const TableRow: FC<PropsType> = ({ classes, children, hover, selected }) => {
  const {
    theme: { primaryColor },
  } = useTheme();
  return (
    <Tr
      aria-label="table row"
      hover={hover}
      selected={selected}
      className={`holy-table-row ${classes ? classes : ""}`}
      theme={{ primaryColor }}
    >
      {children}
    </Tr>
  );
};

const Tr = styled("tr")<StyledProps>`
  ${({ selected, theme }) =>
    selected &&
    `background: ${genColorShades(theme.primaryColor.color, {
      total: 1,
      from: 3,
    })};`}
  transition: 0.2s ease background;
  ${({ hover, selected, theme }) =>
    hover &&
    `&:hover {
        background: ${
          selected
            ? genColorShades(theme.primaryColor.color, { total: 1, from: 5 })
            : "#6c6c6c1f"
        };
        transition: 0.2s linear background;
    }`}
`;
interface StyledProps {
  hover?: boolean;
  selected?: boolean;
}
interface PropsType extends StyledProps {
  classes?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default TableRow;
