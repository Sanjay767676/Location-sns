export type RouteDefinition = string[];

export const routes: Record<string, RouteDefinition> = {
  CSE: [
    "mainGate",
    "location1",
    "location2",
    "cseBlock",
    "cseClassroom"
  ],
  IT: [
    "mainGate",
    "location1",
    "itBlock",
    "itClassroom"
  ],
  AIDS: [
    "mainGate",
    "location1",
    "location2",
    "location3"
  ],
  ECE: [
    "mainGate",
    "location1"
  ],
  MECH: [
    "mainGate",
    "location1",
    "location3"
  ],
  CIVIL: [
    "mainGate",
    "location2"
  ]
};
