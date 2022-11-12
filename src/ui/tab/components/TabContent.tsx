import { FC, memo, ReactNode, useContext } from "react";
import { TabProvider } from "..";

const TbsContent: FC<Props> = ({ tabIndex, children }) => {
  const { value } = useContext(TabProvider)!;
  return (
    <div
      className="tab-content"
      role={"tabpanel"}
      tabIndex={0}
      araia-labelledby={`tab-${tabIndex}`}
      hidden={tabIndex !== value}
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
