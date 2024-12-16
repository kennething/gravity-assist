import { Op } from "quill";

export enum FormattingColors {
  R = "#ff0000",
  O = "#ffa500",
  D = "#ffd700",
  Y = "#ffff00",
  G = "#00ff00",
  B = "#0000ff",
  U = "#ff00ff",
  P = "#ffc0cb",
  W = "#ffffff",
  K = "#000000"
}

export const mailTemplates: Record<string, Op[]> = {
  "City Siege": [
    { attributes: { color: "#ffffff" }, insert: "Target: " },
    { attributes: { color: "#ffe1ad" }, insert: "Ligma " },
    { attributes: { color: "#278451", underline: true }, insert: "(6969,6969)" },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "Time: " },
    { attributes: { color: "#b3e5ff" }, insert: "12:08 " },
    { attributes: { color: "#ffffff" }, insert: "UTC" },
    { insert: "\n" },
    { attributes: { color: "#c7ffd2" }, insert: "Gathering location: " },
    { attributes: { color: "#278451", underline: true }, insert: "(6969,6969)" },
    { insert: "\n" },
    { attributes: { color: "#f8c7ff" }, insert: "Delegates: " },
    { attributes: { color: "#278451", underline: true }, insert: "(6969,6969)" },
    { insert: "\n\n" },
    { attributes: { color: "#ffffff" }, insert: "Send your fleets to the " },
    { attributes: { color: "#c7ffd2" }, insert: "gathering location " },
    { attributes: { color: "#278451", underline: true }, insert: "(6969,6969)" },
    { attributes: { color: "#c7ffd2" }, insert: " " },
    { attributes: { color: "#ffffff" }, insert: "by " },
    { attributes: { color: "#b3e5ff" }, insert: "12:08 " },
    { attributes: { color: "#ffffff" }, insert: "UTC." },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "We will do a ready check in chat at " },
    { attributes: { color: "#b3e5ff" }, insert: "12:09 " },
    { attributes: { color: "#ffffff" }, insert: "UTC, and move up to the " },
    { attributes: { color: "#ffff00" }, insert: "yellow markers " },
    { attributes: { color: "#ffffff" }, insert: "at " },
    { attributes: { color: "#b3e5ff" }, insert: "12:10 " },
    { attributes: { color: "#ffffff" }, insert: "UTC." },
    { insert: "\n\n" },
    { attributes: { color: "#ffffff" }, insert: "If you cannot manual, " },
    { attributes: { color: "#f8c7ff" }, insert: "delegate your fleets" },
    { attributes: { color: "#ffffff" }, insert: " to the org op at " },
    { attributes: { color: "#278451", underline: true }, insert: "(6969,6969)" },
    { attributes: { color: "#ffffff" }, insert: "." },
    { insert: "\n" }
  ],
  '"Visit Begging"': [
    { attributes: { color: "#ffffff" }, insert: "Hey everyone! Great job so far, it looks like we have " },
    { attributes: { color: "#fef162" }, insert: "very few " },
    { attributes: { color: "#ffffff" }, insert: "who have not logged into the server yet." },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "Now, " },
    { attributes: { color: "#66e0ff" }, insert: "it's time for visiting!" },
    { insert: "\n\n" },
    { attributes: { color: "#ff6666" }, insert: "Don't" },
    { attributes: { color: "#ffffff" }, insert: " spend your AP on destroying NPCs right now;" },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "Spend it " },
    { attributes: { color: "#84fe62" }, insert: "visiting everyone in the community." },
    { insert: "\n\n" },
    { attributes: { color: "#ffffff" }, insert: "You can easily visit using the " },
    { attributes: { color: "#fef162" }, insert: "quick visit" },
    { attributes: { color: "#ffffff" }, insert: " feature:" },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "Tap on " },
    { attributes: { color: "#fed7f9" }, insert: "squad" },
    { attributes: { color: "#ffffff" }, insert: " -> " },
    { attributes: { color: "#ff99f1" }, insert: "community" },
    { attributes: { color: "#ffffff" }, insert: " -> " },
    { attributes: { color: "#ff5ce9" }, insert: "view members" },
    { attributes: { color: "#ffffff" }, insert: " -> " },
    { attributes: { color: "#ff00dd" }, insert: "quick visit" },
    { insert: "\n" },
    { attributes: { color: "#ffffff" }, insert: "It'll take the hassle of searching for people off your back." },
    { insert: "\n\n\n" },
    { attributes: { color: "#ffd700" }, insert: "Please do your best to visit so we can unlock vision and warp ASAP!" },
    { insert: "\n" }
  ]
};
