import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Profilepic from "./profilepic.jpeg";

///fetches
import { myDevelopers } from "./API/api";

class DevCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    myDevelopers().then(APIdevelopers => {
      this.setState({
        developers: APIdevelopers
      });
    });
  }

  render() {
    const { developers } = this.state;
    const myDevelopers = developers.map((developer, index) => {
      return (
        <div className="usercard">
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
        </div>
      );
    });
    return (
      <div className="allcards">
        <h1>My Developers</h1>
        <div className="usercards">{myDevelopers}</div>
      </div>
    );
  }
}

export default DevCard;
