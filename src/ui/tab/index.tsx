import { createContext, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { TabsProps } from "./type";

interface Tabs {
  value: number;
  handleChangeTab: (tabIndex: number) => void;
}

export const TabProvider = createContext<Tabs | null>(null);

const Tbs: FC<TabsProps> = (props) => {
  const { children, direction } = props;
  const [selectTab, setSelectTab] = useState(props.value);

  useEffect(() => {
    setSelectTab(props.value);
  }, [props.value]);

  const handleSelectTab = (tabIndex: number) => {
    setSelectTab(tabIndex);
  };

  return (
    <StyledTabs
      direction={direction || "horizontal"}
      role="tab"
      className="tabs"
    >
      <TabProvider.Provider
        value={{ value: selectTab, handleChangeTab: handleSelectTab }}
      >
        {children}
      </TabProvider.Provider>
    </StyledTabs>
  );
};
export default Tbs;

const StyledTabs = styled("div")<{ direction: "horizontal" | "vertical" }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: nowrap;
  min-width: 100%;
  width: 100%;

  & .tab-list-wrapper {
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    ${({ direction }) => direction === "vertical" && `flex-direction: column;`};
    min-width: 100%;
    width: 100%;
  }
`;
