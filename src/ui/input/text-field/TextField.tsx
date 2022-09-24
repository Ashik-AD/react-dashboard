import { FC, memo } from "react";
import { Inputs } from "../type";
import { Input, InputWrapper } from "./styled";
import useTheme from "../../../theme/useTheme";
const TextField: FC<Inputs> = (props) => {
  const {
    theme: { mode, primaryColor },
  } = useTheme();
  const {
    type,
    name,
    disable,
    sizes,
    varient,
    defaultValue,
    label,
    onChange,
    color,
    hypertext,
    error,
    placeholder,
    startAdornment,
    endAdornment,
    style,
  } = props;
  return (
    <InputWrapper
      theme={{ mode, primaryColor }}
      varient={varient ? varient : "regular"}
      color={color}
      disable={disable}
      error={error}
      sizes={sizes}
    >
      <Input
        type={type}
        name={name}
        className={`form-input body1 ${
          startAdornment ? "adornment-left" : ""
        } ${endAdornment ? "adornment-right" : ""}`}
        disable={disable}
        sizes={sizes}
        varient={varient ? varient : "regular"}
        theme={{ mode, primaryColor }}
        value={defaultValue}
        onChange={onChange}
        disabled={disable}
        error={error}
        placeholder={placeholder}
        style={style}
      />
      <span
        className={`input-label floating-label body2 ${
          varient === "filled" ? "label-unfill" : ""
        }${defaultValue || startAdornment ? " floating-label-top" : " "}`}
      >
        {label}
      </span>
      {(varient === "filled" || varient === "standard") && (
        <span className="input-border"></span>
      )}
      {hypertext && <span className="field-describe caption">{hypertext}</span>}
      {startAdornment && (
        <span className="input-adornment start-adornment">
          {startAdornment}
        </span>
      )}
      {endAdornment && (
        <span className="input-adornment end-adornment">{endAdornment}</span>
      )}
    </InputWrapper>
  );
};

export default memo(TextField);
