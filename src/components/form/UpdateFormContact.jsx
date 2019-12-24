import React from "react";
import Form from "./formTemplate/FormTemplate";
import { reduxForm } from "redux-form";
import { updateContact } from "../../actions";
import { connect } from "react-redux";

class UpdateFormContact extends React.Component {
  //
  //
  submit = formvalues => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    formvalues.id = Number(id);
    this.props.updateContact(formvalues);
    this.props.history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form
        submitAction={handleSubmit(this.submit)}
        headerName="Update Contact"
        formType="Update"
      />
    );
  }
}
// updateContact
const UpdateFormContactWithReduxForm = reduxForm({
  form: "contactUpdate"
})(UpdateFormContact);

export default connect(
  null,
  { updateContact }
)(UpdateFormContactWithReduxForm);
