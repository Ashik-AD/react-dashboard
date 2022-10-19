import { FC } from "react";
import styled from "styled-components";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import SectionTitle from "./SectionTitle";

const ProfileOptions: FC<Props> = ({ options, title }) => {
  const renderOptions = options.map((opt, index) => (
    <li className="profile-option-item" key={index}>
      <Box display="flex" align="center" space={0.8} padding={8}>
        <Text size={22} lineHeight="0px">
          {opt.icon}
        </Text>
        <Text varient="body2" weight="medium" textTransform="capitalize">
          {opt.label}
        </Text>
      </Box>
    </li>
  ));

  return (
    <>
      <SectionTitle title={title} />
      <StyledOptionWpr
        as={"ul" as any}
        display="flex"
        flexDirection="column"
        mt={26}
      >
        {renderOptions}
      </StyledOptionWpr>
    </>
  );
};
export default ProfileOptions;
interface Props {
  options: {
    icon?: JSX.Element;
    label: string;
    onClick?: () => void;
  }[];
  title: string;
}
const StyledOptionWpr = styled(Box)`
  & > .profile-option-item {
    cursor: pointer;
    border-radius: 2px;
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
