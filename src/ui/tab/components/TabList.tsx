import {
  Children,
  cloneElement,
  createRef,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";
import styled from "styled-components";
import { TabProvider } from "..";
import useTheme from "../../../theme/useTheme";

interface ActiveTabOptions {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  offsetLeft?: number;
  offsetRight?: number;
}

export interface TabItemAdditional {
  selectedIndex?: number;
  readonly changeTab?: (tabIndex: number) => void;
  activeColor?: string;
  getWidth?: (value: number | string, options?: ActiveTabOptions) => void;
}

type Varient = "vertical" | "default";
interface Props {
  children: ReactNode;
  varient?: Varient;
}

const TbsLst: FC<Props> = ({ children, varient = "default" }) => {
  const indicatorRef = createRef<HTMLSpanElement>();
  const containerRef = createRef<HTMLDivElement>();
  const {
    theme: {
      primaryColor: { color },
    },
  } = useTheme();

  const tab = useContext(TabProvider);

  useEffect(() => {
    const el = containerRef.current?.querySelector(
      "button[aria-selected=true]"
    ) as HTMLButtonElement;
    if (el && indicatorRef.current) {
      if (varient !== "vertical") {
        indicatorRef.current.style.width = `${el.clientWidth}px`;
        indicatorRef.current.style.left = `${el.offsetLeft}px`;
        return;
      }
      indicatorRef.current.style.minHeight = `${el.clientHeight}px`;
      indicatorRef.current.style.top = `${el.offsetTop}px`;
    }
  }, [tab?.value]);

  const tabItemWidth = useCallback(
    (val: string | number, opt: ActiveTabOptions) => {
      if (indicatorRef.current) {
        if (varient !== "vertical") {
          indicatorRef.current.style.width = `${val}px`;
          indicatorRef.current.style.left = `${opt.offsetLeft}px`;
        }
      }
    },
    []
  );

  const mapChildren = Children.map(children, (tabItem: any) =>
    cloneElement(tabItem, {
      changeTab: tab?.handleChangeTab,
      selectedIndex: tab?.value,
      activeColor: color,
      getWidth: tabItemWidth,
    })
  );

  return (
    <div
      className="tab-list-wrapper"
      role="tablist"
      style={{ transition: "transform 300ms ease", marginBottom: "1.4rem" }}
      ref={containerRef}
    >
      {mapChildren}
      <StyledTabIndicator
        ref={indicatorRef}
        color={color}
        varient={varient || "default"}
      />
    </div>
  );
};
export default TbsLst;

const StyledTabIndicator = styled("span")<{
  color: string;
  varient: Varient;
}>`
  position: absolute;
  background: ${({ color }) => color};
  width: ${({ varient }) => (varient === "vertical" ? `2px` : "90px")};
  height: ${({ varient }) => (varient !== "vertical" ? "2px" : "auto")};
  ${({ varient }) =>
    varient === "vertical"
      ? `right: 0px; top: 0px; min-height: 49px;`
      : `left: 0; bottom: 0; margin-right: 8px;`};
  transition: left 200ms ease, top 200ms linear;
`;
