import { FilterParams } from "../UserListFilter";
import Filter from "./Filter";

import type { UserStatus } from "../../../../features/users/types/definition";

const filterList: { label: string; value: UserStatus | "" }[] = [
  { label: "Select Status", value: "" },
  { label: "Active", value: "active" },
  { label: "Pending", value: "pending" },
  { label: "Inactive", value: "inactive" },
];
const FilterByStatus = ({
  onFilter,
}: {
  onFilter: (filter: FilterParams) => void;
}) => {
  return (
    <Filter
      title="Select Status"
      value=""
      list={filterList}
      onSelect={(val: any) => onFilter({ status: val })}
    />
  );
};
export default FilterByStatus;
