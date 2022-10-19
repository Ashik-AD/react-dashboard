import { Text } from "../../../ui";
export default function ({ title }: { title: string }) {
  return (
    <Text
      varient="subtitle2"
      textTransform="uppercase"
      lineHeight="50px"
      paragraph
      secondary
    >
      {title}
    </Text>
  );
}
