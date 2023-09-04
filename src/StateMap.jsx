import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const StateMap = () => {
  return (
    <MapContainer center={[26.8467, 80.9462]} zoom={7} style={{ height: '400px', width: '600px', border: '4px solid gray'  }}>
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add other map components, markers, etc. here */}
    </MapContainer>
  );
};

export default StateMap;
