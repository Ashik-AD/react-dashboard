import { FC } from "react";
import { Button, Select, SelectItem, Text, TextField } from "../../../ui";
import Box from "../../box/Box";
import { GridInnerContainer, GridItem } from "../../layout";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import ModalContentLayout from "../layout/ModalContentLayout";

const EditBillingAddress: FC<Props> = (props) => {
  const {
    companyName,
    billingAddress,
    billingEmail,
    taxId,
    vatNumber,
    contact,
    country,
    state,
    zipcode,
    closeModal,
  } = props;
  return (
    <ModalContentLayout height="calc(100% - 4rem)">
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        py={24}
        space={1}
        style={{ overflowY: "auto" }}
      >
        <Text heading="h5">Edit Address</Text>
        <ScrollContainer
          maxHeight="calc(100% - 4rem)"
          display="flex"
          flexDirection="column"
          px={20}
          space={1.8}
        >
          <Text varient="body2" align="center" secondary paragraph>
            Edit address for future billing
          </Text>
          <form>
            <GridInnerContainer spacing={1}>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="companyName"
                  label="Company name"
                  defaultValue={companyName}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="billingEmail"
                  label="Email"
                  defaultValue={billingEmail}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="taxId"
                  label="Tax ID"
                  defaultValue={taxId}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="vatNumber"
                  label="VAT Number"
                  defaultValue={vatNumber}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12}>
                <TextField
                  name="billingAddress"
                  defaultValue={billingAddress}
                  label="Billing address"
                  sizes="small"
                  multiRow
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="contact"
                  label="Contact"
                  defaultValue={contact}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <Select
                  label="Country"
                  defaultValue={country}
                  width="100%"
                  sizes="small"
                >
                  <SelectItem label="Nepal" value="neapl" />
                  <SelectItem label="Germany" value="germany" />
                  <SelectItem label="Turkey" value="turkey" />
                </Select>
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="state"
                  label="State"
                  defaultValue={state}
                  sizes="small"
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <TextField
                  type="text"
                  name="zipcode"
                  label="Zip Code"
                  defaultValue={zipcode}
                  sizes="small"
                />
              </GridItem>
            </GridInnerContainer>
          </form>
        </ScrollContainer>
        <Box display="flex" justify="center" space={1.25} py={16}>
          <Button varient="outlined" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={closeModal}>Submit</Button>
        </Box>
      </Box>
    </ModalContentLayout>
  );
};
export default EditBillingAddress;

interface Props {
  companyName: string;
  billingEmail: string;
  taxId: string;
  vatNumber: string;
  billingAddress: string;
  contact: string;
  country: string;
  state: string;
  zipcode: number;
  closeModal?: () => void;
}
