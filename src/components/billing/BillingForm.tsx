import { FC, ReactNode } from "react";
import { Select, SelectItem, TextField } from "../../ui";
import Form from "../form/Form";
import { GridInnerContainer, GridItem } from "../layout";

const BillingForm: FC<Partial<Props>> = (props) => {
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
    onSubmit,
    children,
    varient,
  } = props;
  return (
    <Form autcomplete="OFF" onSubmit={onSubmit} preventDefault>
      <GridInnerContainer spacing={1.6}>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="companyName"
            label="Company name"
            defaultValue={companyName}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="billingEmail"
            label="Email"
            defaultValue={billingEmail}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="taxId"
            label="Tax ID"
            defaultValue={taxId}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="vatNumber"
            label="VAT Number"
            defaultValue={vatNumber}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12}>
          <TextField
            name="billingAddress"
            defaultValue={billingAddress}
            label="Billing address"
            sizes={varient && varient === "compact" ? "small" : "normal"}
            multiRow
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="contact"
            label="Contact"
            defaultValue={contact}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <Select
            label="Country"
            defaultValue={country || ""}
            width="100%"
            sizes={varient && varient === "compact" ? "small" : "normal"}
          >
            <SelectItem label="Nepal" value="nepal" />
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
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <TextField
            type="text"
            name="zipcode"
            label="Zip Code"
            defaultValue={zipcode}
            sizes={varient && varient === "compact" ? "small" : "normal"}
          />
        </GridItem>
        {children && <GridItem xs={12}>{children}</GridItem>}
      </GridInnerContainer>
    </Form>
  );
};
export default BillingForm;

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
  onSubmit?: () => void;
  children?: ReactNode;
  varient?: "compact" | "default";
}
