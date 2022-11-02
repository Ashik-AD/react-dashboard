import { FilterParams } from "../UserListFilter";
import Filter from "./Filter";

import type { UserRole } from "../../../../features/users/types/definition";

const filterList: { label: string; value: UserRole | "" }[] = [
  { label: "Select Role", value: "" },
  { label: "Admin", value: "admin" },
  { label: "Author", value: "author" },
  { label: "Editor", value: "editor" },
  { label: "Maintainer", value: "maintainer" },
  { label: "Subscriber", value: "subscriber" },
];
const FilterByRole = ({
  onFilter,
}: {
  onFilter: (filter: FilterParams) => void;
}) => {
  return (
    <Filter
      title="Select Role"
      value=""
      list={filterList}
      onSelect={(val: any) => onFilter({ role: val })}
    />
  );
};
export default FilterByRole;
