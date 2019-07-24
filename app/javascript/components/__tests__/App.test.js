import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import App from "../App";
import Header from "../Header";
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
  it("has a header", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
