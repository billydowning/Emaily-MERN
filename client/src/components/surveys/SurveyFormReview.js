//SurveyFormReview shows users form input values for review
import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
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
      <button onClick={() => submitSurvey(formValues, history)} className="ui right floated red button" >
        Send Survey
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
