export type RouteDefinition = string[];

export const routes: Record<string, RouteDefinition> = {
  BME: ["mainGate", "location1", "location2"],
  CIVIL: ["mainGate", "location2"],
  ECE: ["mainGate", "location1", "location3"],
  EEE: ["mainGate", "location1", "location2", "location3"],
  FT: ["mainGate", "location3"],
  MCT: ["mainGate", "location1", "location3"],
  MECH: ["mainGate", "location1", "location2", "location3"],
  AERO: ["mainGate", "location2", "location3"],
  MMCT: ["mainGate", "location1"]
};
