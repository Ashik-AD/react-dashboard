import React, { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton, Select, SelectItem, Text } from "../../ui";
import Box from "../box/Box";

const DataGridFooter: FC<Props> = (props) => {
  const {
    rowPerPage,
    rowPerPageOptions,
    total,
    currentPage,
    next,
    passed,
    handleRowOptSelect,
    handlePagination,
  } = props;
  return (
    <Box display="flex" align="center" justify="flex-end" px={20} space={2}>
      {rowPerPageOptions.length > 1 && (
        <Box display="flex" align="center" space={0.3} justify="space-evenly">
          <Text varient="body2" textOverflow="ellipsis" secondary>
            Rows per page:
          </Text>
          <Select
            defaultValue={rowPerPage.toString()}
            label=""
            labelWidth="60px"
            containerWidth="60px"
            sizes="small"
            onChange={(value) => handleRowOptSelect(+value)}
          >
            {rowPerPageOptions.map((pg) => (
              <SelectItem
                key={pg}
                value={pg.toString()}
                label={pg.toString()}
                textAlign="center"
              />
            ))}
          </Select>
        </Box>
      )}
      <Box display="flex" space={1} align="center">
        <Text varient="body2">
          {passed}-{next} of {total}
        </Text>
        <Box display="flex">
          <IconButton
            varient="text"
            disabled={currentPage <= 1}
            onClick={() => handlePagination(currentPage - 1)}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            varient="text"
            disabled={next >= total}
            onClick={() => handlePagination(currentPage + 1)}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DataGridFooter;

interface Props {
  total: number;
  rowPerPage: number;
  next: number;
  passed: number;
  rowPerPageOptions: number[];
  currentPage: number;
  handleRowOptSelect: (value: number) => void;
  handlePagination: (page: number) => void;
}
