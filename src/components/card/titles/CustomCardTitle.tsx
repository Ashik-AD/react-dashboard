import { MoreVert } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { IconButton } from "../../../ui";
import CardHeaderTitle from "./styled";
import styled, { CSSProperties } from "styled-components";

const CustomCardTitle: FC<Props> = (props) => {
  return (
    <CardHeaderTitle style={{ ...props.styles }}>
      <TextWrapper className="card-header-title">
        {props.title}
        {props.subTitle}
      </TextWrapper>
      {props.showIcon === false ? (
        ""
      ) : (
        <span style={{ position: "relative" }}>
          {props.icons ? (
            props.icons
          ) : (
            <IconButton varient="text">
              <MoreVert />
            </IconButton>
          )}
          {props.component && (
            <div className="current-action-dropdown">{props.component}</div>
          )}
        </span>
      )}
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
const TextWrapper = styled("span")`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.4rem;
`;
export default CustomCardTitle;
