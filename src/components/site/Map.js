import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 46.2382, lng: -63.1311 }}
      ref={map => (this.map = map)}
      onDragEnd={() => {
        console.log(this.map.getCenter().toJSON());
      }}
    >
      {props.children}
    </GoogleMap>
  );
});

export default Map;
