function normalizeData(previousValue, currentValue) {
  let school = previousValue[currentValue.school_name] || {};

  school[currentValue.year] = currentValue.enrollment;
  previousValue[currentValue.school_name] = school;

  return previousValue;
}

let loadSchoolData = function(source) {
  return fetch(source).then(response => {
    return response.json().then(json => {
      return json.reduce(normalizeData, {});
    });
  });
};

let getMinYear = function(data) {
  return Object.keys(data).reduce((previousValue, currentValue) => {
    let currentMin = Math.min(...Object.keys(data[currentValue]));

    return currentMin < previousValue ? currentMin : previousValue;
  }, 2100); //Giving us a little y2.1k problem
};

let getMaxYear = function(data) {
  return Object.keys(data).reduce((previousValue, currentValue) => {
    let currentMin = Math.max(...Object.keys(data[currentValue]));

    return currentMin > previousValue ? currentMin : previousValue;
  }, 1970);
};

export { loadSchoolData };
export { getMinYear };
export { getMaxYear };
