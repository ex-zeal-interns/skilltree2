import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import Routes from './Routes'

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      }
    }
  render () {
    return (
      <div>
        <Routes/>

      </div>
    );
  }
}

export default App
