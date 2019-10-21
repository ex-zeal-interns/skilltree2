import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class SingleCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
    this.handleDropClick = this.handleDropClick.bind(this);
  }

  handleDropClick() {
    this.setState(prevState => ({
      dropdown: !prevState.dropdown
    }));
  }

  render() {
    const { rating, myMentorRatings } = this.props;
    const { dropdown } = this.state;
    const myMentorRating = myMentorRatings.filter(
      mentorRating => mentorRating.category_id === rating.category.id
    );

    return (
      <div className="singleCategory">
        <div id="arrow">
          {myMentorRating.length > 0 && (
            <FontAwesomeIcon
              icon={dropdown ? faAngleDown : faAngleRight}
              onClick={this.handleDropClick}
              size="lg"
            />
          )}
        </div>
        <h2 id="score">{rating.score}</h2>
        <h2 id="category_name"> {rating.category.category_name}</h2>
        {dropdown && (
          <div className="mentorRatings">
            {myMentorRating.map(r => {
              return (
                <div className="singleMentorCategory" key={r.timestamp}>
                  <h2 id="mentor_score">{r.score}</h2>
                  <div id="mentor_name">
                    <h2 className="first_name">{r.mentor.first_name} </h2>
                    <h2 className="last_name">{r.mentor.last_name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SingleCategory;
