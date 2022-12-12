import { ContentCopy } from "@mui/icons-material";
import { FC } from "react";
import useFetch from "../../hooks/useFetch";
import { Chip, IconButton, Text } from "../../ui";
import Box from "../box/Box";
import ColorBox from "../box/ColorBox";
import Card from "../card/Card";
import Loading from "../loading/Loading";

const APIkeyList = () => {
  const { data, loading } = useFetch<Array<APIkeyListAPI>>(
    "/6395f1e7c5b3a64f1bc908ba/apiKey"
  );
  return (
    <Card padding="1.6rem">
      <Box display="flex" flexDirection="column" space={1.6}>
        <Text heading="h6">API Key List & Access</Text>
        <Text varient="body1" paragraph secondary>
          An API key is a simple encrypted string that identifies an application
          without any principal. They are useful for accessing public data
          anonymously, and are used to associate API requests with your project
          for quota and billing.
        </Text>
        {loading ? (
          <Loading />
        ) : (
          data?.map((item) => <ListItem {...item} key={item.id} />)
        )}
      </Box>
    </Card>
  );
};
export default APIkeyList;
interface APIkeyListAPI {
  id: number;
  apiName: string;
  permission: string;
  assignedkey: string;
  createdDate: string;
}

const ListItem: FC<APIkeyListAPI> = ({
  id,
  apiName,
  permission,
  assignedkey,
  createdDate,
}) => (
  <ColorBox
    className="overflow-hidden"
    padding={16}
    borderRadius="6px"
    display="flex"
    flexDirection="column"
    space={0.8}
    color="rgb(198 179 226)"
    transparency={1}
  >
    <Box display="flex" space={1.8} align="center">
      <Text heading="h6">{apiName}</Text>
      <Chip
        label={permission}
        skin="light"
        styles={{ textTransform: "uppercase" }}
        size="small"
      />
    </Box>
    <Box display="flex" align="center" space={0.8}>
      <Text varient="body1" weight="bold" secondary paragraph>
        {assignedkey}
      </Text>
      <IconButton
        varient="text"
        color="lightgray"
        fontSize={18}
        size={36}
        contentOpacity={5}
      >
        <ContentCopy />
      </IconButton>
    </Box>
    <Text varient="body1" paragraph secondary>
      Created on {createdDate}
    </Text>
  </ColorBox>
);
