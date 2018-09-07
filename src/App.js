import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/site/TopNav";
import Home from "./components/Home";
import WishList from "./components/WishList";
import Families from "./components/Families";
import Attendance from "./components/Attendance";
import StandardizedTesting from "./components/StandardizedTesting";
import SchoolMap from "./components/SchoolMap";

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
                  <Attendance
                    src="data/tkm2-qp3f.json" //https://data.princeedwardisland.ca/resource/tkm2-qp3f.json
                    searchLabel="School Name Search"
                  />
                )}
              />
              <Route
                path="/schoolMap" //https://data.princeedwardisland.ca/resource/irvk-xaw3.json
                render={() => <SchoolMap src="data/irvk-xaw3.json" />}
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
              <Route path="/testing" component={StandardizedTesting} />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
