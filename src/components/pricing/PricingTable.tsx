import { Cancel, CheckCircle, Stars } from "@mui/icons-material";
import { FC } from "react";
import useFetch from "../../hooks/useFetch";
import { Button, Chip, Text } from "../../ui";
import Box from "../box/Box";
import ColorBox from "../box/ColorBox";
import Table from "../layout/table/Table";
import Loading from "../loading/Loading";
import TableCell from "../table/TableCell";
import TableRow from "../table/TableRow";

const PricingTable = () => {
  const { data, loading } = useFetch<PricingTableAPI>(
    "/6395f1ff6a51bc4f704ce267/pricingTable"
  );
  if (loading) return <Loading />;
  if (!data) return <></>;

  return (
    <ColorBox
      color="transparent"
      border={{ show: true, size: "1px", radius: "6px" }}
    >
      <Table
        fields={data.header}
        fieldKey={(item) => item.title}
        renderField={(fld) => (
          <>
            <TableCell
              as="th"
              key={fld.title}
              value={<RowTitle {...fld} isCenter={fld.title !== "Features"} />}
            />
          </>
        )}
        row={data.rows}
        itemKey={(item) => item.feature}
        renderRow={(item) => (
          <TableRow key={item.feature} hover>
            <TableCell value={item.feature} />
            <TableCell
              align="center"
              value={<RowContent value={item.starter} />}
            />
            <TableCell align="center" value={<RowContent value={item.pro} />} />
            <TableCell
              align="center"
              value={<RowContent value={item.enterprise} />}
            />
          </TableRow>
        )}
      >
        <TableRow>
          <TableCell value="" border={{ show: false }} />
          <TableCell
            align="center"
            value={<Button varient="outlined">Choose plan</Button>}
            border={{ show: false }}
          />
          <TableCell
            align="center"
            value={<Button>Choose plan</Button>}
            border={{ show: false }}
          />
          <TableCell
            align="center"
            value={<Button varient="outlined">Choose plan</Button>}
            border={{ show: false }}
          />
        </TableRow>
      </Table>
    </ColorBox>
  );
};
export default PricingTable;

const RowTitle: FC<TableHeader & { isCenter?: boolean }> = ({
  title,
  isPro,
  subtitle,
  isCenter,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    align={isCenter ? "center" : "initial"}
    justify={isCenter ? "center" : "flex-start"}
    space={0.2}
  >
    {isPro ? (
      <Box width="auto" position="relative">
        <Text
          varient="caption"
          weight="bold"
          textTransform="uppercase"
          paragraph
        >
          {title}
        </Text>
        <Text
          size={24}
          lineHeight="0"
          styles={{ position: "absolute", right: -26, bottom: 2 }}
          skinColor
        >
          <Stars />
        </Text>
      </Box>
    ) : (
      <Text varient="caption" weight="bold" textTransform="uppercase" paragraph>
        {title}
      </Text>
    )}
    <Text varient="caption" textTransform="capitalize" paragraph>
      {subtitle}
    </Text>
  </Box>
);

const RowContent = ({ value }: { value: string | boolean }) => (
  <>
    {typeof value === "string" ? (
      <Chip label={value} size="small" skin="light" />
    ) : (
      <Text size={19} skinColor={value} secondary={!value}>
        {value ? <CheckCircle /> : <Cancel />}
      </Text>
    )}
  </>
);

type PK = string | boolean;

interface TableHeader {
  title: string;
  subtitle: string;
  isPro?: boolean;
}
interface PricingTableAPI {
  header: TableHeader[];
  rows: { feature: string; pro: PK; enterprise: PK; starter: PK }[];
}
