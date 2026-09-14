export interface Coordinate {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  instruction: string;
}

export const campusLocations: Record<string, Coordinate> = {
  mainGate: {
    id: "mainGate",
    name: "Main Gate",
    latitude: 11.100752,
    longitude: 77.025918,
    instruction: "Enter the main gate."
  },
  lawn: {
    id: "lawn",
    name: "Lawn",
    latitude: 11.100652,
    longitude: 77.026441,
    instruction: "Go straight into the lawn."
  },
  lawnStraight: {
    id: "lawnStraight",
    name: "After Lawn",
    latitude: 11.100756,
    longitude: 77.026950,
    instruction: "Go straight after the lawn."
  },
  foodCourt: {
    id: "foodCourt",
    name: "Food Court",
    latitude: 11.100616,
    longitude: 77.027530,
    instruction: "Cross the Food court."
  },
  roadTurn: {
    id: "roadTurn",
    name: "Road to AI Campus",
    latitude: 11.100907,
    longitude: 77.027828,
    instruction: "Take a left turn into the road to SNS College of Technology AI Campus."
  },
  playground: {
    id: "playground",
    name: "SNS Playground",
    latitude: 11.101520,
    longitude: 77.027805,
    instruction: "Go straight in that road and cross the SNS Playground."
  },
  auditorium: {
    id: "auditorium",
    name: "Open Auditorium",
    latitude: 11.103018,
    longitude: 77.027508,
    instruction: "Cross the Open Auditorium."
  },
  aiCampus: {
    id: "aiCampus",
    name: "SNS College of Technology AI Campus",
    latitude: 11.103200, // Offset slightly to simulate arriving at the entrance
    longitude: 77.027400,
    instruction: "Turn left. Opposite the Saibaba Temple is the AI Campus."
  }
};
