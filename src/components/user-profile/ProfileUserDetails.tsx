import useFetch from "../../hooks/useFetch";
import { Text } from "../../ui";
import formatNumber from "../../utils/formatNumber";
import Box from "../box/Box";
import Card from "../card/Card";
import { GridInnerContainer, GridItem } from "../layout";
import Loading from "../loading/Loading";
import ProfileAPI from "./type/profile";

const ProfileUserDetails = () => {
  const { data, loading } = useFetch<ProfileAPI>(
    "/6395f1e7c5b3a64f1bc908ba/profile/"
  );
  if (loading) return <Loading />;
  return (
    <GridInnerContainer rowSpacing={1.6}>
      <GridItem xs={12}>
        <Card padding="1.4rem">
          <Box display="flex" flexDirection="column" space={0.8}>
            <Separate title="About" />
            <Box display="flex" flexDirection="column" space={1} py={8}>
              <Detail label="Full Name" value={data?.about.fullName!} />
              <Detail label="Status" value={data?.about.status!} />
              <Detail label="Role" value={data?.about.role!} />
              <Detail label="Country" value={data?.about.address.country!} />
              <Detail label="Language" value={data?.about.language!} />
            </Box>
            <Separate title="contacts" />
            <Box display="flex" flexDirection="column" space={1} py={8}>
              <Detail label="Phone no." value={data?.about.contacts.phone!} />
              <Detail label="Email" value={data?.about.contacts.email!} />
              {data?.about.contacts.others?.map((item) => (
                <Detail key={item.id} label={item.type} value={item.value} />
              ))}
            </Box>
            <Separate title="Teams" />
            <Box display="flex" flexDirection="column" space={1} py={8}>
              {data?.teams?.map((item) => (
                <Detail
                  key={item.id}
                  label={item.title}
                  value={`${formatNumber(item.totalMember, 1000, {
                    toFixed: 1,
                  })} members`}
                />
              ))}
            </Box>
          </Box>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card padding="1.4rem">
          <Separate title="overview" />
          <Box display="flex" flexDirection="column" space={0.8}>
            {data?.overview.map((item) => (
              <Detail
                key={item.id}
                label={item.title}
                value={`${formatNumber(item.total, 1000, { toFixed: 1 })}`}
              />
            ))}
          </Box>
        </Card>
      </GridItem>
    </GridInnerContainer>
  );
};
export default ProfileUserDetails;

const Detail = ({ label, value }: { label: string; value: string }) => (
  <Box display="flex" align="center" space={0.6}>
    <Text varient="body1" weight="bold" secondary paragraph>
      {label}:
    </Text>
    <Text varient="body1" textTransform="capitalize" secondary paragraph>
      {value}
    </Text>
  </Box>
);
const Separate = ({ title }: { title: string }) => (
  <Text
    varient="caption"
    textTransform="uppercase"
    weight="medium"
    lineHeight="32px"
    skinColor
    secondary
  >
    {title}
  </Text>
);
