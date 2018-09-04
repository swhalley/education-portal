import React, { Component } from "react";
import SchoolCard from "./SchoolCard";
import "./FamilyTree.css";
import { withTheme } from "@material-ui/core";

const colors = ["primary", "secondary", "error"];
const variants = ["main", "light", "dark"];
let colorCounter = 0;
let variantCounter = 0;

class FamilyTree extends Component {
  state = {
    familyOfSchools: {},
    schools: []
  };

  render() {
    let schools = this.state.familyOfSchools[this.props.selectedFamily] || [];

    return (
      <div className="grid-container grid-container-top">
        {this.renderList(schools, true)}
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

  renderList(list, topLevel = false) {
    const { theme } = this.props;

    return list.map(school => {
      let columns = school.children ? school.children.length : 0;
      let columnStyle = {
        display: "grid",
        gridTemplateColumns: `repeat( ${columns}, 1fr)`
      };

      if (topLevel) {
        colorCounter = 0;
        variantCounter = 0;
      }

      let rows = this.getNumGrades(school.name);
      let rowStyle = {
        height: `${rows * 35}px`,
        backgroundColor:
          theme.palette[colors[colorCounter]][variants[variantCounter]],
        color: theme.palette[colors[colorCounter]].contrastText,
        boxSizing: "border-box",
        border: "1px solid black"
      };

      colorCounter++;
      if (colorCounter === 3) {
        colorCounter = 0;
        variantCounter++;
      }

      if (variantCounter === 3) {
        variantCounter = 0;
      }

      return (
        <div
          key={school.name}
          style={{ marginBottom: topLevel ? "20px" : "0px" }}
        >
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

export default withTheme()(FamilyTree);
