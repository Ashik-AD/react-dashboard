import { memo } from "react";
import { useAppDispatch } from "../../../hooks";
import { GridInnerContainer, GridItem } from "../../layout";
import type { UserListParams } from "../../../features/users/types/definition";
import { fetchUserListByParams } from "../../../features/users/creator";
import FilterByRole from "./filters/FilterByRole";
import FilterByPlan from "./filters/FilterByPlan";
import FilterByStatus from "./filters/FilterByStatus";
const UserListFilter = () => {
  const dispatch = useAppDispatch();
  const handleFilter = (item: FilterParams) => {
    dispatch(fetchUserListByParams(item));
  };
  return (
    <GridInnerContainer spacing={1.6}>
      <GridItem xs={12} md={4}>
        <FilterByRole onFilter={handleFilter} />
      </GridItem>
      <GridItem xs={12} md={4}>
        <FilterByPlan onFilter={handleFilter} />
      </GridItem>
      <GridItem xs={12} md={4}>
        <FilterByStatus onFilter={handleFilter} />
      </GridItem>
    </GridInnerContainer>
  );
};
export default memo(UserListFilter);

export interface FilterParams extends Partial<UserListParams> {}
