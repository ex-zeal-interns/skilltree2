const oneUser = id => {
  return fetch(`/user/${id}.json`).then(resp => {
    const json = resp.json();

    return json;
  });
};

export { oneUser };

const myRatings = id => {
  return fetch(`/myratings/${id}.json`).then(resp => {
    const json = resp.json();

    return json;
  });
};

export { myRatings };
