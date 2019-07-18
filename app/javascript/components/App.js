import React from "react";
import Routes from "./Routes";
import Logo from "./logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      logged_in,
      sign_out,
      sign_in,
      current_user,
      edit_user
    } = this.props;
    return (
      <div className="app">
        <div className="white-header">
          <img id="zeal-img" className="navLogo" src={Logo} />
          <div className="navLinks">
            <a
              className="navBtn"
              id="profileBtn"
              href={(logged_in && `/profile/${current_user.id}`) || sign_in}
            >
              My Dashboard
            </a>
            <a
              className="navBtn"
              id="signInOut"
              href={(logged_in && sign_out) || sign_in}
            >
              {(logged_in && "Sign Out") || "Sign In"}
            </a>
          </div>
        </div>
        <div className="wrapper">
          <Routes
            logged_in={logged_in}
            sign_out={sign_out}
            sign_in={sign_in}
            current_user={current_user}
            edit_user={edit_user}
          />
        </div>
      </div>
    );
  }
}

export default App;
