import React from "react";

import Logo from "./pics/logo.png";

function Header({ logged_in, sign_out_path, sign_in_path, current_user }) {
  return (
    <div className="white-header">
      <img alt="zeal logo" className="navLogo" id="zeal-img" src={Logo} />
      <div className="navLinks">
        <a className="navBtn" href="/" id="mentorFind">
          Find a Mentor
        </a>
        <a
          className="navBtn"
          href={(logged_in && `/profile/${current_user.id}`) || sign_in_path}
          id="profileBtn"
        >
          My Dashboard
        </a>
        <a
          className="navBtn"
          href={(logged_in && sign_out_path) || sign_in_path}
          id="signInOut"
        >
          {(logged_in && "Log Out") || "Log In"}
        </a>
      </div>
    </div>
  );
}

export default Header;
