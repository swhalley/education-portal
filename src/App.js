import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SchoolsTable from "./components/school/SchoolsTable";
import TopNav from "./components/site/TopNav";
import Home from "./components/site/Home";
import WishList from "./components/site/WishList";
import Families from "./components/site/Families";

let styles = {
  body: {
    padding: "10px 20px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <div className={classes.body}>
            <Switch>
              <Route
                path="/schoolAttendance"
                render={() => (
                  <SchoolsTable
                    src="data/tkm2-qp3f.json" //https://data.princeedwardisland.ca/resource/tkm2-qp3f.json
                    searchLabel="School Name Search"
                  />
                )}
              />
              <Route path="/schoolMap" render={() => <div>School Map</div>} />
              <Route path="/wishList" component={WishList} />
              <Route path="/families" component={Families} />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
