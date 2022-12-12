import useFetch from "../../hooks/useFetch";
import { Chip } from "../../ui";
import Box from "../box/Box";
import Card from "../card/Card";
import CardTitle from "../card/titles/CardTitle";
import AvatarWithName from "./components/AvatarWithTitle";
import ViewAllText from "./components/ViewAllText";

interface TeamAPI {
  id: number;
  teamName: string;
  totalMember: number;
  avatar: string;
  role: string;
  roleColor: string;
}
const TeamList = () => {
  const { data, loading, error } = useFetch<Array<TeamAPI>>(
    "/6395f1e7c5b3a64f1bc908ba/teamList/"
  );
  if (loading || error || !data) return <></>;

  const renderTeams = data.map((ts) => (
    <Box key={ts.id} display="flex" align="center" justify="space-between">
      <AvatarWithName
        avatarsrc={ts.avatar}
        title={ts.teamName}
        subtitle={`${ts.totalMember} members`}
        avatarColor={ts.roleColor}
      />
      <Chip label={ts.role} size="small" skin="light" color={ts.roleColor} />
    </Box>
  ));
  return (
    <Card pb="1.2rem">
      <CardTitle title="Teams" />
      <Box display="flex" flexDirection="column" space={0.8} px={20}>
        {renderTeams}
      </Box>
      <ViewAllText
        text="teams"
        url="./"
        style={{ marginTop: 12, display: "block" }}
      />
    </Card>
  );
};
export default TeamList;
