import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Emaily
        </Link>
        <div className="right menu">
          <Link to="/surveys" className="item">
            All Surveys
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
