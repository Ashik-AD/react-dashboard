import type { Props } from "recharts/types/component/DefaultLegendContent";
import styled, { CSSProperties } from "styled-components";
import { Text } from "../../../../ui";
import Box from "../../../box/Box";

const CustomLegend = ({
  payload,
  style,
}: Props & { style?: CSSProperties }) => {
  if (!payload) return <></>;
  const renderLegend = payload.map((lg: any, index) => (
    <Box display="flex" align="center" space={0.6} key={`item-legend-${index}`}>
      <span
        className="legend_icon"
        style={{
          background: lg.payload?.hasOwnProperty("fill")
            ? lg?.payload!.fill
            : lg.color,
        }}
      ></span>
      <Text
        varient="body2"
        weight="medium"
        textTransform="capitalize"
        secondary
      >
        {lg.value}
      </Text>
    </Box>
  ));
  return (
    <StyledLegend
      display="flex"
      align="center"
      wrap="wrap"
      space={1}
      style={style}
    >
      {renderLegend}
    </StyledLegend>
  );
};
export default CustomLegend;
const StyledLegend = styled(Box)<{ margin?: string }>`
  display: inline-flex;
  ${({ margin }) => (margin ? `margin: ${margin};` : "")}
  .legend_icon {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;
