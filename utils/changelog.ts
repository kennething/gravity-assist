export type Changelog = {
  type: "release" | "minor release" | "bugfix";
  version: string;
  /** YYYY-MM-DD */
  release: string;
  notes: string[];
};

export const changelog: Changelog[] = [
  {
    type: "release",
    version: "0.1.0",
    release: "2024-01-13",
    notes: ["Initial release"]
  },
  {
    type: "release",
    version: "0.2.0",
    release: "2024-01-14",
    notes: [
      "Added header and footer",
      "Added fade when changing theme",
      "Added light mode colors",
      "Optimized font sizes for mobile users",
      "Made theme button bigger",
      "Fixed character counter in Color Generator",
      "Added Research Agreement Helper"
    ]
  },
  {
    type: "release",
    version: "0.3.0",
    release: "2024-01-15",
    notes: ["Added Changelog", "Removed theme button image", "Moved theme button to header buttons", "Added active and hover effects to header buttons"]
  },
  {
    type: "release",
    version: "0.3.1",
    release: "2024-01-16",
    notes: [
      "Changed the information displayed in Research Agreement Helper",
      "Version number in footer is now dynamic",
      "Optimized how information is displayed in Research Agreement Helper for mobile users",
      "Added images to Research Agreement Helper"
    ]
  },
  {
    type: "bugfix",
    version: "0.3.2",
    release: "2024-01-16",
    notes: ["Optimized Research Agreement Helper for mobile users further"]
  },
  {
    type: "release",
    version: "0.3.3",
    release: "2024-01-17",
    notes: [
      "Changed how Color Generator operates",
      "Color Generator is now based on text-based markers rather than highlighting text",
      "Removed the Underline option in Color Generator",
      "Changed tutorial text of Color Generator to match the other changes",
      "Fixed the character counters in Color Generator"
    ]
  },
  {
    type: "bugfix",
    version: "0.3.4",
    release: "2024-01-20",
    notes: ["Fixed a bug where Color Generator output not updating when a color marker was placed in the input"]
  },
  {
    type: "release",
    version: "0.4.0",
    release: "2024-01-28",
    notes: ["Added Module Library", "Fixed ST59 and Spear of Uranus being misplaced in the Research Agreement Helper ship order", "Changed the size of active buttons to better fit mobile devices"]
  },
  {
    type: "release",
    version: "0.4.1",
    release: "2024-01-29",
    notes: [
      "Renamed Changelog to Home",
      "Changed Research Agreement Helper and Module Library to save progress if you switch Gravity Assist tools",
      "Significantly changed the display of data in Module Library",
      "Changed Gravity Assist to default to displaying Home on load",
      "Added alternative Navigation Bar buttons to the Home Page",
      "Fixed some module data"
    ]
  },
  {
    type: "release",
    version: "0.4.2",
    release: "2024-01-30",
    notes: [
      "Added a search by ship feature for Research Agreement Helper",
      "Optimized Module Library buttons for mobile devices",
      "Removed the Theme button",
      "Fixed wrong results for Hayreddin's Loyal and Thunderbolt Star in Research Agreement Helper"
    ]
  },
  {
    type: "release",
    version: "1.0.0",
    release: "2024-02-17",
    notes: [
      "Reworked all of Color Generator",
      "Reworked display of Research Agreement Helper",
      "Added Color Generator gradients",
      "Color Generator now allows for copy to clipboard",
      "Improved the RA Finder algorithm",
      "Changed display of information in Research Agreement Helper",
      "Changed display of information in Module Library",
      "Changed display of information in Changelog",
      "Changed display of header buttons",
      "Optimized every display for mobile users",
      "Changed display of information in Module Library for desktop users",
      "Gravity Assist tool links are now routed",
      "Added Eternal Heavens to Research Agreement Helper and Module Library",
      "Disabled double-click to zoom on buttons for mobile users"
    ]
  },
  {
    type: "bugfix",
    version: "1.0.1",
    release: "2024-02-18",
    notes: [
      "Added an animation for copying text in Color Generator",
      "Fixed the Color Generator character counter not working above 1,000 characters",
      "Fixed a bug where the Color Generator reverse button wouldn't work on Chrome for iOS",
      "Fixed a bug where RA Finder algorithm wouldn't work",
      "Optimized display of information for mobile users in Mod Library"
    ]
  },
  {
    type: "release",
    version: "1.0.2",
    release: "2024-02-19",
    notes: [
      "Added a time estimate for research agreement paths in RA Helper",
      "Added animations to popup windows in Color Generator and RA Helper",
      "Replaced Mod Library and RA Helper ship images with higher quality ones",
      "Fixed AT021-B and AT021-C appearing under the wrong filters in RA Helper"
    ]
  },
  {
    type: "release",
    version: "1.1.0",
    release: "2024-02-20",
    notes: ["Added Equipment Encyclopedia", "Added a color compression option in Color Generator to create longer text", "Edited home tab text"]
  },
  {
    type: "release",
    version: "1.1.1",
    release: "2024-02-21",
    notes: [
      "Color Generator character counters now update automatically after switching compression",
      "Added more images to Equipment Encyclopedia",
      "Added 2 new colors to Color Generator",
      "Made red buttons more vibrant",
      "Added a credits button to Home page",
      "Optimized the detail cards in Equipment Encyclopedia for mobile users",
      "Fixed some data in Equipment Encylcopedia",
      "Added missing technical blueprints to Equipment Encyclopedia",
      "Full changelog is now a window"
    ]
  },
  {
    type: "minor release",
    version: "1.1.2",
    release: "2024-02-22",
    notes: ["Finished adding all images to Eqquipment Encyclopedia", "Changed the display of information in the changelog"]
  },
  {
    type: "bugfix",
    version: "1.1.3",
    release: "2024-02-25",
    notes: ["Optimized display of information in Equipment Encyclopedia further for mobile users"]
  },
  {
    type: "release",
    version: "1.1.4",
    release: "2024-02-29",
    notes: ["Added 3 new colors to Color Generator: Rainbow, Blue/Pink, and Red/Dark"]
  },
  {
    type: "release",
    version: "1.1.5",
    release: "2024-03-01",
    notes: [
      "Reworked the display of colors when choosing a color in Color Generator",
      "Changed Blue/Purple to Purple/Purple in Color Generator",
      "Added 5 new colors to Color Generator: Red/Orange, Blue/Orange, Purple/Mint, Green/Green, and Sunset",
      "Colors are now separated into categories"
    ]
  },
  {
    type: "minor release",
    version: "1.1.5.1",
    release: "2024-03-01",
    notes: ["Revamped the color pallete of Blue/Purple in Color Generator"]
  },
  {
    type: "release",
    version: "1.1.6",
    release: "2024-03-02",
    notes: ["Added the ability to share links for Gravity Assist page options", "Added Eternal Heavens A2 to Module Library"]
  },
  {
    type: "release",
    version: "1.2.0",
    release: "2024-03-08",
    notes: [
      "Added Fleet Builder",
      "Damage and armor bar representations in Module Library now animate dynamically",
      "Some images in Module Library are now high quality SVG files",
      "Research Agreement Helper now displays minutes if there is a remainder",
      "Gravity Assist icon is now a high quality SVG",
      "Clarified the share buttons",
      "Added onscreen animations when clicking share buttons"
    ]
  },
  {
    type: "bugfix",
    version: "1.2.1",
    release: "2024-03-24",
    notes: ["Added Eternal Heavens B1 module", "Fixed flagship choices not changing after removing a flagship ship in Fleet Builder", "Edited credits"]
  },
  {
    type: "release",
    version: "1.2.2",
    release: "2024-04-07",
    notes: [
      "Changed copy text and share link buttons to icons",
      "Added instructions to RA Helper ship search text when no ship is selected",
      "Revamped the color palettes of Blue/Purple and Sunset in Color Generator",
      "Added 2 new colors to Color Generator: Pink/Green and Orange/Orange",
      "Fixed the display of information in Equipment Encyclopedia for mobile users (for real this time)",
      "Optimized home menu buttons and added icons",
      "Condensed some credits for better readability",
      "Added random fun facts to the home page",
      "Optimized display of information in Module Library",
      'Changed the name of "Credits" to "Contributors"',
      "Fixed the close button on the credits screen being too small for mobile users"
    ]
  },
  {
    type: "minor release",
    version: "1.2.3",
    release: "2024-04-11",
    notes: ["Added some new home screen tips"]
  },
  {
    type: "bugfix",
    version: "1.2.4",
    release: "2024-04-16",
    notes: ["Edited module names for Spear of Uranus for A1, A2, and A3 to match the new ingame names."]
  },
  {
    type: "minor release",
    version: "1.2.5",
    release: "2024-04-27",
    notes: ["Added Ranger A and B to Research Agreement Helper", "Added Ediacaran D2 and Marshal Crux C3 to Module Library", "Edited Contributors list"]
  },
  {
    type: "release",
    version: "1.2.6",
    release: "2024-05-16",
    notes: ["Added Ediacaran A2, B2, and C1 to Module Library", "Made some major changes behind the scenes", "Removed Fleet Builder temporarily"]
  },
  {
    type: "release",
    version: "1.3.0",
    release: "2024-05-27",
    notes: [
      "You can now choose your own colors, intensity, and compression in Color Generator",
      "Completely reworked the design of the website",
      "Loading speeds improved tremendously",
      "You can now zoom out and in to your heart's content",
      "Buttons for navigating between pages is no longer in the header and instead in a new side bar",
      "Added better route navigation",
      "You can now freely select ships in Module Library without scrolling through the list",
      "Changelog and Contributors are now their own pages",
      "Some more images are now high-quality SVGs",
      "Even more major changes behind the scenes"
    ]
  },
  {
    type: "minor release",
    version: "1.3.0.1",
    release: "2024-06-03",
    notes: ["Added Eternal Heavens A3"]
  },
  {
    type: "release",
    version: "1.3.1",
    release: "2024-06-17",
    notes: [
      "Changed the primary font used on mobile devices",
      "Edited attribute descriptions of recently reworked attributes",
      "Added variant names to ship cards in RA Helper",
      "Changed the way RA Helper cards are displayed on mobile devices",
      "Fixed a bug where share links would not work in some cases",
      "Changed the contents of the root page",
      "Changed the display of the cards on the home page",
      "Selecting a preset gradient in Color Generator will now close the dropdown",
      "Selecting an already selected equipment will now close the dropdown"
    ]
  },
  {
    type: "minor release",
    version: "1.3.1.1",
    release: "2024-06-25",
    notes: ["Added Eternal Heavens B2"]
  },
  {
    type: "bugfix",
    version: "1.3.1.2",
    release: "2024-06-29",
    notes: ["Fixed the latest changes card not showing previous changes"]
  },
  {
    type: "minor release",
    version: "1.3.1.3",
    release: "2024-07-01",
    notes: ["Added preloading for images in Module Library"]
  },
  {
    type: "minor release",
    version: "1.3.1.4",
    release: "2024-07-06",
    notes: ["Fixed Ediacaran C1 showing as B2", "Added Ediacaran B2"]
  },
  {
    type: "release",
    version: "1.3.2",
    release: "2024-07-11",
    notes: [
      "Added Eternal Heavens M2, M3, and C3",
      "Added UAV Cooperation attribute to Eternal Heavens M1",
      "Fixed Eternal Heavens A3 displaying as an unknown module",
      "Clicking on ships in Module Library will now change the path"
    ]
  },
  {
    type: "release",
    version: "1.3.3",
    release: "2024-07-19",
    notes: [
      "Decreased the default compression value from 3 to 2 in Color Generator",
      "Selecting a color from the preset gradients or previous colors menu will no longer change your advanced settings",
      "Changelog cards in the full changelog now match the changelog card on the home page for parity",
      "Fixed numbers being not visible in Color Generator advanced option inputs"
    ]
  },
  {
    type: "release",
    version: "1.3.4",
    release: "2024-07-27",
    notes: [
      "Made the side menu visible at all times for bigger screens",
      "Adjusted font size for all devices",
      "Added Warspite to Module Library",
      "Removed the Contributors and Changelog button from the footer and moved them to the side menu"
    ]
  },
  {
    type: "release",
    version: "1.3.5",
    release: "2024-09-22",
    notes: [
      "Added Hale-Bopp to RA Helper",
      "Added most Warspite modules to Module Library",
      "Added pre-loading for all images",
      "Added an error page when trying to load a page that doesn't exist",
      "Fixed Module Library links not working",
      "Fixed share links not working",
      "Fixed invalid url encoding on refresh",
      "Fixed the navigation menu closing even when not pressing on a button on mobile devices"
    ]
  },
  {
    type: "release",
    version: "1.4.0",
    release: "2024-12-04",
    notes: ["Redesigned entire site"]
  }
];
