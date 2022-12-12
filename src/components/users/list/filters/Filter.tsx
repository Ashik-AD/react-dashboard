import { FC } from "react";
import { Select, SelectItem } from "../../../../ui";

const UserListFilter: FC<Props> = (props) => {
  const { onSelect, list, value, title } = props;
  return (
    <Select defaultValue={value} label={title} onChange={onSelect} width="100%">
      {list.map((item) => (
        <SelectItem key={item.value} value={item.value} label={item.label} />
      ))}
    </Select>
  );
};
export default UserListFilter;

interface Props {
  onSelect: (value: string) => void;
  list: { label: string; value: string | "" }[];
  value: string | "";
  title: string;
}
