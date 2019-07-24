let oneUser = function(id) {
  return fetch(`/user/${id}.json`).then(resp => {
    let json = resp.json();
    return json;
  });
};

export { oneUser };

let myRatings = function(id) {
  return fetch(`/myratings/${id}.json`).then(resp => {
    let json = resp.json();
    return json;
  });
};

export { myRatings };
