import { FC } from "react";
import Box from "../../box/Box";
import { Avatar, Text } from "../../../ui";
import styled from "styled-components";
const Sender: FC<Props> = ({ avatar_src, full_name, subject }) => {
  return (
    <StyledSender display="flex" align="center" space={0.6} flex={1}>
      <Avatar src={avatar_src} alt={full_name} size={35} />
      <Box display="flex" align="center" space={0.8} className="user-meta">
        <Text varient="body1" weight="medium" textOverflow="ellipsis">
          {full_name}
        </Text>{" "}
        <Text varient="body2" weight="medium" secondary textOverflow="ellipsis">
          {subject}
        </Text>
      </Box>
    </StyledSender>
  );
};
export default Sender;

interface Props {
  avatar_src: string;
  full_name: string;
  subject: string;
}

const StyledSender = styled(Box)`
  & .user-meta {
    @media screen and (max-width: 600px) {
      width: 60px;
      flex-wrap: wrap;
      flex: 1;
      gap: 8px;
      overflow: hidden;
    }
  }
`;
