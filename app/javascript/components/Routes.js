import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StaticProfile from "./StaticProfile";
import Profile from "./Profile";
import PropTypes from "prop-types";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "iou22o38f4"
    };
  }

  render() {
    const { url } = this.state;

    // builds custom url
    const profUrl = `/profile/${url}`;

    return (
      <Router>
        <Route
          path="/profile/:id"
          exact
          render={props => <Profile {...props} />}
        />
        <Route
          path={profUrl}
          exact
          render={props => <StaticProfile {...props} />}
        />
      </Router>
    );
  }
}

export default Routes;
