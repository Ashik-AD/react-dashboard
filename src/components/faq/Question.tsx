import { Icon } from "@iconify/react";
import { FC, useMemo, useState } from "react";
import styled from "styled-components";
import {
  CustomAvatar,
  Tab,
  TabContent,
  TabItem,
  TabList,
  Text,
} from "../../ui";
import Box from "../box/Box";
import { GridInnerContainer, GridItem } from "../layout";
import QuestionList from "./QuestionList";
import type { QuestionProp } from "./type";

const Question: FC<QuestionProp> = ({ questions }) => {
  const [currentQnA, setCurrentQnA] = useState({
    id: questions[0]?.id,
    index: 0,
  });

  const renderTabItem = useMemo(() => {
    return questions.map((item, index) => (
      <TabItem
        label={item.title}
        key={item.id}
        value={index}
        icon={<Icon icon={item.icon} />}
        onClick={() => setCurrentQnA({ id: item.id, index: index })}
      />
    ));
  }, [questions]);

  return (
    <XD>
      <Tab direction="vertical" value={currentQnA.index}>
        <GridInnerContainer spacing={1.6}>
          <GridItem xs={12} md={3}>
            <TabList varient="vertical">{renderTabItem}</TabList>
            <img
              src="https://i.ibb.co/fNfp9vW/help-desk.png"
              alt="john is helping"
              width={"100%"}
            />
          </GridItem>
          <GridItem xs={12} md={9}>
            {questions.map((qn, index) => (
              <TabContent tabIndex={index} key={qn.id}>
                {/* Queston title and subtitle */}
                {qn.id === currentQnA.id && (
                  <Box display="flex" space={1} align="center" mb={16}>
                    <CustomAvatar skin="light" color="skin" varient="rounded">
                      <Icon icon={qn.icon} />
                    </CustomAvatar>
                    <Box>
                      <Text heading="h5">{qn.title}</Text>
                      <Text varient="body1" paragraph secondary>
                        {qn.subtitle}
                      </Text>
                    </Box>
                  </Box>
                )}
                {/* Queston List */}
                {currentQnA.id === qn.id && <QuestionList list={qn.qandA} />}
              </TabContent>
            ))}
          </GridItem>
        </GridInnerContainer>
      </Tab>
    </XD>
  );
};
export default Question;

const XD = styled("div")`
  & button.tab-item {
    text-align: left !important;
    justify-content: flex-start;
    padding-top: 8px;
    padding-bottom: 8px;

    svg {
      // font-size: 18px;
    }

    &:not(.tab-item-active) {
      opacity: 0.7;
    }
  }
`;
