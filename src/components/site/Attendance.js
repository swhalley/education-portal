import React, { Component, Fragment } from "react";
import SchoolsTable from "../school/SchoolsTable";
import AttendanceBlob from "../school/about/AttendanceBlob";

export default class Attendance extends Component {
  render() {
    return (
      <Fragment>
        <AttendanceBlob />
        <SchoolsTable {...this.props} />
      </Fragment>
    );
  }
}
