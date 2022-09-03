import { FC } from "react";
import Box from "../../box/Box";
import Card from "../Card";
import { Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import styled from "styled-components";
import { alertColor, Colors } from "../../../ui/color/alert";

const CardRanger: FC<PropsType> = (props) => {
  const { title, tag, total, growth, status, ranger, color } = props;
  return (
    <Card position="relative" mt="20px">
      <Box display="flex" px={16} py={20}>
        <Box display="flex" flexDirection="column">
          <Text
            varient="body1"
            size={50}
            styles={{ textTransform: "capitalize", fontWeight: 500 }}
          >
            {title}
          </Text>
          <Box display="flex" mb={10} align="flex-start" space={0.2} mt={25}>
            <Text heading="h5" styles={{ fontWeight: 500 }}>
              {formatNumber(total, 1000, { toFixed: 1 })}
            </Text>
            <sup
              className={`${
                status === "inc" ? "alert-success-text" : "alert-error-text"
              } text-bold caption`}
              style={{ zIndex: 2 }}
            >
              {status === "inc" ? "+" : "-"}
              {growth}%
            </sup>
          </Box>
          <span>
            <Tag color={color}>
              <Text varient="caption" color={color}>
                {tag}
              </Text>
            </Tag>
          </span>
        </Box>
        <img
          src={ranger}
          style={{
            height: "120%",
            position: "absolute",
            bottom: 0,
            right: 5,
            objectFit: "contain",
          }}
        />
      </Box>
    </Card>
  );
};

const Tag = styled("span")<{ color?: string }>`
  position: relative;
  padding: 0px 8px;
  text-transform: capitalize;
  border-radius: 40px;
  overflow: hidden;
  z-index: 1;

  &:after {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    background: ${({ color }) =>
      color
        ? alertColor.hasOwnProperty(color)
          ? alertColor[color as keyof Colors]
          : color
        : "rgb(157 157 157)"};
    opacity: 0.1;
    left: 0;
    top: 0;
    border-radius: 40px;
    z-index: -1;
  }
`;

interface PropsType {
  title: string;
  total: number;
  growth: number;
  status: "inc" | "desc";
  tag: string;
  ranger: string;
  color?: string;
}

export default CardRanger;
