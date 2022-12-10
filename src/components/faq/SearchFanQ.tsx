import { Search } from "@mui/icons-material";
import React, { memo } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { TextField, Text } from "../../ui";
import Box from "../box/Box";

const SearchFanQ = ({
  handleSearch,
}: {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const {
    theme: {
      mode: { name },
    },
  } = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      width="100%"
      py={5 * 16}
      px={20}
      borderRadius={"6px"}
      style={{
        backgroundImage: `url(https://i.ibb.co/25h3jb7/faq.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Text heading="h5" weight="bold" skinColor>
        Hello, how can we help?
      </Text>
      <Text
        varient="body2"
        styles={{ margin: `8px 0px 12px` }}
        secondary
        paragraph
      >
        or choose a category to quickly find the help you need
      </Text>
      <StyledTextFieldWrapper theme={{ name }}>
        <TextField
          type="text"
          name="searchHelp"
          placeholder="Search a question..."
          maxWidth="550px"
          startAdornment={<Search />}
          onChange={handleSearch}
        />
      </StyledTextFieldWrapper>
    </Box>
  );
};
export default memo(SearchFanQ);

const StyledTextFieldWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 21px 0 0 0;
  & > div {
    width: 100%;
    align-items: center;
    & > input {
      background: ${({ theme }) =>
        theme.name === "dark" ? `rgba(79, 65, 84, 1)` : `#f8e3ffb3`};
      padding-left: 48px !important;
    }
    & .input-adornment {
      left: 12px;
      opacity: 0.7;
    }
  }
`;
