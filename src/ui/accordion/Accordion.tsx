import { ExpandMore } from "@mui/icons-material";
import {
  createRef,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";
import Text from "../text/Text";

const Accordion: FC<Props> = (props) => {
  const { title, children, icon, expandIcon, isExpand } = props;
  const {
    theme: {
      mode: { foreground, name },
    },
  } = useTheme();
  const [expand, setExpand] = useState(false || isExpand);

  const containerRef = createRef<HTMLDivElement>();
  const contentRef = createRef<HTMLDivElement>();

  const toggleExpand = () => {
    setExpand((prevState) => !prevState);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transitionDuration = "500ms";
      if (expand) {
        contentRef.current.style.height = "90px";
        containerRef.current!.style.overflow = "hidden";

        setTimeout(() => {
          contentRef.current!.style.height = "auto";
          containerRef.current!.style.overflow = "visible";
        }, 150);
      } else {
        contentRef.current.style.height = "0";
        containerRef.current!.style.overflow = "hidden";
      }
      contentRef.current.style.minHeight = "0px";
    }
  }, [expand, contentRef.current]);

  return (
    <StyledAccordion
      className={`accordion ${expand ? "expand" : ""}`}
      theme={{ color: foreground, name }}
      ref={containerRef}
    >
      <div className="accordion__expand_btn_wpr" onClick={toggleExpand}>
        {icon ? (
          <>
            <div className="accordion__title_with_icon">
              {icon}
              <Text varient="body1" paragraph>
                {title}
              </Text>
            </div>
          </>
        ) : (
          <Text varient="body1" paragraph>
            {title}
          </Text>
        )}
        <Text
          size={26}
          weight="extraBold"
          classes={`accordion__icon-indicator ${expand ? "rotate" : ""}`}
          secondary
        >
          {expandIcon ? expandIcon : <ExpandMore />}
        </Text>
      </div>

      <div
        className={`accordion__details ${
          expand ? "accordion__content-visible" : "accordion__content-hide"
        }`}
        ref={contentRef}
      >
        <div className="accordion__content">
          {typeof children === "string" ? (
            <Text varient="body1" paragraph>
              {children}
            </Text>
          ) : (
            children
          )}
        </div>
      </div>
    </StyledAccordion>
  );
};
export default Accordion;
interface Props {
  title: string;
  children: string | ReactNode;
  icon?: ReactNode;
  expandIcon?: ReactNode;
  isExpand?: boolean;
}

const StyledAccordion = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.color};
  overflow-anchor: none;
  transition: 300ms;

  &:first-of-type {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-top: 0 !important;
  }
  &.expand {
    border-radius: 6px;
    margin: 16px 0;
    border-color: transparent !important;
    transition: margin 250ms;
  }

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:not(:first-child) {
    border-top: 1px solid
      ${({ theme }) => (theme.name === "dark" ? `#aeaeae24` : `#a1a1a13d`)};
    transition: 200ms;
  }

  & .accordion__expand_btn_wpr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    cursor: pointer;
    user-select: none;
    & > .accordion__title_with_icon {
      display: flex;
      align-items: center;
    }
  }

  & .accordion__details {
    transition: 300ms;
    .accordion__content {
      padding: 0 1rem 1.4rem 1rem;
      transition: 300ms;
    }
  }
  .accordion__content-visible {
    height: auto;
    overflow: visible;
    visibility: visible;
    transition: height 300ms;
  }
  .accordion__content-hide {
    height: 0px;
    overflow: hidden;
    transition: height 300ms, minHeight 300ms;
  }

  & .accordion__icon-indicator {
    transition: 250ms;

    &.rotate {
      transform: rotate(180deg);
      transition: transform 250ms;
    }
  }
`;
