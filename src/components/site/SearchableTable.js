import React, { Component } from "react";
import CleanTable from "./CleanTable";
import { TextField } from "@material-ui/core";

export default class SearchableTable extends Component {
  state = {
    searchValue: ""
  };

  render() {
    return (
      <div>
        <TextField
          label={this.props.searchLabel}
          value={this.state.searchValue}
          onChange={event => this.setState({ searchValue: event.target.value })}
        />
        <CleanTable {...this.props} data={this.pruneSearchData()} />
      </div>
    );
  }

  pruneSearchData() {
    const { data } = this.props;
    const { searchValue } = this.state;

    return data.filter(record => {
      if (!searchValue) return true;

      let expression = new RegExp(searchValue, "i");
      return expression.test(record[0]);
    });
  }
}
