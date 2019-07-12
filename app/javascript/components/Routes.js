import React from "react"
import ReactDOM from 'react-dom'

import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import StaticProfile from './StaticProfile'

class Routes extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        profile: {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          timezone: 'UTC',
          url: 'iou22o38fhlg',
        }
      }
    }

  render () {
      const {profile} = this.state

      // builds custom url
      const profUrl = `/profile/${profile.url}`

    return (

        <Router>
          <Link to={profUrl}>Profile</Link>

          <Route path={profUrl} render={(props) => <StaticProfile{...props}
            profile={profile}
            />} />

        </Router>


    );
  }
}

export default Routes
