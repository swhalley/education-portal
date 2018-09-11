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

  /**
   * The Family of school and school information was created from the following page
   * https://edu.princeedwardisland.ca/psb/schools/school-information-2/
   *
   * Other data is from the PEI Open Data portal.
   */
  componentDidMount() {
    this.load("familyOfSchools", "/data/wish/familyOfSchools.json");
    this.load("schoolInformation", "/data/wish/schools.json");
    this.load("attendance", process.env.REACT_APP_DATA_URL_ATTENDANCE);
    this.load("gisData", process.env.REACT_APP_DATA_URL_GIS);
  }

  load(prop, src) {
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
