import React, { Component } from "react";
import SearchableTable from "../site/SearchableTable";

class SchoolsTable extends Component {
  render() {
    let schoolData = this.props.attendanceData.reduce(this.normalizeData, {});
    let yearMin = this.getMinYear(schoolData);
    let yearMax = this.getMaxYear(schoolData);

    return (
      <SearchableTable
        header={this.getHeaderData(yearMin, yearMax)}
        data={this.getBodyData(schoolData, yearMin, yearMax)}
        searchLabel={"School Name Search"}
      />
    );
  }

  getHeaderData(yearMin, yearMax) {
    let headers = ["School Name"];
    for (let year = yearMin; year <= yearMax; year++) {
      headers.push(year);
    }

    return headers;
  }

  getBodyData(schoolData, yearMin, yearMax) {
    const schoolList = Object.keys(schoolData);

    return schoolList.map(schoolName => {
      let result = [schoolName];

      for (let year = yearMin; year <= yearMax; year++) {
        result.push(schoolData[schoolName][year] || "-");
      }

      return result;
    });
  }

  normalizeData(previousValue, currentValue) {
    let school = previousValue[currentValue.school_name] || {};

    school[currentValue.year] = currentValue.enrollment;
    previousValue[currentValue.school_name] = school;

    return previousValue;
  }

  getMinYear(data) {
    return Object.keys(data).reduce((previousValue, currentValue) => {
      let currentMin = Math.min(...Object.keys(data[currentValue]));

      return currentMin < previousValue ? currentMin : previousValue;
    }, 2100); //Giving us a little y2.1k problem
  }

  getMaxYear(data) {
    return Object.keys(data).reduce((previousValue, currentValue) => {
      let currentMin = Math.max(...Object.keys(data[currentValue]));

      return currentMin > previousValue ? currentMin : previousValue;
    }, 1970);
  }
}

export default SchoolsTable;
