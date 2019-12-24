import React from "react";
import { Col, Row, Form, FormGroup, Container } from "reactstrap";
import RenderInput from "./RenderInput";
//
import { CustomReduxFormInput } from "./CustomReduxFormInput";
import { FormButton } from "./FormButton";
//
import {
  required,
  alphaChar,
  minLength3,
  phoneNumber,
  realPhone
} from "./validationFunctions";
//
//
//
const FormContact = ({
  pristine,
  reset,
  submitting,
  submitAction,
  headerName,
  formType,
  firstname,
  familyname,
  category,
  phone,
  date
}) => {
  return (
    <div style={{ padding: "5%" }}>
      <Container fluid="xl">
        <Row
          style={{
            paddingBottom: "1.5%",
            marginBottom: "1%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            fontSize: "2rem"
          }}
        >
          {headerName}
        </Row>
        <Form onSubmit={submitAction}>
          <FormGroup row>
            {/* CustomReduxFormInput */}
            <CustomReduxFormInput
              name="firstname"
              type="text"
              placeholder="First Name"
              autoComplete="off"
              component={RenderInput}
              validate={[required, minLength3]}
              warn={alphaChar}
            />
            {/* CustomReduxFormInput */}
          </FormGroup>

          <FormGroup row>
            <CustomReduxFormInput
              name="familyname"
              type="text"
              placeholder="Family Name"
              autoComplete="off"
              component={RenderInput}
              validate={[required, minLength3]}
              warn={alphaChar}
            />
          </FormGroup>

          <FormGroup row>
            <CustomReduxFormInput
              name="date"
              type="text"
              placeholder="Birth Date"
              changeTypeOnFocus="date"
              component={RenderInput}
              validate={required}
            />
          </FormGroup>

          <FormGroup row>
            <CustomReduxFormInput
              name="phone"
              type="tel"
              placeholder="Phone Number"
              autoComplete="off"
              component={RenderInput}
              validate={[required, phoneNumber]}
              warn={realPhone}
            />
          </FormGroup>

          <FormGroup row>
            <CustomReduxFormInput
              name="category"
              type="select"
              component={RenderInput}
              validate={required}
            >
              <option value="SELECT YOUR CATEGORY...">
                SELECT YOUR CATEGORY...
              </option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="club">Club</option>
            </CustomReduxFormInput>
          </FormGroup>

          <FormGroup row>
            <Col
              xs={{ size: 12 }}
              sm={{ size: 1, offset: 6 }}
              style={{ marginRight: "2.5rem", marginBottom: ".5rem" }}
            >
              <FormButton type="submit" color="primary" disabled={submitting}>
                {formType}
              </FormButton>
            </Col>
            <Col xs={{ size: 12 }} sm={{ size: 1 }}>
              <FormButton
                outline
                type="button"
                disabled={pristine || submitting}
                color="primary"
                onClick={reset}
                style={{ color: "#000000" }}
              >
                Clear
              </FormButton>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default FormContact;
