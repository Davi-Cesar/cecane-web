/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import GoogleMapReact from "google-map-react";

// eslint-disable-next-line jsx-a11y/alt-text
const AnyReactComponent = ({ img, lat, lng }) => (
  <div>
    <h6 style={{ color: "#EA4335" }}>Departemento de Nutrição</h6>
    {<img src="/images/Marker.svg" />}
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -5.834864612708609,
      lng: -35.20285913884422,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly AIzaSyC2YgUy2FmDtp56IEtSO1n7F6gW3pHAsp0
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC2YgUy2FmDtp56IEtSO1n7F6gW3pHAsp0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-5.834364612708606}
          lng={-35.20264913884411}
          img=""
        />
      </GoogleMapReact>
    </div>
  );
}