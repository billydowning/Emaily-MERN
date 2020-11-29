import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";
import Stripe from "./Stripe";

class Header extends React.Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <a href="/auth/google" className="ui primary button">
            Login With Google
          </a>
        );
      default:
        return (
          <div>
            <Payments />
            <a
              href="/api/logout"
              className="ui primary button"
              style={{ margin: "10px" }}
            >
              Logout
            </a>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to={this.props.auth ? "/surveys" : "/"} className="item">
          Emaily
        </Link>
        <div className="right menu">{this.renderAuth()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
