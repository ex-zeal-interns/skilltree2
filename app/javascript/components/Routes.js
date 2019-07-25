import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Profile from "./Profile";
import StaticProfile from "./StaticProfile";

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
          exact
          path="/profile/:id"
          render={props => <Profile {...props} />}
        />
        <Route
          exact
          path={profUrl}
          render={props => <StaticProfile {...props} />}
        />
      </Router>
    );
  }
}

export default Routes;
