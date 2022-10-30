import { Text } from "../../ui";
import Box from "../box/Box";

const BillingDetail = () => (
  <Box display="flex" flexDirection="column" px={20}>
    <Text varient="body1" weight="bold" lineHeight="50px">
      Bill To:
    </Text>
    <table>
      <tbody>
        <tr>
          <td>
            <Tx value="Total Due:" />
          </td>
          <td>
            <Tx value="$23,439.23" />
          </td>
        </tr>
        <tr>
          <td>
            <Tx value="Bank Name:" />
          </td>
          <td>
            <Tx value="Swiss Bank" />
          </td>
        </tr>
        <tr>
          <td>
            <Tx value="Country:" />
          </td>
          <td>
            <Tx value="Nepal" />
          </td>
        </tr>
        <tr>
          <td>
            <Tx value="IBAN:" />
          </td>
          <td>
            <Tx value="K242KJ3K23432L" />
          </td>
        </tr>
        <tr>
          <td>
            <Tx value="SWIFT code:" />
          </td>
          <td>
            <Tx value="LSKEKS2" />
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
);
export default BillingDetail;

const Tx = ({ value }: { value: string }) => (
  <Text varient="body2" textTransform="capitalize">
    {value}
  </Text>
);
