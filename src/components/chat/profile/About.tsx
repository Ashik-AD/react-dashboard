import { FC } from "react";
import { Text } from "../../../ui";
import Box from "../../box/Box";
import SectionTitle from "./SectionTitle";

const ProfileAbout: FC<Props> = ({ about }) => {
  return (
    <Box mb={24}>
      <SectionTitle title="about" />
      <Text varient="body2" weight="medium">
        {about}
      </Text>
    </Box>
  );
};
export default ProfileAbout;

interface Props {
  about: string;
}
