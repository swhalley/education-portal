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
import Capacity from "./components/Capacity";
import DataStore, { DataStoreConsumer } from "./components/site/DataStore";

let styles = {
  body: {
    padding: "10px 20px"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DataStore>
        <BrowserRouter>
          <div>
            <TopNav />
            <div className={classes.body}>
              <Switch>
                <Route
                  path="/schoolAttendance"
                  render={() => (
                    <DataStoreConsumer>
                      {store => (
                        <Attendance
                          attendanceData={store.attendance}
                          searchLabel="School Name Search"
                        />
                      )}
                    </DataStoreConsumer>
                  )}
                />
                <Route
                  path="/schoolMap"
                  render={() => (
                    <DataStoreConsumer>
                      {store => <SchoolMap dataPoints={store.gisData} />}
                    </DataStoreConsumer>
                  )}
                />
                <Route path="/wishList" component={WishList} />
                <Route
                  path="/families"
                  render={() => (
                    <DataStoreConsumer>
                      {store => (
                        <Families
                          schools={store.schoolInformation}
                          families={store.familyOfSchools}
                        />
                      )}
                    </DataStoreConsumer>
                  )}
                />
                <Route path="/testing" component={StandardizedTesting} />
                <Route path="/capacity" render={() => <Capacity />} />
                <Route component={Home} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </DataStore>
    );
  }
}

export default withStyles(styles)(App);
