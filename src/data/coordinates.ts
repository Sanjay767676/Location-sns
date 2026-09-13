export interface Coordinate {
  name: string;
  latitude: number;
  longitude: number;
}

// These coordinates are placeholders. 
// You can edit these values without changing the application logic.
export const campusLocations: Record<string, Coordinate> = {
  mainGate: {
    name: "Main Gate",
    latitude: 11.000000,
    longitude: 76.000000
  },
  location1: {
    name: "Location 1",
    latitude: 11.000100,
    longitude: 76.000100
  },
  location2: {
    name: "Location 2",
    latitude: 11.000200,
    longitude: 76.000200
  },
  location3: {
    name: "Location 3",
    latitude: 11.000300,
    longitude: 76.000300
  },
  cseBlock: {
    name: "CSE Block",
    latitude: 11.000400,
    longitude: 76.000400
  },
  cseClassroom: {
    name: "CSE First Year Classroom",
    latitude: 11.000450,
    longitude: 76.000450
  },
  itBlock: {
    name: "IT Block",
    latitude: 11.000500,
    longitude: 76.000200
  },
  itClassroom: {
    name: "IT First Year Classroom",
    latitude: 11.000550,
    longitude: 76.000250
  }
};
