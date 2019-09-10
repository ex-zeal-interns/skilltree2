import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

////pages
import MentorList from "./MentorList";
import Pendings from "./Pendings";
import Profile from "./Profile";
import RankMyself from "./RankMyself";
import StaticProfile from "./StaticProfile";

function Routes({ current_user, token }) {
  return (
    <Router>
      <Route
        exact
        path="/profile/:id"
        render={props => (
          <Profile {...props} current_user={current_user} token={token} />
        )}
      />
      <Route
        exact
        path="/staticprofile/:unique_url"
        render={props => <StaticProfile {...props} />}
      />
      <Route
        exact
        path="/rankmyself/:id"
        render={props => (
          <RankMyself {...props} current_user={current_user} token={token} />
        )}
      />
      <Route
        exact
        path="/pendings"
        render={props => (
          <Pendings {...props} current_user={current_user} token={token} />
        )}
      />
      <Route
        exact
        path="/mentorlist"
        render={props => <MentorList {...props} current_user={current_user} />}
      />
    </Router>
  );
}

export default Routes;
