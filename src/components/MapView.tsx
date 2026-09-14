import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { GeolocationPosition } from '../services/geolocation';
import type { Coordinate } from '../data/coordinates';

// Fix Leaflet's default icon path issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom pulsing icon for the user's location
const userIcon = L.divIcon({
  className: 'custom-user-marker',
  html: `<div style="
    width: 20px; 
    height: 20px; 
    background-color: #111111; 
    border-radius: 50%; 
    border: 3px solid #ffbf00;
    box-shadow: 0 0 0 0 rgba(17,17,17, 0.4);
    animation: pulse 2s infinite;
  "></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

interface MapViewProps {
  currentLocation: GeolocationPosition | null;
  targetWaypoint: Coordinate;
  route?: Coordinate[];
}

// Helper component to auto-fit bounds
const AutoFitBounds: React.FC<{
  currentLoc: GeolocationPosition | null;
  target: Coordinate;
}> = ({ currentLoc, target }) => {
  const map = useMap();

  useEffect(() => {
    if (currentLoc && target) {
      const bounds = L.latLngBounds(
        [currentLoc.latitude, currentLoc.longitude],
        [target.latitude, target.longitude]
      );
      // Pad bounds so markers aren't exactly on the edge
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 18 });
    } else if (target) {
      map.setView([target.latitude, target.longitude], 17);
    }
  }, [map, currentLoc, target]);

  return null;
};

export const MapView: React.FC<MapViewProps> = ({ currentLocation, targetWaypoint, route = [] }) => {
  
  // Default center if no user location (fallback to target)
  const defaultCenter: [number, number] = [targetWaypoint.latitude, targetWaypoint.longitude];
  
  // Line positions: current location -> target waypoint -> rest of route
  const routePositions: [number, number][] = [];
  if (currentLocation) {
    routePositions.push([currentLocation.latitude, currentLocation.longitude]);
  }
  
  // Add all remaining waypoints in the route
  route.forEach(wp => {
    routePositions.push([wp.latitude, wp.longitude]);
  });

  return (
    <div className="map-container" style={{ width: '100%', height: '100%' }}>
      <MapContainer 
        center={defaultCenter} 
        zoom={17} 
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* The Target Destination Marker */}
        <Marker position={[targetWaypoint.latitude, targetWaypoint.longitude]}>
          <Popup>
            <strong>{targetWaypoint.name}</strong><br />
            Destination
          </Popup>
        </Marker>

        {/* The User's Current Location Marker */}
        {currentLocation && (
          <Marker 
            position={[currentLocation.latitude, currentLocation.longitude]} 
            icon={userIcon}
          >
            <Popup>
              You are here
            </Popup>
          </Marker>
        )}

        {/* Draw a line between user and target */}
        {routePositions.length > 0 && (
          <Polyline 
            positions={routePositions} 
            color="#111111" 
            weight={4} 
            dashArray="10, 10" 
            opacity={0.7}
          />
        )}

        {/* Auto fit the map to show both points */}
        <AutoFitBounds currentLoc={currentLocation} target={targetWaypoint} />
      </MapContainer>
    </div>
  );
};
