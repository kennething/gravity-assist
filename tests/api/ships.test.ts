import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("Ship Data Tests", async () => {
  await setup({ server: true, setupTimeout: 180000 });

  test("Super capital ship module subsystem stats should add up to overall module stats", async () => {
    const response = await $fetch("/api/data/ships");
    const data = response.data.filter((ship) => "modules" in ship).flatMap((ship) => ship.modules.map((mod) => [ship.name, mod])) as [string, AllModule][];

    const invalidSubsystems: [string, string, string, string][] = [];
    for (const [ship, mod] of data) {
      if (mod.type === "unknown") continue;
      if (!("antiship" in mod.stats) || !("antiair" in mod.stats) || !("siege" in mod.stats)) continue;
      if (mod.subsystems.every((subsystem) => !("stats" in subsystem))) continue;

      const stats = ["antiship", "antiair", "siege"] as (keyof typeof mod.stats)[];
      for (const stat of stats) {
        if (mod.stats[stat] === null || mod.subsystems.some((subsystem) => "stats" in subsystem && !(stat in subsystem.stats.targetPriority))) continue;
        const overallStat = mod.stats[stat];

        const subsystemStat = mod.subsystems.reduce((acc, curr) => {
          if (!("stats" in curr)) return acc;
          if (Array.isArray(curr.stats.targetPriority)) return acc;

          const currentTargetPriority = curr.stats.targetPriority[stat as keyof typeof curr.stats.targetPriority];
          if (!currentTargetPriority) return acc;

          return acc + currentTargetPriority.damage;
        }, 0);

        if (overallStat !== subsystemStat) invalidSubsystems.push([ship, stat, mod.system, mod.name]);
      }
    }

    expect(invalidSubsystems).toMatchObject([]);
  });

  test("Super capital ship module sources should be in credits", async () => {
    const response = await $fetch("/api/data/ships");
    const data = response.data.filter((ship) => "modules" in ship).flatMap((ship) => ship.modules.map((mod) => [ship.name, mod])) as [string, AllModule][];

    const missingCredits: [string, string, string, string][] = [];
    for (const [ship, mod] of data) {
      if (mod.type === "unknown" || !mod.sourcedFrom) continue;

      for (const source of mod.sourcedFrom) {
        if (!credits.find((person) => person.name === source)) missingCredits.push([ship, mod.system, mod.name, source]);
      }
    }

    expect(missingCredits).toMatchObject([]);
  });

  test("Ship image paths should follow naming scehema", async () => {
    const response = await $fetch("/api/data/ships");
    const data = response.data;

    const wrongImages: [string, string, string, string][] = [];
    for (const ship of data) {
      const expectedPath = `/ships/${shipNameToImage(ship.name)}_${ship.variant.toLowerCase()}.png`;
      const actualPath = ship.img;
      if (actualPath !== expectedPath) wrongImages.push([ship.name, ship.variant, actualPath, expectedPath]);
    }

    expect(wrongImages).toMatchObject([]);
  });
});
