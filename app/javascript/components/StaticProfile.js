import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class StaticProfile extends React.Component {
  render() {
    const { email, firstname, lastname, timezone, url } = this.props.profile;

    return (
      <div id="staticprofile">
        <h1>{`${firstname}'s Profile`}</h1>
        <h2 id="fullname">
          {firstname} {lastname}
        </h2>
        <h3 id="email">{email}</h3>
        <h3 id="timezone">{timezone}</h3>
      </div>
    );
  }
}

export default StaticProfile;
