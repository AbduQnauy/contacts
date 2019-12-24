import React from "react";
import { Field } from "redux-form";

export const CustomReduxFormInput = ({
  name,
  type,
  placeholder,
  autoComplete,
  component,
  changeTypeOnFocus,
  children,
  validate,
  warn
}) => (
  <Field
    name={name}
    type={type}
    placeholder={placeholder}
    autoComplete={autoComplete}
    component={component}
    changeTypeOnFocus={changeTypeOnFocus}
    validate={validate}
    warn={warn}
  >
    {children}
  </Field>
);
