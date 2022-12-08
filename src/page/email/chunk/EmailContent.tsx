import { shallowEqual, useSelector } from "react-redux";
import EmailListItem from "../../../components/email/EmailListItem";
import NotFound from "../../../components/email/NotFound";
import ScrollContainer from "../../../components/scroll-container/ScrollContainer";
import emailFilterSelector from "../../../features/emails/emailSelector";

const EmailContent = () => {
  const selectedId = useSelector(emailFilterSelector, shallowEqual);
  if (!selectedId) return <></>;
  const renderEmailList = selectedId.map((mail) => (
    <EmailListItem mailId={mail} key={mail} />
  ));
  return (
    <ScrollContainer maxHeight="62vh">
      {selectedId.length === 0 ? <NotFound /> : renderEmailList}
    </ScrollContainer>
  );
};

export default EmailContent;
