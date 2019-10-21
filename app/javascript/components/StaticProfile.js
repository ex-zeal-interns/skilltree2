import React from "react";

import AllCategories from "./AllCategories";

import { myLastRating, oneUser, myLastMentorRating } from "./API/api";

class StaticProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRatings: [],
      user: [],
      myMentorRatings: [],
      staticProfile: true
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.unique_url !== prevProps.match.params.unique_url) {
      this.fetchData();
    }
  }

  fetchData() {
    const { match } = this.props;
    const { unique_url } = match.params;

    oneUser(unique_url).then(APIuser => {
      this.setState({ user: APIuser });
    });
    myLastRating(unique_url).then(APIrating => {
      this.setState({ myRatings: APIrating });
    });
    myLastMentorRating(unique_url).then(APIrating => {
      this.setState({ myMentorRatings: APIrating });
    });
  }

  render() {
    const { user, myRatings, myMentorRatings, staticProfile } = this.state;
    const { match } = this.props;
    const { unique_url } = match.params;

    return (
      <div className="profile">
        <h1 className="card-header">My Profile</h1>
        <div className="card">
          <div className="card-content">
            <h1 className="card-info" id="fullname">
              {user.first_name}
              <br />
              <br />
              {user.last_name}
            </h1>
            <h2 className="card-info" id="email">
              <span aria-label="envelope" role="img">
                ✉️
              </span>
              {user.email}
            </h2>
            <h2 className="card-info" id="timezone">
              <span aria-label="globe" role="img">
                🌐
              </span>
              {user.time_zone}
            </h2>
          </div>
          <div className="categories">
            <AllCategories
              myRatings={myRatings}
              myMentorRatings={myMentorRatings}
              staticProfile={staticProfile}
              unique_url={unique_url}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StaticProfile;
