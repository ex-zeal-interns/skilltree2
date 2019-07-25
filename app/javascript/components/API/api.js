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

const oneStaticUser = unique_url => {
  return fetch(`/staticuser/${unique_url}.json`).then(resp => {
    const json = resp.json();

    return json;
  });
};

export { oneStaticUser };

const myStaticRatings = unique_url => {
  return fetch(`/mystaticratings/${unique_url}.json`).then(resp => {
    const json = resp.json();

    return json;
  });
};

export { myStaticRatings };
