import React from "react";
import { useSelector } from "react-redux";
import EmailListItem from "../../../components/email/EmailListItem";
import NotFound from "../../../components/email/NotFound";
import ScrollContainer from "../../../components/scroll-container/ScrollContainer";
import emailFilterSelector from "../../../features/emails/emailSelector";

const EmailContent = () => {
  const selectedId = useSelector(emailFilterSelector);
  const renderEmailList = selectedId.map((mail) => (
    <EmailListItem mailId={mail.id} key={mail.id} />
  ));

  return (
    <ScrollContainer maxHeight="63vh">
      {selectedId.length === 0 ? <NotFound /> : renderEmailList}
    </ScrollContainer>
  );
};

export default EmailContent;
