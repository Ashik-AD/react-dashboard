import { FC, ReactNode, MouseEvent } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import genColorShades from "../../utils/genColorShades";
const DataGridRow: FC<Props> = (props) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  const { dataId, rowId, children, onClick, selected } = props;
  return (
    <StyledRow
      theme={{
        mode: mode.name,
        color: genColorShades(primaryColor.color, { intensity: 1, total: 1 }),
      }}
      key={dataId}
      role="row"
      aria-label="data-row"
      className={`data-grid-row ${selected ? "row-selected" : ""}`}
      data-id={dataId}
      data-rowindex={rowId}
      onClick={(event: MouseEvent<HTMLDivElement>) =>
        onClick && onClick(event, rowId)
      }
    >
      {children}
    </StyledRow>
  );
};

interface Props {
  children: ReactNode;
  dataId: number | string;
  rowId: number | string;
  selected?: boolean;
  onClick?: (
    event: MouseEvent<HTMLDivElement>,
    rowId?: string | number
  ) => void;
}

const StyledRow = styled("div")`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  vertical-align: middle;
  max-height: 50px;
  min-height: 50px;
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#b1b1b154" : "#7a7a7a54")};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff12" : "#e9e9e940"};
  }
  &.row-selected {
    background: ${({ theme }) => theme.color};
  }

  & .list-action-wrapper {
    position: absolute;
    width: 100%;
    margin-top: 50px;
  }
`;
export default DataGridRow;
