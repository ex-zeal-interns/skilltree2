import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AllCategories from "../AllCategories";
import SingleCategory from "../SingleCategory";

Enzyme.configure({ adapter: new Adapter() });

describe("<AllCategorties>", () => {
  let myRatings = [0, 0, 0];
  const wrapper = shallow(<AllCategories myRatings={myRatings} />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("categoryList will match the length of myRatings", () => {
    expect(wrapper.find(SingleCategory)).toHaveLength(myRatings.length);
  });
});
