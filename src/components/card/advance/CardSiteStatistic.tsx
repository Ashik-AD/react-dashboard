import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";
import { Dot, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import Table from "../../layout/table/Table";
import TableRow from "../../table/TableRow";
import TableCell from "../../table/TableCell";
import ArrowIndicator from "../../../ui/arrow/ArrowIndicator";
import { colorPallets } from "../../../theme/colors";

const formatData = (source: string, total: number, growth: number) => {
  return { label: source, total, growth, status: growth > 0 ? "inc" : "desc" };
};
const randomColor = () =>
  colorPallets[Math.ceil(Math.random() * colorPallets.length - 1)].color;
const data = [
  formatData("Direct", 87932, 15),
  formatData("Organic", 63283, 85),
  formatData("Referral", 4393, 30),
  formatData("Mail", 223, -25),
  formatData("Social", 50439, 97),
  formatData("other", 2000, 10),
];

const CardSiteStatistic = () => {
  return (
    <Card>
      <CardTitle title="Website Statistics" />
      <Box padding={20}>
        <Box mb={16}>
          <Text heading="h3">{formatNumber(4567)}</Text>
          <Text varient="caption" secondary={true}>
            Total Traffic
          </Text>
        </Box>
        <Table
          row={data}
          itemKey={(item) => item.label}
          renderRow={(item) => (
            <TableRow>
              <TableCell
                style={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 0 }}
                align="left"
                border={{ bottom: false, top: true }}
                value={
                  <Box display="flex" align="center" space={0.5}>
                    <Dot color={randomColor()} />
                    {item.label}
                  </Box>
                }
              />
              <TableCell
                value={formatNumber(item.total)}
                border={{ bottom: false, top: true }}
                align="right"
                weight={500}
                style={{ paddingTop: 8, paddingBottom: 8 }}
              />
              <TableCell
                value={`${item.growth}%`}
                border={{ bottom: false, top: true }}
                align="right"
                weight={500}
                style={{ paddingTop: 8, paddingBottom: 8 }}
              />
              <TableCell
                value={
                  <ArrowIndicator status={item.status as any} color={true} />
                }
                border={{ bottom: false, top: true }}
                align="right"
                style={{ paddingTop: 8, paddingBottom: 8 }}
              />
            </TableRow>
          )}
        />
      </Box>
    </Card>
  );
};

export default CardSiteStatistic;
