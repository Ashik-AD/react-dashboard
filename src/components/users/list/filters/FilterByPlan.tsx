import { FilterParams } from "../UserListFilter";
import Filter from "./Filter";

import type { UserPlan } from "../../../../features/users/types/definition";

const filterList: { label: string; value: UserPlan | "" }[] = [
  { label: "Select Plan", value: "" },
  { label: "Basic", value: "basic" },
  { label: "Company", value: "company" },
  { label: "Team", value: "team" },
  { label: "Enterprise", value: "enterprise" },
];
const FilterByPlan = ({
  onFilter,
}: {
  onFilter: (filter: FilterParams) => void;
}) => {
  return (
    <Filter
      title="Select Plan"
      value=""
      list={filterList}
      onSelect={(val: any) => onFilter({ currentPlan: val })}
    />
  );
};
export default FilterByPlan;
