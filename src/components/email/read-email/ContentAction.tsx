import { FC } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { IconButton } from "../../../ui";
import Box from "../../box/Box";
import DropdownV2 from "../../dropdown/DropdownV2";

import {
  AttachmentOutlined,
  ForwardOutlined,
  ReplyOutlined,
} from "@mui/icons-material";

const ContentAction: FC<Props> = ({ hasAttachments }) => {
  return (
    <Box display="flex">
      {hasAttachments ? (
        <IconButton varient="text" contentOpacity={7} fontSize={20}>
          <AttachmentOutlined />
        </IconButton>
      ) : (
        <></>
      )}

      <DropdownV2
        width="180px"
        labelContent={
          <IconButton varient="text" contentOpacity={7} fontSize={20}>
            <TbDotsVertical />
          </IconButton>
        }
        dropdownList={[
          {
            title: "Reply",
            icon: <ReplyOutlined />,
          },
          {
            title: "Forward",
            icon: <ForwardOutlined />,
          },
        ]}
      />
    </Box>
  );
};

export default ContentAction;
interface Props {
  hasAttachments: boolean;
}
