import React from "react"
import PropTypes from "prop-types"

class Profile extends React.Component {

  render () {
    const {email, firstname, lastname, timezone, url} = this.props.profile

    const my_url = `http://localhost:3000/profile/${url}`
    
    return (
      <React.Fragment>
        <h2>{firstname} {lastname}</h2>
        <h3>{email}</h3>
        <h3>{timezone}</h3>
        <h3>{my_url}</h3>
      </React.Fragment>
    );
  }
}

export default Profile
