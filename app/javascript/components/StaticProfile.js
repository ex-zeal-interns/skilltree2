import React from "react";

function StaticProfile({ email, firstname, lastname, timezone }) {
  return (
    <div className="staticprofile">
      <h1 className="card-header">{`${firstname}'s Profile`}</h1>
      <div className="card">
        <h1 id="fullname">
          {firstname} {lastname}
        </h1>
        <h2 className="card-info" id="email">
          <span aria-label="envelope" role="img">
            {" "}
            ✉️
          </span>{" "}
          {email}
        </h2>
        <h2 className="card-info" id="timezone">
          <span aria-label="globe" role="img">
            {" "}
            🌐
          </span>{" "}
          {timezone}
        </h2>
      </div>
    </div>
  );
}

export default StaticProfile;
