import { FC } from "react";
import Box from "../../box/Box";
import Card from "../Card";
import { Chip, Text } from "../../../ui";
import formatNumber from "../../../utils/formatNumber";
import { AlertColor } from "../../../ui/color/alert";

const CardRanger: FC<PropsType> = (props) => {
  const { title, tag, total, growth, status, ranger, color } = props;
  return (
    <Card position="relative" mt="20px" className="overflow-unset-important">
      <Box display="flex" px={16} py={20} position="relative">
        <Box display="flex" flexDirection="column">
          <Text
            varient="body1"
            weight="bold"
            styles={{ textTransform: "capitalize" }}
          >
            {title}
          </Text>
          <Box display="flex" mb={10} align="flex-start" space={0.4} mt={25}>
            <Text heading="h5" styles={{ fontWeight: 500 }}>
              {typeof total === "number"
                ? formatNumber(total, 1000, { toFixed: 1 })
                : total}
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

          <Chip
            label={tag}
            size="small"
            color={color as string}
            skin="light"
            labelWeight={500}
          />
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

interface PropsType {
  title: string;
  total: number | string;
  growth: number;
  status: "inc" | "desc";
  tag: string;
  ranger: string;
  color?: AlertColor;
}

export default CardRanger;
