import Box from "../../../../components/box/Box";
import Card from "../../../../components/card/Card";
import { GridInnerContainer, GridItem } from "../../../../components/layout";
import Loading from "../../../../components/loading/Loading";
import ItemDescription from "../../../../components/user-profile/components/ItemDescription";
import TeamCardHeading from "../../../../components/user-profile/components/TeamCardHeading";
import useFetch from "../../../../hooks/useFetch";
import { Chip } from "../../../../ui";
import AvatarGroup from "../../../../ui/avatar/AvatarGroup";

const Team = () => {
  const { data, loading, error } = useFetch<Array<TeamAPI>>(
    "/6395f1e7c5b3a64f1bc908ba/teams/"
  );
  if (loading) return <Loading />;
  if (!data || error) return <></>;

  const renderTeamList = data.map((tm, index) => {
    return (
      <GridItem key={index} xs={12} md={6} lg={4}>
        <Card padding="1.2rem">
          <Box display="flex" flexDirection="column" space={1.2}>
            <TeamCardHeading avatar={tm.avatar} title={tm.title} />
            <ItemDescription
              description={tm.description}
              upto={150}
              words={70}
            />
            <Box
              display="flex"
              align="center"
              justify="space-between"
              wrap="wrap"
            >
              <AvatarGroup
                avatars={tm.avatarGroup}
                extraAvtar={tm.extraMembers}
                avatarSize={36}
              />
              <Box display="flex" align="center" justify="flex-end">
                {tm.chips.map((ch, index) => (
                  <Chip
                    key={index}
                    label={ch.title}
                    color={ch.color}
                    size="small"
                    skin="light"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Card>
      </GridItem>
    );
  });

  return (
    <GridInnerContainer spacing={1.6}>{renderTeamList}</GridInnerContainer>
  );
};
export default Team;

interface TeamAPI {
  title: string;
  avatar: string;
  description: string;
  extraMembers: number;
  avatarGroup: { avatar: string; name: string }[];
  chips: { title: string; color: string }[];
}
