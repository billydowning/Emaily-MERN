import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValueError: "Please provide a title",
  },
  {
    label: "Subject Line",
    name: "subject",
    noValueError: "Please provide a subject",
  },
  { label: "Email Body", name: "body", noValueError: "Please provide a body" },
  {
    label: "Recipient List",
    name: "emails",
    noValueError: "Please provide a valid email",
  },
];

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}
          className="ui form"
        >
          {this.renderFields()}
          <button
            type="submit"
            className="ui right floated red button"
            style={{ margin: "5px" }}
          >
            Next
          </button>
          <Link
            to="/surveys"
            className="ui left floated button"
            style={{ margin: "5px" }}
          >
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
