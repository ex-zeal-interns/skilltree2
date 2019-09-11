import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

import { mentorList, allCategories } from "./API/api";

class MentorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
      mentors: [],
      pending: false,
      filteredMentors: [],
      clicked: false,
      filteredCategory: "All"
    };
    this.filterByCategory = this.filterByCategory.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    mentorList().then(APImentorList => {
      this.setState({
        mentors: APImentorList
      });
    });
    allCategories().then(APIcategories => {
      this.setState({
        allCategories: APIcategories
      });
    });
  }

  filterByCategory(e) {
    const { mentors } = this.state;
    const filtered = mentors.filter(mentor => {
      return (
        mentor.mentor_ratings.filter(rating => {
          if (rating.category_id == e.target.id && rating.score >= 5) {
            return rating.category_id;
          }
        }).length > 0
      );
    });
    console.log(filtered);
    this.setState({
      filteredMentors: filtered,
      clicked: true,
      filteredCategory: e.target.getAttribute("name")
    });
  }

  render() {
    const { current_user } = this.props;
    const {
      filteredMentors,
      pending,
      allCategories,
      mentors,
      clicked,
      filteredCategory
    } = this.state;
    const filter = allCategories.map(category => {
      return (
        <a
          onClick={this.filterByCategory}
          id={category.id}
          name={category.category_name}
          key={category.id}
        >
          <h2 id={category.id} name={category.category_name}>
            {category.category_name}
          </h2>
        </a>
      );
    });
    const mentorArray = clicked ? filteredMentors : mentors;

    console.log(mentors);
    const allMentors = mentorArray.map((mentor, index) => {
      const userLink = `profile/${mentor.id}`;

      if (current_user.id != mentor.id) {
        return (
          <div className="allcards">
            <div className="usercards">
              {" "}
              <div className="pendingcard">
                <a href={userLink}>
                  <img src={Profilepic} className="cardpicture" />
                </a>
                <div className="info">
                  {(mentor.mentor_status == 1 && <h5>MENTOR</h5>) || (
                    <h5>DEVELOPER</h5>
                  )}
                  <h2>
                    {mentor.first_name} {mentor.last_name}
                  </h2>
                  <span aria-label="envelope" role="img">
                    <p>✉️{mentor.email}</p>
                  </span>
                  <br />
                  <span aria-label="envelope" role="img">
                    <p>🌐{mentor.time_zone}</p>
                  </span>
                </div>
                {pending && (
                  <div className="buttons">
                    <button onClick={this.handleAccept} className="accept">
                      Accept
                    </button>
                    <button onClick={this.handleReject} className="reject">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="MentorList">
        <div>{filter}</div>
        <h2>Mentors in {filteredCategory}</h2>
        <div>{allMentors}</div>
      </div>
    );
  }
}

export default MentorList;
