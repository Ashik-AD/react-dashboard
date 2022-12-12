import {
  HowToRegOutlined,
  MailOutline,
  PersonAddOutlined,
} from "@mui/icons-material";
import Box from "../../../../components/box/Box";
import Card from "../../../../components/card/Card";
import { GridInnerContainer, GridItem } from "../../../../components/layout";
import Loading from "../../../../components/loading/Loading";
import ConnectionDropdown from "../../../../components/user-profile/components/ConnectionDropdown";
import useFetch from "../../../../hooks/useFetch";
import {
  Avatar,
  Button,
  Chip,
  IconButton,
  Text,
} from "../../../../ui";

const Connections = () => {
  const { data, loading, error } = useFetch<ConnectionAPI[]>(
    "/6395f1e7c5b3a64f1bc908ba/connections"
  );

  if (loading) return <Loading />;
  if (error || !data) return <></>;

  const renderConnectionList = data.map((cn) => (
    <GridItem xs={12} sm={6} md={4} key={cn.id}>
      <Card padding="1rem">
        <Box
          display="flex"
          flexDirection="column"
          justify="center"
          align="center"
          space={1.6}
          position="relative"
          py={8}
        >
          <Avatar src={cn.avatar} alt={cn.name} size={100} />
          <Box>
            <Text heading="h6" weight="bold" align="center" paragraph>
              {cn.name}
            </Text>
            <Text varient="body1" align="center" secondary paragraph>
              {cn.designation}
            </Text>
          </Box>
          <Box display="flex" space={1} wrap="wrap">
            {cn.chips.map((chip) => (
              <Chip
                key={chip.title}
                label={chip.title}
                color={chip.color}
                size="small"
                skin="light"
              />
            ))}
          </Box>
          <Box width="100%" display="flex" justify="space-evenly">
            <Stats title="Projects" stat={cn.projects} />
            <Stats title="Tasks" stat={cn.tasks} />
            <Stats title="Connections" stat={cn.connections} />
          </Box>
          <Box display="flex" align="center" space={1}>
            <Button varient={cn.isConnected ? "contained" : "outlined"}>
              {cn.isConnected ? (
                <HowToRegOutlined fontSize="small" />
              ) : (
                <PersonAddOutlined fontSize="small" />
              )}
              {cn.isConnected ? "Connected" : "connect"}
            </Button>
            <IconButton
              varient="outlined"
              roundness="rounded"
              size={36}
              fontSize={21}
            >
              <MailOutline />
            </IconButton>
          </Box>
          <Box position="absolute" style={{ top: 0, right: 4 }}>
            <ConnectionDropdown />
          </Box>
        </Box>
      </Card>
    </GridItem>
  ));

  return (
    <GridInnerContainer spacing={1.6}>
      {renderConnectionList}
    </GridInnerContainer>
  );
};
export default Connections;

const Stats = ({ title, stat }: { title: string; stat: string | number }) => (
  <Box>
    <Text heading="h5" align="center">
      {stat}
    </Text>
    <Text varient="body1" align="center" paragraph secondary>
      {title}
    </Text>
  </Box>
);

interface ConnectionAPI {
  id: number;
  tasks: string;
  projects: string;
  isConnected: boolean;
  connections: string;
  name: string;
  designation: string;
  avatar: string;
  chips: { color: string; title: string }[];
}
