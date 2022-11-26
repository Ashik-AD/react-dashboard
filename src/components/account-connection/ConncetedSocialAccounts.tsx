import { FC } from "react";
import { IconButton } from "../../ui";
import Box from "../box/Box";
import AppInfo from "./AppInfo";
import Title from "./Title";
import { DeleteOutline, LinkOutlined } from "@mui/icons-material";
import { AccountConnectionOption } from "./type";

const ConnectedSocialAccounts: FC<{ list: AccountConnectionOption[] }> = ({
  list,
}) => {
  return (
    <Box>
      <Title
        title="Social accounts"
        description="Display content from social accounts on your site"
      />
      <Box display="flex" flexDirection="column" space={1.8}>
        {list &&
          list.map((ap) => (
            <Box
              key={ap.id}
              display="flex"
              align="center"
              justify="space-between"
              space={1}
            >
              <AppInfo
                avatar={ap.avatar}
                appName={ap.name}
                title={ap.connected ? ap.uid! : "Not Connected"}
              />
              <>
                {ap.connected ? (
                  <IconButton
                    varient="outlined"
                    color="error"
                    contentOpacity={6}
                    fontSize={20}
                  >
                    <DeleteOutline />
                  </IconButton>
                ) : (
                  <IconButton
                    varient="outlined"
                    contentOpacity={6}
                    fontSize={20}
                  >
                    <LinkOutlined />
                  </IconButton>
                )}
              </>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
export default ConnectedSocialAccounts;
