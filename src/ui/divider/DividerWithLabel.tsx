import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import Text from "../text/Text";

const DividerWithLabel = ({ label }: { label: string }) => {
  const {
    theme: {
      mode: { name },
    },
  } = useTheme();
  return (
    <StyledDividerWithLable className="divider__with_label" theme={name}>
      <Text varient="body2" classes="divider__label">
        {label}
      </Text>
    </StyledDividerWithLable>
  );
};
export default DividerWithLabel;

const StyledDividerWithLable = styled("div")`
  width: 100%;
  position: relative;
  display: flex;
  align-item: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:before,
  &:after {
    position: relative;
    width: 100%;
    border-top: thin solid
      ${({ theme }) => (theme.name === "dark" ? "#a6a6a6d1" : "#4e4e4ed1")};
    content: "";
    top: 50%;
    transform: tranlateY(50%);
  }

  & .divider__label {
    display: inline-block;
    padding: 0 0.3rem;
  }
`;
