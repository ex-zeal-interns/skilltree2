import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

class StaticProfile extends React.Component {

  render () {

    // coming from fetch of current_user_profile
    const {email, firstname, lastname, timezone, url} = this.props.profile

    // local host will change on deployment
    const my_url = `http://localhost:3000/profile/${url}`

    return (
      <React.Fragment>
        <h2 id="fullname">{firstname} {lastname}</h2>
        <h3 id="email">{email}</h3>
        <h3 id="timezone">{timezone}</h3>
        <h3 id="url">{my_url}</h3>
      </React.Fragment>
    );
  }
}

export default StaticProfile
