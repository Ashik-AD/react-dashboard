import {  forwardRef, memo } from "react";
import { Inputs } from "../type";
import { Input, InputWrapper, StyledTextarea } from "./styled";
import useTheme from "../../../theme/useTheme";
type InputRef = HTMLInputElement;
import InputLabel from "../components/InputLabel";
import InputLabelBorder from "../components/InputLabelBorder";

const TextField = forwardRef<InputRef, Inputs>((props, ref) => {
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
    onKeyDown,
    color,
    hypertext,
    error,
    placeholder,
    startAdornment,
    endAdornment,
    style,
    autoFocus,
    borderRadius,
    width,
    maxWidth,
    multiRow,
    value,
    maxLength,
    maxValue,
    minValue,
    minLength,
    pattern,
  } = props;
  return (
    <InputWrapper
      theme={{ mode, primaryColor }}
      varient={varient ? varient : "regular"}
      color={color}
      disable={disable}
      error={error}
      sizes={sizes}
      width={width}
      maxWidth={maxWidth}
    >
      {!multiRow ? (
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
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disable}
          error={error}
          placeholder={placeholder}
          style={style}
          autoFocus={autoFocus}
          hasLabel={label ? true : false}
          borderRadius={borderRadius}
          maxWidth={maxWidth}
          ref={ref}
          pattern={pattern}
          max={maxValue}
          min={minValue}
          maxLength={maxLength}
          minLength={minLength}
        />
      ) : (
        <StyledTextarea
          {...props}
          as="textarea"
          value={value}
          defaultValue={defaultValue}
          varient={varient ? varient : "regular"}
          className="form-input body1"
          theme={{ mode, primaryColor }}
          hasLabel={label ? true : false}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
      {label && (
        <InputLabel
          label={label}
          isFloating={value || defaultValue ? true : false}
        />
      )}
      <InputLabelBorder varient={varient || "regular"} />
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
});

export default memo(TextField);
