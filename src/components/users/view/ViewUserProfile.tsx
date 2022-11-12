import { BusinessCenterOutlined, Done } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import type { UserList } from "../../../features/users/types/definition";
import { Avatar, Button, Chip, CustomAvatar, Divider, Text } from "../../../ui";
import Box from "../../box/Box";
import Card from "../../card/Card";
import userRole from "../user-role/userRole.list";

const ViewUserProfile: FC<UserList> = (props) => {
  const {
    avatar,
    avatarColor,
    username,
    fullName,
    role,
    email,
    contact,
    status,
    country,
  } = props;
  return (
    <Card padding="1rem" py="1.4rem">
      <Box
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        pt={36}
        space={1}
      >
        {avatar ? (
          <Avatar src={avatar} alt={username} size={120} />
        ) : (
          <CustomAvatar color={avatarColor} size={120}>
            {fullName ? fullName?.match(/\b(\w)/g)?.join("") : ""}
          </CustomAvatar>
        )}
        <Box display="flex" flexDirection="column" align="center" space={0.4}>
          <Text heading="h6">{fullName}</Text>
          <Chip
            label={role}
            size="small"
            skin="light"
            color={userRole[role]?.color}
            styles={{
              textTransform: "capitalize",
              fontSize: "0.775rem",
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>
      <ProjectsCompletetion />
      <Box display="flex" flexDirection="column" padding={1}>
        <Text heading="h6">Details</Text>
        <Divider styles={{ margin: "0.8rem 0px" }} />
        <Box display="flex" flexDirection="column" space={0.6}>
          <DetailItem title="Username" subTitle={`@${username}`} />
          <DetailItem title="Billing Email" subTitle={email} />
          <DetailItem
            title="Status"
            children={
              <Chip
                label={status}
                color={
                  status === "active"
                    ? "info"
                    : status === "pending"
                    ? "warning"
                    : "lightgray"
                }
                skin="light"
                size="small"
                styles={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  minHeight: "0px",
                  height: "23px",
                }}
              />
            }
          />
          <DetailItem
            title="Role"
            children={
              <Text varient="body2" textTransform="capitalize" secondary>
                {role}
              </Text>
            }
          />
          <DetailItem title="Tax ID" subTitle="Tax-8329" />
          <DetailItem title="Contact" subTitle={contact} />
          <DetailItem title="Language" subTitle="English" />
          <DetailItem title="Coutry" subTitle={country} />
        </Box>
      </Box>
      <Box display="flex" align="center" justify="center" space={1} pt={24}>
        <Button>Edit</Button>
        <Button varient="outlined">suspend</Button>
      </Box>
    </Card>
  );
};
export default ViewUserProfile;

const ProjectsCompletetion = () => {
  return (
    <Box
      display="flex"
      align="center"
      justify="space-between"
      padding={1}
      my={28}
    >
      <ProjectItem title="Task Done" total="1.23k" icon={<Done />} />
      <ProjectItem
        title="Project Done"
        total="534"
        icon={<BusinessCenterOutlined />}
      />
    </Box>
  );
};
const ProjectItem = ({
  icon,
  title,
  total,
}: {
  icon: ReactNode;
  title: string;
  total: string | string;
}) => {
  return (
    <Box display="flex" align="center" space={0.8}>
      <CustomAvatar skin="light" varient="rounded" size={40} color="skin">
        <Text lineHeight="0px" skinColor>
          {icon}
        </Text>
      </CustomAvatar>
      <Text paragraph>
        <Text heading="h6">{total}</Text>
        <Text varient="body2" lineHeight="0.8rem">
          {title}
        </Text>
      </Text>
    </Box>
  );
};

const DetailItem = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle?: string;
  children?: ReactNode;
}) => {
  return (
    <Box display="flex" space={0.6} align="flex-end">
      <Text varient="body2" weight="medium" paragraph>
        {title}:
      </Text>
      {subTitle ? (
        <Text varient="body2" secondary paragraph>
          {subTitle}
        </Text>
      ) : (
        ""
      )}
      {children ? children : ""}
    </Box>
  );
};
