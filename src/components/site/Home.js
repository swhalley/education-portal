import React, { Component } from "react";

export default class WishList extends Component {
  render() {
    return (
      <div>
        <h1 id="overview">Overview</h1>
        <p>
          Since the PEI Government started releasing open data some time around
          2016 I have been interest in putting together a portal that lets
          people look up schools and find information about them. The idea is
          that there will be statistical tables, interactive maps and
          informative guides.
        </p>
        <p>
          In 2018 the Open Data portal went online which allows us to use the
          most up to date data that the government is providing. The new API
          provided by Socrata makes it easy to query and access data which
          brought this site to life.
        </p>
        <p>
          Check the Wishlist section for further ideas I want to see come from
          the Education section of the open data portal.
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
