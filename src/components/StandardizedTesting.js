import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class StandardizedTesting extends Component {
  render() {
    return (
      <div>
        <img src="climb-a-tree.jpg" alt="Not all tests are created equal" />

        <Typography>
          This is a pet project of mine. I want to get the raw data for the
          standardized testing out of PDF and into an easy to consume form. This
          has not been the case as the government only releases PDF's of the
          final reports.
        </Typography>

        <Typography>For This Page: </Typography>
        <ul>
          <li>I am someone who did not thrive in the testing model. </li>
          <li>PEI Standardized testing layout changes annually</li>
          <li>Historical data is gone each year as new PDF's are uploaded</li>
          <li>Show my best attempt at extracting data</li>
          <li>
            Need to find original source of image to attribute if I continue to
            use it. Since this is hosted everywhere.
          </li>
          <li>
            Got this one from :
            <a href="http://ellingtonmontessori.ca/wp-content/uploads/2017/01/climb-a-tree.jpg">
              Ellington Montessori Website
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
