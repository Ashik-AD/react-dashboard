import { FC } from "react";
import Accordion from "../../ui/accordion/Accordion";
import AccordionGroup from "../../ui/accordion/AccordionGroup";

const QuestionList: FC<Props> = ({ list }) => {
  const renderList = list.map((qn, index) => (
    <Accordion key={qn.id} title={`Q${index + 1}: ${qn.question}`}>
      {qn.answer}
    </Accordion>
  ));
  return <AccordionGroup>{renderList}</AccordionGroup>;
};
export default QuestionList;

interface Props {
  list: {
    id: string;
    question: string;
    answer: string;
  }[];
}
