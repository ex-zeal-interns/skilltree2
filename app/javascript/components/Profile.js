import React from "react";
import AllCategories from "./AllCategories";

class Profile extends React.Component {
  render() {
    const { email, firstname, lastname, timezone, url } = this.props.profile;

    // coming from fetch of profile (find where(url = {url}))
    const host = window.location.origin;

    // local host will change on deployment
    const my_url = `${host}/profile/${url}`;

    return (
      <div className="profile">
        <h1 className="card-header">My Profile</h1>
        <div className="card">
          <div className="card-content">
            <h1 className="card-info" id="fullname">
              {firstname} {lastname}
            </h1>
            <h2 className="card-info" id="email">
              ✉️ {email}
            </h2>
            <h2 className="card-info" id="timezone">
              🌐 {timezone}
            </h2>
            <h2 className="card-info" id="url">
              {my_url}
            </h2>
          </div>
          <div className="categories">
            <AllCategories />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
