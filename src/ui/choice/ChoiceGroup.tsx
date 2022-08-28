import { FC, ReactNode } from "react";
import { Flex } from "../../components/layout";
import { Direction, Gap } from "../../components/layout/flex/flex-type";

interface PropsType {
  children: ReactNode;
  direction?: Direction;
  gap?: Gap;
}

const ChoiceGroup: FC<PropsType> = (props) => {
  const { children, direction, gap } = props;
  return (
    <Flex direction={direction} gap={gap}>
      {children}
    </Flex>
  );
};

export default ChoiceGroup;
