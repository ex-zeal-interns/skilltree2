import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route} from "react-router-dom";
import StaticProfile from './StaticProfile'
import Profile from './Profile'

class Routes extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        profile: {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          timezone: 'UTC',
          url: 'iou22o38f4',
        },
      }
    }

  render () {
      const {profile} = this.state

      // builds custom url
      const profUrl = `/profile/${profile.url}`

    return (
      <Router>
        <Route path="/profile" exact render={(props) => <Profile{...props}
          profile={profile}
        />} />
        <Route path={profUrl} exact render={(props) => <StaticProfile{...props}
          profile={profile}
        />} />
      </Router>
    );
  }
}

export default Routes
