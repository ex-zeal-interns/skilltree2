import React from "react";

class SingleCategory extends React.Component {
  render() {
    const { index, rating } = this.props;
    return (
      <div className="singleCategory">
        <h2 id="score">{rating.score}</h2>
        <h2 id="category_name"> {rating.category.category_name}</h2>
      </div>
    );
  }
}

export default SingleCategory;
