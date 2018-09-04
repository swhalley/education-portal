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
              <Route
                path="/schoolMap"
                render={() => (
                  <div>
                    School Map. I envision seeing all the school pins, and as
                    you move the map, the "center" point will know what family
                    you are in and highlight that family of schools on the map
                  </div>
                )}
              />
              <Route path="/wishList" component={WishList} />
              <Route
                path="/families"
                render={() => (
                  <Families
                    schools="/data/wish/schools.json"
                    families="/data/wish/familyOfSchools.json"
                  />
                )}
              />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
