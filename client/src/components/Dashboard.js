import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link
          to="/surveys/new"
          className="ui top attached red button"
          style={{ margin: "10px" }}
        >
          <i className="plus icon"></i>
        </Link>
      </div>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
