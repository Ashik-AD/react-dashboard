import React, { FC, useCallback, useMemo, useState } from "react";
import Box from "../../../../components/box/Box";
import Question from "../../../../components/faq/Question";
import SearchFanQ from "../../../../components/faq/SearchFanQ";
import { FandQAPI } from "../../../../components/faq/type";
import { Text } from "../../../../ui";
import { InfoOutlined } from "@mui/icons-material";

const FAQMain: FC<{ fanQ?: FandQAPI }> = ({ fanQ }) => {
  const [searchQnA, setSearchQnA] = useState("");

  const questionList = useMemo(() => {
    if (fanQ) {
      const qna = Object.values(fanQ);
      if (searchQnA) {
        const result = [];
        for (let k = 0; k < qna.length; k++) {
          let temp = [];
          for (let t = 0; t < qna[k].qandA.length; t++) {
            if (
              qna[k].qandA[t].question
                .toLowerCase()
                .includes(searchQnA.toLowerCase())
            ) {
              temp.push(qna[k].qandA[t]);
            }
          }
          if (temp.length > 0) {
            result.push({ ...qna[k], qandA: temp.concat([]) });
          }
          temp = [];
        }
        return result;
      }
      return qna;
    }
    return [];
  }, [fanQ, searchQnA]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQnA(event.target.value);
    },
    []
  );

  return (
    <>
      <SearchFanQ handleSearch={handleSearch} />
      {questionList.length > 0 && <Question questions={questionList} />}
      {searchQnA && questionList.length === 0 && (
        <Box display="flex" align="center" justify="center" py={32} space={0.6}>
          <InfoOutlined />
          <Text heading="h6" textTransform="capitalize" paragraph>
            No results found!
          </Text>
        </Box>
      )}
    </>
  );
};
export default FAQMain;
