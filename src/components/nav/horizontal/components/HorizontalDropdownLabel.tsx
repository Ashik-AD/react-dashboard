import { Icon } from "@iconify/react";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";

interface Props {
  label: string;
  path: string;
  icon?: ReactNode;
}
const HorizontalDropdownLabel: FC<Props> = ({ label, path, icon }) => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(path);
  return (
    <StyledNavLabel
      display="flex"
      align="center"
      justify="space-between"
      padding={"0.6rem 1rem"}
      className={`horizontal_dropdown_nav_label bg_secondary--hover ${
        isActive ? "nav_label--active bg_secondary--fade" : ""
      }`}
    >
      <Box display="flex" align="center" space={0.4}>
        <Text size={22}>{icon}</Text>
        <Text varient="body1" paragraph>
          {label}
        </Text>
      </Box>
      <Icon icon="mdi:chevron-right" fontSize={18} />
    </StyledNavLabel>
  );
};
export default HorizontalDropdownLabel;

const StyledNavLabel = styled(Box)`
  cursor: pointer;
`;
