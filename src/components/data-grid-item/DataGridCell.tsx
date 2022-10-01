import { Children, FC, ReactNode } from "react";
import { Text } from "../../ui";
import Box from "../box/Box";

const DataGridCell: FC<Props> = ({ value, width, hidden, children }) => {
  if (hidden) return <></>;
  return (
    <Box
      display="flex"
      align="center"
      wrap="nowrap"
      className="data-grid-cell"
      style={{
        width: width,
        minWidth: width,
        maxWidth: width,
        minHeight: 50,
        maxHeight: 50,
      }}
      padding={24}
    >
      <div className="datacell-content body2">
        {value && !children && <Text varient="body2">{value}</Text>}
        {children && children}
      </div>
    </Box>
  );
};

interface Props {
  value?: string | number;
  width: number;
  hidden?: boolean;
  children?: ReactNode;
}

export default DataGridCell;
