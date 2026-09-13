import React from 'react';
import type { GeolocationPosition } from '../services/geolocation';
import type { Coordinate } from '../data/coordinates';

interface MapViewProps {
  currentLocation: GeolocationPosition | null;
  targetWaypoint: Coordinate;
}

export const MapView: React.FC<MapViewProps> = ({ currentLocation, targetWaypoint }) => {
  // This is a placeholder abstraction layer for a real map SDK.
  // In the future, you can replace this with Mapbox, Google Maps, Leaflet, etc.
  
  return (
    <div className="map-container">
      <div className="map-placeholder">
        <div className="pulse-dot"></div>
        <p style={{ fontWeight: 600 }}>Tracking your location...</p>
        
        {currentLocation && (
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            GPS: {currentLocation.latitude.toFixed(5)}, {currentLocation.longitude.toFixed(5)}<br/>
            Accuracy: ±{Math.round(currentLocation.accuracy)}m
          </div>
        )}
        
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '80%' }}>
          Map SDK integration goes here.
          <br/><br/>
          Target: {targetWaypoint.name}
        </div>
      </div>
    </div>
  );
};
