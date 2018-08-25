import React, { Component } from "react";
import SchoolCard from "./SchoolCard";
import "./FamilyTree.css";

let colorIndex = 0;
const getColors = function() {
  let color = (colorIndex * (360 / 10)) % 360;
  colorIndex++;

  return {
    backgroundColor: `hsl( ${color}, 75%, 50%)`,
    color: "white",
    textShadow:
      "0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black"
  };
};

class FamilyTree extends Component {
  state = {
    familyOfSchools: {},
    schools: []
  };

  render() {
    let schools = this.state.familyOfSchools[this.props.selectedFamily] || [];

    return (
      <div className="grid-container grid-container-top">
        {this.renderList(schools)}
      </div>
    );
  }

  componentDidMount() {
    fetch(this.props.families)
      .then(response => response.json())
      .then(familyOfSchools => {
        this.setState({
          familyOfSchools
        });
      })
      .catch(error => {
        console.log(error);
      });

    fetch(this.props.schools)
      .then(response => response.json())
      .then(schools => this.setState({ schools: schools.schools }))
      .catch(error => console.log(error));
  }

  renderList(list) {
    return list.map(school => {
      let columns = school.children ? school.children.length : 0;
      let columnStyle = {
        display: "grid",
        gridTemplateColumns: `repeat( ${columns}, 1fr)`
      };

      let rows = this.getNumGrades(school.name);
      let rowStyle = {
        height: `${rows * 50}px`,
        ...getColors()
      };

      return (
        <div key={school.name}>
          <SchoolCard
            style={rowStyle}
            name={school.name}
            {...this.getGrades(school.name)}
          />
          {school.children ? (
            <div style={columnStyle}>{this.renderList(school.children)}</div>
          ) : (
            ""
          )}
        </div>
      );
    });
  }

  getGrades(schoolName) {
    let result = {
      gradeMin: "-",
      gradeMax: "-"
    };

    let school = this.state.schools.find(
      school => school.school_name === schoolName
    );

    if (school) {
      result.gradeMin = school.gradeMin;
      result.gradeMax = school.gradeMax;
    }

    return result;
  }

  getNumGrades(schoolName) {
    let school = this.state.schools.find(
      school => school.school_name === schoolName
    );

    if (!school) return 0;

    let max = Number.parseInt(school.gradeMax, 10);
    let min =
      school.gradeMin.toUpperCase() !== "K"
        ? Number.parseInt(school.gradeMin, 10)
        : 0;

    return max - min + 1;
  }
}

export default FamilyTree;
