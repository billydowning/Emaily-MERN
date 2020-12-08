//SurveyFormReview shows users form input values for review
import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} className="ui list">
        <div className="item">
          <i className="envelope icon"></i>
          <div className="content">
            <label>{label}:</label>
            <div>{formValues[name]}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries below:</h5>
      {reviewFields}
      <button className="ui primary button" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);
