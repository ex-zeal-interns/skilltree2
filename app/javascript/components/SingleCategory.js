import React from "react";

function SingleCategory({ rating, myMentorRatings }) {
  const myMentorRating = myMentorRatings.filter(
    mentorRating => mentorRating.category_id === rating.category.id
  );

  return (
    <div className="singleCategory">
      <h2 id="score">{rating.score}</h2>
      <h2 id="category_name"> {rating.category.category_name}</h2>
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
    </div>
  );
}

export default SingleCategory;
