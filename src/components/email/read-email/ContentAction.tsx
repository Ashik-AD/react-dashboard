import { FC } from "react";
import { IconButton } from "../../../ui";
import Box from "../../box/Box";
import DropdownV2 from "../../dropdown/DropdownV2";
import { Icon } from "@iconify/react";

const ContentAction: FC<Props> = ({ hasAttachments }) => {
  return (
    <Box display="flex">
      {hasAttachments ? (
        <IconButton varient="text" contentOpacity={7} fontSize={20}>
          <Icon icon="mdi:attachment" />
        </IconButton>
      ) : (
        <></>
      )}

      <DropdownV2
        width="180px"
        labelContent={
          <IconButton varient="text" contentOpacity={7} fontSize={20}>
            <Icon icon="mdi:dots-vertical" />
          </IconButton>
        }
        dropdownList={[
          {
            title: "Reply",
            icon: <Icon icon="mdi:reply" />,
          },
          {
            title: "Forward",
            icon: <Icon icon="mdi:share" />,
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
