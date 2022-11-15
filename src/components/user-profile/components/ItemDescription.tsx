import { Text } from "../../../ui";

const ItemDescription = ({
  description,
  upto,
  words,
}: {
  description: string;
  upto: number;
  words: number;
}) => {
  if (!description) return <></>;
  const normalize =
    description.length > upto
      ? description.slice(0, words) + "..."
      : description;
  return (
    <Text varient="body1" paragraph secondary>
      {normalize}
    </Text>
  );
};
export default ItemDescription;
