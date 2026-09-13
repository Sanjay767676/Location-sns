import React, { useEffect, useState } from 'react';
import type { GeolocationPosition } from '../services/geolocation';
import { geolocationService } from '../services/geolocation';
import { calculateDistance } from '../utils/distance';
import type { Coordinate } from '../data/coordinates';
import { campusLocations } from '../data/coordinates';
import { MapView } from './MapView';

// Distance in meters to consider a waypoint "reached"
const WAYPOINT_REACHED_DISTANCE = 15;

interface NavigationScreenProps {
  departmentId: string;
  departmentName: string;
  routeKeys: string[];
  onDestinationReached: () => void;
}

export const NavigationScreen: React.FC<NavigationScreenProps> = ({
  departmentName,
  routeKeys,
  onDestinationReached
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition | null>(null);
  const [distanceToNext, setDistanceToNext] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const waypoints: Coordinate[] = routeKeys.map(key => campusLocations[key]);
  const targetWaypoint = waypoints[currentStepIndex];

  useEffect(() => {
    geolocationService.startWatching(
      (position) => {
        setCurrentLocation(position);
        setError(null);
        
        if (targetWaypoint) {
          const dist = calculateDistance(
            position.latitude,
            position.longitude,
            targetWaypoint.latitude,
            targetWaypoint.longitude
          );
          
          setDistanceToNext(Math.round(dist));

          // Auto-advance logic
          if (dist <= WAYPOINT_REACHED_DISTANCE) {
            if (currentStepIndex < waypoints.length - 1) {
              setCurrentStepIndex(prev => prev + 1);
            } else {
              onDestinationReached();
            }
          }
        }
      },
      (err) => {
        console.error("GPS Error:", err);
        setError("GPS signal lost or inaccurate.");
      }
    );

    return () => {
      geolocationService.stopWatching();
    };
  }, [currentStepIndex, targetWaypoint, waypoints.length, onDestinationReached]);

  return (
    <div className="nav-screen">
      <div className="nav-header">
        <div className="nav-header-top">
          <span className="dept-badge">{departmentName}</span>
          <span className="step-badge">Step {currentStepIndex + 1} of {waypoints.length}</span>
        </div>
        
        {targetWaypoint && (
          <>
            <div className="target-waypoint">Go to {targetWaypoint.name}</div>
            <div className="distance-info">
              {error ? (
                <span style={{ color: 'var(--error-color)' }}>{error}</span>
              ) : distanceToNext !== null ? (
                `${distanceToNext} meters away`
              ) : (
                'Calculating distance...'
              )}
            </div>
          </>
        )}
      </div>

      <div className="nav-body">
        <MapView 
          currentLocation={currentLocation} 
          targetWaypoint={targetWaypoint} 
        />
        
        <div className="nav-progress">
          <div className="waypoint-list">
            {waypoints.map((wp, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              
              let statusClass = '';
              if (isCompleted) statusClass = 'completed';
              else if (isCurrent) statusClass = 'current';

              return (
                <div key={index} className={`waypoint-item ${statusClass}`}>
                  <div className="waypoint-icon">
                    {isCompleted ? '✓' : isCurrent ? '→' : '○'}
                  </div>
                  <span>{wp.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
