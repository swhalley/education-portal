import React, { Component } from "react";
import Map from "./site/Map";
import { Marker } from "react-google-maps"; //smell refactor into "PEISchoolMap class"

export default class SchoolMap extends Component {
  state = {
    markers: []
  };

  render() {
    return (
      <div>
        <p>
          School Map. I envision seeing all the school pins, and as you move the
          map, the "center" point will know what family you are in and highlight
          that family of schools on the map. Clicking a pin will open a right
          drawer showing you school details
        </p>
        <Map>{this.state.markers}</Map>
      </div>
    );
  }

  componentDidMount() {
    fetch(this.props.src)
      .then(response => response.json())
      .then(schools => {
        let markers = schools.map(school => {
          let position = {
            lat: Number.parseFloat(school.latitude),
            lng: Number.parseFloat(school.longitude)
          };

          return (
            <Marker
              position={position}
              key={school.name}
              onClick={() => console.log(school.name)}
            />
          );
        });

        this.setState({ markers });
      })
      .catch(error => console.log(error));
  }
}
