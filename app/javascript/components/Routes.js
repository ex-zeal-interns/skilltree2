import React from "react"

import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Profile from './Profile'

class Routes extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
    }

  render () {
      const {current_user_profile} = this.props
      const profUrl = `/profile/${current_user_profile.url}`

    return (

        <Router>
          <Link to={profUrl}>Profile</Link>

          <Route path={profUrl} render={(props) => <Profile{...props}
            profile={current_user_profile}
            />} />

        </Router>


    );
  }
}

export default Routes
