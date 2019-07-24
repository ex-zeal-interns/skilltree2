import React from "react";

import SingleCategory from "./SingleCategory";

function AllCategories({ myRatings }) {
  const categoryList = myRatings.map((rating, index) => {
    return <SingleCategory index={index} key={rating.id} rating={rating} />;
  });

  return <div className="allCategories">{categoryList}</div>;
}

export default AllCategories;
