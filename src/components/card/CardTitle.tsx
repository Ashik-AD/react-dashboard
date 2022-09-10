import { MoreVert } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { IconButton } from "../../ui";
import { CardHeaderTitle } from "./card.styled";
import styled, { CSSProperties } from "styled-components";

const CardTitle: FC<Props> = (props) => {
  return (
    <CardHeaderTitle style={{ ...props.styles }}>
      <TextWrapper className="card-header-title">
        <span>{props.title}</span>
      </TextWrapper>
      <span style={{ position: "relative" }}>
        <IconButton varient="text">
          <MoreVert />
        </IconButton>
        {props.component && (
          <div className="current-action-dropdown">{props.component}</div>
        )}
      </span>
    </CardHeaderTitle>
  );
};

interface Props {
  title: string | ReactNode;
  icons?: ReactNode;
  component?: ReactNode;
  styles?: CSSProperties;
}
const TextWrapper = styled("span")`
  flex: 1 1 auto;
`;
export default CardTitle;
