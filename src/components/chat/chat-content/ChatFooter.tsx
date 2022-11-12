import {
  AttachmentRounded,
  MicRounded,
  SendRounded,
} from "@mui/icons-material";
import React, { memo, useState } from "react";
import { shallowEqual } from "react-redux";
import { sendMessage } from "../../../features/chats/creator";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../store/store";
import { IconButton, TextField } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";

const selectCurrentUid = (state: RootState) => state.chat.currentUser.uid;

const ChatFooter = () => {
  const dispatch = useAppDispatch();
  const currentUid = useAppSelector(selectCurrentUid, shallowEqual);

  const [message, setMessage] = useState("");

  const handleMessageChange = (eve: React.ChangeEvent<HTMLInputElement>) =>
    void setMessage(eve.target.value);

  const handleEnterKeyPress = (eve: React.KeyboardEvent<HTMLInputElement>) => {
    if (eve.key === "Enter" && message.trim()) {
      dispatch(sendMessage(currentUid, message));
      setMessage("");
    }
  };

  return (
    <Box
      display="flex"
      align="center"
      justify="space-between"
      space={0.8}
      px={12}
    >
      <ColorBox
        display="flex"
        transparency={3}
        borderRadius={"26px"}
        className="overflow-hidden"
        flex={1}
      >
        <TextField
          type="text"
          name="message-write-box"
          defaultValue={message}
          placeholder="Type your message here..."
          endAdornment={
            <Box mr={16}>
              <SendRounded />
            </Box>
          }
          onChange={handleMessageChange}
          onKeyDown={handleEnterKeyPress}
          width="100%"
          style={{
            padding: "12px 40px 12px 20px",
            border: 0,
            outline: 0,
          }}
        />
      </ColorBox>
      <ColorBox
        display="flex"
        borderRadius={"26px"}
        className="overflow-hidden"
        padding={6}
        transparency={4}
        space={0.4}
      >
        <IconButton varient="text" size={30} fontSize={21}>
          <MicRounded />
        </IconButton>
        <IconButton varient="text" size={30} fontSize={21}>
          <AttachmentRounded />
        </IconButton>
      </ColorBox>
    </Box>
  );
};
export default memo(ChatFooter);
