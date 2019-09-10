import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

import { mentorList } from "./API/api";

class MentorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: [],
      pending: false
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    mentorList().then(APImentorList => {
      this.setState({
        mentors: APImentorList
      });
    });
  }

  render() {
    const { current_user } = this.props;
    const { mentors, pending } = this.state;
    const allMentors = mentors.map((mentor, index) => {
      const userLink = `profile/${mentor.id}`;
      if (current_user.id != mentor.id) {
        return (
          <div className="allcards">
            <div className="usercards">
              {" "}
              <div className="pendingcard">
                <a href={userLink}>
                  <img src={Profilepic} className="cardpicture" />
                </a>
                <div className="info">
                  {(mentor.mentor_status == 1 && <h5>MENTOR</h5>) || (
                    <h5>DEVELOPER</h5>
                  )}
                  <h2>
                    {mentor.first_name} {mentor.last_name}
                  </h2>
                  <span aria-label="envelope" role="img">
                    <p>✉️{mentor.email}</p>
                  </span>
                  <br />
                  <span aria-label="envelope" role="img">
                    <p>🌐{mentor.time_zone}</p>
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
    });
    return <div className="MentorList">{allMentors}</div>;
  }
}

export default MentorList;
