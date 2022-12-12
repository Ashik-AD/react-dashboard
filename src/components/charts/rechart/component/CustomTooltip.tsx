import type { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styled from "styled-components";
import { Divider, Text } from "../../../../ui";
import Box from "../../../box/Box";

const CustomTooltip = ({
  active,
  label,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload) {
    return (
      <Box className="fg-theme" borderRadius="0.2rem" px={8} py={16}>
        {label && (
          <>
            <Text varient="body1" paragraph>
              {label}
            </Text>
            <Divider styles={{ margin: "0.6rem 0" }} />
          </>
        )}
        <ul>
          {payload.map((tp: any, index) => (
            <TooltipItem key={`item-${index}`}>
              {tp?.fill ? <Bullet color={tp.fill} /> : ""}
              <Text varient="body2" textTransform="capitalize">
                {tp.name} :{" "}
              </Text>
              <Text varient="body2">{tp.value}</Text>
            </TooltipItem>
          ))}
        </ul>
      </Box>
    );
  }
  return <></>;
};
export default CustomTooltip;

const Bullet = styled("div")<{ color: string }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
const TooltipItem = styled("li")`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }
`;
