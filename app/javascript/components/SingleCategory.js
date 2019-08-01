import React from "react";

function SingleCategory({ rating }) {
  return (
    <div className="singleCategory">
      <h2 id="score">{rating.score}</h2>
      <h2 id="category_name"> {rating.category.category_name}</h2>
    </div>
  );
}

export default SingleCategory;
