import { LocalPhoneOutlined, MailOutline } from "@mui/icons-material";
import { ReactNode } from "react";
import { Chip, CustomAvatar, Text } from "../../ui";
import Box from "../box/Box";
import ColorBox from "../box/ColorBox";
import { GridInnerContainer, GridItem } from "../layout";

const FAQFooter = () => {
  return (
    <Box display="flex" flexDirection="column" pt={36}>
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        space={0.8}
        px={20}
        mb={48}
      >
        <Chip label="Question" size="small" skin="light" />
        <Text heading="h5" align="center">
          You still have a question?
        </Text>
        <Text varient="body2" align="center" paragraph secondary>
          If you cannot find a question in our FAQ, you can always contact us.
          We will answer to you shortly!
        </Text>
      </Box>
      <GridInnerContainer spacing={1.4}>
        <GridItem xs={12} md={6}>
          <ContactCard
            icon={<LocalPhoneOutlined />}
            title="+ (977) 9824965817"
            subtitle="We are always happy to help!"
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <ContactCard
            icon={<MailOutline />}
            title="helloworld@email.com"
            subtitle="Best you to get anwser faster"
          />
        </GridItem>
      </GridInnerContainer>
    </Box>
  );
};
export default FAQFooter;

const ContactCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) => (
  <ColorBox
    display="flex"
    flexDirection="column"
    align="center"
    justify="center"
    backgroundTheme="foreground"
    space={0.8}
    py={32}
    px={20}
    borderRadius="8px"
  >
    <CustomAvatar varient="rounded" skin="light" color="skin">
      {icon}
    </CustomAvatar>
    <Text heading="h5" align="center">
      {title}
    </Text>
    <Text varient="body1" align="center" secondary paragraph>
      {subtitle}
    </Text>
  </ColorBox>
);
