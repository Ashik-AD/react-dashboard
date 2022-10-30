import Table from "../../layout/table/Table";
import TableCell from "../../table/TableCell";
import TableRow from "../../table/TableRow";

const columns = [
  {
    id: 1,
    title: "Item",
    width: "33.33%",
  },
  {
    id: 2,
    title: "DESCRIPTION",
    width: "33.33%",
  },
  {
    id: 3,
    title: "HOURS",
    width: "12%",
  },
  {
    id: 4,
    title: "QTY",
    width: "12%",
  },
  {
    id: 5,
    title: "Total",
    width: "12%",
  },
];

const data = [
  {
    id: 1,
    name: "Web Design",
    description: "Portfolio web design",
    hours: 32,
    qty: 1,
    total: 43,
  },
  {
    id: 2,
    name: "Social Media",
    description: "Social Media Marketing",
    hours: 12,
    qty: 1,
    total: 22,
  },
  {
    id: 3,
    name: "SEO",
    description: "ECM Search Engine Optimization",
    hours: 56,
    qty: 1,
    total: 32,
  },
  {
    id: 3,
    name: "React Dashbaord",
    description: "React Admin Dashboard Development",
    hours: 12,
    qty: 1,
    total: 12,
  },
];
const PreviewInvoiceTable = () => {
  return (
    <Table
      fields={columns}
      row={data}
      fieldKey={(item) => item.id}
      itemKey={(item) => item.id}
      renderField={(item) => (
        <TableCell
          value={item.title}
          weight={600}
          style={{
            width: item.width,
            fontSize: 13,
            textTransform: "uppercase",
          }}
        />
      )}
      renderRow={(item) => (
        <TableRow key={item.id}>
          <TableCell value={item.name} />
          <TableCell value={item.description} />
          <TableCell value={item.hours} />
          <TableCell value={item.qty} />
          <TableCell value={`$${item.total * item.hours}`} />
        </TableRow>
      )}
    />
  );
};
export default PreviewInvoiceTable;
