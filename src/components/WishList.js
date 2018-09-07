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
              </ul>
            </li>
            <li>
              School Capacity
              <ul>
                <li>
                  Understanding how many kids can fit in each school would be a
                  nice visual to see how the trends over time show capacity
                  issues in schools.
                </li>
                <li>
                  Data like this could be cross referenced vs Migration Data
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
              Family of Schools
              <ul>
                <li>
                  Schools feed into each other. knowing what schools feed into
                  others would make for some interesting mapping.
                </li>
                <li>
                  Thinking about a google maps integration which can discover
                  your location and show you all the schools which would be
                  attended. I believe there is GIS information out there with
                  school districts that could helps with this
                </li>
              </ul>
            </li>
            <li>
              Basic School Information
              <ul>
                <li>What Grades are taught at a school?</li>
                <li>Phone numbers</li>
                <li>Address (found in GIS data)</li>
              </ul>
            </li>
            <li>
              Standardized Testing
              <ul>
                <li>
                  currently all of the provincial assessment scores are released
                  via PDF. The format of the report changes every year so it is
                  hard to pull data off of the reports in a meaningful way.
                </li>
                <li>
                  I would like to look at trends between capacity and test
                  scores.
                </li>
                <li>
                  Standardized testing is far from the truth about how a school
                  or its students are performing. But this may be a good first
                  step to starting that discussion.
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
            <li>
              A new line graph showing, per school, a graph of attendance vs
              school capacity vs teacher capacity
              <ul>
                <li>
                  This could be an interesting discussion about what capacity
                  really is. How are class sizes impacted by a true capacity
                  view
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
