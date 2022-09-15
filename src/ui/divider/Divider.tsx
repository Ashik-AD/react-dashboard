import { CSSProperties, FC } from "react";
import styled from "styled-components";
import useTheme from "../../theme/useTheme";

const Div = styled("hr")`
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode.name === "dark" ? "rgb(255 255 255 / 12%)" : "rgb(0 0 0 / 12%)"};
`;

const Divider: FC<Props> = ({ className, styles }) => {
  const {
    theme: { mode },
  } = useTheme();
  return (
    <Div
      theme={{ mode }}
      className={className ? className : ""}
      style={{ ...styles }}
    />
  );
};

interface Props {
  className?: string;
  styles?: CSSProperties;
}

export default Divider;
