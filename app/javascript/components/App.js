import React from "react";
import Routes from "./Routes";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      logged_in,
      sign_out_path,
      sign_in_path,
      current_user,
      edit_user
    } = this.props;
    return (
      <div className="app">
        <Header
          logged_in={logged_in}
          sign_out_path={sign_out_path}
          sign_in_path={sign_in_path}
          current_user={current_user}
          edit_user={edit_user}
        />
        <div className="wrapper">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
