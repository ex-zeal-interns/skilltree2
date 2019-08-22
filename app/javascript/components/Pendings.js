import React from "react";

import DevCard from "./DevCard";
import MentorCard from "./MentorCard";
import Profilepic from "./pics/profilepic.jpeg";

////fetches
import {
  pendingDevelopers,
  pendingMentors,
  createRelationship
} from "./API/api";

class Pendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingDevs: [],
      pendingMentors: [],
      pending: true
    };

    this.handleRelationship = this.handleRelationship.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    pendingMentors().then(APIpendingMentors => {
      this.setState({ pendingMentors: APIpendingMentors });
    });
    pendingDevelopers().then(APIpendingDevs => {
      this.setState({ pendingDevs: APIpendingDevs });
    });
  }

  handleRelationship = (mentorId, developerId, newStatus) => {
    const { token } = this.props;

    const newRelationship = {
      developer_id: developerId,
      mentor_id: mentorId,
      status: newStatus
    };

    createRelationship(newRelationship, token).then(
      alert("Developer Accepted"),
      window.location.reload()
    );
  };

  render() {
    const { pendingDevs, pendingMentors, pending } = this.state;
    const { current_user } = this.props;

    const pMentors = pendingMentors.map((mentor, index) => {
      return (
        <MentorCard
          mentor={mentor}
          current_user={current_user}
          handleRelationship={this.handleRelationship}
          pending={pending}
        />
      );
    });

    const pDevs = pendingDevs.map((developer, index) => {
      return (
        <DevCard
          developer={developer}
          current_user={current_user}
          handleRelationship={this.handleRelationship}
          pending={pending}
        />
      );
    });

    return (
      <div className="pendings">
        {pendingMentors.length > 0 && (
          <div>
            <h1>Pending Mentors</h1>
            {pMentors}
          </div>
        )}
        {pendingDevs.length > 0 && (
          <div>
            <h1>Pending Developers</h1>
            {pDevs}
          </div>
        )}
      </div>
    );
  }
}

export default Pendings;
