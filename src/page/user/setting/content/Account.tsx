import Box from "../../../../components/box/Box";
import Loading from "../../../../components/loading/Loading";
import DeleteAccount from "../../../../components/user-profile/DeleteAccount";
import ProfileSettingForm from "../../../../components/user-profile/ProfileSettingForm";
import { ProfileSettings } from "../../../../components/user-profile/type/forms";
import useFetch from "../../../../hooks/useFetch";

const Account = () => {
  const { data, loading } = useFetch<ProfileSettings>(
    "/6395f1e7c5b3a64f1bc908ba/profileFormSetting"
  );
  if (loading) return <Loading />;
  return (
    <Box display="flex" space={1.6} flexDirection="column">
      <ProfileSettingForm {...data} />
      <DeleteAccount />
    </Box>
  );
};
export default Account;
