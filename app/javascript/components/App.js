import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import Routes from './Routes'
import {BrowserRouter as Link} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
    }
  render () {
    return (
      <div>
        <nav className = "navbar">
          <a href="/profile">My Dashboard</a>
        </nav>
        <Routes/>
      </div>
    );
  }
}

export default App
