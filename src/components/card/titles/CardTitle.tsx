import { MoreVert } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import { IconButton, Text } from "../../../ui";
import CardHeaderTitle from "./styled";
import styled, { CSSProperties } from "styled-components";

const CardTitle: FC<Props> = (props) => {
  return (
    <CardHeaderTitle style={{ ...props.styles }}>
      <TextWrapper className="card-header-title">
        <Text heading="h6">{props.title}</Text>
      </TextWrapper>
      {props.showIcon === false ? (
        ""
      ) : (
        <span style={{ position: "relative" }}>
          <IconButton varient="text">
            <MoreVert />
          </IconButton>
          {props.component && (
            <div className="current-action-dropdown">{props.component}</div>
          )}
        </span>
      )}
    </CardHeaderTitle>
  );
};

interface Props {
  title: string;
  icons?: ReactNode;
  component?: ReactNode;
  styles?: CSSProperties;
  showIcon?: boolean;
}
const TextWrapper = styled("span")`
  flex: 1 1 auto;
`;
export default CardTitle;
