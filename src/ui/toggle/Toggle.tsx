import { FC } from "react";
import { Circle, Input, Label, ToggleWrapper, Track } from "./toggle.styled";
import { TogglerProps } from "./type";
import useTheme from "../../theme/useTheme";
const Toggle: FC<TogglerProps> = (props) => {
  const { toggled, label, onClick } = props;
  const { theme } = useTheme();
  return (
    <ToggleWrapper onClick={onClick} label={label}>
      <span>
        <span>
          <Input
            type="checkbox"
            aria-label="On Off button"
            checked={toggled}
            onChange={onClick}
          />
          <Track
            theme={{
              primaryColor: theme.primaryColor.color,
              mode: theme.mode.name,
            }}
            toggled={toggled ? toggled : false}
          />
        </span>
        <Circle theme={theme} toggled={toggled ? toggled : false} />
      </span>
      {label && <Label theme={{ mode: theme.mode }}>{label}</Label>}
    </ToggleWrapper>
  );
};

export default Toggle;
