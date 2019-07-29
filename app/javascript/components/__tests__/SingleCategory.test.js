import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleCategory from "../SingleCategory";

Enzyme.configure({ adapter: new Adapter() });

describe("<SingleCategorty>", () => {
  const rating = { score: 5, category: { category_name: "Purple" } };
  const wrapper = shallow(<SingleCategory rating={rating} />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
