import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import Routes from './Routes'

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        current_user_profile: {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john@example.com',
          timezone: 'UTC',
          url: 'iou22o38fhlg',
        }
      }
    }
  render () {
    return (
      <div>
        <h1>Home</h1>
        <Routes
          current_user_profile={this.state.current_user_profile}
        />

      </div>
    );
  }
}

export default App
