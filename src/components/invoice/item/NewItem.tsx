import { Close } from "@mui/icons-material";
import { FC, memo } from "react";
import styled from "styled-components";
import {
  Divider,
  IconButton,
  Select,
  SelectItem,
  Text,
  TextField,
} from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import { GridInnerContainer, GridItem } from "../../layout";
import { ItemDetail } from "./AddNewItem";

const NewItem: FC<ItemDetail> = (props) => {
  const {
    id,
    cost,
    description,
    discount,
    hours,
    title,
    handleChange,
    handleRemoveItem,
  } = props;
  return (
    <ColorBox
      display="flex"
      pl={16}
      mt={16}
      mb={24}
      border={{ show: true, size: "1px", radius: "8px" }}
      color="transparent"
      className="overflow-unset-important"
    >
      <GridInnerContainer
        columnSpacing={2}
        alignItems="flex-start"
        rowSpacing={{
          xs: 1,
        }}
      >
        <GridItem xs={12} md={6}>
          <Box display="flex" flexDirection="column" space={0.4} pt={6} pr={20}>
            <Box display="flex" flexDirection="column" mb={8}>
              <Tx label="Item" />
              <Select sizes="small" defaultValue={title}>
                <SelectItem label="App Design" value="app design" />
                <SelectItem
                  label="App Customization"
                  value="app customization"
                />
                <SelectItem label="App Development" value="app development" />
              </Select>
            </Box>
            <TextField multiRow name="description" defaultValue={description} />
          </Box>
        </GridItem>
        <GridItem xs={12} md={2}>
          <Box display="flex" flexDirection="column" pt={6}>
            <Tx label="Cost" />
            <TextField
              type="number"
              name="cost"
              defaultValue={cost}
              onChange={(eve) => handleChange(id, eve)}
              sizes="small"
              maxWidth="220px"
            />
            <Text
              varient="body2"
              weight="medium"
              styles={{ marginTop: 16 }}
              secondary
            >
              Discount: {discount}%
            </Text>
          </Box>
        </GridItem>
        <GridItem xs={12} md={2}>
          <Box pt={8}>
            <Tx label="Hours" />
            <TextField
              type="text"
              name="hours"
              defaultValue={hours}
              onChange={(eve) => handleChange(id, eve)}
              sizes="small"
              maxWidth="220px"
            />
          </Box>
        </GridItem>
        <GridItem xs={12} md={2}>
          <Box pt={8}>
            <Tx label="Price" />
            <Text>${(cost * hours).toFixed(2)}</Text>
          </Box>
        </GridItem>
      </GridInnerContainer>
      <Box display="flex" justify="center" flex={1} px={6} pt={8}>
        <Divider
          vertical
          styles={{
            position: "relative",
            left: -6,
            top: -8,
            height: "calc(100% + 0.5rem)",
          }}
        />
        <IconButton
          varient="text"
          contentOpacity={5}
          size={25}
          fontSize={20}
          onClick={() => handleRemoveItem(id)}
        >
          <Close />
        </IconButton>
      </Box>
    </ColorBox>
  );
};
export default memo(NewItem);

const Tx = ({ label }: { label: string }) => <StyledTx>{label}</StyledTx>;

const StyledTx = styled("p")`
  opacity: 0.6;
  font-weight: 600;
  font-size: 14px;
  @media (min-width: 900px) {
    margin-top: -2rem !important;
    margin-bottom: 1rem;
  }
`;
