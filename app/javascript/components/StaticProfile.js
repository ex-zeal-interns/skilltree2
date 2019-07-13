import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom'

class StaticProfile extends React.Component {

  render () {

    // coming from fetch of profile (find where(url = {url}))
    const {email, firstname, lastname, timezone, url} = this.props.profile
    const BASE_URL = process.env.REACT_APP_BASE_URL
    // local host will change on deployment
    const my_url = `${BASE_URL}/profile/${url}`

    return (
      <div id="staticprofile">
        <h2 id="fullname">{firstname} {lastname}</h2>
        <h3 id="email">{email}</h3>
        <h3 id="timezone">{timezone}</h3>
        <h3 id="url">{my_url}</h3>
      </div>
    );
  }
}

export default StaticProfile
