import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ img, lat, lng }) => (
  <div>
    <h6 style={{ color: "#EA4335" }}>Departemento de Nutrição</h6>
    {<img src="/images/Marker.svg" alt="marker" />}
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
  // console.log(process.env.MAPS_KEY);
  return (
    // Important! Always set the container height explicitly AIzaSyC2YgUy2FmDtp56IEtSO1n7F6gW3pHAsp0
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDP7FNVp6Rx6xLFavDiE9DRYcUsYvzc7MQ" }}
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
