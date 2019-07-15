import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter as Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <a href="/profile">My Dashboard</a>
          </nav>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
