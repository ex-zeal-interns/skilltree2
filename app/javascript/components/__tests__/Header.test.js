import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Header from "../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header>", () => {
  const header = shallow(<Header />);

  it("renders without crashing", () => {
    expect(header).toMatchSnapshot();
  });
  it("log in link says Log Out when user is logged in", () => {
    header.setProps({ logged_in: true, current_user: { id: 1 } });
    expect(header.find("#signInOut").text()).toBe("Log Out");
  });
  it("log in link says Log In when user is logged out", () => {
    header.setProps({ logged_in: false, current_user: { id: 1 } });
    expect(header.find("#signInOut").text()).toBe("Log In");
  });
});
