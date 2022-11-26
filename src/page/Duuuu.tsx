import { useCallback, useEffect, useState } from "react";
import Box from "../components/box/Box";
import FilterController from "../components/data-grid-item/dropdowns/FilterController";
import filterList, {
  OperationList,
} from "../components/layout/data-grid/filter";
import Table from "../components/layout/table/Table";
import TableCell from "../components/table/TableCell";
import TableRow from "../components/table/TableRow";
import { Button, Text } from "../ui";
import Select, { SelectItem } from "../ui/input/select/Select";
import TextField from "../ui/input/text-field/TextField";

const data = [
  { id: 1, name: "Ashik Dhimal", address: "Damak, NP", phone: "", age: 23 },
  { id: 2, name: "John Doe", address: "Boston, US", phone: "323434", age: 25 },
  {
    id: 3,
    name: "Jane Stuart",
    address: "Sydney, AUS",
    phone: "9856546",
    age: 23,
  },
  {
    id: 4,
    name: "Ashly Cole",
    address: "Amsterdam, ND",
    phone: "2546565",
    age: 27,
  },
  {
    id: 5,
    name: "Michal Jordan",
    address: "CA, US",
    phone: "84546567",
    age: 25,
  },
  { id: 7, name: "Mike Sponie", address: "Ktm, NP", phone: "5343", age: 27 },
];
const fields = ["Id", "Name", "Address", "Phone", "Age"];
const fieldsWithValue = [
  { label: "Id", fieldId: "id" },
  { label: "Name", fieldId: "name" },
  { label: "Address", fieldId: "address" },
  { label: "Phone", fieldId: "phone" },
  { label: "Age", fieldId: "age" },
];
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
    withAditionalAction: true,
  },
  {
    operatorId: OperationList.NOTEMPTY,
    label: "Is not empty",
    withAditionalAction: true,
  },
];
const Duuu = () => {
  const [option, setOption] = useState("");
  const [field, setField] = useState("");
  const [filterInstant, setFilterInstant] = useState(false);

  const [filterKey, setFilterKey] = useState("");
  const [filterList, setFilterList] = useState(data);
  // const filterMyList = useCallback(() => {
  //   if (filterKey === "" && !filterInstant) return data;
  //   const initFilter = filterList(data, field);
  //   return initFilter(option as OperationList, filterKey);
  // }, [filterKey, filterInstant, field]);
  const handleOnFilterList = (items) => {
    setFilterList(items);
  };
  const fileds = fields.map((field) => (
    <Button
      key={field.toLowerCase()}
      onClick={() => setField(field.toLowerCase())}
    >
      {field}
    </Button>
  ));
  const operationList = operators.map((op) => (
    <Button
      key={op.operatorId}
      varient="outlined"
      onClick={() => {
        setOption(op.operatorId);
        op.withAditionalAction && setFilterInstant(true);
      }}
    >
      {op.label}
    </Button>
  ));

  return (
    <div>
      <Box display="flex" align="flex-start">
        <Box display="flex" space={0.6}>
          {fileds}
        </Box>
        <Box display="flex" flexDirection="column" space={0.6}>
          {operationList}
        </Box>
        <TextField
          name="filter-input"
          varient="standard"
          defaultValue={filterKey}
          type="text"
          placeholder="Filter value"
          onChange={(eve) => setFilterKey(eve.target.value)}
        />
      </Box>
      <Box position="relative" mb={100}>
        <FilterController
          fields={fieldsWithValue}
          lists={data}
          onFilterLists={handleOnFilterList}
        />
      </Box>
      <h5>
        Filtering <Text skinColor={true}>{field}</Text> by{" "}
        <Text skinColor={true}>{option}</Text> where value is{" "}
        <Text skinColor={true}>{filterKey}</Text>{" "}
      </h5>

      <Table
        row={filterList}
        itemKey={(item) => item.id}
        renderRow={(item) => (
          <TableRow>
            <TableCell value={item.name} />
            <TableCell value={item.address} />
            <TableCell value={item.phone} />
            <TableCell value={item.age} />
          </TableRow>
        )}
      />
    </div>
  );
};
export default Duuu;
