import React, { Component } from "react";

export default class _WishList extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            There is a lot of areas where I feel this data could be improved and
            enhanced to make this portal better.
          </p>
          <ul>
            <li>
              Data Consistency
              <ul>
                <li>
                  Data sets can be hard to cross-reference. School names are the
                  keys for the data sets. But in some cases the names in one
                  data set do not match the names in another. This means that I
                  would have to create an intermediate table to look up schools
                  in multiple data sets.
                </li>
                <li>
                  Fixing the names to be consistent or adding a unique key for
                  each school would help in this regard.
                </li>
              </ul>
            </li>
            <li>
              Up To Date Information
              <ul>
                <li>
                  Though the portal was released in 2018, most of the Education
                  data has not been updated since 2015
                </li>
                <li>
                  Late Aug there was an update to add in 2016 and 2017 data. I
                  need to take this into account
                </li>
                <li>
                  Socrata by default limits to 1000 records returned. need to
                  add the parameter $limit=5000 to get more records. Prior to
                  this years update, there were &lt; 1000 records so the limit
                  wasn't realized until 2016 and 2017 data was added and pushed
                  this over 1200 records.
                </li>
              </ul>
            </li>
            <li>
              Class Breakdown
              <ul>
                <li>
                  From a high school standpoint, It would be interesting to see
                  what classes students are taking. See the classes that are
                  being signed up for and how many students are taking them.
                </li>
                <li>
                  Job creation and retention could be a big benefit of this
                  data. If we find out what classes our kids are taking and
                  compare that to the job market we can tell what trends are
                  happening. Are there enough students taking sciences?
                </li>
              </ul>
            </li>
            <li>
              Not a class breakdown, but there is a grade breakdown
              <ul>
                <li>
                  <a href="https://data.princeedwardisland.ca/Education-and-Community/OD0010-Official-School-Enrolment-By-Grade-from-199/bpnh-prdc">
                    Link to dataset
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Bus Routes
              <ul>
                <li>
                  The current site to find bus routes is difficult to use. The
                  data is accurate, but is locked behind a shared username and
                  password that gets locked out all the time from multiple
                  parents using the same credentials
                </li>
                <li>
                  Releasing the data would allow a creative mind the ability to
                  come up with something that is more user friendly and modern.
                </li>
                <li>
                  2018 There is a new site which is more user friendly, no login
                </li>
              </ul>
            </li>
            <li>
              Combined Classes - Example Sheerwood's 3-4 class
              <ul>
                <li>Hurts students</li>
                <li>
                  Can a family of schools have "floater" teachers, who are
                  assigned based on overages
                </li>
                <li>
                  A teacher is assigned to a family of schools rather than a
                  specific school
                </li>
                <li>
                  If a case arises where there are not enough teachers for
                  individual classes, a floater comes in to seperate the class
                </li>
                <li>They then spend the year at that school.</li>
                <li>
                  Could the teacher be paid a premium for all the work of being
                  a flexible teacher who may need to provide a new curriculum
                  each year?
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
