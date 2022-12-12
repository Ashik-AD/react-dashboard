import { CalendarToday, RoomOutlined, WorkOutline } from "@mui/icons-material";
import { FC } from "react";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import { Avatar, Button, Text } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import ProfileBanner from "./ProfileBanner";

interface ProfileEssentialAPI {
  fullName: string;
  avatar: string;
  location: string;
  designation: string;
  joinedDate: string;
}

const ProfileHeading = () => {
  const { data } = useFetch<ProfileEssentialAPI>(
    "/6395f1e7c5b3a64f1bc908ba/profileEssential"
  );
  return (
    <Card className="overflow-hidden" pb="1rem">
      <ProfileBanner />
      {data ? <Details {...data} /> : ""}
    </Card>
  );
};
export default ProfileHeading;

const Details: FC<ProfileEssentialAPI> = (props) => {
  const { avatar, designation, fullName, joinedDate, location } = props;
  return (
    <StyledDetailWrapper
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      space={1.6}
      px={18}
      pt={32}
      mt={-58}
    >
      <Avatar src={avatar} alt={fullName} size={120} styles={{ top: -12 }} />
      <Box
        display="flex"
        flexDirection="column"
        justify="center"
        align="center"
        space={0.2}
        className="profile__heading-wrapper"
        flex={1}
      >
        <Text heading="h6" weight="bold">
          {fullName}
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          justify="center"
          wrap="wrap"
          space={1}
          mb={8}
          className="profile__heading-content"
        >
          <Box
            display="flex"
            justify="center"
            align="center"
            space={1}
            wrap="wrap"
          >
            <Box display="flex" space={0.4} align="center">
              <WorkOutline fontSize="small" />
              <Text varient="body1" weight="medium" secondary paragraph>
                {designation}
              </Text>
            </Box>
            <Box display="flex" space={0.4} align="center">
              <RoomOutlined fontSize="small" />
              <Text varient="body1" weight="medium" secondary paragraph>
                {location}
              </Text>
            </Box>
            <Box display="flex" space={0.4} align="center">
              <CalendarToday style={{ fontSize: 16 }} />
              <Text varient="body1" weight="medium" secondary paragraph>
                {joinedDate}
              </Text>
            </Box>
          </Box>
          <Box display="flex" justify="center" align="center">
            <Button>Connected</Button>
          </Box>
        </Box>
      </Box>
    </StyledDetailWrapper>
  );
};
const StyledDetailWrapper = styled(Box)`
  @media (min-width: 900px) {
    & {
      flex-direction: row;
      align-items: flex-end;
    }
    .profile__heading-main {
      flex-direction: row;
      align-items: initial;
      justify-content: initial;
    }
    .profile__heading-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    .profile__heading-wrapper {
      justify-content: initial;
      align-items: initial;
    }
  }
`;
