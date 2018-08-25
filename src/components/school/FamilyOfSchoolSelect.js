import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

export default class FamilyOfSchoolSelect extends Component {
  state = { selectedFamily: "", families: [] };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="school_family_select">
          Select a School Family
        </InputLabel>
        <Select
          value={this.state.selectedFamily}
          onChange={event => {
            this.setState({ selectedFamily: event.target.value });
            this.props.onChange(event.target.value);
          }}
          inputProps={{
            id: "school_family_select"
          }}
        >
          {this.generateMenuItems()}
        </Select>
      </FormControl>
    );
  }

  componentDidMount() {
    fetch(this.props.src)
      .then(response => {
        response.json().then(schools => {
          this.setState({
            families: [...new Set(schools.schools.map(school => school.family))]
          });
        });
      })
      .catch(error => {
        console.error("Unable to load school data for families of schools");
      });
  }

  generateMenuItems() {
    var result = [];

    this.state.families.forEach(family =>
      result.push(
        <MenuItem value={family} key={family}>
          {family}
        </MenuItem>
      )
    );

    return result;
  }
}
