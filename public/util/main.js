async function getEnrollment() {
  let response = await fetch("/data/tkm2-qp3f.json");
  let data = await response.json();
  return [...new Set(data.map(school => school.school_name))];
}

async function getSchoolInformation() {
  let response = await fetch("/data/wish/schools.json");
  let data = await response.json();
  return [...new Set(data.map(school => school.school_name))];
}

function flatten(children) {
  let result = [];
  children.forEach(school => {
    if (school.children) {
      result = result.concat(flatten(school.children));
    }

    result.push(school.name);
  });

  return result;
}

async function getFamily() {
  let response = await fetch("/data/wish/familyOfSchools.json");
  let data = await response.json();
  let keys = Object.keys(data);
  let result = [];

  keys.forEach(key => {
    result = result.concat(flatten(data[key]));
  });

  return result;
}

async function getGIS() {
  let response = await fetch("/data/irvk-xaw3.json");
  let data = await response.json();
  return [...new Set(data.map(school => school.name))];
}

function updateStatus(message) {
  document.querySelector("#progress").innerHTML = message;
}
/////////////////////
function guess(data, name) {
  //Exact Match
  let exactMatch = data.find(value => value === name);
  if (exactMatch) return exactMatch;

  //Partial Match
  let firstName = name.split(" ")[0];

  let result = data.filter(item => item.split(" ")[0] === firstName);

  if (result.length === 1) return result[0];
  if (result.length === 0) return "--Not found--";

  return `--Multiple--(${result.join(" __ ")})`;
}

//////////////////

Promise.all([getGIS(), getEnrollment(), getFamily(), getSchoolInformation()])
  .then(values => {
    let [gis, enrollment, family, schoolInfo] = values;

    let result = gis.map(school => {
      return [
        school,
        guess(enrollment, school),
        guess(schoolInfo, school),
        guess(family, school)
      ];
    });

    console.log(JSON.stringify(result, null, 3));
    updateStatus("done");
  })
  .catch(error => {
    console.log(error);
    updateStatus(`Error Loading Data ${error}`);
  });
