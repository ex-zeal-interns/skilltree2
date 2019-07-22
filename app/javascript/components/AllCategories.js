import React from "react";
import SingleCategory from "./SingleCategory";

class AllCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [0, 0, 0, 0, 0]
    };
  }
  render() {
    const { categories } = this.state;
    let categoryList = categories.map((category, index) => {
      return <SingleCategory />;
    });
    return <div className="allCategories">{categoryList}</div>;
  }
}

export default AllCategories;
