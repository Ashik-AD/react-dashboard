import { ReactNode } from "react";
import Box from "../../box/Box";
import Card from "../Card";
import CardTitle from "../titles/CardTitle";

const AdvanceCard = <T extends unknown>({
  title,
  renderItem,
  keyExtract,
  data,
}: PropsType<T>) => {
  return (
    <Card>
      <CardTitle title={title} />
      <Box
        className="advance-card-box"
        display="flex"
        flexDirection="column"
        space={0.5}
      >
        {data.map((item) => (
          <Box key={keyExtract(item)}>{renderItem(item)}</Box>
        ))}
      </Box>
    </Card>
  );
};

interface PropsType<T> {
  renderItem: (item: T) => ReactNode;
  keyExtract: (item: T) => string;
  data: T[];
  title: string;
}

export default AdvanceCard;
