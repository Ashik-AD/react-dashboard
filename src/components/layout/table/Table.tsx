import { ReactNode } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";
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
  title,
  children,
}: TableProps<T, R>) => {
  return (
    <Box className="table-container">
      {title && (
        <CustomCardTitle title={<Text>{title}</Text>} showIcon={false} />
      )}
      <div className="table-wrapper">
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
            {children}
          </TableBody>
        </table>
      </div>
    </Box>
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
  title?: string;
  children?: ReactNode;
}
export default Table;
