import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Routes from "../Routes";

Enzyme.configure({ adapter: new Adapter() });

describe("<App>", () => {
  const wrapper = shallow(<App />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("has a router", () => {
    expect(wrapper.find(Routes)).toHaveLength(1);
  });
  it("sign in link says Sign In when user is not logged in", () => {
    const props = {
      logged_in: false
    };
    const header = mount(<App />);
    expect(header.find("#signInOut").text()).toBe("Sign In");
  });
});
