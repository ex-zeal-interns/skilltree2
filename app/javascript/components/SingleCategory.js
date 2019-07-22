import React from "react";

class SingleCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { categories, index, ratings } = this.props;
    return (
      <div className="singleCategory">
        <h2 id="score">{ratings[index].score}</h2>
        <h2 id="category_name">{ratings[index].category.category_name}</h2>
      </div>
    );
  }
}

export default SingleCategory;
