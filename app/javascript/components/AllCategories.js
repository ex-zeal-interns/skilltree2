import React from "react";
import SingleCategory from "./SingleCategory";

class AllCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { categories } = this.state;
    const { myRatings } = this.props;
    let categoryList = myRatings.map((rating, index) => {
      return <SingleCategory rating={rating} index={index} />;
    });
    return <div className="allCategories">{categoryList}</div>;
  }
}

export default AllCategories;
