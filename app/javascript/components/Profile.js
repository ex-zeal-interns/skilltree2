import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

///// parts
import AllCategories from "./AllCategories";
import DevCard from "./DevCard";
import MentorCard from "./MentorCard";
////// fetches
import {
  createRelationship,
  myLastRating,
  oneUser,
  myMentors,
  myDevelopers,
  mentorIds,
  developerIds
} from "./API/api";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRatings: [],
      user: [],
      upcaseName: "",
      mentors: [],
      mentorIds: [],
      developers: [],
      developerIds: [],
      pending: false,

      request: {
        mentor_id: "",
        developer_id: "",
        sender_id: "",
        status: 1
      }
    };
    this.handleDevRequest = this.handleDevRequest.bind(this);
    this.handleMentorRequest = this.handleMentorRequest.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.fetchData();
    }
  }

  fetchData() {
    const { match } = this.props;
    const { id } = match.params;

    oneUser(id).then(APIuser => {
      this.setState({
        upcaseName: APIuser.first_name.toUpperCase(),
        user: APIuser
      });
    });
    myLastRating(id).then(APIrating => {
      this.setState({ myRatings: APIrating });
    });
    myMentors(id).then(APImentors => {
      this.setState({
        mentors: APImentors
      });
    });
    myDevelopers(id).then(APIdevelopers => {
      this.setState({
        developers: APIdevelopers
      });
    });
    mentorIds().then(APImentorids => {
      this.setState({
        mentorIds: APImentorids
      });
    });
    developerIds().then(APIdeveloperids => {
      this.setState({
        developerIds: APIdeveloperids
      });
    });
  }

  handleMentorRequest() {
    const { user, request } = this.state;
    const { current_user, token } = this.props;
    const mentorRequest = request;

    mentorRequest.mentor_id = user.id;
    mentorRequest.developer_id = current_user.id;
    mentorRequest.sender_id = current_user.id;
    this.setState({ request: mentorRequest });
    createRelationship(request, token).then(
      alert("Request Sent"),
      window.location.reload()
    );
  }

  handleDevRequest() {
    const { user, request } = this.state;
    const { current_user, token } = this.props;
    const mentorRequest = request;

    mentorRequest.mentor_id = current_user.id;
    mentorRequest.sender_id = current_user.id;
    mentorRequest.developer_id = user.id;
    this.setState({ request: mentorRequest });
    createRelationship(request, token).then(
      alert("Request Sent"),
      window.location.reload()
    );
  }

  render() {
    const {
      user,
      myRatings,
      upcaseName,
      pendingDevs,
      pendingMentors,
      mentors,
      developers,
      pending,
      developerIds,
      mentorIds
    } = this.state;
    const { current_user } = this.props;
    // coming from fetch of profile (find where(url = {url}))
    const host = window.location.origin;

    // local host will change on deployment
    //string interp variables
    const myUrl = `${host}/staticprofile/`;
    const rankUrl = `/rankmyself/${user.id}`;
    const headerName = `${user.first_name}'s`;

    const myMentors = mentors.map((mentor, index) => {
      return (
        <MentorCard
          mentor={mentor}
          current_user={current_user}
          handleRelationship={this.handleRelationship}
          pending={pending}
        />
      );
    });

    const myDevelopers = developers.map((developer, index) => {
      return (
        <DevCard
          developer={developer}
          current_user={current_user}
          handleRelationship={this.handleRelationship}
          pending={pending}
        />
      );
    });

    return (
      <div className="profile">
        {(current_user.id === user.id && (
          <div className="header-area">
            <h1 className="card-header">My Profile</h1>
            <Link className="rank-btn-link" to={rankUrl}>
              <h4>RANK MYSELF</h4>
            </Link>
          </div>
        )) || (
          <div className="header-area">
            <h1 className="card-header">{headerName} Profile</h1>
            <Link className="rank-btn-link" to={rankUrl}>
              <h4>RANK {upcaseName}</h4>
            </Link>
          </div>
        )}
        <div className="card">
          <div className="card-content">
            <h1 className="card-info" id="fullname">
              {user.first_name}
              <br />
              <br /> {user.last_name}
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
            <h2 className="card-info" id="url">
              {myUrl}
              <br />
              {user.unique_url}
            </h2>
          </div>
          <div className="categories">
            <AllCategories myRatings={myRatings} />
          </div>

          <div className="mentorbuttons">
            {current_user.id == user.id && (
              <button>
                <a href="/pendings">View Requests</a>
              </button>
            )}
            {current_user.id != user.id &&
              !developerIds.includes(user.id) &&
              !mentorIds.includes(user.id) && (
                <button onClick={this.handleDevRequest}>
                  Be {headerName} Mentor
                </button>
              )}
            {current_user.id != user.id &&
              !developerIds.includes(user.id) &&
              !mentorIds.includes(user.id) && (
                <button onClick={this.handleMentorRequest}>
                  Be {headerName} Mentee
                </button>
              )}
          </div>
        </div>
        {mentors.length > 0 && <h1>My Mentors</h1>}
        {myMentors}
        {developers.length > 0 && <h1>My Developers</h1>}
        {myDevelopers}
      </div>
    );
  }
}

export default Profile;
