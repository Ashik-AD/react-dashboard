import { FC } from "react";
import useTheme from "../../theme/useTheme";
import ChipWrapper from "./chip.styled";
import { ChipProps } from "./type";

const Chip: FC<ChipProps> = (props) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  return (
    <ChipWrapper
      {...props}
      theme={{ mode: mode.name, color: primaryColor.color }}
      style={{ ...props.styles }}
    >
      {!props.children && props.label}
      {props.children}
    </ChipWrapper>
  );
};

export default Chip;
