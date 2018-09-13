import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import TopNav from "./components/site/TopNav";
import Routes from "./components/site/Routes";
import DataStore from "./components/site/DataStore";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DataStore>
        <BrowserRouter>
          <div className={classes.root}>
            <TopNav />
            <Routes className={classes.body} />
          </div>
        </BrowserRouter>
      </DataStore>
    );
  }
}

let styles = {
  root: {
    height: "100%"
  },
  body: {
    padding: "10px 20px",
    marginBottom: "5px"
  }
};

export default withStyles(styles)(App);
