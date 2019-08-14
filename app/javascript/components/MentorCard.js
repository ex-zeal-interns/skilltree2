import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Profilepic from "./profilepic.jpeg";

///fetches
import { myMentors } from "./API/api";

class MentorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    myMentors().then(APImentors => {
      this.setState({
        mentors: APImentors
      });
    });
  }

  render() {
    const { mentors } = this.state;
    const myMentors = mentors.map((mentor, index) => {
      return (
        <div className="usercard">
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
        </div>
      );
    });
    return (
      <div className="allcards">
        <h1>My Mentors</h1>
        <div className="usercards">{myMentors}</div>
      </div>
    );
  }
}

export default MentorCard;
