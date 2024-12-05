export type Credit = {
  name: string;
  specific: string[];
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
    dateAdded: "November 28, 2023"
  },
  {
    name: "WarpPrime",
    specific: ["Most Warspite modules", "Feature additions", "Bug fixes", "Maintenance"],
    dateAdded: "September 19, 2024"
  },
  {
    name: "Toir",
    specific: ["Ediacaran D2", "Ediacaran C1", "Module Library redesign feedback", "Bug reporting"],
    dateAdded: "April 24, 2024"
  },
  {
    name: "Somnambulist",
    specific: ["Eternal Heavens B2", "Ediacaran B2"],
    dateAdded: "June 25, 2024"
  },
  {
    name: "Bullet",
    specific: ["Color Generator feedback", "Color suggestions"],
    dateAdded: "November 17, 2023"
  },
  {
    name: "Black Rangers",
    specific: ["RA Helper and Module Library feedback", "Bug reports"],
    dateAdded: "February 16, 2024"
  },
  {
    name: "LunatiCorp",
    specific: ["Eternal Heavens A2"],
    dateAdded: "March 1, 2024"
  },
  {
    name: "Spy Shark",
    specific: ["Eternal Heavens B1", "Eternal Heavens C1", "Eternal Heavens C2"],
    dateAdded: "March 13, 2024"
  },
  {
    name: "kitty7hell",
    specific: ["Marshal Crux C3"],
    dateAdded: "April 27, 2024"
  },
  {
    name: "Ultix",
    specific: ["Eternal Heavens A3"],
    dateAdded: "June 3, 2024"
  },
  {
    name: "NullPointer",
    specific: ["Ship data"],
    dateAdded: "January 14, 2024"
  }
];
