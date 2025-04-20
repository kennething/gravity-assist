export type Credit = {
  name: string;
  /** Notes for the credit */
  specific: string[];
  /** YYYY-MM-DD */
  dateAdded: string;
};

export const credits: readonly Credit[] = [
  {
    name: "Windserpent",
    specific: [
      "All Constantine the Great modules",
      "All Eternal Storm modules",
      "All Spear of Uranus modules",
      "All ST59 modules",
      "All FSV830 modules",
      "All CV3000 modules",
      "Most Marshal Crux modules",
      "All Solar Whale Modules"
    ],
    dateAdded: "2023-11-28"
  },
  {
    name: "WarpPrime",
    specific: ["Warspite M2, A2, B2, C2, D2, E2, F2", "Feature additions", "Bug fixes", "Maintenance"],
    dateAdded: "2024-09-19"
  },
  {
    name: "Sector",
    specific: ["Ediacaran B3", "Eternal Storm M2, A2, B2, C1, D1, D2", "Spear of Uranus M2, A3, B1", "Eternal Heavens B2", "Solar Whale A3"],
    dateAdded: "2025-01-24"
  },
  {
    name: "Toir",
    specific: ["Ediacaran D2, C1", "Module Library redesign feedback", "Bug reporting"],
    dateAdded: "2024-04-24"
  },
  {
    name: "Bullet",
    specific: ["Color Generator feedback", "Color suggestions"],
    dateAdded: "2023-11-27"
  },
  {
    name: "Black Rangers",
    specific: ["RA Helper and Module Library feedback", "Bug reports"],
    dateAdded: "2024-02-16"
  },
  {
    name: "Somnambulist",
    specific: ["Eternal Heavens B2", "Ediacaran B2", "Shield of Plutus M2"],
    dateAdded: "2024-06-25"
  },
  {
    name: "OZY",
    specific: ["ST59 M3", "Eternal Heavens M3"],
    dateAdded: "2025-01-24"
  },
  {
    name: "The Enlightened",
    specific: ["Constantine the Great B3", "Solar Whale C3", "Shield of Plutus B2"],
    dateAdded: "2025-01-25"
  },
  {
    name: "Thalleous",
    specific: ["Thunderbolt Star M2, M3, E1, E2"],
    dateAdded: "2023-11-30"
  },
  {
    name: "Spy Shark",
    specific: ["Eternal Heavens B1, C1, C2"],
    dateAdded: "2024-03-13"
  },
  {
    name: "LunatiCorp",
    specific: ["Eternal Heavens A2"],
    dateAdded: "2024-03-01"
  },
  {
    name: "kitty7hell",
    specific: ["Marshal Crux C3"],
    dateAdded: "2024-04-27"
  },
  {
    name: "Ultix",
    specific: ["Eternal Heavens A3"],
    dateAdded: "2024-06-03"
  },
  {
    name: "Draconia19",
    specific: ["Marshal Crux C3"],
    dateAdded: "2025-01-25"
  },
  {
    name: "Garm",
    specific: ["Shield of Plutus B3"],
    dateAdded: "2025-04-07"
  },
  {
    name: "NullPointer",
    specific: ["Ship data"],
    dateAdded: "2024-01-14"
  },
  {
    name: "MeshaLee Adams",
    specific: ["o7"],
    dateAdded: "2021-07-05"
  }
];
