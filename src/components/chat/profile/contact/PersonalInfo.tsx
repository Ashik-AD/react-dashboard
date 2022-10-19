import {
  AccessTime,
  LocalPhoneOutlined,
  MailOutline,
} from "@mui/icons-material";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";
import SectionTitle from "../SectionTitle";

const PersonalInfo = ({ userName }: { userName: string }) => {
  const infoList = [
    {
      icon: <MailOutline />,
      label: `${userName.replaceAll(" ", "_")}@email.com`,
    },
    {
      icon: <LocalPhoneOutlined />,
      label: "+977-98-2-4965817",
    },
    {
      icon: <FiGithub />,
      label: userName,
      link: "http://github.com/Ashik-AD",
    },
    {
      icon: <AccessTime />,
      label: "Sun - Fri 10AM - 8PM",
    },
  ];
  const renderInfoList = infoList.map((info, index) => (
    <StyledInfoList key={index}>
      {info.link ? (
        <a href={info.link} className="info-list">
          <Text varient="body2" lineHeight="0px" size={20}>
            {info.icon}
          </Text>
          <Text varient="body2" skinColor>
            {info.label}
          </Text>
        </a>
      ) : (
        <div className="info-list">
          <Text varient="body2" size={20} lineHeight="0px">
            {info.icon}
          </Text>
          <Text varient="body2">{info.label}</Text>
        </div>
      )}
    </StyledInfoList>
  ));
  return (
    <Box my={20}>
      <SectionTitle title="personal information" />
      {renderInfoList}
    </Box>
  );
};
export default PersonalInfo;

const StyledInfoList = styled("li")`
  & .info-list {
    display: flex;
    column-gap: 8px;
    padding: 6px 8px;
    margin: 4px 0px;
    align-items: center;
    font-weight: 600;
  }
`;
