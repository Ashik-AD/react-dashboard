import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import {
  CheckBoxOutlineBlank,
  CheckBox,
  DeleteOutline,
  IndeterminateCheckBox,
  MailOutlineRounded,
  Refresh,
  MoreVert,
} from "@mui/icons-material";
import styled from "styled-components";
import { Checkbox } from "../../ui";
import LablesDropdown from "./toolbars/LabelsDropdown";
import {
  addLabel,
  moveToSpamMultiple,
  readMultipleEmail,
  removeMultipleEmail,
  selectAllEmail,
} from "../../features/emails/creator";
import Box from "../box/Box";
import { useAppSelector } from "../../hooks";
import ToolbarButton from "./toolbars/ToolBarButton";
import Folders from "./toolbars/Folders";
import { RootState } from "../../store/store";

const totalSelected = createSelector(
  (state: RootState) => state.email,
  (email) => ({
    totalMail: email.mails?.length,
    selected: email.selectedMails.length,
  })
);

const EmailToolbar = () => {
  const dispatch = useDispatch();

  const { totalMail, selected } = useAppSelector(totalSelected);
  const selectedType = selected === 0 ? -1 : selected === totalMail ? 1 : 0;
  const handleOnSelectAll = () => {
    dispatch(selectAllEmail());
  };
  const onRemoveMultiple = () => {
    dispatch(removeMultipleEmail());
  };

  const onReadMultiple = () => {
    dispatch(readMultipleEmail());
  };

  const onMoveToSpam = () => {
    dispatch(moveToSpamMultiple());
  };

  const onLabelAdd = (label: string) => {
    dispatch(addLabel(label));
  };
  return (
    <StyledToolbar>
      <Box display="flex" py={12} px={20}>
        <Box display="flex" align="center" flex={1}>
          <Checkbox
            checked={selectedType >= 0}
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={
              selectedType !== 1 ? <IndeterminateCheckBox /> : <CheckBox />
            }
            onChange={handleOnSelectAll}
          />
          <Box
            display="flex"
            className={`action-tools ${
              selectedType >= 0 ? " active-tools" : " unactive-tools"
            }`}
          >
            <ToolbarButton
              icon={<DeleteOutline />}
              handleClick={onRemoveMultiple}
            />
            <ToolbarButton
              icon={<MailOutlineRounded />}
              handleClick={onReadMultiple}
            />

            <Folders
              onMoveToSpam={onMoveToSpam}
              onRemoveMultiple={onRemoveMultiple}
            />
            <LablesDropdown onLabelClick={onLabelAdd} />
          </Box>
        </Box>
        <Box display="flex" align="center">
          <ToolbarButton
            icon={<Refresh />}
            handleClick={() => console.log("re")}
          />
          <ToolbarButton
            icon={<MoreVert />}
            handleClick={() => console.log("re")}
          />
        </Box>
      </Box>
    </StyledToolbar>
  );
};
export default EmailToolbar;

const StyledToolbar = styled("div")`
  width: 100%;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: rgba(255, 255, 255, 0.1);

  .unactive-tools {
    opacity: 0;
    width: 80px;
    transition: all 200ms ease;
  }
  .active-tools {
    opacity: 1;
    width: 200px;
    transition: all 300ms linear;
  }
`;
