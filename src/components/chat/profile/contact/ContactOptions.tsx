import {
  BlockOutlined,
  BookmarkBorderRounded,
  DeleteOutlined,
  PhotoOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import Box from "../../../box/Box";
import ProfileOptions from "../Options";
import SectionTitle from "../SectionTitle";

const ContactOptions = () => {
  const cntOptions = [
    {
      icon: <BookmarkBorderRounded />,
      label: "Add tag",
    },
    {
      icon: <StarBorderOutlined />,
      label: "important contact",
    },
    {
      icon: <PhotoOutlined />,
      label: "shared media",
    },
    {
      icon: <DeleteOutlined />,
      label: "delete contact",
    },
    {
      icon: <BlockOutlined />,
      label: "block contact",
    },
  ];
  return <ProfileOptions title="options" options={cntOptions} />;
};
export default ContactOptions;
