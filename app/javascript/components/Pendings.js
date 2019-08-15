import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

////fetches
import { pendingDevelopers, pendingMentors } from "./API/api";

class Pendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingDevs: [],
      pendingMentors: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    pendingMentors().then(APIpendingMentors => {
      this.setState({ pendingMentors: APIpendingMentors });
    });
    pendingDevelopers().then(APIpendingDevs => {
      this.setState({ pendingDevs: APIpendingDevs });
    });
  }

  handleAccept() {
    alert("Accepted");
  }
  handleReject() {
    alert("Reject");
  }

  render() {
    const { pendingDevs, pendingMentors } = this.state;
    const pMentors = pendingMentors.map((mentor, index) => {
      return (
        <div className="pendingcard">
          <img src={Profilepic} className="cardpicture" />
          <div className="info">
            {(mentor.mentor.mentor_status == 1 && <h5>MENTOR</h5>) || (
              <h5>DEVELOPER</h5>
            )}
            <h2>
              {mentor.mentor.first_name} {mentor.mentor.last_name}
            </h2>
            <span aria-label="envelope" role="img">
              <p>✉️{mentor.mentor.email}</p>
            </span>
            <br />
            <span aria-label="envelope" role="img">
              <p>🌐{mentor.mentor.time_zone}</p>
            </span>
          </div>
          <div className="buttons">
            <button onClick={this.handleAccept} className="accept">
              Accept
            </button>
            <button onClick={this.handleReject} className="reject">
              Reject
            </button>
          </div>
        </div>
      );
    });
    const pDevs = pendingDevs.map((developer, index) => {
      return (
        <div className="pendingcard">
          <img src={Profilepic} className="cardpicture" />
          <div className="info">
            {(developer.developer.mentor_status == 1 && <h5>MENTOR</h5>) || (
              <h5>DEVELOPER</h5>
            )}
            <h2>
              {developer.developer.first_name} {developer.developer.last_name}
            </h2>
            <span aria-label="envelope" role="img">
              <p>✉️{developer.developer.email}</p>
            </span>
            <br />
            <span aria-label="envelope" role="img">
              <p>🌐{developer.developer.time_zone}</p>
            </span>
          </div>
          <div className="buttons">
            <button onClick={this.handleAccept} className="accept">
              Accept
            </button>
            <button onClick={this.handleReject} className="reject">
              Reject
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="pendings">
        {pendingMentors.length > 0 && (
          <div>
            <h1>Pending Mentors</h1>
            {pMentors}
          </div>
        )}
        {pendingDevs.length > 0 && (
          <div>
            <h1>Pending Developers</h1>
            {pDevs}
          </div>
        )}
      </div>
    );
  }
}

export default Pendings;
