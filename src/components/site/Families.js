import React, { Component } from "react";
import FamilyOfSchoolSelect from "../school/FamilyOfSchoolSelect";
import FamilyTree from "../school/FamilyTree";
import { withStyles } from "@material-ui/core";
import FamilyBlob from "../school/about/FamilyBlob";

const styles = {
  formControl: {
    minWidth: 220
  }
};

class Families extends Component {
  state = {
    selectedFamily: ""
  };

  render() {
    return (
      <React.Fragment>
        <FamilyBlob />
        <FamilyOfSchoolSelect
          src={this.props.schools}
          onChange={this.familySelected.bind(this)}
          {...this.props}
        />
        <FamilyTree
          schools={this.props.schools}
          families={this.props.families}
          selectedFamily={this.state.selectedFamily}
        />
      </React.Fragment>
    );
  }

  familySelected(selectedFamily) {
    this.setState({ selectedFamily });
  }
}

export default withStyles(styles)(Families);
