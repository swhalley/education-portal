import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from "@material-ui/core";

export default class FamilyOfSchoolSelect extends Component {
  state = { selectedFamily: "" };

  render() {
    return (
      <FormControl className={this.props.className}>
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

  generateMenuItems() {
    var result = [];
    let families = Object.keys(this.props.families);

    families.forEach(family =>
      result.push(
        <MenuItem value={family} key={family}>
          {family}
        </MenuItem>
      )
    );

    return result;
  }
}
