export const origins: Readonly<Record<string, string>> = {
  "http://localhost:3000": "L",
  "https://beta.gravityassist.xyz": "B",
  "https://gravityassist.xyz": "P"
};

export function italicize(text: string): [string, boolean][] {
  return text.split(/("[^"]*")/g).map((part) => {
    if (part.startsWith('"') && part.endsWith('"')) return [part, true];
    return [part, false];
  });
}
