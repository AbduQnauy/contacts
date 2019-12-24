import React from "react";
import { Button } from "reactstrap";

export const FormButton = ({
  disabled,
  children,
  color,
  outline,
  type,
  onClick,
  style
}) => (
  <Button
    color={color}
    outline={outline}
    type={type}
    disabled={disabled}
    onClick={onClick}
    style={style}
  >
    {children}
  </Button>
);
