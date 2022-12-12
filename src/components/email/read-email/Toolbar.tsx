import { FC } from "react";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";
import ToolbarButton from "../toolbars/ToolBarButton";

import {
  DeleteOutline,
  MailOutlineRounded,
  MoreVert,
  Star,
  StarOutline,
} from "@mui/icons-material";
import Folders from "../toolbars/Folders";
import LabelsDropdown from "../toolbars/LabelsDropdown";
import { useAppDispatch } from "../../../hooks";
import { MailId } from "../../../features/emails/types/type";
import {
  addLabelSingle,
  moveToSpam,
  readEmail,
  removeEmail,
} from "../../../features/emails/creator";
import { IconButton, Text } from "../../../ui";

const Toolbar: FC<Props> = ({ mailId, starred }) => {
  const dispatch = useAppDispatch();
  const onMailRemove = () => {
    dispatch(removeEmail(mailId));
  };
  const onMailMoveToSpam = () => {
    dispatch(moveToSpam(mailId));
  };
  const onMailReadChange = () => {
    dispatch(readEmail(mailId));
  };

  const onLabelAddSingle = (label: string) => {
    dispatch(addLabelSingle(mailId, label));
  };
  return (
    <ColorBox
      display="flex"
      align="center"
      backgroundTheme="foreground"
      py={12}
      style={{ zIndex: 100 }}
    >
      <Box display="flex" flex={1}>
        <ToolbarButton icon={<DeleteOutline />} handleClick={onMailRemove} />
        <ToolbarButton
          icon={<MailOutlineRounded />}
          handleClick={onMailReadChange}
        />
        <Folders
          onRemoveMultiple={onMailRemove}
          onMoveToSpam={onMailMoveToSpam}
        />
        <LabelsDropdown onLabelClick={onLabelAddSingle} />
      </Box>
      <Box display="flex">
        <IconButton varient="text">
          <Text skinColor={starred} styles={{ display: "flex" }}>
            {starred ? <Star /> : <StarOutline />}
          </Text>
        </IconButton>
      </Box>
      <IconButton varient="text" contentOpacity={6}>
        <MoreVert />
      </IconButton>
    </ColorBox>
  );
};

interface Props {
  mailId: MailId;
  starred: boolean;
}

export default Toolbar;
