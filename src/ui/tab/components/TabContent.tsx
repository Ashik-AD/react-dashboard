import { FC, memo, ReactNode, useContext } from "react";
import { TabProvider } from "..";

const TbsContent: FC<Props> = ({ tabIndex, children }) => {
  const tabProvider = useContext(TabProvider);
  return (
    <div
      className="tab-content"
      role={"tabpanel"}
      tabIndex={0}
      araia-labelledby={`tab-${tabIndex}`}
      hidden={tabIndex !== tabProvider?.value}
    >
      {children}
    </div>
  );
};
export default memo(TbsContent);

interface Props {
  tabIndex: number;
  children: ReactNode;
}
