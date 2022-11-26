import { FC } from "react";
import styled from "styled-components";
import { UserList } from "../../../features/users/types/definition";
import useModal from "../../../hooks/useModal";
import { Button, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";
import Modal from "../../modal/Modal";
import TableCell from "../../table/TableCell";
import TableRow from "../../table/TableRow";
import EditBillingAddress from "./EditBillingAddress";

const BillingAddress: FC<Partial<UserList>> = (props) => {
  const { email, contact, country, company } = props;
  const { show, toggleModal } = useModal();
  return (
    <Card padding="1.25rem 1.4rem">
      <Box display="flex" align="center" justify="space-between" mb={24}>
        <Text heading="h6">Billing Address</Text>
        <Button onClick={toggleModal}>edit address</Button>
      </Box>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12} md={6}>
          <StyledTable>
            <tbody>
              <AddressItem title="Company Name" value={company!} />
              <AddressItem title="Billing Email" value={email!} />
              <AddressItem title="Tax ID" value="TAX-38378" />
              <AddressItem title="VAT Number" value="KSD3K2K" />
              <AddressItem
                title="Billing Address"
                value="Damak-9, Jhapa, Mechi, Nepal"
              />
            </tbody>
          </StyledTable>
        </GridItem>
        <GridItem xs={12} md={6}>
          <StyledTable>
            <tbody>
              <AddressItem title="Contact" value={contact!} />
              <AddressItem title="Country" value={country!} />
              <AddressItem title="State" value="Province 1" />
              <AddressItem title="Zipcode" value="5302" />
            </tbody>
          </StyledTable>
        </GridItem>
      </GridInnerContainer>

      {show ? (
        <Modal handleOutClick={toggleModal}>
          <EditBillingAddress
            companyName={company!}
            contact={contact!}
            country={country!}
            billingAddress="Damak 9, Jhaha, Nepal"
            billingEmail={email!}
            state="Zotopia"
            taxId="Tax-424343"
            vatNumber="KS425K32"
            zipcode={5243}
            closeModal={toggleModal}
          />
        </Modal>
      ) : (
        ""
      )}
    </Card>
  );
};
export default BillingAddress;

const AddressItem = ({ title, value }: { title: string; value: string }) => (
  <TableRow compact>
    <TableCell
      value={`${title}:`}
      weight={600}
      border={{ show: false }}
      fontSize={"body1"}
      align="left"
      style={{ width: 150 }}
    />
    <TableCell
      value={value}
      border={{ show: false }}
      align="left"
      style={{ whiteSpace: "pre-wrap", opacity: 0.8 }}
    />
  </TableRow>
);

const StyledTable = styled("table")`
  & .table-cell:first-child {
    padding-left: inherit;
  }
`;
