import React, { Component } from "react";
import { Drawer } from "@material-ui/core";
import Map from "./site/Map";
import { Marker } from "react-google-maps"; //SMELL refactor into "PEISchoolMap class"
import SchoolMiniData from "./school/SchoolMiniData";

export default class SchoolMap extends Component {
  state = {
    drawerOpen: false
  };

  render() {
    let markers = this.getMarkers(this.props.dataPoints);
    const { selectedSchool } = this.state;

    return (
      <div>
        <p>
          School Map. I envision seeing all the school pins, and as you move the
          map, the "center" point will know what family you are in and highlight
          that family of schools on the map. Clicking a pin will open a right
          drawer showing you school details
        </p>
        <Map>{markers}</Map>
        <Drawer
          position="relative"
          anchor="right"
          open={this.state.drawerOpen}
          onClose={() => this.setState({ drawerOpen: false })}
        >
          <SchoolMiniData
            schoolName={selectedSchool}
            family={this.getFamily(selectedSchool)}
            grades={this.getGrades(selectedSchool)}
            address={this.getAddress(selectedSchool)}
            enrollment={this.getEnrollment(selectedSchool)}
          />
        </Drawer>
      </div>
    );
  }

  getMarkers(dataPoints) {
    return dataPoints.map(school => {
      let position = {
        lat: Number.parseFloat(school.latitude),
        lng: Number.parseFloat(school.longitude)
      };

      return (
        <Marker
          position={position}
          key={school.name}
          onClick={() =>
            this.setState({ selectedSchool: school.name, drawerOpen: true })
          }
        />
      );
    });
  }

  getFamily(selectedSchool) {
    let school =
      this.props.schools.find(
        school => school.school_name === selectedSchool
      ) || {};

    return school.family;
  }

  getGrades(selectedSchool) {
    let school =
      this.props.schools.find(
        school => school.school_name === selectedSchool
      ) || {};

    return { gradeMin: school.gradeMin, gradeMax: school.gradeMax };
  }

  getEnrollment(selectedSchool) {
    let school = this.props.attendance
      .filter(school => {
        return school.school_name === selectedSchool;
      })
      .reduce((prev, current) => {
        return prev.year > current.year ? prev : current;
      }, {});

    return {
      count: school.enrollment,
      year: school.year
    };
  }

  getAddress(selectedSchool) {
    let school =
      this.props.dataPoints.find(school => {
        return school.name === selectedSchool;
      }) || {};

    return school.address;
  }
}
