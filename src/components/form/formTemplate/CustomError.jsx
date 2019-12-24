import React from "react";
import { Badge } from "reactstrap";

export const CustomError = ({ touched, error, warning, value }) => (
  <div>
    {touched &&
      value !== "SELECT YOUR CATEGORY..." &&
      ((error && (
        <Badge color="danger">
          <span>{error}</span>
        </Badge>
      )) ||
        (warning && (
          <Badge color="warning">
            <span>{warning}</span>
          </Badge>
        )))}
  </div>
);
