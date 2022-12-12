import {
  PersonAddAltOutlined,
  SentimentSatisfiedAltOutlined,
} from "@mui/icons-material";
import useFetch from "../../hooks/useFetch";
import { IconButton } from "../../ui";
import formatNumber from "../../utils/formatNumber";
import Box from "../box/Box";
import Card from "../card/Card";
import CardTitle from "../card/titles/CardTitle";
import AvatarWithTitle from "./components/AvatarWithTitle";
import ViewAllText from "./components/ViewAllText";

interface ConnectionsAPI {
  id: number;
  name: string;
  isFriend: boolean;
  totalConnection: number;
  avatar: string;
  avatarColor?: string;
}

const ConnectionList = () => {
  const { data, loading } = useFetch<Array<ConnectionsAPI>>(
    "/6395f1e7c5b3a64f1bc908ba/connections"
  );
  if (loading || !data) return <></>;

  const renderConnections = data.slice(0, 5).map((cn) => {
    const connections = formatNumber(cn.totalConnection, 1000);
    return (
      <Box key={cn.id} display="flex" align="center" justify="space-between">
        <AvatarWithTitle
          title={cn.name}
          subtitle={`${connections} Connections`}
          avatarsrc={cn.avatar}
          avatarColor={cn.avatarColor}
        />
        {
          <IconButton
            varient={cn.isFriend ? "contained" : "outlined"}
            roundness="rounded"
            size={35}
            fontSize={21}
          >
            {cn.isFriend ? (
              <SentimentSatisfiedAltOutlined />
            ) : (
              <PersonAddAltOutlined />
            )}
          </IconButton>
        }
      </Box>
    );
  });
  return (
    <Card pb="1.2rem">
      <CardTitle title="Connections" />
      <Box display="flex" flexDirection="column" px={20} space={1.4}>
        {renderConnections}
      </Box>
      <ViewAllText
        text="connections"
        url="./"
        style={{ marginTop: 12, display: "block" }}
      />
    </Card>
  );
};
export default ConnectionList;
