import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="ui card" key={survey._id}>
          <div className="content">
            <div className="header">{survey.title}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">{survey.body}</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">Yes Votes: {survey.yes}</div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">No Votes: {survey.no}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
