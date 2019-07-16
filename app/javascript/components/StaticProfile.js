import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class StaticProfile extends React.Component {
  render() {
    const { email, firstname, lastname, timezone, url } = this.props.profile;

    return (
      <div className="staticprofile">
        <h1 className="card-header">{`${firstname}'s Profile`}</h1>
        <div className="card">
          <h1 id="fullname">
            {firstname} {lastname}
          </h1>
          <h2 className="card-info" id="email">
            ✉️ {email}
          </h2>
          <h2 className="card-info" id="timezone">
            🌐 {timezone}
          </h2>
        </div>
      </div>
    );
  }
}

export default StaticProfile;
