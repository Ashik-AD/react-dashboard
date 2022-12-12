import { ExpandMore } from "@mui/icons-material";
import {
  createRef,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import useTheme from "../../theme/useTheme";
import StyledAccordion from './styled'
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
