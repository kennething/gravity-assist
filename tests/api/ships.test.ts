import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("Ship Data Tests", async () => {
  await setup({ server: true, setupTimeout: 180000 });

  test("Super capital ship module subsystem stats should add up to overall module stats", async () => {
    const response = await $fetch("/api/data/ships");
    const data = response.data.filter((ship) => "modules" in ship).flatMap((ship) => ship.modules);

    const invalidSubsystems = [];
    for (const mod of data) {
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

        if (overallStat !== subsystemStat) invalidSubsystems.push([stat, mod.system, mod.name]);
      }
    }

    expect(invalidSubsystems).toMatchObject([]);
  });
});
