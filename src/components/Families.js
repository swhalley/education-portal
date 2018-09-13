import React, { Component } from "react";
import FamilyOfSchoolSelect from "./school/FamilyOfSchoolSelect";
import FamilyTree from "./school/FamilyTree";
import { withStyles } from "@material-ui/core";
import AboutThisPage, { FamilyBlob } from "./school/about";

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
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <AboutThisPage>
          <FamilyBlob />
        </AboutThisPage>
        <FamilyOfSchoolSelect
          families={this.props.families}
          onChange={this.familySelected.bind(this)}
          className={classes.formControl}
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
