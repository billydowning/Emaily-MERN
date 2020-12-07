//SurveyFormReview shows users form input values for review
import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries below:</h5>
      <div className="ui list">
        <div className="item">
          <i className="envelope icon"></i>
          <div className="content">
            <label>Survey Title:</label>
            <div>{formValues.title}</div>
          </div>
        </div>
        <div className="item">
          <i className="envelope icon"></i>
          <div className="content">
            <label>Subject:</label>
            <div className="content">{formValues.subject}</div>
          </div>
        </div>
        <div className="item">
          <i className="envelope icon"></i>
          <div className="content">
            <label>Email body:</label>
            <div className="content">{formValues.body}</div>
          </div>
        </div>
        <div className="item">
          <i className="envelope icon"></i>
          <div className="content">
            <label>Recipients:</label>
            <div className="content">{formValues.emails}</div>
          </div>
        </div>
      </div>
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
