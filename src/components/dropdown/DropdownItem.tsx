import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import { Text } from "../../ui";

const DropdownItem: FC<Props> = ({ title, icon, titleAlt, onClickHandle }) => {
  const {
    theme: {
      mode: { name },
    },
  } = useTheme();
  return (
    <StyledDrowpdownItem
      onClick={onClickHandle}
      key={title}
      className={
        name === "dark"
          ? "theme-dark-active-fade-hover"
          : "theme-light-active-fade-hover"
      }
    >
      <span className="drp-icon">{icon}</span>
      {title ? (
        <Text
          paragraph
          varient="body1"
          textTransform="capitalize"
          styles={{ display: "flex" }}
        >
          {title}
        </Text>
      ) : (
        titleAlt
      )}
    </StyledDrowpdownItem>
  );
};
export default DropdownItem;
interface Props {
  title: string | "";
  icon?: ReactNode;
  titleAlt?: ReactNode;
  onClickHandle: () => void;
}

const StyledDrowpdownItem = styled("li")`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.6rem 1rem;
  word-wrap: nowrap;
  column-gap: 0.4rem;
  cursor: pointer;

  & > .drp-icon {
    display: flex;
    opacity: 0.6;
    svg {
      font-size: 24px;
    }
  }
`;

export const DropdownItemWithChildren = styled(StyledDrowpdownItem)`
  padding: 0;
`;
