import Box from "../box/Box";
import { Text } from "../../ui";
import { FC } from "react";

const AppInfo: FC<Props> = ({ appName, title, avatar }) => (
  <Box display="flex" align="center" space={0.8} flex={0}>
    <img src={avatar} alt={appName} height={36} />
    <Box>
      <Text varient="body1" weight="bold" paragraph>
        {appName}
      </Text>
      <Text
        varient="body2"
        weight="medium"
        lineHeight="1.2rem"
        secondary
        paragraph
      >
        {title}
      </Text>
    </Box>
  </Box>
);
export default AppInfo;
interface Props {
  appName: string;
  title: string;
  avatar: string;
}
