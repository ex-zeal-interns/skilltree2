import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import Logo from "./logo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <div className="white-header">
          <img className="navLogo" src={Logo} />
          <div className="navLinks">
            <a className="navBtn" href="/profile">
              My Dashboard
            </a>
          </div>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
