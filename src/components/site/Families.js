import React, { Component } from "react";
import FamilyOfSchoolSelect from "../school/FamilyOfSchoolSelect";
import FamilyTree from "../school/FamilyTree";
import { withStyles } from "@material-ui/core";

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
        <p>Things to fix</p>
        <ul>
          <li>Data needs to be finished for families of schools</li>
          <li>
            Colors don't match the material L&amp;F, can the? We could use a
            static table of known colors. and just pick from the list
          </li>
          <li>
            Height of view is 50px based, can this be calculated based on
            remaining height
          </li>
        </ul>
        <FamilyOfSchoolSelect
          src="/data/wish/schools.json"
          onChange={this.familySelected.bind(this)}
          {...this.props}
        />
        <FamilyTree
          schools="/data/wish/schools.json"
          families="/data/wish/familyOfSchools.json"
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
