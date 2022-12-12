import { ReactNode } from "react";
import { CircleOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Text } from "../../../ui";

const PriceCardFeatures = ({ list }: Props) => {
  const renderList = list.map((ft, index) => {
    const isString = typeof ft === "string";
    return (
      <li key={index} className="feature__list">
        <Text varient="body2" size={12} secondary>
          <CircleOutlined />
        </Text>
        {isString ? (
          <Text varient="body2" paragraph secondary>
            {ft}
          </Text>
        ) : (
          ft
        )}
      </li>
    );
  });
  return <StyledList>{renderList}</StyledList>;
};
export default PriceCardFeatures;

interface Props {
  list: Array<string | ReactNode>;
}

const StyledList = styled("ul")`
  padding: 2rem 0;
  & .feature__list {
    display: flex;
    gap: 0.6rem;
    &:not(&:first-child) {
      margin-top: 1rem;
    }
  }
`;
