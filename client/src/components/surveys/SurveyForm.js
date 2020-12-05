import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
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
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
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

  if (!values.title) {
    errors.title = "You must provide a title.";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
