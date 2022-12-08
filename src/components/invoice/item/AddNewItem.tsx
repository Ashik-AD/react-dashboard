import { Add } from "@mui/icons-material";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { Button, Divider } from "../../../ui";
import Box from "../../box/Box";
import { GridInnerContainer, GridItem } from "../../layout";
import NewItem from "./NewItem";
import SalesPerson from "../SalesPerson";
import TotalAmount from "../TotalAmount";

import type { InvoiceItem, NewItemHandle } from "./type";

const itemId = (item: Array<InvoiceItem>) => {
  const id = item.reduce((acc, cur): number => {
    if (cur.id > acc) {
      return cur.id;
    }
    return 0;
  }, 0);
  return id + 1;
};

const itemTemplate = (id: number) => ({
  id,
  title: "App Design",
  description: "Customization and bug fixed",
  cost: 24,
  discount: 0,
  hours: 1,
});

const AddNewItem = forwardRef<NewItemHandle, ItemPros>((props, ref) => {
  const [items, setItems] = useState<Array<InvoiceItem>>(
    props.items ? props.items : [itemTemplate(1)]
  );
  useImperativeHandle(ref, () => ({
    items: [...items],
  }));
  const handleAddNewItem = () => {
    const id = itemId(items);
    const newItem = items.concat(itemTemplate(id));
    setItems(newItem);
  };
  const handelRemoveItem = (id: number) => {
    if (items.length <= 1) return false;
    const removedList = items.filter((item) => item.id !== id);
    setItems(removedList);
  };

  const handleChangeItem = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const { name, value } = event.target;
        return {
          ...item,
          [name]: value,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const renderItem = items.map((item) => (
    <NewItem
      {...item}
      handleChange={handleChangeItem}
      handleRemoveItem={handelRemoveItem}
      key={item.id}
    />
  ));
  return (
    <>
      <Box display="flex" flexDirection="column" px={20}>
        {renderItem}
        <Box mb={32}>
          <Button onClick={handleAddNewItem}>
            {" "}
            <Add style={{ marginRight: 8 }} /> add item
          </Button>
        </Box>
      </Box>
      <Divider styles={{ margin: "3rem 0 2rem 0" }} />
      <StyledMeta px={20}>
        <GridInnerContainer rowSpacing={1} classes="add-item_meta">
          <GridItem xs={12} md={9}>
            <SalesPerson />
          </GridItem>
          <GridItem xs={12} md={3} classes="total_wrapper">
            <TotalAmount items={items} />
          </GridItem>
        </GridInnerContainer>
      </StyledMeta>
    </>
  );
});
export default AddNewItem;

interface ItemPros {
  items?: Array<InvoiceItem>;
  salesperson?: string;
  msgLeave?: string;
}

export interface ItemDetail extends InvoiceItem {
  handleChange: (
    id: number,
    value: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleRemoveItem: (id: number) => void;
}
const StyledMeta = styled(Box)`
  & > .add-item_meta {
    flex-direction: column-reverse;
    @media screen and (min-width: 900px) {
      flex-direction: row;
    }
  }
  & .total_wrapper {
    width: 100%;
  }
`;
