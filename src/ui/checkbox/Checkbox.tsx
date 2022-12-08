import { FC } from "react";
import useTheme from "../../theme/useTheme";
import { CheckPlaceholder, Input, Label, LabelText } from "./checkbox.styled";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import CheckboxPropsType from "./type";

const Checkbox: FC<CheckboxPropsType> = ({
  checked = false,
  color,
  onChange,
  label,
  labelColor,
  checkedLabelColor,
  disabled = false,
  defaultChecked = false,
  icon,
  checkedIcon,
  size,
}) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  return (
    <Label
      aria-label="acknowledgement"
      hasLabel={label ? true : false}
      disabled={disabled}
      onClick={onChange as any}
    >
      <CheckPlaceholder
        theme={{ mode, primaryColor }}
        color={color ? color : ""}
        checked={checked}
        size={size}
      >
        {icon && checkedIcon ? (
          checked || defaultChecked ? (
            checkedIcon
          ) : (
            icon
          )
        ) : checked || defaultChecked ? (
          <CheckBox />
        ) : (
          <CheckBoxOutlineBlank />
        )}
      </CheckPlaceholder>
      {label &&
        (typeof label === "object" ? (
          label
        ) : (
          <LabelText
            theme={{ mode }}
            checked={checked}
            labelColor={labelColor}
            checkedLabelColor={checkedLabelColor}
          >
            {label?.toLocaleString()}
          </LabelText>
        ))}
      <Input type="checkbox" checked={checked} onChange={onChange} />
    </Label>
  );
};

export default Checkbox;
