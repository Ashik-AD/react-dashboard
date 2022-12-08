import { Search } from "@mui/icons-material";
import React, { useMemo, useState } from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { Mail } from "../../features/emails/types/type";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store/store";
import { Text } from "../../ui";
import Box from "../box/Box";
import SearchMail from "./search-mail/SearchMail";
const mailSelector = createSelector(
  (state: RootState) => state.email,
  (email): Mail[] => email.mails!
);
const SearchEmailList = () => {
  const mailList = useAppSelector(mailSelector);
  const [searchKey, setSearchKey] = useState("");
  const [resultShow, setResultShow] = useState(false);

  const handleChangeInput = (eve: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchKey(eve.target.value);
    }, 500);
  };
  const handlePressEnter = (eve: React.KeyboardEvent<HTMLInputElement>) => {
    if (eve.key === "Enter" && eve.currentTarget.value.trim()) {
      setSearchKey(eve.currentTarget.value);
    }
  };

  const handleShowResult = (eve: React.MouseEvent<HTMLInputElement>) => {
    eve.stopPropagation();
    setResultShow((prevState) => {
      return !prevState;
    });
    document.addEventListener("click", handleCloseResult);
  };

  const handleCloseResult = () => {
    setResultShow(() => {
      return false;
    });
    document.removeEventListener("click", handleCloseResult);
  };

  const mailFound = useMemo(() => {
    if (!searchKey || !searchKey.trim()) {
      return;
    }
    if (searchKey.length < 1) return;

    return mailList.filter((mail) => {
      const nameMatched = mail.from.full_name
        .toLowerCase()
        .includes(searchKey.toLowerCase());
      const subjectMatched = mail.subject.toLowerCase().includes(searchKey);
      return nameMatched || subjectMatched;
    });
  }, [searchKey]);

  return (
    <Box display="flex" align="center" space={0.8} px={20} py={12}>
      <Text secondary styles={{ display: "flex" }} size={21}>
        <Search />
      </Text>
      <StyledInput
        type="text"
        name="email-search"
        placeholder="Search mail"
        onChange={handleChangeInput}
        onKeyDown={handlePressEnter}
        onClick={handleShowResult}
      />
      <SearchMail searchResult={mailFound} isShow={resultShow} />
    </Box>
  );
};
export default SearchEmailList;

const StyledInput = styled("input")`
  flex: 1 1 auto;
  width: 100%;
  background: transparent;
  border: none;
  padding: 1rem 0;
  font-size: 16.5px;
  color: inherit;
`;
