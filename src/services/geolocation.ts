export interface GeolocationPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}

type SuccessCallback = (position: GeolocationPosition) => void;
type ErrorCallback = (error: GeolocationError) => void;

export class GeolocationService {
  private watchId: number | null = null;

  /**
   * Starts watching the user's GPS location.
   */
  startWatching(onSuccess: SuccessCallback, onError: ErrorCallback) {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation is not supported by your browser.',
      });
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        onSuccess({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        onError({
          code: error.code,
          message: error.message,
        });
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );
  }

  /**
   * Stops watching the user's GPS location.
   */
  stopWatching() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
}

export const geolocationService = new GeolocationService();
