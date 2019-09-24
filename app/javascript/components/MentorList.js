import React from "react";

import Profilepic from "./pics/profilepic.jpeg";

import { mentorList, allCategories, mentorIds, developerIds } from "./API/api";

class MentorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: [],
      mentors: [],
      pending: false,
      filteredMentors: [],
      clicked: false,
      filteredCategory: "All",
      dropdown: false,
      mentorIds: [],
      developerIds: []
    };
    this.filterByCategory = this.filterByCategory.bind(this);
    this.unFilter = this.unFilter.bind(this);
    this.dropClick = this.dropClick.bind(this);
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
    mentorIds().then(APImentorids => {
      this.setState({
        mentorIds: APImentorids
      });
    });
    developerIds().then(APIdeveloperids => {
      this.setState({
        developerIds: APIdeveloperids
      });
    });
  }

  dropClick() {
    this.setState(prevState => ({
      dropdown: !prevState.dropdown
    }));
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
    this.setState({
      filteredMentors: filtered,
      clicked: true,
      filteredCategory: e.target.getAttribute("name")
    });
  }

  unFilter() {
    this.setState({
      filteredMentors: this.state.mentors,
      clicked: false,
      filteredCategory: "All"
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
      filteredCategory,
      dropdown,
      mentorIds,
      developerIds
    } = this.state;
    const filter = allCategories.map(category => {
      return (
        <a
          onClick={this.filterByCategory}
          id={category.id}
          name={category.category_name}
          key={category.id}
          className="categoryLink"
        >
          <h2
            id={category.id}
            name={category.category_name}
            className="categoryLink"
          >
            {category.category_name}
          </h2>
        </a>
      );
    });

    const mentorArray = clicked ? filteredMentors : mentors;
    const allMentors = mentorArray.map((mentor, index) => {
      const userLink = `profile/${mentor.id}`;

      if (current_user.id != mentor.id && !mentorIds.includes(mentor.id)) {
        if (current_user.id != mentor.id && !developerIds.includes(mentor.id)) {
          return (
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
          );
        }
      }
    });
    return (
      <div className="MentorList">
        {(dropdown && (
          <div className="filterDiv">
            <div className="filterTop">
              <h1>Select a Category</h1>
              <button className="closeFilter" onClick={this.dropClick}>
                Close ▵
              </button>
            </div>
            <a onClick={this.unFilter} className="categoryLink">
              <h2 className="categoryLink">All</h2>
            </a>
            {filter}
          </div>
        )) || (
          <div className="colapsedTop">
            <h1 className="titleText">Find a Mentor</h1>
            <button className="colapsedFilter" onClick={this.dropClick}>
              Filter ▿
            </button>
          </div>
        )}
        <h1>Mentors in {filteredCategory}</h1>
        <div className="allMentors">{allMentors}</div>
      </div>
    );
  }
}

export default MentorList;
