import { ReactNode } from "react";
import { Text } from "../../../ui";
import Card from "../../card/Card";
import CustomCardTitle from "../../card/titles/CustomCardTitle";
import TableBody from "../../table/TableBody";
import TableHead from "../../table/TableHead";
import TableRow from "../../table/TableRow";

const Table = <T extends unknown, R extends unknown>({
  renderRow,
  row,
  className,
  fields,
  renderField,
}: TableProps<T, R>) => {
  return (
    <Card className="table-container">
      <CustomCardTitle title={<Text>Basic Table</Text>} showIcon={false} />
      <table className={`holy-table ${className ? className : ""}`}>
        {fields && renderField && (
          <TableHead>
            <TableRow>
              {fields.map((item) => (
                <>{renderField(item)}</>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {row.map((item) => (
            <>{renderRow(item)}</>
          ))}
        </TableBody>
      </table>
    </Card>
  );
};

interface TableProps<T, R> {
  itemKey: (item: T) => string | number;
  fieldKey?: (item: R) => string | number;
  renderField?: (item: R) => ReactNode;
  renderRow: (item: T) => ReactNode;
  row: T[];
  fields?: R[];
  className?: string;
}
export default Table;
