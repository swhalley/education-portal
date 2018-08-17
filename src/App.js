import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import SchoolsTable from "./components/SchoolsTable";

class App extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography>Header and Nav</Typography>
        </Grid>
        <Grid item xs={12}>
          <SchoolsTable
            src="data/tkm2-qp3f.json" //https://data.princeedwardisland.ca/resource/tkm2-qp3f.json
            searchLabel="School Name Search"
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
