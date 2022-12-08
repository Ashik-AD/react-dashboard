import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import Box from "../../box/Box";
import { IconButton } from "../../../ui";
import {
  removeEmail,
  readEmail,
  moveToSpam,
} from "../../../features/emails/creator";
import {
  DeleteOutline,
  DraftsOutlined,
  MarkunreadOutlined,
  ReportGmailerrorredOutlined,
} from "@mui/icons-material";
import { MailId } from "../../../features/emails/types/type";

interface Props {
  id: MailId;
  isRead: boolean;
}

const ItemActions: FC<Props> = ({ id, isRead }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeEmail(id));
  };

  const handleRead = () => {
    dispatch(readEmail(id));
  };

  const handleMoveToSpam = () => {
    dispatch(moveToSpam(id));
  };
  const handlePropagation = (eve: React.MouseEvent<HTMLDivElement>) => {
    eve.stopPropagation();
  };
  return (
    <Box
      display="flex"
      className="item-actions-container"
      onClick={handlePropagation}
    >
      <IconButton
        varient="text"
        contentOpacity={6}
        size={40}
        fontSize={24}
        onClick={handleRemove}
      >
        <DeleteOutline />
      </IconButton>
      <IconButton
        varient="text"
        contentOpacity={6}
        size={40}
        fontSize={24}
        onClick={handleRead}
      >
        {isRead ? <DraftsOutlined /> : <MarkunreadOutlined />}
      </IconButton>
      <IconButton
        varient="text"
        contentOpacity={6}
        size={40}
        fontSize={24}
        onClick={handleMoveToSpam}
      >
        <ReportGmailerrorredOutlined />
      </IconButton>
    </Box>
  );
};

export default ItemActions;
