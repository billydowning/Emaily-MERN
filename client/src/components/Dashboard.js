import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link to="/surveys/new" className="ui icon fluid red button">
          <i className="plus icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
