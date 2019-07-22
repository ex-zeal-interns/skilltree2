import React from "react";
import SingleCategory from "./SingleCategory";
import { allCategories } from "./API/api";
import { allRatings } from "./API/api";

class AllCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      score: 0,
      categories: [],
      ratings: []
    };
  }
  componentWillMount() {
    allCategories().then(APIcategories => {
      this.setState({ categories: APIcategories });
    });
    allRatings().then(APIratings => {
      this.setState({ ratings: APIratings });
    });
  }
  render() {
    const { categories, ratings } = this.state;
    console.log(categories);
    let categoryList = ratings.map((category, index) => {
      return (
        <SingleCategory
          categories={categories}
          ratings={ratings}
          index={index}
        />
      );
    });
    return <div className="allCategories">{categoryList}</div>;
  }
}

export default AllCategories;
