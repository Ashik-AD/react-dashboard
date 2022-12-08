import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { Button, Toggle } from "../../../ui";
import TextField from "../../../ui/input/text-field/TextField";
import Box from "../../box/Box";
import Card from "../../card/Card";

const ColumnsController = <T extends unknown>({
  columnList,
  stateSetter,
  hiddenColumns,
}: Props<T>) => {
  const toggleColumnItem = useCallback(
    (column: string) => {
      const updatedColumns = new Set(hiddenColumns as any);
      if (updatedColumns.has(column)) {
        updatedColumns.delete(column);
      } else {
        updatedColumns.add(column);
      }
      stateSetter(() => updatedColumns as any);
    },
    [columnList]
  );

  const hideAllColmunns = useCallback(() => {
    const updatedColumns = new Set();
    columnList.forEach((column) => {
      updatedColumns.add(column.fieldId);
    });
    stateSetter(updatedColumns as any);
  }, []);

  return (
    <StyledController>
      <Card
        className="column-controller-content"
        px="4px"
        py="12px"
        width="350px"
      >
        <FilterColumns columnLists={columnList} onToggle={toggleColumnItem} />
        <Box display="flex" justify="space-between">
          <Button varient="text" onClick={hideAllColmunns}>
            Hide All
          </Button>
          <Button varient="text" onClick={() => stateSetter(new Set() as any)}>
            Show all
          </Button>
        </Box>
      </Card>
    </StyledController>
  );
};

const FilterColumns = ({
  columnLists,
  onToggle,
}: {
  columnLists: ColumnOption[];
  onToggle: (columnId: string) => void;
}) => {
  const [searchText, setSearchText] = useState("");
  const filterColumn = useMemo(() => {
    if (searchText === "") {
      return columnLists;
    }

    const filtered = columnLists.filter((column) =>
      column.label.toLowerCase().includes(searchText.toLowerCase())
    );
    return filtered;
  }, [searchText, columnLists]);
  return (
    <>
      <TextField
        varient="standard"
        defaultValue={searchText}
        type="text"
        name="column-name-search"
        label="find column"
        placeholder="Column title"
        onChange={(eve) => setSearchText(eve.target.value)}
      />
      <Box display="flex" flexDirection="column" space={0.3} py={12} px={6}>
        {filterColumn.map((column) => (
          <Box display="flex" key={column.fieldId}>
            <Toggle
              label={column.label}
              toggled={!column.hidden}
              onToggle={() => onToggle(column.fieldId)}
              size="small"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

const StyledController = styled("div")`
  position: absolute;
  left: 0;
  z-index: 2;
`;

interface ColumnOption {
  fieldId: string;
  label: string;
  hidden: boolean;
}
interface Props<T> {
  columnList: ColumnOption[];
  stateSetter: Dispatch<SetStateAction<T>>;
  hiddenColumns: Set<any>;
}
export default ColumnsController;
