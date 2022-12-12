import { createRef, ReactNode, useLayoutEffect, useState } from "react";
import Box from "../../../components/box/Box";
import Button from "../../buttons/Button";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import styled from "styled-components";

const getTabItems = (
  container: HTMLDivElement
): NodeListOf<HTMLButtonElement> =>
  container.querySelectorAll("button.tab-item");

const getTabItemWpr = (container: HTMLDivElement): HTMLDivElement | null =>
  container.querySelector("div.tab-list-wrapper");

const rightScrollItem = (
  nodes: NodeListOf<HTMLButtonElement>,
  xWidth: number
) => {
  let x = null;
  for (let i = nodes.length; i >= 0; i--) {
    const { right } = nodes[i - 1]?.getBoundingClientRect();
    if (x) {
      break;
    }
    if (right <= xWidth) {
      if (nodes[i + 1]) {
        const k = nodes[i + 1]?.getBoundingClientRect();
        x = k.right;
      }
    }
  }
  return x;
};
const leftScrollItem = (
  nodes: NodeListOf<HTMLButtonElement>,
  xWidth: number
) => {
  let x = null;
  for (let i = 0; i < nodes.length; i++) {
    const { left } = nodes[i]?.getBoundingClientRect();
    if (left >= xWidth) {
      break;
    }
    const k = nodes[i]?.getBoundingClientRect();
    if (i === 0) {
      x = xWidth;
    } else {
      x = k.left + k.width;
    }
  }
  return x;
};

const TabScroller = ({ children }: { children: ReactNode }) => {
  const [showNavBtns, setShowNavBtns] = useState({ left: false, right: true });
  const [translate, setTranslate] = useState(0);
  const btnWprRef = createRef<HTMLDivElement>();
  let tabListDOM = null;

  useLayoutEffect(() => {
    if (btnWprRef.current) {
      tabListDOM = getTabItemWpr(btnWprRef.current);
      if (tabListDOM) {
        if (tabListDOM?.clientWidth <= btnWprRef.current?.clientWidth) {
          setShowNavBtns({ left: false, right: false });
        }
      }
    }
  }, []);

  const handleScroll = (dir: "left" | "right") => {
    if (btnWprRef.current) {
      tabListDOM = getTabItemWpr(btnWprRef.current);
      const { right, left } = btnWprRef.current?.getBoundingClientRect();
      if (tabListDOM) {
        const tabItems = getTabItems(btnWprRef.current);
        if (dir === "left") {
          const leastLeftItem = leftScrollItem(tabItems, left);
          if (leastLeftItem) {
            let t = left - leastLeftItem;
            tabListDOM.style.transform = `translateX(${t}px)`;
            setShowNavBtns((prevState) => ({ ...prevState, right: true }));
            if (Math.abs(t) <= 50) {
              setShowNavBtns((prevState) => ({ ...prevState, left: false }));
            }
            setTranslate(0);
          }
          return;
        }
        if (dir === "right") {
          const leastRight = rightScrollItem(tabItems, right);
          if (leastRight) {
            let t = translate + (leastRight - right);
            tabListDOM.style.transform = `translateX(-${t}px)`;
            setShowNavBtns((prevState) => ({ ...prevState, left: true }));
            setTranslate(t);
            if (t === translate) {
              setShowNavBtns((prevState) => ({ ...prevState, right: false }));
            }
          }
        }
      }
    }
  };

  return (
    <StyledTabScroller display="flex" wrap="nowrap" align="baseline">
      {showNavBtns.left && (
        <Button
          varient="text"
          width="20px"
          onClick={() => handleScroll("left")}
          className="scroll__btn"
        >
          <KeyboardArrowLeftRounded />
        </Button>
      )}
      <Box className="tab__btn_wrp overflow-hidden">
        <Box display="flex" wrap="nowrap" ref={btnWprRef} px={16}>
          {children}
        </Box>
      </Box>
      {showNavBtns.right && (
        <Button
          varient="text"
          width="20px"
          onClick={() => handleScroll("right")}
          className="scroll__btn"
        >
          <KeyboardArrowRightRounded />
        </Button>
      )}
    </StyledTabScroller>
  );
};
export default TabScroller;

const StyledTabScroller = styled(Box)`
  & .tab-list-wrapper {
    min-width: auto;
    width: auto;
  }
  & .tab__btn_wrp {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 600px) {
    & .tab__btn_wrp {
      overflow: auto hidden;
    }
    & .scroll__btn {
      display: none;
    }
  }
`;
