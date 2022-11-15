import { FC, ReactNode, CSSProperties } from "react";
import Box from "../box/Box";
import Card from "../card/Card";
import CustomCardTitle from "../card/titles/CustomCardTitle";
import { Text } from "../../ui";
const Timeline: FC<Props> = ({ children, classes, style, banner, title }) => {
  return (
    <Card>
      {banner && banner}
      {title && (
        <CustomCardTitle
          title={
            <Text heading="h6" weight="bold" textTransform="capitalize">
              {title}
            </Text>
          }
        />
      )}
      <Box px={20} pb={20}>
        <ul
          className={`timeline-container ${classes ? classes : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 4,
            ...style,
          }}
        >
          {children}
        </ul>
      </Box>
    </Card>
  );
};
interface Props {
  children: ReactNode;
  banner?: ReactNode;
  classes?: string;
  style?: CSSProperties;
  title?: string;
}
export default Timeline;
