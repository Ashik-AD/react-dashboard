import styled from "styled-components";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";

const PasswordRequirement = () => {
  return (
    <Box display="flex" flexDirection="column" space={0.6}>
      <Text varient="body1" secondary paragraph>
        Password Requirements:
      </Text>
      <StyledList>
        <li>
          <Text varient="body1" secondary paragraph>
            Minimum 8 characters long - the more, the better
          </Text>
        </li>
        <li>
          <Text varient="body1" secondary paragraph>
            At least one lowercase & one uppercase character
          </Text>
        </li>
        <li>
          <Text varient="body1" secondary paragraph>
            At least one number, symbol, or whitespace character
          </Text>
        </li>
      </StyledList>
    </Box>
  );
};
export default PasswordRequirement;

const StyledList = styled("ul")`
  & > li {
    list-style-type: disc;
    margin: 1rem 0;
    margin-left: 1rem;
  }
`;
