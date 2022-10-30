import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui";

const CreateNewInvoice = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/invoice/add/")}>Create Invoice</Button>
  );
};
export default memo(CreateNewInvoice);
