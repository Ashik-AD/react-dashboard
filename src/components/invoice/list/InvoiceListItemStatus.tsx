import { ReactNode } from "react";
import { InvoiceStatus } from "../../../features/invoices/types/definition";
import { CustomAvatar } from "../../../ui";
import {
  ArrowDownward,
  Check,
  ErrorOutline,
  PieChart,
  SaveOutlined,
  SendRounded,
} from "@mui/icons-material";

const InvoiceListItemStatus = ({
  itemStatus,
}: {
  itemStatus: InvoiceStatus;
}) => {
  const { icon, color } = status[itemStatus];
  return (
    <CustomAvatar skin="light" color={color} size={30} fontSize={17}>
      {icon}
    </CustomAvatar>
  );
};
export default InvoiceListItemStatus;

type Status = Record<InvoiceStatus, { icon: ReactNode; color: string }>;
const status: Status = {
  Paid: {
    icon: <Check />,
    color: "success",
  },
  Downloaded: {
    icon: <ArrowDownward />,
    color: "info",
  },
  Draft: {
    icon: <SaveOutlined />,
    color: "error",
  },
  Sent: {
    icon: <SendRounded />,
    color: "lightgray",
  },
  "Partial Payment": {
    icon: <PieChart />,
    color: "warning",
  },
  "Past Due": {
    icon: <ErrorOutline />,
    color: "error",
  },
};
