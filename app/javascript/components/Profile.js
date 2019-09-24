import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  faCoffee,
  faCog,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

///// parts
import AllCategories from "./AllCategories";
import DevCard from "./DevCard";
import MentorCard from "./MentorCard";

////// fetches
import {
  createRelationship,
  myLastRating,
  myLastMentorRating,
  oneUser,
  myMentors,
  myDevelopers,
  myMentorIds,
  myDeveloperIds,
  myPendingMentorIds,
  myPendingDeveloperIds
} from "./API/api";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRatings: [],
      myMentorRatings: [],
      user: [],
      upcaseName: "",
      mentors: [],
      pendingMentorIds: [],
      mentorIds: [],
      developers: [],
      pendingDeveloperIds: [],
      developerIds: [],
      pending: false,
      staticProfile: false,
      conditionals: true,

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
    this.conditionCheck();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.fetchData();
    }
  }

  conditionCheck() {
    const {
      user,
      developerIds,
      mentorIds,
      pendingMentorIds,
      pendingDeveloperIds
    } = this.state;

    // if (
    //   !developerIds.includes(user.id) &&
    //   !mentorIds.includes(user.id) &&
    //   !pendingMentorIds.includes(user.id) &&
    //   !pendingDeveloperIds.includes(user.id)
    // ) {
    //   this.setState({
    //     conditional: true
    //   });
    // } else {
    //   this.setState({
    //     conditional: false
    //   });
    // }
    this.setState({
      conditionals:
        !developerIds.includes(user.id) &&
        !mentorIds.includes(user.id) &&
        !pendingMentorIds.includes(user.id) &&
        !pendingDeveloperIds.includes(user.id)
    });
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
    myLastMentorRating(id).then(APIrating => {
      this.setState({
        myMentorRatings: APIrating
      });
    });
    myLastRating(id).then(APIrating => {
      this.setState({
        myRatings: APIrating
      });
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
    myMentorIds().then(APImentorids => {
      this.setState({
        mentorIds: APImentorids
      });
    });
    myDeveloperIds().then(APIdeveloperids => {
      this.setState({
        developerIds: APIdeveloperids
      });
    });
    myPendingMentorIds().then(APImentorids => {
      this.setState({
        pendingMentorIds: APImentorids
      });
    });
    myPendingDeveloperIds().then(APIdeveloperids => {
      this.setState({
        pendingDeveloperIds: APIdeveloperids
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
      conditionals,
      user,
      myRatings,
      myMentorRatings,
      upcaseName,
      pendingMentorIds,
      pendingDeveloperIds,
      mentors,
      developers,
      pending,
      developerIds,
      mentorIds,
      staticProfile
    } = this.state;
    const { current_user } = this.props;
    // coming from fetch of profile (find where(url = {url}))
    const host = window.location.origin;

    // local host will change on deployment
    //string interp variables
    const myUrl = `${host}/staticprofile/`;
    const rankUrl = `/rankmyself/${user.id}`;
    const headerName = `${user.first_name}'s`;
    const staticLink = `${host}/staticProfile/${user.unique_url}`;
    const mailTo = `mailto:${user.email}`;

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

    const mentorList = mentors.map((relationship, index) => {
      return relationship.mentor.id;
    });
    const developerList = developers.map((relationship, index) => {
      return relationship.developer.id;
    });
    const accessList = [...mentorList, ...developerList];

    console.log(conditionals);
    return (
      <div className="profile">
        {(user.privacy_status === 1 &&
          current_user.id != user.id &&
          !accessList.includes(current_user.id) && (
            <div className="private_page">
              <h1>{headerName} Account Is Private</h1>
              {current_user.id != user.id &&
                !conditionals &&
                current_user.mentor_status == 1 && (
                  <button onClick={this.handleDevRequest}>
                    Be {headerName} Mentor
                  </button>
                )}
              {current_user.id != user.id &&
                !conditionals &&
                user.mentor_status == 1 && (
                  <button onClick={this.handleMentorRequest}>
                    Be {headerName} Mentee
                  </button>
                )}
            </div>
          )) || (
          <div>
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

                {developerIds.includes(user.id) && (
                  <Link className="rank-btn-link" to={rankUrl}>
                    <h4>RANK {upcaseName}</h4>
                  </Link>
                )}
              </div>
            )}
            <div className="card">
              <div className="card-content">
                <div className="flexbox">
                  <h1 className="card-info" id="fullname">
                    {user.first_name}
                    <br />
                    <br /> {user.last_name}
                  </h1>
                  <a className="back" href="/users/edit">
                    {current_user.id === user.id && (
                      <FontAwesomeIcon icon={faCog} color="grey" size="lg" />
                    )}
                  </a>
                </div>
                <h2 className="card-info" id="email">
                  <span aria-label="envelope" role="img">
                    ✉️
                  </span>
                  <a href={mailTo}>{user.email}</a>
                </h2>
                <h2 className="card-info" id="timezone">
                  <span aria-label="globe" role="img">
                    🌐
                  </span>
                  {user.time_zone}
                </h2>
                <a href={staticLink} id="urlLink">
                  <h2 className="card-info" id="url">
                    {myUrl}
                    <br />
                    {user.unique_url}
                  </h2>
                </a>
              </div>
              <div className="categories">
                <AllCategories
                  myRatings={myRatings}
                  myMentorRatings={myMentorRatings}
                  staticProfile={staticProfile}
                />
              </div>

              <div className="mentorbuttons">
                {current_user.id == user.id && (
                  <button>
                    <a href="/pendings">View Requests</a>
                  </button>
                )}
                {current_user.id != user.id &&
                  !conditionals &&
                  current_user.mentor_status == 1 && (
                    <button onClick={this.handleDevRequest}>
                      Be {headerName} Mentor
                    </button>
                  )}
                {current_user.id != user.id &&
                  !conditionals &&
                  user.mentor_status == 1 && (
                    <button onClick={this.handleMentorRequest}>
                      Be {headerName} Mentee
                    </button>
                  )}
              </div>
            </div>
            {mentors.length > 0 &&
              ((current_user.id === user.id && <h1>My Mentors</h1>) ||
                (current_user.id != user.id && <h1>{headerName} Mentors</h1>))}
            {myMentors}
            {developers.length > 0 &&
              ((current_user.id === user.id && <h1>My Developers</h1>) ||
                (current_user.id != user.id && (
                  <h1>{headerName} Developers</h1>
                )))}
            {myDevelopers}
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
