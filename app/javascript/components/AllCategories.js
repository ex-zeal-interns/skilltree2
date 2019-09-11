import React from "react";

import SingleCategory from "./SingleCategory";

function AllCategories({ myRatings, myMentorRatings }) {
  const categoryList = myRatings.map((rating, index) => {
    return (
      <SingleCategory
        index={index}
        key={rating.id}
        myMentorRatings={myMentorRatings}
        rating={rating}
      />
    );
  });

  return <div className="allCategories">{categoryList}</div>;
}

export default AllCategories;
