import React from "react";
import SingleCategory from "./SingleCategory";

class AllCategories extends React.Component {
  render() {
    const { myRatings } = this.props;
    const categoryList = myRatings.map((rating, index) => {
      return <SingleCategory rating={rating} index={index} />;
    });
    return <div className="allCategories">{categoryList}</div>;
  }
}

export default AllCategories;
