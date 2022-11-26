import { Text } from "../../../ui";
const InputErrorMsg = ({ msg }: { msg: string }) => (
  <Text
    varient="body2"
    color="error"
    styles={{ paddingLeft: 8, marginTop: 4 }}
    paragraph
  >
    {msg}
  </Text>
);

export default InputErrorMsg;
