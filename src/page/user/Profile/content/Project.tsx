import { ChatBubbleOutlineRounded } from "@mui/icons-material";
import Box from "../../../../components/box/Box";
import Card from "../../../../components/card/Card";
import { GridInnerContainer, GridItem } from "../../../../components/layout";
import Loading from "../../../../components/loading/Loading";
import ProjectBudget from "../../../../components/user-profile/components/ProjectBudget";
import ProjectDate from "../../../../components/user-profile/components/ProjectDate";
import ProjectDescription from "../../../../components/user-profile/components/ItemDescription";
import ProjectHeading from "../../../../components/user-profile/components/ProjectHeading";
import ProjectMemberAvatar from "../../../../components/user-profile/components/ProjectMemberAvatar";
import ProjectProgress from "../../../../components/user-profile/components/ProjectProgress";
import useFetch from "../../../../hooks/useFetch";
import { Chip, Divider, Text } from "../../../../ui";

const Project = () => {
  const { data, loading, error } = useFetch<Array<ProjectAPI>>(
    "/6395f1e7c5b3a64f1bc908ba/projects"
  );
  if (loading) return <Loading />;
  if (!data || error) return <></>;

  const renderProjectList = data.map((pr) => (
    <GridItem xs={12} md={6} lg={4} key={pr.id}>
      <Card py="1.6rem">
        <Box display="flex" flexDirection="column" space={0.8} px={20}>
          <ProjectHeading
            title={pr.title}
            client={pr.client}
            avatar={pr.avatar}
            id={pr.id}
          />
          <Box display="flex" justify="space-between" mt={6}>
            <ProjectBudget spent={pr.budgetSpent} total={pr.budget} />
            <ProjectDate start={pr.startDate} end={pr.deadline} />
          </Box>
          <ProjectDescription
            description={pr.description}
            upto={100}
            words={50}
          />
        </Box>
        <Divider styles={{ margin: "1rem 0" }} />
        <Box display="flex" flexDirection="column" space={0.8} px={20}>
          <Box display="flex" justify="space-between" align="center">
            <Box display="flex" space={0.2}>
              <Text varient="body1" weight="bold" paragraph>
                All Hours:
              </Text>
              <Text varient="body1" secondary paragraph>
                {pr.hours}
              </Text>
            </Box>
            <Chip
              label={`${pr.daysLeft} Days left`}
              size="small"
              skin="light"
            />
          </Box>
          <ProjectProgress
            totalTask={pr.totalTask}
            completedTask={pr.completedTask}
          />
          <Box display="flex" justify="space-between" align="center">
            <Box display="flex" align="center" space={0.6}>
              <ProjectMemberAvatar membersAvatar={pr.avatarGroup} />
              <Text varient="body2" secondary paragraph>
                {pr.members}
              </Text>
            </Box>
            <Text
              varient="body1"
              lineHeight="0px"
              styles={{ display: "flex", alignItems: "center" }}
              paragraph
              secondary
            >
              <ChatBubbleOutlineRounded
                style={{ fontSize: 21, marginRight: 4 }}
              />
              {pr.comments}
            </Text>
          </Box>
        </Box>
      </Card>
    </GridItem>
  ));
  return (
    <GridInnerContainer spacing={1.4}>{renderProjectList}</GridInnerContainer>
  );
};
export default Project;

interface ProjectAPI {
  id: number;
  title: string;
  client: string;
  description: string;
  avatar: string;
  comments: number;
  members: string;
  budget: string;
  totalTask: number;
  task: string;
  hours: string;
  completedTask: number;
  budgetSpent: string;
  chipColor: string;
  deadline: string;
  startDate: string;
  daysLeft: number;
  avatarGroup: { avatar: string; name: string }[];
}
