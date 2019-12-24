import React from "react";
import Form from "./formTemplate/FormTemplate";
import { reduxForm } from "redux-form";
import { createContact } from "../../actions";
import { connect } from "react-redux";

class NewFormContact extends React.Component {
  submit = formvalues => {
    formvalues.id = this.props.contacts.length;
    this.props.createContact(formvalues);
    this.props.history.push("/");
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        submitAction={handleSubmit(this.submit)}
        headerName="New Contact"
        formType="Submit"
      />
    );
  }
}
// createContact
const NewFormContactWithReduxForm = reduxForm({
  form: "contactCreate"
})(NewFormContact);
const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(
  mapStateToProps,
  { createContact }
)(NewFormContactWithReduxForm);
