import React, { Component } from "react";

export default class SchoolCard extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <div style={{ padding: "10px" }}>{this.props.name}</div>
        <div style={{ paddingLeft: "10px" }}>
          Grades {this.props.gradeMin} to {this.props.gradeMax}
        </div>
      </div>
    );
  }
}
