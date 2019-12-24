import React from "react";
import { Col } from "reactstrap";
import { CustomInput } from "./CustomInput";
import { CustomError } from "./CustomError";
import { ErrorPlaceholder } from "./ErrorPlaceholder";

const RenderInput = ({
  input,
  placeholder,
  type,
  children,
  changeTypeOnFocus,
  autoComplete,
  meta: { touched, error, warning }
}) => (
  <>
    {/* Input */}
    <Col style={{ paddingLeft: "0" }} md={{ size: 5, offset: 2 }}>
      <CustomInput
        input={input}
        type={type}
        placeholder={placeholder}
        changeTypeOnFocus={changeTypeOnFocus}
        autoComplete={autoComplete}
        children={children}
      />
      <ErrorPlaceholder />
    </Col>
    {/* Input */}

    {/* Error */}
    <CustomError
      touched={touched}
      error={error}
      warning={warning}
      value={input.value}
    />
    {/* Error */}
  </>
);

export default RenderInput;
