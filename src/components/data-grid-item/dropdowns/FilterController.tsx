import { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Select, { SelectItem } from "../../../ui/input/select/Select";
import TextField from "../../../ui/input/text-field/TextField";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";
import filterList, { OperationList } from "../../layout/data-grid/filter";
import { DataGridColoumn } from "../../layout/data-grid/type";
const operators = [
  {
    operatorId: OperationList.CONTAINS,
    label: "Contains",
  },
  {
    operatorId: OperationList.EQUALS,
    label: "Equals",
  },
  {
    operatorId: OperationList.STARTWITH,
    label: "Start with",
  },
  {
    operatorId: OperationList.ENDSWITH,
    label: "Ends with",
  },
  {
    operatorId: OperationList.EMPTY,
    label: "Is empty",
  },
  {
    operatorId: OperationList.NOTEMPTY,
    label: "Is not empty",
  },
];

const FilterController: FC<Props> = (props) => {
  const { fields, lists, onFilterLists } = props;
  const [selectedOperation, setSelectedOperation] = useState(operators[0]);
  const [selectedField, setSelectedField] = useState(fields[0]);
  const [isInstantFiltering, setisInstantFiltering] = useState(false);
  const [filterKey, setFilterKey] = useState("");

  const filteredLists = useMemo(() => {
    if (!filterKey && !isInstantFiltering) return lists;
    const filter = filterList(lists, selectedField.fieldId);
    return filter(selectedOperation.operatorId, filterKey);
  }, [
    filterKey,
    isInstantFiltering,
    selectedOperation.operatorId,
    selectedField.fieldId,
  ]);

  useEffect(() => {
    onFilterLists(filteredLists);
  }, [filteredLists]);

  useEffect(() => {
    if (
      selectedOperation.operatorId === OperationList.EMPTY ||
      selectedOperation.operatorId === OperationList.NOTEMPTY
    ) {
      setisInstantFiltering(true);
    } else {
      if (isInstantFiltering) {
        setisInstantFiltering(false);
      }
    }
  }, [selectedOperation]);

  return (
    <StyledCard
      className="overflow-unset-important zIndex-2"
      pt="8px"
      position="absolute"
      width="700px"
    >
      <GridInnerContainer alignItems="flex-end">
        <GridItem xs={4}>
          <Select
            label="Columns"
            defaultValue={selectedField.label as string}
            varient="standard"
            onChange={(fieldId, label) =>
              setSelectedField({ fieldId, label: label ? label : "" })
            }
          >
            {fields.map((field) => (
              <SelectItem
                key={field.fieldId}
                label={field.label as string}
                value={field.fieldId}
              />
            ))}
          </Select>
        </GridItem>
        <GridItem xs={3}>
          <Select
            label="Operators"
            defaultValue={selectedOperation.label}
            varient="standard"
            onChange={(value, name) =>
              setSelectedOperation({
                operatorId: value as OperationList,
                label: name ? name : "",
              })
            }
          >
            {operators.map((op) => (
              <SelectItem
                key={op.operatorId}
                value={op.operatorId}
                label={op.label}
              />
            ))}
          </Select>
        </GridItem>
        <GridItem xs={4}>
          {!isInstantFiltering && (
            <TextField
              type="text"
              name="filter-value"
              label="Value"
              placeholder="Filter Values"
              varient="standard"
              autoFocus={true}
              defaultValue={filterKey}
              onChange={(eve) => setFilterKey(eve.target.value)}
            />
          )}
        </GridItem>
      </GridInnerContainer>
    </StyledCard>
  );
};

export default FilterController;

interface Props {
  fields: Pick<DataGridColoumn, "fieldId" | "label">[];
  lists: { [field: string]: any }[];
  onFilterLists: (lists: any) => void;
}

const StyledCard = styled(Card)`
  z-index: 1100;
`;
