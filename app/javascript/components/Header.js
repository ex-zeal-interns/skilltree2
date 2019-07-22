import React, { Component } from "react";
import Logo from "./logo.png";

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_out_path,
      sign_in_path,
      current_user,
      edit_user
    } = this.props;
    return (
      <div className="white-header">
        <img id="zeal-img" className="navLogo" src={Logo} />
        <div className="navLinks">
          <a
            className="navBtn"
            id="profileBtn"
            href={(logged_in && `/profile/${current_user.id}`) || sign_in_path}
          >
            My Dashboard
          </a>
          <a
            className="navBtn"
            id="signInOut"
            href={(logged_in && sign_out) || sign_in_path}
          >
            {(logged_in && "Log Out") || "Log In"}
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
