import React, { Component } from "react";
import DataTable from "./components/DataTable";

class App extends Component {
  render() {
    //https://data.princeedwardisland.ca/resource/tkm2-qp3f.json

    return (
      <React.Fragment>
        <DataTable src="data/tkm2-qp3f.json" />
      </React.Fragment>
    );
  }
}

export default App;
