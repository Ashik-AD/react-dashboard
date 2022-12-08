import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../../theme/useTheme";
import { CustomAvatar } from "../../../ui";
import { Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import Box from "../../box/Box";

const CardTransparent: FC<PropsType> = (props) => {
  const { title, total, growth, icon, status } = props;
  const { theme } = useTheme();
  return (
    <Div theme={theme.mode}>
      <Box display="flex" align="center" space={0.6}>
        <CustomAvatar
          varient="rounded"
          color={theme.mode.foreground}
          classes="card-icon"
        >
          {icon}
        </CustomAvatar>
        <Box display="flex" flexDirection="column">
          <Text
            varient="caption"
            textTransform="capitalize"
            weight="medium"
            secondary
          >
            {title}
          </Text>
          <Box display="flex" align="center" space={0.5}>
            <Text heading="h6" weight="bold" size={20}>
              {typeof total === "number" ? formatNumber(total, 1000) : total}
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

const Div = styled("div")`
  background: transparent;
  padding: 20px;
  border: 1px solid
    ${({ theme }) => (theme.name === "dark" ? "#ffffff24" : "rgb(217 217 217)")};
  border-radius: 6px;

  & .card-icon {
    box-shadow: 0px 4px 12px 0px
      ${({ theme }) =>
        theme.name === "dark" ? "rgb(28 28 28 / 38%)" : "rgb(217 217 217)"};
  }
`;

interface PropsType {
  title: string;
  total: number | string;
  growth: number;
  icon: ReactNode;
  status: "inc" | "desc";
}

export default CardTransparent;
