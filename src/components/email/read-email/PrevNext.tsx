import { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton } from "../../../ui";
import Box from "../../box/Box";
import { MailId } from "../../../features/emails/types/type";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setCurrentOpenMail } from "../../../features/emails/creator";

const PrevNext: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const mails = useAppSelector((state) => state.email.mails);
  const currentIndex = useAppSelector(
    (state) => state.email.mails?.findIndex((mail) => mail.id === id) || -1
  );
  const handleLoadMail = (k: "next" | "prev") => {
    const index = k === "next" ? currentIndex + 1 : currentIndex - 1;
    if (mails) {
      dispatch(setCurrentOpenMail(mails[index]));
    }
  };

  return (
    <Box display="flex">
      <IconButton
        varient="text"
        disabled={currentIndex <= 0}
        onClick={() => handleLoadMail("prev")}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        varient="text"
        disabled={currentIndex === mails!.length - 1}
        onClick={() => handleLoadMail("next")}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};
export default PrevNext;
interface Props {
  id: MailId;
}
