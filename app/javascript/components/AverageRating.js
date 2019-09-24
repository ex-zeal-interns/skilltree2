import React from "react";

import { averageRating } from "./API/api";

class AverageRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: ""
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    const { unique_url, rating } = this.props;
    averageRating(unique_url, rating.category.id).then(APIrating => {
      this.setState({ averageRating: APIrating });
    });
  }
  render() {
    const { rating, myMentorRatings } = this.props;
    const { averageRating } = this.state;

    return (
      <div className="singleCategory">
        <h2 id="score">{averageRating}</h2>
        <h2 id="category_name"> {rating.category.category_name}</h2>
      </div>
    );
  }
}

export default AverageRating;
