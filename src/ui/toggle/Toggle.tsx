import { FC } from "react";
import { Circle, Input, Label, ToggleWrapper, Track } from "./styled";
import { TogglerProps } from "./type";
import useTheme from "../../theme/useTheme";
const Toggle: FC<TogglerProps> = (props) => {
  const { toggled, label, onToggle, label2, size } = props;
  const { theme } = useTheme();
  return (
    <ToggleWrapper
      onClick={onToggle}
      label={label}
      size={size ? size : "regular"}
    >
      {label2 && <Label theme={{ mode: theme.mode }}>{label2}</Label>}
      <div style={{ position: "relative" }}>
        <span>
          <Input
            type="checkbox"
            aria-label="On Off button"
            checked={toggled}
            onChange={onToggle}
          />
          <Track
            theme={{
              primaryColor: theme.primaryColor.color,
              mode: theme.mode.name,
            }}
            toggled={toggled ? toggled : false}
            size={size}
          />
        </span>
        <Circle theme={theme} toggled={toggled ? toggled : false} size={size} />
      </div>
      {label && (
        <Label
          theme={{ mode: theme.mode }}
          className="toggle-label"
          size={size}
        >
          {label}
        </Label>
      )}
    </ToggleWrapper>
  );
};

export default Toggle;
