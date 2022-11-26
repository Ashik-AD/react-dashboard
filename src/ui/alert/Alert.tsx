import { FC } from "react";
import styled from "styled-components";
import genColorShades from "../../utils/genColorShades";
import { alertColor } from "../color/alert";
import type { AlertOptions } from "./type";

import {
  ErrorOutline,
  ReportProblemOutlined,
  TaskAltOutlined,
  InfoOutlined,
} from "@mui/icons-material";

const Alert: FC<AlertOptions> = (props) => {
  const { varient, severity, alertTitle, action, children } = props;
  return (
    <StyledAlert
      severity={severity}
      varient={varient}
      className={`alert__wrapper alert__varient-${
        varient || "standard"
      } alert__${severity}`}
    >
      <div className="alert__content">
        <div className="alert__icon">
          {severity === "error" ? (
            <ErrorOutline />
          ) : severity === "warning" ? (
            <ReportProblemOutlined />
          ) : severity === "success" ? (
            <TaskAltOutlined />
          ) : (
            <InfoOutlined />
          )}
        </div>
        <div className="alert__message">
          {alertTitle && <div className="alert__title">{alertTitle}</div>}
          {children}
        </div>
      </div>
      {action}
    </StyledAlert>
  );
};
export default Alert;
type StyledOptions = Pick<AlertOptions, "severity" | "varient">;

const StyledAlert = styled("div")<StyledOptions>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0px;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.865rem;
  color: ${({ severity, varient }) =>
    varient === "filled" ? "#fff" : alertColor[severity]};
  background: ${({ varient, severity }) =>
    varient === "outlined"
      ? "transparent"
      : varient === "filled"
      ? alertColor[severity]
      : genColorShades(alertColor[severity], { total: 1, intensity: 1 })};
  ${({ varient, severity }) =>
    varient === "outlined" ? `border: 1px solid ${alertColor[severity]};` : ""}

  & .alert__content {
    display: flex;
    gap: 0.8rem;

    .alert__icon {
      padding-top: 5px;
      svg {
        font-size: 1.3rem;
      }
    }
    .alert__message {
      padding-top: 5px;

      .alert__title {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
      }
    }
  }
`;
