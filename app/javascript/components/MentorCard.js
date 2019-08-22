import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

class MentorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAccept = () => {
    const { handleRelationship, mentor, current_user } = this.props;

    handleRelationship(current_user.id, mentor.mentor.id, 2);
  };

  handleReject = () => {
    const { handleRelationship, mentor, current_user } = this.props;

    handleRelationship(current_user.id, mentor.mentor.id, 3);
  };

  render() {
    const { mentor, pending } = this.props;

    return (
      <div className="allcards">
        <div className="usercards">
          {" "}
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
            {pending && (
              <div className="buttons">
                <button onClick={this.handleAccept} className="accept">
                  Accept
                </button>
                <button onClick={this.handleReject} className="reject">
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MentorCard;
