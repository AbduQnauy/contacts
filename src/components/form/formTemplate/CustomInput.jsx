import React from "react";
import { Input } from "reactstrap";

export const CustomInput = ({
  input,
  type,
  placeholder,
  changeTypeOnFocus,
  autoComplete,
  children
}) => (
  <Input
    {...input}
    type={type}
    placeholder={placeholder}
    onFocus={e => {
      if (e.target.type === "text") e.target.type = changeTypeOnFocus;
    }}
    autoComplete={autoComplete}
  >
    {children ? [...children] : null}
  </Input>
);
