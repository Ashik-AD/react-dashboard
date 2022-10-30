import { FC } from "react";
import styled from "styled-components";
import { InvoiceList } from "../../../features/invoices/types/definition";
import { Button, Divider, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import { GridInnerContainer, GridItem } from "../../layout";
import BillingDetail from "../BillingDetail";
import OragnizationDetail from "../OrganizationDetails";
import TotalAmount from "../TotalAmount";
import PreviewInvoiceTable from "./PreviewInvoiceTable";

const PreviewMain: FC<Partial<InvoiceList>> = (props) => {
  const {
    address,
    company,
    companyEmail,
    contact,
    dueDate,
    id,
    issuedDate,
    name,
  } = props;
  return (
    <Card py="20px">
      <GridInnerContainer>
        <GridItem xs={12} sm={7}>
          <OragnizationDetail />
        </GridItem>
        <GridItem xs={12} sm={5}>
          <Box display="flex" padding={20}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Text heading="h6" weight="bold">
                      Invoice
                    </Text>
                  </td>
                  <td>
                    <Text heading="h6" weight="bold">
                      #{id}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>Date Issued:</Text>
                  </td>
                  <td>
                    <Text>{issuedDate}</Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>Date Due:</Text>
                  </td>
                  <td>
                    <Text>{dueDate}</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </GridItem>
      </GridInnerContainer>
      <Divider styles={{ margin: "1.6rem 0" }} />
      <Box>
        <GridInnerContainer rowSpacing={1}>
          <GridItem xs={12} sm={7}>
            <Box display="flex" flexDirection="column" space={0.4} px={20}>
              <Text varient="body1" weight="medium" paragraph>
                Invoice To:
              </Text>
              <Text varient="body2" paragraph>
                {name}
              </Text>
              <Text varient="body2" paragraph>
                {company}
              </Text>
              <Text varient="body2" paragraph>
                {address}
              </Text>
              <Text varient="body2" paragraph>
                {contact}
              </Text>
              <Text varient="body2" paragraph>
                {companyEmail}
              </Text>
            </Box>
          </GridItem>
          <GridItem xs={12} sm={5}>
            <BillingDetail />
          </GridItem>
        </GridInnerContainer>
      </Box>
      <Divider styles={{ margin: "1.6rem 0 0.8rem 0" }} />
      <PreviewInvoiceTable />
      <Box px={20} py={16}>
        <StyledMisc rowSpacing={0.6}>
          <GridItem xs={12} sm={4}>
            <TotalAmount items={[]} />
          </GridItem>
          <GridItem xs={12} sm={8}>
            <Box>
              <Text weight="medium" lineHeight="40px" paragraph>
                Salesperson: <Text weight="regular">Jack Frags</Text>
              </Text>
              <Text varient="body2" weight="medium" secondary>
                Thanks for your business
              </Text>
            </Box>
          </GridItem>
        </StyledMisc>
      </Box>
      <Divider styles={{ margin: "1rem 0" }} />
      <Box padding={20}>
        <Text varient="body2">
          <strong>Note: </strong> It was a pleasure working with you and your
          team. We hope you will keep us in mind for future freelance projects.
          Thank You!
        </Text>
      </Box>

      <Box display="flex" justify="flex-end" px={20} mt={20} space={0.8}>
        <Button color="error">Print</Button>
        <Button color="success">Download</Button>
      </Box>
    </Card>
  );
};
export default PreviewMain;

const StyledMisc = styled(GridInnerContainer)`
  flex-direction: row;
  @media screen and (min-width: 600px) {
    flex-direction: row-reverse;
  }
`;
