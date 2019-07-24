import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Routes from "../Routes";
import Header from "../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("<App>", () => {
  const wrapper = shallow(<App />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("has a router", () => {
    expect(wrapper.find(Routes)).toHaveLength(1);
  });
  it("has a header", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
