import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";
import SectionTitle from "../SectionTitle";

const PersonalInfo = ({ userName }: { userName: string }) => {
  const infoList = [
    {
      icon: "mdi:email-outline",
      label: `${userName.replaceAll(" ", "_")}@email.com`,
    },
    {
      icon: "mdi:phone-outline",
      label: "+977-98-2-4965817",
    },
    {
      icon: "mdi:github",
      label: userName,
      link: "http://github.com/Ashik-AD",
    },
    {
      icon: "mdi:clock-time-five-outline",
      label: "Sun - Fri 10AM - 8PM",
    },
  ];
  const renderInfoList = infoList.map((info, index) => (
    <StyledInfoList key={index}>
      {info.link ? (
        <a href={info.link} className="info-list">
          <Text varient="body2" lineHeight="0px" size={20}>
            <Icon icon={info.icon} />
          </Text>
          <Text varient="body2" skinColor>
            {info.label}
          </Text>
        </a>
      ) : (
        <div className="info-list">
          <Text varient="body2" size={20} lineHeight="0px">
            <Icon icon={info.icon} />
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
