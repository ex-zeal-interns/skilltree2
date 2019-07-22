let allCategories = function() {
  return fetch("/categories.json").then(resp => {
    let json = resp.json();
    console.log(json);
    return json;
  });
};

export { allCategories };

let allRatings = function() {
  return fetch("/ratings.json").then(resp => {
    let json = resp.json();
    console.log(json);
    return json;
  });
};

export { allRatings };
