import { memo } from "react";
import { Text, TextField } from "../../ui";
import Box from "../box/Box";

const SalesPerson = ({ value }: { value?: string }) => {
  return (
    <>
      <Box display="flex" flexDirection="column" space={1}>
        <Box display="flex" align="center" space={0.6}>
          <Text varient="body2" weight="bold">
            Salesperson:
          </Text>
          <TextField
            type="text"
            name="salesperson"
            defaultValue={value}
            sizes="small"
            maxWidth="150px"
          />
        </Box>
        <TextField
          type="text"
          name="msg-leave"
          placeholder="Thanks for your business"
          sizes="small"
          maxWidth="270px"
        />
      </Box>
    </>
  );
};
export default memo(SalesPerson);
