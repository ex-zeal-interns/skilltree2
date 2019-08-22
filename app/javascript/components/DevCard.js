import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

class DevCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAccept = () => {
    const { handleRelationship, developer, current_user } = this.props;

    handleRelationship(developer.developer.id, current_user.id, 2);
  };

  handleReject = () => {
    const { handleRelationship, developer, current_user } = this.props;

    handleRelationship(developer.developer.id, current_user.id, 3);
  };

  render() {
    const { developer, pending } = this.props;

    return (
      <div className="allcards">
        <div className="usercards">
          {" "}
          <div className="pendingcard">
            <img src={Profilepic} className="cardpicture" />
            <div className="info">
              {(developer.developer.developer_status == 1 && (
                <h5>MENTOR</h5>
              )) || <h5>DEVELOPER</h5>}
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

export default DevCard;
