import { FC } from "react";
import styled from "styled-components";
import { Mail } from "../../../features/emails/types/type";
import { Divider, Text } from "../../../ui";
import ColorBox from "../../box/ColorBox";
import ScrollContainer from "../../scroll-container/ScrollContainer";
import ResutlItem from "./ResultItem";

const SearchMail: FC<Props> = ({ searchResult, isShow }) => {
  if (!isShow) return <></>;

  return (
    <StyledSearchWrapper>
      <ColorBox
        backgroundTheme="background"
        borderRadius={"8px"}
        className="overflow-hidden"
        display="flex"
        flexDirection="column"
      >
        <Text classes="message" weight="medium" skinColor>
          {searchResult
            ? `${searchResult.length} Result${
                searchResult.length === 1 ? "" : "s"
              } Found`
            : "Yoku naru"}
        </Text>
        <Divider />
        <ScrollContainer maxHeight="450px">
          {searchResult &&
            searchResult?.map((result) => (
              <ResutlItem key={result.id} {...result} />
            ))}
        </ScrollContainer>
      </ColorBox>
    </StyledSearchWrapper>
  );
};
export default SearchMail;
interface Props {
  searchResult: Mail[] | undefined | null;
  isShow: boolean;
}

const StyledSearchWrapper = styled("div")`
  position: absolute;
  width: 100%;
  padding: 0.4rem;
  top: 70px;
  left: 0;
  z-index: 900;
  border-radius: 8px;

  & .message {
    padding: 0.8rem 1rem;
  }

  & .search-result-item:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
