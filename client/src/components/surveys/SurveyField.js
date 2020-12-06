// Contains logic to render a single label and text input
import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div
        className={`${touched && error ? "ui pointing red basic label" : ""}`}
      >
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
