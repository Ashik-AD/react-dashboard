import { FC } from "react";
import { Status } from "../../../../features/chats/definition";
import { Choice, ChoiceGroup } from "../../../../ui";
import Box from "../../../box/Box";
import SectionTitle from "../SectionTitle";

const ChangeStatus: FC<Props> = ({ status, onChangeStatus }) => {
  return (
    <Box my={16}>
      <SectionTitle title="status" />
      <ChoiceGroup direction="column">
        <Choice
          label="Online"
          name="user-status"
          value={"Online"}
          selected={status}
          onChange={onChangeStatus}
        />
        <Choice
          label="Away"
          name="user-status"
          value={"Away"}
          selected={status}
          onChange={onChangeStatus}
        />
        <Choice
          label="Do not Disturb"
          name="user-status"
          value={"Dnd"}
          selected={status}
          onChange={onChangeStatus}
        />
        <Choice
          label="Offline"
          name="user-status"
          value={"Offline"}
          selected={status}
          onChange={onChangeStatus}
        />
      </ChoiceGroup>
    </Box>
  );
};
export default ChangeStatus;

interface Props {
  status: Status;
  onChangeStatus: (status: string) => void;
}
