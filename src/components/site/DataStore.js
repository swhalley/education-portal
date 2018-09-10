import React, { Component } from "react";

const context = React.createContext();

const DataStoreConsumer = props => {
  return <context.Consumer>{props.children}</context.Consumer>;
};

class DataStore extends Component {
  state = {
    attendance: [],
    gisData: [],
    schoolInformation: [],
    familyOfSchools: []
  };

  render() {
    return (
      <context.Provider value={{ ...this.state }}>
        {this.props.children}
      </context.Provider>
    );
  }

  componentDidMount() {
    this.loadSchoolGISData();
    this.loadAttendanceData();
    this.loadSchoolInformation();
    this.loadFamilyOfSchools();
  }

  loadSchoolGISData() {}

  loadAttendanceData() {}

  /**
   * This data was created from the following page
   * https://edu.princeedwardisland.ca/psb/schools/school-information-2/
   */
  loadSchoolInformation() {
    this.retrieveAndSet("/data/wish/schools.json", "schools");
  }

  loadFamilyOfSchools() {
    this.retrieveAndSet("/data/wish/familyOfSchools.json", "familyOfSchools");
  }

  retrieveAndSet(src, prop) {
    fetch(src)
      .then(response => response.json())
      .then(data => {
        this.setState({ [prop]: data });
      })
      .catch(error => console.log(error));
  }
}

export default DataStore;
export { DataStoreConsumer };
