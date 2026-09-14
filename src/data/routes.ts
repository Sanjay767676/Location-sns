export type RouteDefinition = string[];

const universalRoute = [
  "mainGate",
  "lawn",
  "lawnStraight",
  "foodCourt",
  "roadTurn",
  "playground",
  "auditorium",
  "aiCampus"
];

// All departments share the same outdoor route to the AI Campus.
export const routes: Record<string, RouteDefinition> = {
  BME: universalRoute,
  CIVIL: universalRoute,
  ECE: universalRoute,
  EEE: universalRoute,
  FT: universalRoute,
  MCT: universalRoute,
  MECH: universalRoute,
  AERO: universalRoute,
  MMCT: universalRoute
};
