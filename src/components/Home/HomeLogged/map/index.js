import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pointer from 'src/assets/logo/test-100px.png';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 46.603354,
  lng: 1.8883335
};

const Map = () => {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyChQZRhFfq7n4Sg5_4vTehqU5MIAs0zw2E"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Marker
          position={{ lat: 46.603354, lng: 1.8883335 }}
          icon={{
            url: pointer,
          }}
        />
        <Marker
          position={{ lat: 46.54383982670018, lng: 1.7494747733822629 }}
          icon={{
            url: pointer,
          }}
        />

      </GoogleMap>
    </LoadScript>

  );
};


export default Map;
