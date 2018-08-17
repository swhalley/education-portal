import React, { Component } from "react";
import { loadSchoolData, getMinYear, getMaxYear } from "./SchoolDataUtil";
import SearchableTable from "./SearchableTable";

class SchoolsTable extends Component {
  state = {
    schoolData: {},
    schoolList: [],
    yearMin: 0,
    yearMax: 0
  };

  render() {
    return (
      <SearchableTable
        header={this.getHeaderData()}
        data={this.getBodyData()}
        searchLabel={"School Name Search"}
      />
    );
  }

  componentDidMount() {
    loadSchoolData(this.props.src)
      .then(data => {
        this.setState({
          schoolData: data,
          schoolList: Object.keys(data),
          yearMin: getMinYear(data),
          yearMax: getMaxYear(data)
        });
      })
      .catch(error => console.log(error));
  }

  getHeaderData() {
    let headers = ["School Name"];
    for (let year = this.state.yearMin; year <= this.state.yearMax; year++) {
      headers.push(year);
    }

    return headers;
  }

  getBodyData() {
    const { yearMin, yearMax, schoolList, schoolData } = this.state;

    return schoolList.map(schoolName => {
      let result = [schoolName];

      for (let year = yearMin; year <= yearMax; year++) {
        result.push(schoolData[schoolName][year] || "-");
      }

      return result;
    });
  }
}

export default SchoolsTable;
