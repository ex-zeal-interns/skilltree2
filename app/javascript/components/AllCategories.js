import React from "react";

import SingleCategory from "./SingleCategory";
import AverageRating from "./AverageRating";

function AllCategories({
  myRatings,
  myMentorRatings,
  staticProfile,
  unique_url
}) {
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
  
  const averageList = myRatings.map((rating, index) => {
    return (
      <AverageRating
        index={index}
        key={rating.id}
        myMentorRatings={myMentorRatings}
        rating={rating}
        unique_url={unique_url}
      />
    );
  });

  return (
    <div>
      {(staticProfile && (
        <div className="allCategories">{averageList}</div>
      )) || <div className="allCategories">{categoryList}</div>}
    </div>
  );
}

export default AllCategories;
