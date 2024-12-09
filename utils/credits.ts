export type Credit = {
  name: string;
  specific: string[];
  /** YYYY-MM-DD */
  dateAdded: string;
};

export const credits: Credit[] = [
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
    specific: ["Most Warspite modules", "Feature additions", "Bug fixes", "Maintenance"],
    dateAdded: "2024-09-19"
  },
  {
    name: "Toir",
    specific: ["Ediacaran D2", "Ediacaran C1", "Module Library redesign feedback", "Bug reporting"],
    dateAdded: "2024-04-24"
  },
  {
    name: "Somnambulist",
    specific: ["Eternal Heavens B2", "Ediacaran B2"],
    dateAdded: "2024-06-25"
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
    name: "LunatiCorp",
    specific: ["Eternal Heavens A2"],
    dateAdded: "2024-03-01"
  },
  {
    name: "Spy Shark",
    specific: ["Eternal Heavens B1", "Eternal Heavens C1", "Eternal Heavens C2"],
    dateAdded: "2024-03-13"
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
