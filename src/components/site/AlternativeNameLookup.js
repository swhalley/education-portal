const map = {
  gis: 0,
  attendance: 1,
  schoolInformation: 2,
  familyOfSchools: 3
};

const lookup = function(lookup, src, dest, selectedSchool) {
  let alternativeName = lookup.some(name => name[map[src]] === selectedSchool)
    ? lookup.find(name => name[map[src]] === selectedSchool)[map[dest]]
    : selectedSchool;

  return alternativeName;
};

export { lookup };
