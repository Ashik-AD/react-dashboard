import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { CustomAvatar } from "../../../ui";
import { Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";

const Div = styled("div")`
  background: transparent;
  padding: 16px;
  border: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#ffffff24" : "rgb(217 217 217)")};
  border-radius: 6px;

  & .card-icon {
    box-shadow: 0px 4px 12px 0px
      ${({ theme }) =>
        theme.name === "dark" ? "rgb(28 28 28 / 38%)" : "rgb(217 217 217)"};
  }
`;

const CardTransparent: FC<PropsType> = (props) => {
  const { title, total, growth, icon, status } = props;
  const { theme } = useTheme();
  return (
    <Div theme={theme.mode}>
      <Box display="flex" align="center" space={0.9}>
        <CustomAvatar
          varient="rounded"
          color={theme.mode.foreground}
          classes="card-icon"
        >
          {icon}
        </CustomAvatar>
        <Box display="flex" flexDirection="column">
          <Text varient="caption" styles={{ textTransform: "capitalize" }}>
            {title}
          </Text>
          <Box display="flex" align="center" space={0.5}>
            <Text heading="h5" styles={{ fontWeight: 500 }}>
              {formatNumber(total, 1000)}
            </Text>
            <Box
              display="flex"
              align="center"
              className={
                status === "inc" ? "alert-success-text" : "alert-error-text"
              }
            >
              <span className="caption" style={{ display: "flex" }}>
                {status === "inc" ? <ExpandLess /> : <ExpandMore />}
              </span>
              <span className="text-bold caption">{growth}%</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Div>
  );
};

interface PropsType {
  title: string;
  total: number;
  growth: number;
  icon: ReactNode;
  status: "inc" | "desc";
}

export default CardTransparent;
