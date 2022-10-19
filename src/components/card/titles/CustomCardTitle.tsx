import { MoreVert } from "@mui/icons-material";
import { FC, ReactNode, CSSProperties } from "react";
import { IconButton } from "../../../ui";
import CardHeaderTitle from "./styled";
import Box from "../../box/Box";

const CustomCardTitle: FC<Props> = (props) => {
  return (
    <CardHeaderTitle
      style={{ ...props.styles }}
      display="flex"
      flexDirection="column"
      padding={20}
    >
      <Box
        display="flex"
        justify="space-between"
        space={0.4}
        className="card-header-title"
        align="center"
        flex={1}
      >
        {props.title}
        {props.showIcon === false ? (
          ""
        ) : (
          <span style={{ position: "relative" }}>
            {props.icons ? (
              props.icons
            ) : (
              <IconButton varient="text" contentOpacity={5}>
                <MoreVert />
              </IconButton>
            )}
            {props.component && (
              <div className="current-action-dropdown">{props.component}</div>
            )}
          </span>
        )}
      </Box>
      {props.subTitle}
    </CardHeaderTitle>
  );
};

interface Props {
  title: ReactNode;
  subTitle?: ReactNode;
  icons?: ReactNode;
  component?: ReactNode;
  styles?: CSSProperties;
  showIcon?: boolean;
}

export default CustomCardTitle;
