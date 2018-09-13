import React from "react";

const SchoolMapBlob = props => {
  return (
    <React.Fragment>
      <p>
        There are a lot of different pages to find out different information
        about schools. But there are no "quick hit" portals available for a
        person to find information about their school information.
      </p>
      <p>
        Eventually I want to find a dataset that has GIS data related to each
        school. Google maps provides me the "center" point of the map so I
        should be able to map out the family of schools. Example :
        https://www.princeedwardisland.ca/en/topic/school-zone-maps
      </p>
      <p>
        <strong>Data Set: </strong>
        <a href="https://data.princeedwardisland.ca/Education-and-Community/OD0009-Official-School-Enrolment-from-1999/9td3-4dta">
          OD0009 Official School Enrolment from 1999
        </a>
      </p>
      <p>
        <strong>Data Set: </strong>
        <a href="https://data.princeedwardisland.ca/Education-and-Community/OD0055-Public-School-Locations/aivx-75if">
          OD0055 Public School Locations
        </a>
      </p>
    </React.Fragment>
  );
};

export default SchoolMapBlob;
