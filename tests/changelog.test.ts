import { describe, test, expect } from "vitest";

describe("Changelog Tests", () => {
  test("Versions should be unique", () => {
    const versions = changelog.map((version) => version.version);
    const uniqueVersions = new Set(versions);

    expect(uniqueVersions.size).toBe(versions.length);
  });

  test("Version release dates should be in YYYY-MM-DD format", () => {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const releaseDates = changelog.map((version) => version.release);

    for (const release of releaseDates) {
      expect(regex.test(release)).toBe(true);
      expect(new Date(release).toISOString().slice(0, 10)).toBe(release);
    }
  });
});
