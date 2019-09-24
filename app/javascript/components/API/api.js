/////users
export const oneUser = id => {
  return fetch(`/user/${id}.json`).then(resp => {
    return resp.json();
  });
};

///ratings
export const myRatings = id => {
  return fetch(`/myratings/${id}.json`).then(resp => {
    return resp.json();
  });
};

export const myLastRating = id => {
  return fetch(`/mycurrentratings/${id}.json`).then(resp => {
    return resp.json();
  });
};

export const myLastMentorRating = id => {
  return fetch(`/mycurrentmentorratings/${id}.json`).then(resp => {
    return resp.json();
  });
};

export const createRating = (rating, token) => {
  return fetch(`/ratings`, {
    body: JSON.stringify(rating),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token
    },
    method: "POST"
  }).then(resp => {
    return resp.json();
  });
};

export const averageRating = (unique_url, id) => {
  return fetch(`/averagerating/${unique_url}/${id}.json`).then(resp => {
    return resp.json();
  });
};

////categories
export const allCategories = () => {
  return fetch(`/categories`).then(resp => {
    return resp.json();
  });
};

//////mentors and developers

export const myMentors = mentorId => {
  return fetch(`/mymentors/${mentorId}`).then(resp => {
    return resp.json();
  });
};

export const myDevelopers = devId => {
  return fetch(`/mydevelopers/${devId}`).then(resp => {
    return resp.json();
  });
};

export const pendingMentors = () => {
  return fetch(`/pendingmentors`).then(resp => {
    return resp.json();
  });
};
export const pendingDevelopers = () => {
  return fetch(`/pendingdevelopers`).then(resp => {
    return resp.json();
  });
};
export const mentorIds = () => {
  return fetch(`/mentorids`).then(resp => {
    return resp.json();
  });
};
export const developerIds = () => {
  return fetch(`/developerids`).then(resp => {
    return resp.json();
  });
};
export const pendingMentorIds = () => {
  return fetch(`/pendingmentorids`).then(resp => {
    return resp.json();
  });
};
export const pendingDeveloperIds = () => {
  return fetch(`/pendingdeveloperids`).then(resp => {
    return resp.json();
  });
};

export const mentorList = () => {
  return fetch(`/allmentors`).then(resp => {
    return resp.json();
  });
};

////relationships

export const createRelationship = function(mentorparams, token) {
  return fetch(`/relationships`, {
    body: JSON.stringify(mentorparams),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token
    },
    method: "POST"
  }).then(resp => {
    let json = resp.json();
    return json;
  });
};

export const updateRelationship = function(id, status, token) {
  return fetch(`/updaterelationship/${id}`, {
    body: JSON.stringify({ status: status }),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token
    },
    method: "PATCH"
  }).then(resp => {
    let json = resp.json();
    return json;
  });
};
