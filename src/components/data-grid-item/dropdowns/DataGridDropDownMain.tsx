import { FC, useContext, ReactNode, memo } from "react";
import Dropdown from "../../dropdown/Dropdown";
import { DataGridOptionContext } from "../../layout/data-grid/DataGrid";
const formatList = (id: number | string, label: string, handler: any) => ({
  id,
  label,
  handler,
});

const DataGridDropDownMain: FC<PropsType> = ({ fieldId, label }) => {
  const option = useContext(DataGridOptionContext);

  const drpList = [
    formatList(2, "Sort By ASC", () =>
      option?.sortByAsc({ fieldName: fieldId, by: "asc" })
    ),
    formatList(3, "Sort By DESC", () =>
      option?.sortByDesc({ fieldName: fieldId, by: "desc" })
    ),
    formatList(6, "Filter", option?.handleShowFilter),
    formatList(4, "Hide", () => option?.hideColumn(fieldId)),
    formatList(1, "Show Columns", option?.handleOpenColumnsCustomizer),
  ];
  return (
    <Dropdown
      data={drpList}
      visible={false}
      dropdownId={fieldId}
      label={label}
    />
  );
};

interface PropsType {
  fieldId: string;
  label: ReactNode;
}

export default memo(DataGridDropDownMain);
