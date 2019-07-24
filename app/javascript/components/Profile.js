import React from "react";
import AllCategories from "./AllCategories";
import { oneUser } from "./API/api";
import { myRatings } from "./API/api";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      myRatings: []
    };
  }

  renderingFunction() {
    let id = this.props.match.params.id;
    oneUser(id).then(APIuser => {
      this.setState({ user: APIuser });
    });
    myRatings(id).then(APIrating => {
      this.setState({ myRatings: APIrating });
    });
  }
  componentWillMount() {
    this.renderingFunction();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.renderingFunction();
    }
  }

  render() {
    const { user, myRatings } = this.state;
    // coming from fetch of profile (find where(url = {url}))
    const host = window.location.origin;

    // local host will change on deployment
    const my_url = `${host}/profile/`;

    return (
      <div className="profile">
        <h1 className="card-header">My Profile</h1>
        <div className="card">
          <div className="card-content">
            <h1 className="card-info" id="fullname">
              {user.first_name} {user.last_name}
            </h1>
            <h2 className="card-info" id="email">
              ✉️ {user.email}
            </h2>
            <h2 className="card-info" id="timezone">
              🌐 {user.time_zone}
            </h2>
            <h2 className="card-info" id="url">
              {my_url}
              <br />
              {user.unique_url}
            </h2>
          </div>
          <div className="categories">
            <AllCategories myRatings={myRatings} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
