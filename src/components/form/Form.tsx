import React, { CSSProperties, forwardRef, ReactNode } from "react";

type Ref = HTMLFormElement;

interface Props {
  onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => void;
  preventDefault?: boolean;
  autcomplete?: "OFF" | "off";
  style?: CSSProperties;
  classess?: string;
  method?: "POST" | "GET";
  multipartFormData?: boolean;
  children: ReactNode;
}

const Form = forwardRef<Ref, Props>((props, ref) => {
  const {
    onSubmit,
    preventDefault,
    autcomplete,
    style,
    classess,
    method,
    multipartFormData,
    children,
  } = props;
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    if (preventDefault) {
      event.preventDefault();
    }
    onSubmit && onSubmit(event);
  };
  return (
    <form
      ref={ref}
      autoComplete={autcomplete ? autcomplete : "OFF"}
      method={method}
      encType={
        multipartFormData
          ? "multipart/form-data"
          : "application/x-www-form-urlencoded"
      }
      className={classess ? classess : ""}
      style={style}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
});
export default Form;
