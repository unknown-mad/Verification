import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import './App.css';
import { useNavigate } from "react-router-dom";

// Create a custom icon for the marker
const userLocationIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [11, -34],
});

const LocationMap = () => {
  const navigate = useNavigate();
  
  const handleResponse = (response) => {
    
      navigate('/FeedBackPage'); 
    
  };

  const [currentPosition, setCurrentPosition] = useState(null);

  // Capture current location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition([position.coords.latitude, position.coords.longitude]);
      }, () => {
        alert("Unable to retrieve your location.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="location-map-container">
      <h2>My Current Location</h2>
      {currentPosition ? (
        <>
          <MapContainer
            center={currentPosition}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={currentPosition} icon={userLocationIcon}>
              <Popup>Your current location</Popup>
            </Marker>
          </MapContainer>
          <div className="button-container">
            <button className="verification-button" onClick={() => handleResponse()}>
             Finished
            </button>
            
          </div>
        </>
      ) : (
        <p className="fetching-location">Fetching location...</p>
      )}
    </div>
  );
};

export default LocationMap;
