import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { IconButton, Text } from "../../ui";
import Box from "../box/Box";
import DataGridDropDownMain from "./dropdowns/DataGridDropDownMain";

const DataGridColumnHead: FC<Props> = (props) => {
  const { onSortField, label, fieldId, sortDir, width, sorted, hidden } = props;
  if (hidden) return <></>;
  return (
    <StyleDataGridHead
      width={width}
      sorted={sorted}
      data-id={fieldId}
      aria-label={fieldId}
      onClick={(eve) => {
        eve.stopPropagation();
        onSortField(
          fieldId,
          sortDir ? (sortDir === "asc" ? "desc" : "asc") : "asc"
        );
      }}
    >
      <Box display="flex" align="center">
        <>
          {typeof label === "string" ? (
            <Text
              size={12}
              weight="bold"
              textTransform="uppercase"
              textOverflow="ellipsis"
            >
              {label}
            </Text>
          ) : (
            label
          )}
          <span className={`icon-wrapper ${sorted ? "show-icon" : ""}`}>
            {sorted ? (
              sortDir === "asc" ? (
                <SortIcon icon={<ArrowUpward />} />
              ) : (
                <SortIcon icon={<ArrowDownward />} />
              )
            ) : (
              <SortIcon icon={<ArrowUpward />} />
            )}
          </span>
        </>
      </Box>

      <DataGridDropDownMain
        fieldId={fieldId}
        label={
          <IconButton
            varient="text"
            fontSize={20}
            size={30}
            className="head-more-option dropdown-btn"
            contentOpacity={7}
          >
            <MoreVert />
          </IconButton>
        }
      />
    </StyleDataGridHead>
  );
};
export default memo(DataGridColumnHead);

const SortIcon: FC<{ icon: ReactNode }> = ({ icon }) => (
  <IconButton varient="text" fontSize={18} size={30}>
    {icon}
  </IconButton>
);

interface StyleOption {
  width: string | number;
  sorted: boolean;
}

interface Props extends StyleOption {
  onSortField: (field: string, dir: "asc" | "desc" | null) => void;
  label: string | ReactNode;
  fieldId: string;
  sortDir: "asc" | "desc" | null;
  hidden: boolean;
}

const StyleDataGridHead = styled("div")<StyleOption>`
  position: relative;
  display: flex;
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  justify-content: space-between;
  align-items: center;
  vertical-alignment: middle;
  padding-left: 1.5rem;
  padding-right: 6px;
  min-height: 50px;
  max-height: 50px;
  cursor: pointer;
  z-index: 900;

  .icon-wrapper,
  .head-more-option {
    visibility: hidden;
  }

  .show-icon {
    visibility: visible;
  }

  &:hover .icon-wrapper,
  &:hover .head-more-option {
    visibility: visible;
  }

  &:after {
    position: absolute;
    height: 15px;
    width: 2px;
    content: "";
    background: #6d6d6d7d;
    right: 0;
    top: 17.5px;
  }
`;
