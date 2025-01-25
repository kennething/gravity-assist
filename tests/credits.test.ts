import { describe, test, expect } from "vitest";

describe("Credits Tests", () => {
  test("Dates should be in YYYY-MM-DD format", () => {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const dates = credits.map((person) => person.dateAdded);

    for (const date of dates) {
      expect(regex.test(date)).toBe(true);
      expect(new Date(date).toISOString().slice(0, 10)).toBe(date);
    }
  });
});
