export interface Department {
  id: string;
  name: string;
  floor: string;
  block: string;
  rooms: string;
  indoorInstruction: string;
}

const baseIndoorInstruction = "Enter into the AI Campus, take left near the reception, and take the stairs near the Water Doctor.";

export const departments: Department[] = [
  { 
    id: "BME", 
    name: "Biomedical Engineering (BME)",
    floor: "III",
    block: "B",
    rooms: "IB302",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "CIVIL", 
    name: "Civil Engineering",
    floor: "III",
    block: "B",
    rooms: "IB304",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "ECE", 
    name: "Electronics and Communication Engineering (ECE)",
    floor: "II",
    block: "B",
    rooms: "IB206, IB207, IB208, IB202, IB203, IB204",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "EEE", 
    name: "Electrical & Electronics Engineering (EEE)",
    floor: "II",
    block: "A",
    rooms: "IA213, IA211",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "FT", 
    name: "Food Technology (FT)",
    floor: "III",
    block: "B",
    rooms: "IB303",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "MCT", 
    name: "Mechatronics Engineering (MCT)",
    floor: "I",
    block: "A",
    rooms: "IA113",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "MECH", 
    name: "Mechanical Engineering",
    floor: "III",
    block: "B",
    rooms: "IB307, IB306",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "AERO", 
    name: "Aeronautical Engineering (AERO)",
    floor: "III",
    block: "B",
    rooms: "IB305",
    indoorInstruction: baseIndoorInstruction
  },
  { 
    id: "MMCT", 
    name: "Mechanical and Mechatronics Engineering (MMCT)",
    floor: "II",
    block: "A",
    rooms: "IA216",
    indoorInstruction: baseIndoorInstruction
  }
];
