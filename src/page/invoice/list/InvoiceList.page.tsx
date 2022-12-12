import React, { useCallback, useState } from "react";
import Box from "../../../components/box/Box";
import Card from "../../../components/card/Card";
import CreateNewInvoice from "../../../components/invoice/list/CreateNewInvoice";
import InvoiceFilter from "../../../components/invoice/list/InvoiceFilter";
import InvoiceTable from "../../../components/invoice/list/InvoiceTable";
import { GridInnerContainer, GridItem } from "../../../components/layout";
import { searchData } from "../../../features/invoices/creator";
import { useAppDispatch } from "../../../hooks";
import { TextField } from "../../../ui";

const InvoiceList = () => {
  const dispatch = useAppDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState("");
  const handleChangeSearch = useCallback(
    (eve: React.ChangeEvent<HTMLInputElement>) => {
      setTimeout(() => {
        dispatch(searchData(eve.target.value));
        setSearchKey(eve.target.value);
      }, 500);
    },
    []
  );
  const handleChangeFilter = useCallback((invoiceStatus: string) => {
    dispatch(searchData(invoiceStatus));
    setFilterKey(filterKey);
  }, []);
  return (
    <Card>
      <Box display="flex" justify="flex-end" padding={20}>
        <GridInnerContainer alignItems="center">
          <GridItem xs={12} md={6}>
            <InvoiceFilter
              status={filterKey}
              changeFilter={handleChangeFilter}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <TextField
              type="text"
              name="search-invoice"
              placeholder="Search Invoice"
              sizes="small"
              maxWidth="280px"
              onChange={handleChangeSearch}
              defaultValue={searchKey}
            />
          </GridItem>
          <GridItem xs={12} md={2}>
            <CreateNewInvoice />
          </GridItem>
        </GridInnerContainer>
      </Box>

      <InvoiceTable />
    </Card>
  );
};
export default InvoiceList;
