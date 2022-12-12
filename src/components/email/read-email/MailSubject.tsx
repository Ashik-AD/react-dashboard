import  { FC } from "react";
import styled from "styled-components";
import { Chip, Text } from "../../../ui";
import Box from "../../box/Box";
import { labelColors, MailLabelColor } from "../EmailNav";
const MailSubject: FC<Props> = ({ subject, labels }) => {
  const renderLabelList = labels.map((label) => (
    <Chip
      label={label}
      size="small"
      skin="light"
      styles={{ textTransform: "capitalize", fontWeight: 500 }}
      color={labelColors[label as keyof MailLabelColor]}
      key={label}
    />
  ));
  return (
    <StyledMailSubject
      display="flex"
      align="center"
      space={0.4}
      py={16}
      wrap="wrap"
      flex={1}
    >
      <Text
        varient="body1"
        weight="medium"
        textOverflow="ellipsis"
        classes="subject"
      >
        {subject}
      </Text>
      <Box display="flex" space={0.4}>
        {renderLabelList}
      </Box>
    </StyledMailSubject>
  );
};
export default MailSubject;
interface Props {
  subject: string;
  labels: string[];
}

const StyledMailSubject = styled(Box)`
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      flex: 0 0 auto;
      width: 50%;
    }
    & .subject {
      width: 100%;
    }
  }
`;
