import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default class Capacity extends Component {
  render() {
    return (
      <div>
        <p>
          What is the true capacity of a school? Most schools list have a
          capacity based on # of seats. But with the number of teachers
          fluctuating in the schools each year there is no true capacity.
        </p>

        <p>
          On this page I would like to have a drop down with all the schools
          listed. Choosing a school would show a line graph showing
        </p>
        <ul>
          <li>Number of students</li>
          <li>capacity of school</li>
          <li>Number of teachers</li>
        </ul>
        <p>
          The value for number of teachers would differ depending on the type of
          school. For example, a teacher in senior high should have a capacity
          to teach up to 25 students. A teacher in Elementary school may have a
          capacity to teach 20 students. If there are 50 teachers at either
          school, the high school has a capacity of 1250 students. The
          elementary school has a capacity of 1000 students.
        </p>
        <p>What I will need to figure out this graph is</p>
        <ul>
          <li>
            <CheckCircleIcon color="primary" />
            Breakdown of students in a school per year
          </li>
          <li>List of school capacity/seats</li>
          <li>Number of teachers in a school per year</li>
          <li>Find out what school board thinks is capacity of a classroom</li>
        </ul>
      </div>
    );
  }
}
