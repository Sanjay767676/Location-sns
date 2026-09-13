import React, { useState } from 'react';

interface LocationPermissionProps {
  onPermissionGranted: () => void;
  onCancel: () => void;
}

export const LocationPermission: React.FC<LocationPermissionProps> = ({ 
  onPermissionGranted, 
  onCancel 
}) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestPermission = () => {
    setIsLoading(true);
    setErrorMsg(null);

    if (!('geolocation' in navigator)) {
      setErrorMsg('Location is not supported by your browser.');
      setIsLoading(false);
      return;
    }

    // Request a single position just to trigger the permission prompt
    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLoading(false);
        onPermissionGranted();
      },
      (error) => {
        setIsLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMsg('Location permission was denied. Please enable it in your browser settings to continue.');
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMsg('Location information is unavailable. Please try again.');
            break;
          case error.TIMEOUT:
            setErrorMsg('The request to get user location timed out. Please try again.');
            break;
          default:
            setErrorMsg('An unknown error occurred.');
            break;
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="screen-container">
      <h2>Location Access Required</h2>
      
      <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
        <div className="pulse-dot" style={{ width: 64, height: 64, animationDuration: '3s' }}></div>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
        We need your location to guide you to your classroom on campus. 
        Your location data is only used locally on your device and is not stored.
      </p>

      {errorMsg && (
        <div style={{ 
          color: 'var(--error-color)', 
          backgroundColor: 'rgba(238, 0, 0, 0.1)', 
          padding: '1rem', 
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem'
        }}>
          {errorMsg}
        </div>
      )}

      <div className="bottom-action" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={requestPermission} disabled={isLoading}>
          {isLoading ? 'Requesting...' : 'Allow Location Access'}
        </button>
        <button 
          onClick={onCancel} 
          style={{ backgroundColor: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
