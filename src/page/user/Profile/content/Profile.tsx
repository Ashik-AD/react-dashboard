import { GridInnerContainer, GridItem } from "../../../../components/layout";
import ConnectionList from "../../../../components/user-profile/ConnectionList";
import ProfileUserDetails from "../../../../components/user-profile/ProfileUserDetails";
import TeamList from "../../../../components/user-profile/TeamList";
import UserActivity from "../../../../components/users/view/UserActivity";

const Profile = () => {
  return (
    <GridInnerContainer spacing={1.6}>
      <GridItem xs={12} md={5}>
        <ProfileUserDetails />
      </GridItem>
      <GridItem xs={12} md={7}>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12}>
            <UserActivity />
          </GridItem>
          <GridItem xs={12} md={6}>
            <ConnectionList />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TeamList />
          </GridItem>
        </GridInnerContainer>
      </GridItem>
    </GridInnerContainer>
  );
};
export default Profile;
