import React, { Component } from "react";

export default class WishList extends Component {
  render() {
    return (
      <div>
        <h1 id="overview">PEI Education - Let's Come Up With Some Ideas</h1>
        <p>
          There have been many hot topics in the media recently about the PEI
          Education system. Some of them include:
        </p>
        <ul>
          <li>Schools Over Capacity</li>
          <li>Class Sizes Growing</li>
          <li>Attendance Decreasing</li>
          <li>School Rezoning</li>
        </ul>
        <p>
          In the media you hear from all sides. The School board will tell us
          that the number of students attending classes is decreasing. the
          Teacher's union is telling us that class sizes are becoming
          unmanageable and unsafe. Parent's are complaining that schools are
          crowded, over capacity and boundries are changing.
        </p>
        <p>
          Most arguments are made with no source to the information. I wanted to
          create a portal with some backing data so we could look at and make
          our own conclusions.
        </p>
        <h1 id="data-licence">Data Licence</h1>
        <p>
          I do not own any of this data. For any licence information, please
          follow the licence outlined by the government.
          <a href="https://www.princeedwardisland.ca/en/information/finance/open-government-licence-prince-edward-island">
            https://www.princeedwardisland.ca/en/information/finance/open-government-licence-prince-edward-island
          </a>
        </p>
      </div>
    );
  }
}
