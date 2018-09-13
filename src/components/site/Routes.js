import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "..//Home";
import WishList from "../WishList";
import Families from "../Families";
import Attendance from "../Attendance";
import StandardizedTesting from "../StandardizedTesting";
import SchoolMap from "../SchoolMap";
import Capacity from "../Capacity";
import Industry from "../Industry";
import { DataStoreConsumer } from "./DataStore";

export default class Routes extends Component {
  render() {
    return (
      <div className={this.props.className}>
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
                {store => (
                  <SchoolMap
                    dataPoints={store.gisData}
                    schools={store.schoolInformation}
                    families={store.familyOfSchools}
                    attendance={store.attendance}
                    lookup={store.lookupMap}
                  />
                )}
              </DataStoreConsumer>
            )}
          />
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
          <Route path="/industry" render={() => <Industry />} />
          <Route path="/wishList" component={WishList} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}
