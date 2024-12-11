import { Ship } from "~/utils/shipData";

export default defineEventHandler((event) => {
    const data: Ship[] = [{
        name: "AT021",
        title: "Pulse Attacker",
        img: "/ships/at021_a.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Dawn Accord",
        direction: ["Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 15,
        aircraftPerSquadron: 3,
        production: {
            metal: 5600,
            crystal: 450,
            deuterium: 240,
            timeSeconds: 810,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Pulse Cannon System`,
            main: true,
            maxUpgradeSlots: 5,
            baseAntiship: 494,
            baseAntiair: 296,
            baseSiege: 14,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Delayed Attack",
                img: "/weapons/upgrades/strategies/at021a_1.svg",
                strategy: true,
                description: ["After the battle begins, extend the lock-on time of the first 2 rounds of attacks by ", "40%", " and increases the Hit Rate of the main weapon by ", "40%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Enhance Recharge Power",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Enhance Pulse Focus",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Firing Assistance Enhancement",
                img: "/weapons/upgrades/smallHitrate.svg",
                description: ["Increases weapon system Hit Rate against frigates/destroyers by ", "3%"],
                maxTiers: 5,
                affectedStat: "smallHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Large Target Correction",
                img: "/weapons/upgrades/bigHitrate.svg",
                description: ["Increases weapon system Hit Rate against cruisers and higher-class ships by ", "3%"],
                maxTiers: 5,
                affectedStat: "bigHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Charging Device Enhancement",
                img: "/weapons/upgrades/energyCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Pipeline Cooling Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }]
        }, {
            type: "energy",
            name: `Airborne Energy System`,
            maxUpgradeSlots: 2,
            baseDmgBuff: 1.15,
            systemAdjustment: null,
            img: "/weapons/icons/jamming.png",
            upgrades: [{
                name: "Energy Core Output Increase",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases main pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Energy Core Output Increase",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases main pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Energy Storage",
                img: "/weapons/upgrades/energyCooldown.svg",
                description: ["Increases the main pulse cannon's Duration by ", "40%", " and Rounds Per Cycle by ", "1", "."],
                maxTiers: 2,
                affectedStat: "damage",
                percentBuffPerTier: 1.188259,
                tpPerTier: 10
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 2,
            systemAdjustment: "hp",
            baseHp: 4920,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "AT021",
        title: "Tactical Attacker",
        img: "/ships/at021_b.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "B",
        variant_name: "Interference Type",
        manufacturer: "Dawn Accord",
        direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 15,
        aircraftPerSquadron: 3,
        production: {
            metal: 5520,
            crystal: 430,
            deuterium: 230,
            timeSeconds: 770,
            storage: 0
        },
        systems: [{
            type: "jamming",
            name: "Electronic Jamming System",
            main: true,
            maxUpgradeSlots: 7,
            systemAdjustment: "jamming",
            img: "/weapons/icons/jamming.png",
            upgrades: [{
                name: "Failure Adjustment",
                strategy: true,
                img: "/weapons/upgrades/strategies/at021b_1.svg",
                description: ["Interferes again and increases the inbound time by ", "35%", " when failing to interfere."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Jamming Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Jamming Equipment Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Weapon Heatsink Efficiency",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Interference Cover",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "30%", " but reduces the interference effect duration by ", "50%", "."],
                maxTiers: 1,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.3,
                tpPerTier: 9
            }, {
                name: "Disperse Interference",
                img: "/weapons/upgrades/railgunHitrate.svg",
                description: ["Prioritizes unjammed targets"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 9
            }, {
                name: "Electronic Cover",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Reduces the effect Lock-On Efficiency of anti-aircraft weapons has on you and the aircraft within the same carrier by ", "10%", " (effects of the same type cannot stack)"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }]
        }, {
            type: "weapon",
            name: "Airborne Weapon System",
            maxUpgradeSlots: 4,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            baseAntiship: 281,
            baseAntiair: 225,
            baseSiege: 32,
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Firing Assistance Enhancement",
                img: "/weapons/upgrades/smallHitrate.svg",
                description: ["Increases weapon system Hit Rate against frigates/destroyers by ", "15%"],
                maxTiers: 1,
                affectedStat: "smallHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 2,
            img: "/weapons/icons/armor.png",
            systemAdjustment: "hp",
            baseHp: 4920,
            baseArmor: 0,
            baseEnergyShield: 0,
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            img: "/weapons/icons/speed.png",
            baseCruise: 3000,
            baseWarp: 0,
            baseEvasion: 1.1,
            upgrades: [{
                name: "Aerial Mobility Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Dynamic Thrust Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3%"],
                maxTiers: 5,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            img: "/weapons/icons/command.png",
            systemAdjustment: null,
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increase the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "AT021",
        title: "Heavy Attacker",
        img: "/ships/at021_c.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "C",
        variant_name: "Multi-Role Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 15,
        aircraftPerSquadron: 3,
        production: {
            metal: 6100,
            crystal: 480,
            deuterium: 170,
            timeSeconds: 710,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: "Precision Strike System",
            img: "/weapons/icons/cannon.png",
            main: true,
            maxUpgradeSlots: 5,
            systemAdjustment: "weaponDamage",
            baseAntiship: 540,
            baseAntiair: 0,
            baseSiege: 57,
            upgrades: [{
                name: "Multi-Target Strategy",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["Attacks every 2 rounds, with the main weapon now attacking ", "2", " targets. Increases weapon damage by ", "75%", " and reduces Hit Rate against the target's loading system by ", "10%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Sustained Output Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Increases the weapon system's Duration by ", "50%", " and Rounds Per Cycle by ", "3", "."],
                maxTiers: 2,
                affectedStat: "damage",
                percentBuffPerTier: 1.2,
                tpPerTier: 10
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }]
        }, {
            type: "weapon",
            name: "Airborne Guiding System",
            img: "/weapons/icons/cannon.png",
            maxUpgradeSlots: 3,
            systemAdjustment: "weaponDamage",
            baseAntiship: 582,
            baseAntiair: 0,
            baseSiege: 72,
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Large Target Correction",
                img: "/weapons/upgrades/bigHitrate.svg",
                description: ["Increases weapon system Hit Rate against cruisers and higher-class ships by ", "3%"],
                maxTiers: 5,
                affectedStat: "bigHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Large Target Correction",
                img: "/weapons/upgrades/bigHitrate.svg",
                description: ["Increases weapon system Hit Rate against cruisers and higher-class ships by ", "3%"],
                maxTiers: 5,
                affectedStat: "bigHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 2,
            img: "/weapons/icons/armor.png",
            systemAdjustment: "hp",
            baseHp: 4920,
            baseArmor: 0,
            baseEnergyShield: 0,
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            img: "/weapons/icons/speed.png",
            baseCruise: 3000,
            baseWarp: 0,
            baseEvasion: 1.1,
            upgrades: [{
                name: "Dynamic Thrust Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3%"],
                maxTiers: 5,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            img: "/weapons/icons/command.png",
            systemAdjustment: null,
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increase the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "B192 Newland",
        title: "Heavy Attacker",
        img: "/ships/b192newland.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Multi-Role Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 3,
        production: {
            metal: 7300,
            crystal: 660,
            deuterium: 290,
            timeSeconds: 1060,
            storage: 0
        },
        systems: [{
            type: 'weapon',
            name: "Assault Cannon System",
            img: "/weapons/icons/cannon.png",
            main: true,
            maxUpgradeSlots: 6,
            systemAdjustment: "weaponDamage",
            baseAntiship: 428,
            baseAntiair: 0,
            baseSiege: 90,
            upgrades: [{
                name: "Precision Strike",
                img: "/weapons/upgrades/strategies/heavyAmmo.svg",
                description: ["Prioritizes attacks on super capital ships and increases the Extra Damage against the target's systems by ", "60%", " every ", "40", "s for ", "40", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Firing Assistance Enhancement",
                img: "/weapons/upgrades/smallHitrate.svg",
                description: ["Increases weapon system Hit Rate against frigates/destroyers by ", "3%"],
                maxTiers: 5,
                affectedStat: "smallHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }]
        }, {
            type: 'weapon',
            name: "Anti-Aircraft Missile System",
            img: "/weapons/icons/cannon.png",
            maxUpgradeSlots: 4,
            systemAdjustment: "weaponDamage",
            baseAntiship: 0,
            baseAntiair: 360,
            baseSiege: 0,
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Aircraft Weakpoint Detection",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Damage against aerial targets by ", "20%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.2,
                tpPerTier: 3
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "10%", " and torpedo Hit Rate by ", "10%"],
                maxTiers: 1,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            img: "/weapons/icons/armor.png",
            systemAdjustment: "hp",
            baseHp: 4680,
            baseArmor: 0,
            baseEnergyShield: 0,
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            img: "/weapons/icons/speed.png",
            baseCruise: 3000,
            baseWarp: 0,
            baseEvasion: 1.1,
            upgrades: [{
                name: "Dynamic Thrust Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            img: "/weapons/icons/command.png",
            systemAdjustment: null,
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on super capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increase the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "BR050",
        title: "Standard Bomber",
        img: "/ships/br050_a.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 6640,
            crystal: 620,
            deuterium: 190,
            timeSeconds: 830,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Bombardment System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 1885,
            baseAntiair: 0,
            baseSiege: 675,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "High-Speed Torpedo",
                img: "/weapons/upgrades/strategies/br050a_1.svg",
                strategy: true,
                description: ["Every ", "3", " round(s), the system's torpedo launchers are reloaded with high-speed torpedoes, reducing the chance of being intercepted by ", "40%", " and increasing the damage against systems by ", "35%", " upon hitting."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 5040,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Rigidity Enhancement",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }, {
                name: "Armor Hardening Process",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.2,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "Target Tracing Enhancement",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of all aircraft's weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "BR050",
        title: "Multi-Role Bomber",
        img: "/ships/br050_b.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "B",
        variant_name: "Defense Type",
        manufacturer: "Dawn Accord",
        direction: ["Sustained Combat", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 6180,
            crystal: 590,
            deuterium: 230,
            timeSeconds: 890,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Bombardment System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 1257,
            baseAntiair: 0,
            baseSiege: 450,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "misc",
            name: "Electronic Defense System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/jamming.png",
            baseEvasion: 1.25,
            upgrades: [{
                name: "Enhanced Interference",
                strategy: true,
                img: "/weapons/upgrades/strategies/br050b_1.svg",
                description: ["For the first ", "60", "s of battle, further reduces the hit rate of attacks from enemy aircraft against you by ", "50%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 5040,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Rigidity Enhancement",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }, {
                name: "Armor Hardening Process",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            baseEvasion: 1.1,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.2,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "Target Tracing Enhancement",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of all aircraft's weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "BR050",
        title: "Torpedo Bomber",
        img: "/ships/br050_c.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "C",
        variant_name: "Torpedo Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 7200,
            crystal: 800,
            deuterium: 280,
            timeSeconds: 1120,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Experimental Special Torpedo Launching System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 321,
            baseAntiair: 0,
            baseSiege: 127,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Redues Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Special Torpedo Launching",
                img: "/weapons/upgrades/br050c_1.svg",
                description: ["Load the torpedo launcher with armor-melting torpedoes, granting ", "15%", "chance to inflict the ", "Armor Melting", " status on the target upon hitting. ", "Armor Melting", ": Suffer ", "80", " point(s) of special damage for ", "60", "s. This effect can exist up to ", "10", " layer(s). If the target is a building, then the damage is reduced by 75%."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 10
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 5040,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Rigidity Enhancement",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }, {
                name: "Armor Hardening Process",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            baseEvasion: 1.1,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.2,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "Target Tracing Enhancement",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of all aircraft's weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Balancer Anderson SC020",
        title: "Scout",
        img: "/ships/sc020.png",
        type: "Fighter",
        fighter_type: "Small",
        variant: "A",
        variant_name: "Interference Type",
        manufacturer: "Antonios",
        direction: ["Sustained Combat", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 5,
        production: {
            metal: 6030,
            crystal: 400,
            deuterium: 160,
            timeSeconds: 630,
            storage: 0
        },
        systems: [{
            type: "jamming",
            name: "Airborne Jamming System",
            main: true,
            maxUpgradeSlots: 7,
            systemAdjustment: "jamming",
            img: "/weapons/icons/jamming.png",
            upgrades: [{
                name: "Dodge Damage",
                strategy: true,
                img: "/weapons/upgrades/strategies/sc020_1.svg",
                description: ["When attacked by enemy aircraft, it gives up its target and retreats to its carrier for ", "40", "s. Cooldown: ", "20", "s"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Jamming Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Jamming Equipment Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Weapon Cooling Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Weapon Heatsink Efficiency",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Guidance Detection Jamming",
                img: "/weapons/upgrades/missileEvasion.svg",
                description: ["Reduces the chance of being hit by guided weapons by ", "4%"],
                maxTiers: 5,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.04,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Counter-Attack Info Gathering",
                img: "/weapons/upgrades/directEvasion.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Electronic Cover",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Reduces the effect Lock-On Efficiency of anti-aircraft weapons has on you and the aircraft within the same carrier by ", "10%", " (effects of the same type cannot stack)"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }]
        }, {
            type: "weapon",
            name: `Airborne Cannon System`,
            maxUpgradeSlots: 4,
            baseAntiship: 30,
            baseAntiair: 172,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 3450,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Energy Coating",
                img: "/weapons/upgrades/energyShield.svg",
                description: ["Increases Energy Resistance by ", "2%"],
                maxTiers: 5,
                affectedStat: "energyShield",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Low-Reflective Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Aerial Mobility Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Dynamic Thrust Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Emergency Evasion System Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Nozzle Masking Process",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "8%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Bullfrog",
        title: "Dual-Purpose Bomber",
        img: "/ships/bullfrog.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "A",
        variant_name: "Siege Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 7130,
            crystal: 500,
            deuterium: 190,
            timeSeconds: 770,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Bombardment System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 960,
            baseAntiair: 0,
            baseSiege: 440,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Concentrated Attacks",
                img: "/weapons/upgrades/strategies/bullfrog_1.svg",
                strategy: true,
                description: ["Prioritizes attacks on super capital ships, increases Rounds Per Cycle by ", "2", ", Attack Duration by ", "30%", ", and Cooldown by ", "30%", " every ", "30", "s for ", "40", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 4740,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Rigidity Enhancement",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }, {
                name: "Armor Hardening Process",
                img: "/weapons/upgrades/armor.svg",
                description: ["Increases Physical Resistance by ", "1"],
                maxTiers: 3,
                affectedStat: "armor",
                percentBuffPerTier: 1,
                tpPerTier: [1, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Hayreddin's Loyal",
        title: "Pulsar Fighter",
        img: "/ships/hayreddinsLoyal.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Special Type",
        manufacturer: "Empty",
        direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 1,
        maxInFleet: 8,
        aircraftPerSquadron: 3,
        production: {
            metal: 9760,
            crystal: 900,
            deuterium: 490,
            timeSeconds: 1590,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `"Starchaser" Charged Pulse Cannon System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 1538,
            baseAntiair: 738,
            baseSiege: 507,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Charged Phase Strike",
                img: "/weapons/upgrades/strategies/hayreddin_1.svg",
                strategy: true,
                description: ["The Charged Pulse weapon's damage increases by 12% for every 2 consecutive rounds it attacks the same target, up to 24%. THis bonus is reset after switching targets."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 18
            }, {
                name: "Enhance Recharge Power",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Enhance Pulse Focus",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Enhance Pulse Focus",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Energy Control System Enhancement",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases all pulse cannon Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Weapon Heatsink Efficiency",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Rapid Firing",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces the weapon system's Firing Duration by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rapid Firing",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces the weapon system's Firing Duration by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 6480,
            baseArmor: 3,
            baseEnergyShield: 1.05,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Low-Reflection Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Aircraft Stealth Coating",
                img: "/weapons/upgrades/reduceCritDamage.svg",
                description: ["Increases enemy weapon lock-on time by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            baseEvasion: 1.25,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Aerial Mobility Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "1.6%"],
                maxTiers: 5,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.016,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3%"],
                maxTiers: 5,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Janbiya Aer410",
        title: "Assault Attacker",
        img: "/ships/janbiyaAer410.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 3,
        production: {
            metal: 6070,
            crystal: 480,
            deuterium: 200,
            timeSeconds: 770,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Gun/Missile Attack System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 472,
            baseAntiair: 396,
            baseSiege: 82,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Precision Strike",
                img: "/weapons/upgrades/strategies/janbiya_1.svg",
                strategy: true,
                description: ["The system's primary weapon has a ", "15%", " chance to deal an additional ", "170%", " Crit Damage to the enemy target every ", "35", "s for ", "35", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Reactive Explosive Warhead",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Flexibility",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Reduces the chance of all missiles being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 2,
            systemAdjustment: "hp",
            baseHp: 4050,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 4,
            systemAdjustment: null,
            baseCruise: 3500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Aircraft Charging Stance",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases the Hit Rate of the aircraft's weapons by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on super capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Mistral",
        title: "Combat Attacker",
        img: "/ships/mistral.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Antonios",
        direction: ["Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 4,
        production: {
            metal: 7520,
            crystal: 650,
            deuterium: 220,
            timeSeconds: 930,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Weapon System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 58,
            baseAntiair: 558,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Pursue Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the target's HP falls below ", "20%", ", it increases attack chances in a single round by ", "1", " and reduces Attack Interval by ", "40%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Fire Control Computer Enhancement",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases all cannon Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Weak Point Detection Enhancement",
                img: "/weapons/upgrades/critDamage2.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Aiming Speed Enhancement",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Focus on Aerial Targets",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["Prioritizes fighters and interceptors"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 10
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 2,
            systemAdjustment: "hp",
            baseHp: 5400,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 4,
            systemAdjustment: null,
            baseCruise: 3100,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Aircraft Charging Stance",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases the Hit Rate of the aircraft's weapons by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's prmary weapon prioritizes its attack on super capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "SC002",
        title: "Quantum Scout",
        img: "/ships/sc002.png",
        type: "Fighter",
        fighter_type: "Small",
        variant: "A",
        variant_name: "Generic Type",
        manufacturer: "Dawn Accord",
        direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 15,
        aircraftPerSquadron: 5,
        production: {
            metal: 4160,
            crystal: 300,
            deuterium: 140,
            timeSeconds: 510,
            storage: 0
        },
        systems: [{
            type: "jamming",
            name: "Electronic Recon System",
            main: true,
            maxUpgradeSlots: 7,
            systemAdjustment: "jamming",
            img: "/weapons/icons/jamming.png",
            upgrades: [{
                name: "Dodge Damage",
                strategy: true,
                img: "/weapons/upgrades/strategies/sc020_1.svg",
                description: ["When attacked by enemy aircraft, it gives up its target and retreats to its carrier for ", "40", "s. Cooldown: ", "20", "s"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Jamming Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Jamming Equipment Enhancement",
                img: "/weapons/upgrades/jammingCooldown.svg",
                description: ["Increases jamming duration by ", "6%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Weapon Cooling Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Weapon Heatsink Efficiency",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Guidance Detection Jamming",
                img: "/weapons/upgrades/missileEvasion.svg",
                description: ["Reduces the chance of being hit by guided weapons by ", "4%"],
                maxTiers: 5,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.04,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Counter-Attack Info Gathering",
                img: "/weapons/upgrades/directEvasion.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Electronic Cover",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Reduces the effect Lock-On Efficiency of anti-aircraft weapons has on you and the aircraft within the same carrier by ", "15%", " (effects of the same type cannot stack)"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }]
        }, {
            type: "weapon",
            name: `Airborne Cannon System`,
            maxUpgradeSlots: 4,
            baseAntiship: 140,
            baseAntiair: 140,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 2850,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Energy Coating",
                img: "/weapons/upgrades/energyShield.svg",
                description: ["Increases Energy Resistance by ", "2%"],
                maxTiers: 5,
                affectedStat: "energyShield",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Low-Reflective Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by direct-fire weapons by ", "3%"],
                maxTiers: 5,
                affectedStat: "directEvasion",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Aerial Mobility Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Dynamic Thrust Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Emergency Evasion System Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Nozzle Masking Process",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "8%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Sandrake",
        title: "Atmospheric Interceptor",
        img: "/ships/sandrake.png",
        type: "Fighter",
        fighter_type: "Small",
        variant: "A",
        variant_name: "Dual-Purpose Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 5,
        production: {
            metal: 4990,
            crystal: 440,
            deuterium: 140,
            timeSeconds: 610,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Offensive AA Cannon System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 24,
            baseAntiair: 537,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Pursue Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the target's HP falls below ", "20%", ", it increases attack chances in a single round by ", "1", " and reduces Attack Interval by ", "40%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 13
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Anti-Aircraft Ammo Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Damage against aerial targets by ", "4%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.04,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 4200,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Anti-Detection Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }, {
                name: "Critical-system Armor Enhancement",
                img: "/weapons/upgrades/systemHp.svg",
                description: ["RIncreases main system HP by ", "4%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 4,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Aerial Mobility Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "8%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Spore A404",
        title: "Light Fighter",
        img: "/ships/sporeA404.png",
        type: "Fighter",
        fighter_type: "Small",
        variant: "A",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 5,
        production: {
            metal: 4640,
            crystal: 310,
            deuterium: 120,
            timeSeconds: 480,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Combat System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 27,
            baseAntiair: 398,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Pursue Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the target's HP falls below ", "20%", ", it increases attack chances in a single round by ", "1", " and reduces Attack Interval by ", "40%", "."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Focus on Aerial Targets",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["Prioritizes fighters and interceptors"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 9
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 5400,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 4,
            systemAdjustment: null,
            baseCruise: 3100,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Aerial Mobility Enhancement",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3.7%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "8%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Stealth Maneuvers",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["When the aircraft is returning to the carrier, there is a 30% chance of ignoring the enemy anti-aircraft weapon's pre-targeting effect"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 12
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's prmary weapon prioritizes its attack on super capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Stingray",
        title: "Torpedo Bomber",
        img: "/ships/stingray.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "A",
        variant_name: "Stealth Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 5360,
            crystal: 730,
            deuterium: 260,
            timeSeconds: 990,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Bombardment System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 1560,
            baseAntiair: 0,
            baseSiege: 496,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Stealth Attacks",
                img: "/weapons/upgrades/strategies/stingray_1.svg",
                strategy: true,
                description: ["Triggers Camouflage, increasing Evasion by ", "90%", " and increasing Hit Rate by ", "30%", " every ", "90", "s for ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 14
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 4,
            systemAdjustment: "hp",
            baseHp: 5200,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Armor Energy Coating",
                img: "/weapons/upgrades/energyShield.svg",
                description: ["Increases Energy Resistance by ", "2%"],
                maxTiers: 5,
                affectedStat: "energyShield",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Identify Interference Coating",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Reduces the effect Lock-On Efficiency of anti-aircraft weapons has on you by ", "20%", " (Becomes ineffective after getting hit by the enemy)"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 6
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 3200,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.2,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "8%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 5
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Strix A100",
        title: "Joint Attacker",
        img: "/ships/strixA100.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "NOMA Shipping",
        direction: ["Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 3,
        production: {
            metal: 7460,
            crystal: 480,
            deuterium: 200,
            timeSeconds: 780,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Charged Pulse Cannon System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 663,
            baseAntiair: 459,
            baseSiege: 132,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/heavyAmmo.svg",
                strategy: true,
                description: ["Prioritizes attacks on frigates and destroyers, reduces Attack Duration by ", "50%", ", and increases Cooldown by ", "70%", " every ", "45", "s for ", "35", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Enhance Recharge Power",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Enhance Pulse Focus",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Energy Control System Enhancement",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases all pulse cannon Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Charging Device Enhancement",
                img: "/weapons/upgrades/energyCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Weapon Heatsink Efficiency",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 4920,
            baseArmor: 0,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 5,
            systemAdjustment: null,
            baseCruise: 2800,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Close Combat Assault",
                strategy: true,
                img: "/weapons/upgrades/strategies/strix_1.svg",
                description: ["When flying to attack the front-row target, there is a 30% chance of ignoring the enemy anti-aircraft weapon's pre-targeting effect"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Aircraft Charging Stance",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases the Hit Rate of the aircraft's weapons by ", "3.7%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on super capital ships."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Vitas A021",
        title: "Heavy Attacker",
        img: "/ships/vitasA021.png",
        type: "Fighter",
        fighter_type: "Medium",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 3,
        production: {
            metal: 8960,
            crystal: 890,
            deuterium: 320,
            timeSeconds: 1290,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Precision Strike System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 851,
            baseAntiair: 0,
            baseSiege: 190,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Precision Strike",
                img: "/weapons/upgrades/strategies/heavyAmmo.svg",
                strategy: true,
                description: ["Prioritizes attacks on super capital ships and increases the Extra Damage against the target's suste,s by ", "60%", " every ", "30", "s for ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Weak Point Detection Enhancement",
                img: "/weapons/upgrades/critDamage2.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Flexibility",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "weapon",
            name: `Counter Cannon System`,
            main: true,
            maxUpgradeSlots: 4,
            baseAntiship: 20,
            baseAntiair: 180,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/strategies/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 2
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/strategies/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/strategies/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Composite Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 5370,
            baseArmor: 3,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 3300,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "Target Reset",
                img: "/weapons/upgrades/targetReset.svg",
                description: ["This ship's primary weapon prioritizes its attack on small capital ships."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }, {
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Vitas-B010",
        title: "Bomber",
        img: "/ships/vitasB010.png",
        type: "Fighter",
        fighter_type: "Large",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 1,
        maxInFleet: 10,
        aircraftPerSquadron: 2,
        production: {
            metal: 9260,
            crystal: 880,
            deuterium: 270,
            timeSeconds: 1180,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Plasma Bombardment System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 2294,
            baseAntiair: 0,
            baseSiege: 848,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Active Maneuvers",
                img: "/weapons/upgrades/strategies/strix_1.svg",
                strategy: true,
                description: ["When attacked by enemy aircraft, increases Evasion by ", "30%", ". Cooldown: ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Plasma Generation Enhancement",
                img: "/weapons/upgrades/plasmaDamage.svg",
                description: ["Increases all plasma weapon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Plasma Capacity Enhancement",
                img: "/weapons/upgrades/plasmaDamage.svg",
                description: ["Increases all plasma weapon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Siege Ammo Enhancement",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "City Weak Point Identification",
                img: "/weapons/upgrades/siegeDamage.svg",
                description: ["Increases weapon system Siege Damage by ", "6%"],
                maxTiers: 5,
                affectedStat: "siegeDamage",
                percentBuffPerTier: 1.06,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 1
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2, 2]
            }, {
                name: "Large Target Correction",
                img: "/weapons/upgrades/bigHitrate.svg",
                description: ["Increases weapon system Hit Rate against cruisers and higher-class ships by ", "3%"],
                maxTiers: 5,
                affectedStat: "bigHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 2, 2, 2, 2]
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 5,
            systemAdjustment: "hp",
            baseHp: 5860,
            baseArmor: 10,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Thruster Masking",
                img: "/weapons/upgrades/reduceCritDamage.svg",
                description: ["Increases enemy weapon lock-on time by ", "8%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Aircraft Stealth Coating",
                img: "/weapons/upgrades/reduceCritDamage.svg",
                description: ["Increases enemy weapon lock-on time by ", "8%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Identify Interference Coating",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Reduces the effect Lock-On Efficiency of anti-aircraft weapons has on you by ", "20%", " (Becomes ineffective after getting hit by the enemy)"],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 6
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "CV-II003",
        title: "Light Corvette",
        img: "/ships/cvii003.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Multi-Role Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 15,
        production: {
            metal: 4270,
            crystal: 270,
            deuterium: 60,
            timeSeconds: 440,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Rapid-Fire Battery System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 1880,
            baseAntiair: 144,
            baseSiege: 418,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Prioritize Firepower",
                img: "/weapons/upgrades/strategies/prioritizeFirepower.svg",
                strategy: true,
                description: ["Reduces the primary weapon's Cooldown by ", "80%", " and turns off other weapons in the system every ", "90", "s for ", "15", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Fast Targeet Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Quick Repair",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Fast Rearmament",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 4900,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Welding Tech Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Additional Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 3,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Aerial Mobility Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Missile Evasion Enhancement",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chance of being hit by missiles by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "missileEvasion",
                percentBuffPerTier: 1.037,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "CV-M011",
        title: "Heavy Missile Corvette",
        img: "/ships/cvm011_a.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Missile Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 15,
        production: {
            metal: 5320,
            crystal: 410,
            deuterium: 70,
            timeSeconds: 600,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Assault Missile System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 2100,
            baseAntiair: 0,
            baseSiege: 240,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Reactive Explosive Warhead",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Explosive Ammo Enhancement",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Weak Point Detection Enhancement",
                img: "/weapons/upgrades/critDamage2.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Ammo Flexibility",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases weapon system Crit Damage by ", "8%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "weapon",
            name: `Anti-Aircraft Battery System`,
            main: true,
            maxUpgradeSlots: 5,
            baseAntiship: 87,
            baseAntiair: 837,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Anti-Aircraft Measures",
                img: "/weapons/upgrades/heavyAmmo.svg",
                strategy: true,
                description: ["When attacked by enemy aircraft, it decreases weapon system Cooldown by ", "80%", " for ", "15", "s. Cooldown: ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 6
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Anti-Aircraft Ammo Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Damage against aerial targets by ", "20%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.2,
                tpPerTier: 3
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 7500,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 2,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "CV-M011",
        title: "Heavy Cannon Corvette",
        img: "/ships/cvm011_b.png",
        type: "Corvette",
        variant: "B",
        variant_name: "Cannon Type",
        manufacturer: "Dawn Accord",
        direction: ["Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 15,
        production: {
            metal: 4590,
            crystal: 320,
            deuterium: 60,
            timeSeconds: 490,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Cannon Attack System`,
            main: true,
            maxUpgradeSlots: 4,
            baseAntiship: 2228,
            baseAntiair: 0,
            baseSiege: 282,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Firing Assistance Enhancement",
                img: "/weapons/upgrades/smallHitrate.svg",
                description: ["Increases weapon system Hit Rate against frigates/destroyers by ", "3%"],
                maxTiers: 5,
                affectedStat: "smallHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Aiming Mechanism Enhancement",
                img: "/weapons/upgrades/smallHitrate.svg",
                description: ["Increases weapon system Hit Rate against frigates/destroyers by ", "3%"],
                maxTiers: 5,
                affectedStat: "smallHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "weapon",
            name: `Anti-Aircraft Battery System`,
            main: true,
            maxUpgradeSlots: 5,
            baseAntiship: 87,
            baseAntiair: 837,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Anti-Aircraft Measures",
                img: "/weapons/upgrades/heavyAmmo.svg",
                strategy: true,
                description: ["When attacked by enemy aircraft, it decreases weapon system Cooldown by ", "80%", " for ", "15", "s. Cooldown: ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 6
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "10%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.1,
                tpPerTier: 3
            }, {
                name: "Anti-Aircraft Ammo Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Damage against aerial targets by ", "20%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.2,
                tpPerTier: 3
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 1,
                affectedStat: "damage",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 1,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.15,
                tpPerTier: 3
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 7500,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 2,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "CV-M011",
        title: "High-Speed Missile Corvette",
        img: "/ships/cvm011_c.png",
        type: "Corvette",
        variant: "C",
        variant_name: "High-Speed Type",
        manufacturer: "Dawn Accord",
        direction: ["Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 15,
        production: {
            metal: 5260,
            crystal: 410,
            deuterium: 70,
            timeSeconds: 600,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Precision Guidance System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 1100,
            baseAntiair: 624,
            baseSiege: 130,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Steady Firing",
                strategy: true,
                img: "/weapons/upgrades/strategies/concentrateFire.svg",
                description: ["After every ", "4", " round(s) of attacks of the main weapon in the system, increases the Rounds Per Cycle by ", "1", " for the next round of attack."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 15
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Armor-Penetration Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "15%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "15%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: 2
            }, {
                name: "High-Explosive Warhead",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["The system's weapons have a ", "6%", " chance to deal an additional ", "10%", " Crit Damage when attacking an aircraft"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Reactive Explosive Warhead",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The weapon system will cause an additional ", "8%", " Crit Damage when attacking aircraft"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "weapon",
            name: `Counter Cannon System`,
            main: true,
            maxUpgradeSlots: 5,
            baseAntiship: 106,
            baseAntiair: 384,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3%"],
                maxTiers: 5,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Reduces Attack Interval by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 7500,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 2,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "CV-T800",
        title: "Pulsar Corvette",
        img: "/ships/cvt800.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Strategy & Support", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 15,
        production: {
            metal: 4800,
            crystal: 280,
            deuterium: 60,
            timeSeconds: 310,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Weapon System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 2400,
            baseAntiair: 1920,
            baseSiege: 48,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Rapid-Fire",
                img: "/weapons/upgrades/strategies/prioritizeFirepower.svg",
                strategy: true,
                description: ["Reduces the primary weapon's Firing Duration and Cooldown by ", "80%", " every ", "60", "s for ", "15", "s. Cooldown: ", "10", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 18
            }, {
                name: "Enhance Recharge Power",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Enhance Pulse Focus",
                img: "/weapons/upgrades/energyDamage.svg",
                description: ["Increases all pulse cannon Damage by ", "2%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.02,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Charging Device Enhancement",
                img: "/weapons/upgrades/energyCooldown.svg",
                description: ["Decreases weapon ssytem Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Pipeline Cooling Enhancement",
                img: "/weapons/upgrades/energyCooldown.svg",
                description: ["Decreases weapon ssytem Cooldown by ", "3%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.03,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Energy Control System Enhancement",
                img: "/weapons/upgrades/energyHitrate.svg",
                description: ["Increases all pulse cannon Hit Rate by ", "2%"],
                maxTiers: 5,
                affectedStat: "generalHitrate",
                percentBuffPerTier: 1.02,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Aiming Spped Enhancement",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [2, 2, 2, 3, 3]
            }, {
                name: "Fast Target Lock",
                img: "/weapons/upgrades/targetSelectionTime2.svg",
                description: ["Reduces the target-selection time of the weapon system by ", "6%"],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [2, 2, 2, 3, 3]
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 7500,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 2,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "Cellular Defender",
        title: "Heavy Torpedo Corvette",
        img: "/ships/cellularDefender.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Multi-Role Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 7910,
            crystal: 560,
            deuterium: 110,
            timeSeconds: 890,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Torpedo Attack System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 4080,
            baseAntiair: 0,
            baseSiege: 1469,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Warhead Modification",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2.5%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.025,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Rearmament Enhancement",
                img: "/weapons/upgrades/missileDamage.svg",
                description: ["Increases all missile/torpedo damage by ", "2.5%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.025,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Guidance Signal Enhancement",
                img: "/weapons/upgrades/missileHitrate.svg",
                description: ["Increases all missile Hit Rate by ", "2%", " and torpedo Hit Rate by ", "2%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Loading Mechanism Upgrade",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Ammo-Transport Acceleration",
                img: "/weapons/upgrades/genericCooldown2.svg",
                description: ["Decreases weapon system Cooldown by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Sympathetic Detonation",
                img: "/weapons/upgrades/critDamage.svg",
                description: ["The system's weapons have a ", "7.5%", " chance to deal an additional ", "12.5%", " Crit Damage"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Weak Point Detection Enhancement",
                img: "/weapons/upgrades/critDamage2.svg",
                description: ["Increases weapon system Crit Damage by ", "10%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Large Target Correction",
                img: "/weapons/upgrades/bigHitrate.svg",
                description: ["Increases weapon system Hit Rate against cruisers and higher-class ships by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "bigHitrate",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Ammo Stealth Processing",
                img: "/weapons/upgrades/torpedoIntercept.svg",
                description: ["Reduces the chance of all torpedoes being intercepted by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: [1, 2, 2, 2]
            }]
        }, {
            type: "weapon",
            name: "Rapid-Fire Battery System",
            maxUpgradeSlots: 5,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            baseAntiship: 660,
            baseAntiair: 1159,
            baseSiege: 187,
            upgrades: [{
                name: "Anti-Aircraft Measures",
                strategy: true,
                img: "/weapons/upgrades/strategies/heavyAmmo.svg",
                description: ["When attacked by enemy aircraft, it decreases weapon system Cooldown by ", "80%", " for ", "15", "s. Cooldown: ", "30", "s."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 10
            }, {
                name: "Barrel Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2.5%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.025,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Ammo Enhancement",
                img: "/weapons/upgrades/genericDamage.svg",
                description: ["Increases all cannon Damage by ", "2.5%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.025,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Ammo-Loader Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Barrel Heatsink Enhancement",
                img: "/weapons/upgrades/genericCooldown.svg",
                description: ["Decreases weapon system Cooldown by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "damage",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Anti-Aircraft Radar Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }, {
                name: "Fast Target Analysis Enhancement",
                img: "/weapons/upgrades/aircraftHitrate.svg",
                description: ["Increases weapon system Hit Rate against fighters/corvettes by ", "3.7%"],
                maxTiers: 4,
                affectedStat: "aircraftHitrate",
                percentBuffPerTier: 1.037,
                tpPerTier: [1, 2, 2, 2]
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 3,
            systemAdjustment: "hp",
            baseHp: 6650,
            baseArmor: 2,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Welding Tech Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Additional Armor Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 1, 1, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: 1
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 2,
            systemAdjustment: null,
            baseCruise: 2500,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 0,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: []
        }]
    }, {
        name: "Nebula Chaser",
        title: "Heavy Corvette",
        img: "/ships/nebulaChaser_a.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Ballistic Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 6470,
            crystal: 530,
            deuterium: 90,
            timeSeconds: 710,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Airborne Weapon System`,
            main: true,
            maxUpgradeSlots: 6,
            baseAntiship: 1920,
            baseAntiair: 115,
            baseSiege: 336,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Prioritize Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the enemy fleet includes carriers, it prioritizes attacks on these targets."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 12
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Nebula Chaser",
        title: "Pulsar Corvette",
        img: "/ships/nebulaChaser_b.png",
        type: "Corvette",
        variant: "B",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "RedBeast 7-13",
        title: "Missile Corvette",
        img: "/ships/redbeast713.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Offensive Type",
        manufacturer: "NOMA Shipping",
        direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "S-Levy 9",
        title: "Heavy Torpedo Escort Corvette",
        img: "/ships/slevy9.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Hale-Bopp",
        title: "System Support Corvette",
        img: "/ships/haleBopp_a.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Multi-Role Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Empty",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 3840,
            crystal: 220,
            deuterium: 160,
            timeSeconds: 710,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `Emergency Maintenance System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 0,
            baseAntiair: 0,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Prioritize Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the enemy fleet includes carriers, it prioritizes attacks on these targets."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 12
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Hale-Bopp",
        title: "Repair Support Corvette",
        img: "/ships/haleBopp_b.png",
        type: "Corvette",
        variant: "B",
        variant_name: "Dock Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support", "Fighter & Corvette"],
        scope: "Empty",
        weight: 5,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 3970,
            crystal: 230,
            deuterium: 170,
            timeSeconds: 740,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `"Overclock" Maintenance System`,
            main: true,
            maxUpgradeSlots: 7,
            baseAntiship: 0,
            baseAntiair: 0,
            baseSiege: 0,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "Prioritize Targets",
                img: "/weapons/upgrades/strategies/prioritizeTargets.svg",
                strategy: true,
                description: ["When the enemy fleet includes carriers, it prioritizes attacks on these targets."],
                maxTiers: 1,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 12
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Silent Assassin",
        title: "Armored Corvette",
        img: "/ships/silentAssassin.png",
        type: "Corvette",
        variant: "A",
        variant_name: "High-Speed Type",
        manufacturer: "NOMA Shipping",
        direction: ["Fighter & Corvette"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Void Elfin",
        title: "Stealth Missile Corvette",
        img: "/ships/voidElfin.png",
        type: "Corvette",
        variant: "A",
        variant_name: "Offensive Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 2,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Carilion",
        title: "Recon Frigate",
        img: "/ships/carilion_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Recon Type",
        manufacturer: "Antonios",
        direction: ["Sustained Combat", "Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 4,
        maxInFleet: 10,
        production: {
            metal: 50000,
            crystal: 50000,
            deuterium: 50000,
            timeSeconds: 50000,
            storage: 0
        },
        systems: [{
            type: "weapon",
            name: `PlaceholderPlaceholder`,
            main: true,
            maxUpgradeSlots: 50000,
            baseAntiship: 50000,
            baseAntiair: 50000,
            baseSiege: 50000,
            systemAdjustment: "weaponDamage",
            img: "/weapons/icons/cannon.png",
            upgrades: [{
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/strategies/PlaceholderPlaceholder.svg",
                strategy: true,
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }, {
                name: "PlaceholderPlaceholder",
                img: "/weapons/upgrades/PlaceholderPlaceholder.svg",
                description: ["PlaceholderPlaceholder"],
                maxTiers: 50000,
                affectedStat: "PlaceholderPlaceholder",
                percentBuffPerTier: 50000,
                tpPerTier: 50000
            }]
        }, {
            type: "armor",
            name: "Armor System",
            maxUpgradeSlots: 50000,
            systemAdjustment: "hp",
            baseHp: 50000,
            baseArmor: 50000,
            baseEnergyShield: 0,
            img: "/weapons/icons/armor.png",
            upgrades: [{
                name: "Aircraft Armor Enhancement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Aero Reinforcement",
                img: "/weapons/upgrades/hp.svg",
                description: ["Increases ship HP by ", "2%"],
                maxTiers: 5,
                affectedStat: "hp",
                percentBuffPerTier: 1.02,
                tpPerTier: [1, 1, 2, 2, 2]
            }, {
                name: "Short-range Stealth Coating",
                img: "/weapons/upgrades/missileTorpedoEvasion.svg",
                description: ["Reduces the chances of being hit by missiles and torpedoes by ", "3%", " and ", "5%", " respectively"],
                maxTiers: 5,
                affectedStat: ["missileEvasion", "torpedoEvasion"],
                percentBuffPerTier: [1.03, 1.05],
                tpPerTier: [1, 1, 1, 1, 2]
            }]
        }, {
            type: "propulsion",
            name: "Propulsion System",
            maxUpgradeSlots: 50000,
            systemAdjustment: null,
            baseCruise: 3000,
            baseWarp: 0,
            img: "/weapons/icons/speed.png",
            upgrades: [{
                name: "Dynamic Thrust Adjustment",
                img: "/weapons/upgrades/generalEvasion.svg",
                description: ["Increases ship Evasion by ", "2%"],
                maxTiers: 4,
                affectedStat: "generalEvasion",
                percentBuffPerTier: 1.02,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Intensified Combustion Enhancement",
                img: "/weapons/upgrades/targetSelectionTime.svg",
                description: ["Reduces the target-selection time of the aircraft's primary weapon by ", "7.5%"],
                maxTiers: 4,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 2
            }, {
                name: "Flight Maneuver Improvement",
                img: "/weapons/upgrades/reciprocal.svg",
                description: ["Reduces the flight time of reciprocal aircraft by ", "6%"],
                maxTiers: 5,
                affectedStat: "damage",
                percentBuffPerTier: 1.01417,
                tpPerTier: 2
            }]
        }, {
            type: "command",
            name: "Command System",
            maxUpgradeSlots: 1,
            systemAdjustment: null,
            img: "/weapons/icons/command.png",
            upgrades: [{
                name: "System Automated Maintenance Enhancement",
                img: "/weapons/upgrades/commandRepair.svg",
                description: ["Increases the automated maintenance efficiency of the system by ", "5%", "."],
                maxTiers: 5,
                affectedStat: null,
                percentBuffPerTier: null,
                tpPerTier: 1
            }]
        }]
    }, {
        name: "Carilion",
        title: "Heavy Cannon Frigate",
        img: "/ships/carilion_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Heavy Cannon Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Carilion",
        title: "Special Frigate",
        img: "/ships/carilion_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Special Type",
        manufacturer: "Antonios",
        direction: ["Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "FG300",
        title: "Multi-Role Frigate",
        img: "/ships/fg300_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Multi-Role Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 3,
        maxInFleet: 15
    }, {
        name: "FG300",
        title: "Armored Frigate",
        img: "/ships/fg300_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Armored Type",
        manufacturer: "Dawn Accord",
        direction: ["Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 3,
        maxInFleet: 15
    }, {
        name: "FG300",
        title: "Recon Frigate",
        img: "/ships/fg300_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Recon Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 3,
        maxInFleet: 15
    }, {
        name: "Mare Imbrium",
        title: "Assault Frigate",
        img: "/ships/mareImbrium_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Railgun Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Mare Imbrium",
        title: "Experimental Pulse Cannon Frigate",
        img: "/ships/mareImbrium_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Middle",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Mare Nubium",
        title: "Light Landing Ship",
        img: "/ships/mareNubium_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Assault Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Mare Nubium",
        title: "Anti-Aircraft Frigate",
        img: "/ships/mareNubium_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Jupiter Industry",
        direction: ["Empty"],
        scope: "Empty",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Mare Serenitatis",
        title: "Heavy Frigate",
        img: "/ships/mareSerenitatis_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Mare Serenitatis",
        title: "Missile Frigate",
        img: "/ships/mareSerenitatis_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Missile Type",
        manufacturer: "Jupiter Industry",
        direction: ["Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Mare Serenitatis",
        title: "Anti-Aircraft Frigate",
        img: "/ships/mareSerenitatis_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Jupiter Industry",
        direction: ["Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Mare Tranquillitatis",
        title: "Missile Frigate",
        img: "/ships/mareTranquillitatis_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Integrated Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Mare Tranquillitatis",
        title: "Pulse Cannon Frigate",
        img: "/ships/mareTranquillitatis_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Jupiter Industry",
        direction: ["Empty"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Mare Tranquillitatis",
        title: "Interceptor Frigate",
        img: "/ships/mareTranquillitatis_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "NOMA M470",
        title: "Heavy Landing Ship",
        img: "/ships/nomaM470_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Siege Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "NOMA M470",
        title: "Support Frigate",
        img: "/ships/nomaM470_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Support Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "NOMA M470",
        title: "Anti-Aircraft Frigate",
        img: "/ships/nomaM470_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "Reliat",
        title: "Rapid Torpedo Frigate",
        img: "/ships/reliat_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Reliat",
        title: "Tactical Torpedo Frigate",
        img: "/ships/reliat_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Torpedo Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Reliat",
        title: "Stealth Frigate",
        img: "/ships/reliat_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Stealth Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 4,
        maxInFleet: 10
    }, {
        name: "Ruby",
        title: "Heavy Railgun Frigate",
        img: "/ships/ruby_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Railgun Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Middle",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "Ruby",
        title: "Experimental Ion Cannon Frigate",
        img: "/ships/ruby_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Ion Cannon Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Middle",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Ruby",
        title: "Defensive Frigate",
        img: "/ships/ruby_c.png",
        type: "Frigate",
        variant: "C",
        variant_name: "Defensive Type",
        manufacturer: "NOMA Shipping",
        direction: ["Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Front",
        cp: 5,
        maxInFleet: 10
    }, {
        name: "XenoStinger",
        title: "Tactical Frigate",
        img: "/ships/xenostinger_a.png",
        type: "Frigate",
        variant: "A",
        variant_name: "Special Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower"],
        scope: "Empty",
        weight: 5,
        row: "Back",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "XenoStinger",
        title: "Defensive Frigate",
        img: "/ships/xenostinger_b.png",
        type: "Frigate",
        variant: "B",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 5,
        row: "Back",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "AC721",
        title: "Heavy Logistics Destroyer",
        img: "/ships/ac721_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Generic Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 8,
        maxInFleet: 15
    }, {
        name: "AC721",
        title: "Heavy Missile Destroyer",
        img: "/ships/ac721_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Missile Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 8,
        maxInFleet: 15
    }, {
        name: "AC721",
        title: "Heavy Dual-Purpose Assault Ship",
        img: "/ships/ac721_d.png",
        type: "Destroyer",
        variant: "D",
        variant_name: "Aircraft Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 12,
        maxInFleet: 15,
        corvettes_held: 2
    }, {
        name: "Aldabra",
        title: "Heavy Cannon Destroyer",
        img: "/ships/aldabra_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Generic Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Aldabra",
        title: "Heavy Assault Destroyer",
        img: "/ships/aldabra_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Armored Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Ceres",
        title: "Aircraft Destroyer",
        img: "/ships/ceres_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Aircraft Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 8,
        maxInFleet: 10,
        medium_fighters_held: 2
    }, {
        name: "Ceres",
        title: "Support Destroyer",
        img: "/ships/ceres_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Support Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Ceres",
        title: "Tactical Destroyer",
        img: "/ships/ceres_c.png",
        type: "Destroyer",
        variant: "C",
        variant_name: "Tactical Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Eris I",
        title: "Maneuver Assault Destroyer",
        img: "/ships/eris_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Cannon Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 7,
        maxInFleet: 10
    }, {
        name: "Eris I",
        title: "Heavy Cannon Destroyer",
        img: "/ships/eris_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Heavy Cannon Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 9,
        maxInFleet: 10
    }, {
        name: "Eris I",
        title: "Armored Destroyer",
        img: "/ships/eris_c.png",
        type: "Destroyer",
        variant: "C",
        variant_name: "Armored Type",
        manufacturer: "Jupiter Industry",
        direction: ["Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Front",
        cp: 7,
        maxInFleet: 10
    }, {
        name: "Guardian",
        title: "Support Destroyer",
        img: "/ships/guardian_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Support Type",
        manufacturer: "Antonios",
        direction: ["Empty"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Middle",
        cp: 9,
        maxInFleet: 10
    }, {
        name: "Guardian",
        title: "Dual-Purpose Assault Ship",
        img: "/ships/guardian_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Dual-Purpose Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Back",
        cp: 14,
        maxInFleet: 10,
        corvettes_held: 2
    }, {
        name: "Guardian",
        title: "Experimental Pulse Assault Ship",
        img: "/ships/guardian_c.png",
        type: "Destroyer",
        variant: "C",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 9,
        maxInFleet: 10
    }, {
        name: "Quaoar",
        title: "Railgun Destroyer",
        img: "/ships/quaoar_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Railgun Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "Quaoar",
        title: "Torpedo Destroyer",
        img: "/ships/quaoar_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Torpedo Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "Taurus",
        title: "Pulse Cannon Destroyer",
        img: "/ships/taurus_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Offensive Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 11,
        maxInFleet: 10
    }, {
        name: "Taurus",
        title: "Assault Destroyer",
        img: "/ships/taurus_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Assault Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 11,
        maxInFleet: 10
    }, {
        name: "Taurus",
        title: "Defensive Destroyer",
        img: "/ships/taurus_c.png",
        type: "Destroyer",
        variant: "C",
        variant_name: "Defensive Type",
        manufacturer: "NOMA Shipping",
        direction: ["Sustained Combat", "Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 8,
        maxInFleet: 10
    }, {
        name: "Tundra",
        title: "Tactical Destroyer",
        img: "/ships/tundra_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Support Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 9,
        maxInFleet: 10
    }, {
        name: "Tundra",
        title: "Aircraft Destroyer",
        img: "/ships/tundra_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Aircraft Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 9,
        maxInFleet: 10,
        medium_fighters_held: 2
    }, {
        name: "Winged Hussar",
        title: "Light Missile Destroyer",
        img: "/ships/wingedHussar_a.png",
        type: "Destroyer",
        variant: "A",
        variant_name: "Anti-Ship Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Middle",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "Winged Hussar",
        title: "Integrated Missile Destroyer",
        img: "/ships/wingedHussar_b.png",
        type: "Destroyer",
        variant: "B",
        variant_name: "Integrated Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "Winged Hussar",
        title: "Area-Denial Anti-Aircraft Destroyer",
        img: "/ships/wingedHussar_c.png",
        type: "Destroyer",
        variant: "C",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Antonios",
        direction: ["Sustained Combat", "Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 6,
        maxInFleet: 10
    }, {
        name: "CAS066",
        title: "Generic Cruiser",
        img: "/ships/cas066_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Integrated Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Front",
        cp: 18,
        maxInFleet: 12
    }, {
        name: "CAS066",
        title: "Artillery Cruiser",
        img: "/ships/cas066_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Artillery Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 18,
        maxInFleet: 12
    }, {
        name: "CAS066",
        title: "Aircraft Cruiser",
        img: "/ships/cas066_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Aircraft Type",
        manufacturer: "Dawn Accord",
        direction: ["Empty"],
        scope: "Empty",
        weight: 10,
        row: "Middle",
        cp: 18,
        maxInFleet: 12,
        corvettes_held: 2
    }, {
        name: "CAS066",
        title: "Auxiliary Cruiser",
        img: "/ships/cas066_d.png",
        type: "Cruiser",
        variant: "D",
        variant_name: "Support Type",
        manufacturer: "Dawn Accord",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Middle",
        cp: 18,
        maxInFleet: 12
    }, {
        name: "Callisto",
        title: "Cluster Torpedo Raid Ship",
        img: "/ships/callisto_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Torpedo Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 2,
        row: "Back",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Callisto",
        title: "Heavy Torpedo Raid Ship",
        img: "/ships/callisto_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Anti-Ship Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 2,
        row: "Back",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Callisto",
        title: "Heavy UAV Cruiser",
        img: "/ships/callisto_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Support Type",
        manufacturer: "Jupiter Industry",
        direction: ["Empty"],
        scope: "Projectile Weapon",
        weight: 2,
        row: "Back",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Chimera",
        title: "Heavy Cruiser",
        img: "/ships/chimera_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Ballistic Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Chimera",
        title: "Cannon Cruiser",
        img: "/ships/chimera_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Heavy Cannon Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Chimera",
        title: "Defensive Cruiser",
        img: "/ships/chimera_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Defensive Type",
        manufacturer: "NOMA Shipping",
        direction: ["Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Middle",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Conamara Chaos",
        title: "Railgun Cruiser",
        img: "/ships/conamaraChaos_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Railgun Type",
        manufacturer: "Jupiter Industry",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Back",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Conamara Chaos",
        title: "High-Speed Plasma Cruiser",
        img: "/ships/conamaraChaos_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Plasma Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Back",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Io",
        title: "Assault Ion Cannon Cruiser",
        img: "/ships/io_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Ion Cannon Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Io",
        title: "High-Speed Ion Cannon Cruiser",
        img: "/ships/io_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Anti-Ship Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Io",
        title: "Siege Ion Cannon Cruiser",
        img: "/ships/io_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Siege Type",
        manufacturer: "Jupiter Industry",
        direction: ["Outstanding Firepower", "Sustained Combat"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Front",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Jaeger",
        title: "Heavy Aircraft Cruiser",
        img: "/ships/jaeger_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Support Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 5,
        row: "Back",
        cp: 20,
        maxInFleet: 8,
        corvettes_held: 4
    }, {
        name: "Jaeger",
        title: "Heavy Cannon Cruiser",
        img: "/ships/jaeger_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Anti-Ship Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Direct-Fire Weapon",
        weight: 5,
        row: "Back",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "KCCPV2.0",
        title: "Light Attack Cruiser",
        img: "/ships/kccpv_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Integrated Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower", "Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 10,
        row: "Back",
        cp: 16,
        maxInFleet: 12
    }, {
        name: "KCCPV2.0",
        title: "Light Pulse Attack Cruiser",
        img: "/ships/kccpv_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Pulse Cannon Type",
        manufacturer: "Dawn Accord",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 16,
        maxInFleet: 12
    }, {
        name: "KCCPV2.0",
        title: "Light Railgun Cruiser",
        img: "/ships/kccpv_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Railgun Type",
        manufacturer: "Dawn Accord",
        direction: ["Empty"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Middle",
        cp: 16,
        maxInFleet: 12
    }, {
        name: "KCCPV2.0",
        title: "Light Aircraft Cruiser",
        img: "/ships/kccpv_d.png",
        type: "Cruiser",
        variant: "D",
        variant_name: "Aircraft Type",
        manufacturer: "Dawn Accord",
        direction: ["Empty"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 16,
        maxInFleet: 12,
        large_fighters_held: 2
    }, {
        name: "Light Cone",
        title: "Multi-Role Missile Cruiser Cruiser",
        img: "/ships/lightCone_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Generic Type",
        manufacturer: "NOMA Shipping",
        direction: ["Empty"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Middle",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Light Cone",
        title: "Area-Denial Anti-Aircraft Cruiser",
        img: "/ships/lightCone_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "NOMA Shipping",
        direction: ["Strategy & Support"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Middle",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Light Cone",
        title: "Offensive Missile Cruiser",
        img: "/ships/lightCone_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Assault Type",
        manufacturer: "NOMA Shipping",
        direction: ["Outstanding Firepower"],
        scope: "Projectile Weapon",
        weight: 5,
        row: "Middle",
        cp: 20,
        maxInFleet: 8
    }, {
        name: "Ranger",
        title: "Comprehensive Warfare Cruiser",
        img: "/ships/ranger_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Integrated Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 10,
        row: "Back",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Ranger",
        title: "Heavy Ion Cannon Cruiser",
        img: "/ships/ranger_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Ion Cannon Type",
        manufacturer: "Antonios",
        direction: ["Outstanding Firepower"],
        scope: "Direct-Fire Weapon",
        weight: 2,
        row: "Back",
        cp: 18,
        maxInFleet: 8
    }, {
        name: "Predator",
        title: "Aircraft Cruiser",
        img: "/ships/predator_a.png",
        type: "Cruiser",
        variant: "A",
        variant_name: "Generic Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 18,
        maxInFleet: 8,
        large_fighters_held: 4
    }, {
        name: "Predator",
        title: "Tactical Aircraft Cruiser",
        img: "/ships/predator_b.png",
        type: "Cruiser",
        variant: "B",
        variant_name: "Tactical Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 18,
        maxInFleet: 8,
        large_fighters_held: 4
    }, {
        name: "Predator",
        title: "Anti-Aircraft Cruiser",
        img: "/ships/predator_c.png",
        type: "Cruiser",
        variant: "C",
        variant_name: "Anti-Aircraft Type",
        manufacturer: "Antonios",
        direction: ["Strategy & Support"],
        scope: "Empty",
        weight: 10,
        row: "Back",
        cp: 18,
        maxInFleet: 8,
        large_fighters_held: 4
    }, {
            name: "Constantine the Great",
            title: "Multi-Role Battlecruiser",
            img: "/ships/constantineTheGreat.png",
            type: "Battlecruiser",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Antonios",
            direction: ["Outstanding Firepower"],
            scope: "Direct-Fire Weapon",
            weight: 2,
            row: "Middle",
            cp: 35,
            maxInFleet: 6,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `"Gamma Storm" Ion Attack System`,
                stats: {
                    type: "weapon",
                    antiship: 11917,
                    antiair: 0,
                    siege: 2502,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CI-2x700T "Helium Flash"`,
                    name: `Dual-Gun Super-Heavy Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 400,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `"Gamma Storm" Projectile Attack System`,
                stats: {
                    type: "weapon",
                    antiship: 19885,
                    antiair: 0,
                    siege: 2784,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CI-2x600T "Gamma Storm"`,
                    name: `Energy Torpedo Launching System`,
                    damageType: "Energy",
                    target: "Large Ship",
                    alpha: 1740,
                    lockonEfficiency: 10,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `"Gamma Storm" Projectile Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 24917,
                    antiair: 0,
                    siege: 2016,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CM-8x608A "Gamma Storm"`,
                    name: `Generic Missile Launching System`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 850,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `"Gamma Storm" Projectile Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 40666,
                    antiair: 1643,
                    siege: 3138,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CM-8x608 "Gamma Storm"`,
                    name: `Pulse Energy Missile Launching System`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 945,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: "CM-12x550",
                    name: `Dodeca-Fire Anti-Ship Missile System`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 437,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Generic Battery System`,
                stats: {
                    type: "weapon",
                    antiship: 10628,
                    antiair: 270,
                    siege: 1461,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `CG-1350`,
                    name: `350mm Dual-Cannon Anti-Ship Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 250,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `CG-1160B`,
                    name: `Generic Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 50,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B2",
                name: `Pulse Anti-Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: 5175,
                    antiair: 2040,
                    siege: 0,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `CP-3x220`,
                    name: `Triple-Fire Anti-Aircraft Pulse`,
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 4,
                    title: `CP-120`,
                    name: `Anti-Missile Pulse Array`,
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Interception Capability", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B3",
                name: `Anti-Aircraft Missile System`,
                stats: {
                    type: "weapon",
                    antiship: 2400,
                    antiair: 1548,
                    siege: 0,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK2-CM-4x200B "Storm"`,
                    name: `Missile Launcher Nest`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 35,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Cycle", "Anti-Aircraft Support"]
                }, {
                    type: "weapon",
                    count: 2,
                    title: `CM-2x188B`,
                    name: `Missile Launcher Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 25,
                    attributes: ["Interception Capability", "Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C1",
                name: `Additional Energy System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 15750
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `RIT-650`,
                    name: `Energy Compression Device`,
                    attributes: ["Increase Energy Weapon Damage"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C2",
                name: `Aircraft Module`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 18000
                },
                subsystems: [{
                    type: "hanger",
                    count: 2,
                    title: `CBF-200`,
                    name: `Medium Hanger`,
                    hanger: "Medium Fighter",
                    capacity: 1,
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: `XAC-2000`,
                    name: `Aviation Bridge`,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C3",
                name: `Recon UAV System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 18000
                },
                subsystems: [{
                    type: "hanger",
                    count: 3,
                    title: "CIT-1",
                    name: `Fire-Control Spotter UAV Hanger`,
                    hanger: "Spotter UAV",
                    capacity: 3,
                    attributes: ["Ship Calibration Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D1",
                name: `Short-Range Anti-Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 1011,
                    siege: 0,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `CM-2x45B`,
                    name: `Short-Range Anti-Aircraft Missile`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Critical Strike", "Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "D2",
                name: `Targeted Protection System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hp: 18000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: "ASM-220",
                    name: `Critical-System Reinforced Armor`,
                    attributes: ["Reduce System Crit Damage Taken"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "D3",
                name: `Damage Control System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hpRecovery: 4800,
                    hp: 15750
                },
                subsystems: [{
                    type: "misc",
                    count: 4,
                    title: "AST-50",
                    name: `Damage Monitoring System`,
                    attributes: null
                }]
            }]
        }, {
            name: "Eternal Storm",
            title: "Attack Battlecruiser",
            img: "/ships/eternalStorm.png",
            type: "Battlecruiser",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Jupiter Industry",
            direction: ["Outstanding Firepower"],
            scope: "Direct-Fire Weapon",
            weight: 2,
            row: "Middle",
            cp: 32,
            maxInFleet: 6,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `"Viggen" Ion Generation System`,
                stats: {
                    type: "weapon",
                    antiship: 16000,
                    antiair: 0,
                    siege: 3360,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `AI-900A "Viggen"`,
                    name: `Ion Cannon`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1200,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `Experimental Plasma Caster`,
                stats: {
                    type: "weapon",
                    antiship: 15692,
                    antiair: 1883, 
                    siege: 2824,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `AIM-850T`,
                    name: `Plasma Caster`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: 10,
                    alpha: 850,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `"Eternal Polaris" Mk II Projectile Launching System`,
                stats: {
                    type: "weapon",
                    antiship: 12240,
                    antiair: 396,
                    siege: 1539,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK3-AT-800A "Supernova-White"`,
                    name: `Anti-Ship Torpedo`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1600,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `MK2-AM-8x300B "Eternal Polaris K"`,
                    name: `Cluster Missile`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 55,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `"Eternal Polaris" Mk II Projectile Launching System`,
                stats: {
                    type: "weapon",
                    antiship: 11900,
                    antiair: 0,
                    siege: 10440,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK3-AT-750C "Supernova-White"`,
                    name: `Siege Torpedo Launcher Array`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1200,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A3",
                name: `"Eternal Polaris" Mk II Projectile Launching System TEST`,
                stats: {
                    type: "weapon",
                    antiship: 11345,
                    antiair: 593,
                    siege: 1440,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK4-AT-1-800AT "Supernova-White"`,
                    name: `Energy Torpedo`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1600,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `MK2-AM-16x150B "Eternal Polaris K"`,
                    name: `Anti-Aircraft Missile Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Generic Cannon Platform`,
                stats: {
                    type: "weapon",
                    antiship: 5850,
                    antiair: 126,
                    siege: 1113,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `AG-2580`,
                    name: `Dual-Cannon Heavy Battery`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 350,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `AG-1120B`,
                    name: `Rapid-Fire Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 35,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B2",
                name: `Generic Close-In Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 900,
                    antiair: 405,
                    siege: 60,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `AG-1105B`,
                    name: `Generic Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 25,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C1",
                name: `NT UAV Anti-Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 3888,
                    siege: 0,
                    hp: 20250
                },
                subsystems: [{
                    type: "hanger",
                    count: 3,
                    title: `NT-1`,
                    name: `Anti-Aircraft UAV Rack`,
                    hanger: "Area-Denial Anti-Aircraft UAV",
                    capacity: 3,
                    attributes: null,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 15,
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C2",
                name: `"Thunderstorm" UAV Shield System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hp: 20250
                },
                subsystems: [{
                    type: "hanger",
                    count: 2,
                    title: `SNT-1`,
                    name: `Shielded UAV Rack`,
                    hanger: "Shield UAV",
                    capacity: 2,
                    attributes: [`Ship Shielding Support`]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C3",
                name: `Energy Compensation Armor System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hp: 16200
                },
                subsystems: [{
                    type: "misc",
                    count: 2,
                    title: `RIR-220`,
                    name: `Experimental Energy Compensation Armor`,
                    attributes: ["Energy Damage Reduction", "Physical Damage Reduction", "Crit Damage Reduction"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D1",
                name: `Ion Turret System`,
                stats: {
                    type: "weapon",
                    antiship: 6857,
                    antiair: 0,
                    siege: 1028,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `AI-450A`,
                    name: `Experimental Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 800,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D2",
                name: `Pulse Turret System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 432,
                    siege: 0,
                    hp: 18000
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `AP-130B`,
                    name: `Rapid-Fire Near-Defense Pulse Cannon`,
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Interception Capability", "Anti-Aircraft Counterattack"]
                }]
            }]
        }, {
            name: "Spear of Uranus",
            title: "Heavy Battlecruiser",
            img: "/ships/spearOfUranus.png",
            type: "Battlecruiser",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "NOMA Shipping",
            direction: ["Outstanding Firepower", "Sustained Combat"],
            scope: "Direct-Fire Weapon",
            weight: 2,
            row: "Front",
            cp: 35,
            maxInFleet: 6,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `Bow Railgun System`,
                stats: {
                    type: "weapon",
                    antiship: 12950,
                    antiair: 0,
                    siege: 11310,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `BR-1950C "Ruby"`,
                    name: `Bow-Mounted Siege Railgun`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 2600,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `Ion Turret System`,
                stats: {
                    type: "weapon",
                    antiship: 12857,
                    antiair: 0,
                    siege: 1800,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `BI-850`,
                    name: `Dual-Fire Heavy Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 750,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `"Fortress" Battery System A`,
                stats: {
                    type: "weapon",
                    antiship: 13120,
                    antiair: 636,
                    siege: 3075,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `BG-1850`,
                    name: `Heavy Cannon`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 950,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 3,
                    title: `BG-2240`,
                    name: `Anti-Ship Cannon`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 100,
                    attributes: ["Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 4,
                    title: `BG-340B`,
                    name: `Anti-Aircraft Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 10,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `"Fortress" Battery System B`,
                stats: {
                    type: "weapon",
                    antiship: 15986,
                    antiair: 216,
                    siege: 2880,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `BG-1950`,
                    name: `Heavy Cannon`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1200, 
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `BG-340B`,
                    name: `Anti-Aircraft Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 10,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A3",
                name: `"Fortress" Battery System F`,
                stats: {
                    type: "weapon",
                    antiship: 17220,
                    antiair: 1026,
                    siege: 1800,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 6,
                    title: `BG-2350`,
                    name: `Anti-Ship Cannon`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 200,
                    attributes: ["Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 4,
                    title: `BG-340B`,
                    name: `Anti-Aircraft Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 10,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `"Minecart" Projectile Launching Array`,
                stats: {
                    type: "weapon",
                    antiship: 5940,
                    antiair: 680,
                    siege: 259,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `BM-12x250`,
                    name: `Generic Missile Launching Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 120,
                    attributes: ["Interception Capability", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: `Corvette Dock`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-2300`,
                    name: `Corvette Mounting Dock`,
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "B3",
                name: `Integrated Damage Control System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hpRecovery: 5454,
                    hp: 19800
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CRT-3`,
                    name: `Engineering UAV Maintenance Pod`,
                    hanger: "Repair UAV",
                    capacity: 2,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C1",
                name: `Distributed Weapon Control System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 18000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XI-1200`,
                    name: "Distributed Fire Control Radar",
                    attributes: ["Increase Hit Rate"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "C2",
                name: `Additional Armor System`,
                stats: {
                    type: "armor",
                    armor: 0,
                    extraHP: 32484,
                    energyShield: 0,
                    hp: 27000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `ASX-150`,
                    name: "Energized Nano Armor",
                    attributes: ["Additional HP Auto-Repair"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "C3",
                name: `Anti-Missile System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 410,
                    siege: 0,
                    hp: 19800
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `BG-625C`,
                    name: `Area Anti-Missile Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 10,
                    attributes: ["Interception Capability (Fleet)", "Anti-Aircraft Special Ammo", "Anti-Aircraft Support"]
                }]
            }]
        }, {
            name: "ST59",
            title: "Defensive Battlecruiser",
            img: "/ships/st59.png",
            type: "Battlecruiser",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Dawn Accord",
            direction: ["Sustained Combat", "Strategy & Support"],
            scope: "Direct-Fire Weapon",
            weight: 5,
            row: "Middle",
            cp: 28,
            maxInFleet: 6,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: "Assault Railgun System",
                stats: {
                    type: "weapon",
                    antiship: 10875,
                    antiair: 0,
                    siege: 3528,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `SR-2600`,
                    name: `Heavy Railgun`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 735,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `Bow Mounted Battery System`,
                stats: {
                    type: "weapon",
                    antiship: 11400,
                    antiair: 0,
                    siege: 960,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `SG-2400`,
                    name: `Dual-Cannon Rapid-Fire Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 200,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M3",
                name: `Assault Torpedo System`,
                stats: {
                    type: "weapon",
                    antiship: 11200,
                    antiair: 0,
                    siege: 2266,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `ST-2600`,
                    name: `Heavy Torpedo Launcher`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 850,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `Large Cannon Platform`,
                stats: {
                    type: "weapon",
                    antiship: 7875,
                    antiair: 216,
                    siege: 1206,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `MK4-SG-2580 "Thunderbolt"`,
                    name: `Dual-Cannon Heavy Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 280,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `SG-1120`,
                    name: `Generic Cannon`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Railgun Turret Array`,
                stats: {
                    type: "weapon",
                    antiship: 9900,
                    antiair: 0,
                    siege: 1923,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `SR-1425`,
                    name: `Railgun Turret`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 450,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A3",
                name: `Pulse Turret Array`,
                stats: {
                    type: "weapon",
                    antiship: 7500,
                    antiair: 787,
                    siege: 1200,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `SP-430`,
                    name: `Pulse Turret`,
                    damageType: "Energy",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 250,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Integrated Projectile Weapon Platform`,
                stats: {
                    type: "weapon",
                    antiship: 8188,
                    antiair: 0,
                    siege: 1185,
                    hp: 15750
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `K-ST-12-255A`,
                    name: `3x4 Cluster Torpedo Launching System`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 300,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: `Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 15300
                },
                subsystems: [{
                    type: "hanger",
                    count: 2,
                    title: `CBF-305`,
                    name: "Medium Hanger",
                    hanger: "Medium Fighter",
                    capacity: 2,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B3",
                name: `Area Fire-Control System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 15300
                },
                subsystems: [{
                    type: "hanger",
                    count: 2,
                    title: `CIT-1`,
                    name: `Fire-Control Spotter UAV Hanger`,
                    hanger: "Spotter UAV",
                    capacity: 3,
                    attributes: ["Ship Calibration Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "C1",
                name: `Additional Armor System`,
                stats: {
                    type: "armor",
                    armor: 0,
                    extraHP: 27302,
                    energyShield: 0,
                    hp: 15750
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `ASX-100`,
                    name: "Additional Armor",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "C2",
                name: `EM Armor System`,
                stats: {
                    type: "armor",
                    armor: 0,
                    extraHP: 0,
                    energyShield: 20,
                    hp: 15750
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `AEX-120`,
                    name: "EM Armor",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "C3",
                name: "Heavy Defensive Armor System",
                stats: {
                    type: "armor",
                    armor: 250,
                    extraHP: 0,
                    energyShield: 0,
                    hp: 15750
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `ASX-130`,
                    name: "Additional Armor",
                    attributes: ["Reduce Evasion", "Reduce Hit Rate"]
                }]
            }]
        }, {
            name: "Thunderbolt Star",
            title: "Multi-Role Arsenal Ship",
            img: "/ships/thunderboltStar.png",
            type: "Battlecruiser",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Empty",
            direction: ["Outstanding Firepower", "Strategy & Support"],
            scope: "Direct-Fire Weapon",
            weight: 2,
            row: "Middle",
            cp: 35,
            maxInFleet: 6,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `"Thunderbolt" Bow-Mounted Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 40628,
                    antiair: 0,
                    siege: 8562,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `HR-1850`,
                    name: `Long-Rail Railgun`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 2775,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `"Thunderbolt" Bow-Mounted Projectile Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 27168,
                    antiair: 0,
                    siege: 5705,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `HT-1-850`,
                    name: "High Energy Torpedo Launcher",
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 2070,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M3",
                name: `"Thunderbolt Star" Bow-Mounted High-Energy Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 33120,
                    antiair: 0,
                    siege: 3312,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `HT-1250T`,
                    name: `Experimental Super High-Energy Ion Cannon`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 2760,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `Rapid-Fire Anti-Ship Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 12636,
                    antiair: 1266,
                    siege: 1407,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `HG-1220`,
                    name: "Rapid-Fire Artillery Array",
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 97,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Medium Anti-Ship Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 14184,
                    antiair: 0,
                    siege: 1490,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `HG-2280`,
                    name: "Dual-Cannon Stationary Heavy Battery",
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 207,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: "Active Anti-Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: 3375,
                    antiair: 465,
                    siege: 0,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `HM-4x60B`,
                    name: "Mid-Range Anti-Aircraft Missile Array",
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 28,
                    attributes: ["Anti-Aircraft Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B2",
                name: "Range Interception System",
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 345,
                    siege: 0,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `HP-100B`,
                    name: "Anti-Aircraft Pulse Array",
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 28,
                    attributes: ["Interception Capability", "Anti-Aircraft Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C1",
                name: "Weapon Coordination Center",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23400
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `HNI-260`,
                    name: "Weapon Activation Device",
                    attributes: ["Oscillatory Excitation"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C2",
                name: "Fire-Control Calibration System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23400
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `HNA-240`,
                    name: "Real-Time Target Callibration Module",
                    attributes: ["Collaborative Calibration"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D1",
                name: "Accurate Projectile Weapon System",
                stats: {
                    type: "weapon",
                    antiship: 9140,
                    antiair: 1164,
                    siege: 970,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `HM-1x220A`,
                    name: "Mid-Range Anti-Ship Missile",
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 172,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D2",
                name: "Large Projectile Weapon System",
                stats: {
                    type: "weapon",
                    antiship: 9948,
                    antiair: 0,
                    siege: 2112,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `HT-1-450`,
                    name: "Large Torpedo Launcher",
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 631,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "E1",
                name: "Multi-Target Weapon System",
                stats: {
                    type: "weapon",
                    antiship: 6990,
                    antiair: 910,
                    siege: 759,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `HG-1220A`,
                    name: "Multi-Target Anti-Ship Battery",
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 126,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "E2",
                name: "Multi-Target Anti-Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 633,
                    siege: 0,
                    hp: 23400
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `HG-1120B`,
                    name: "Multi-Target Anti-Aircraft Turret",
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }]
        }, {
            name: "Ediacaran",
            title: "Heavy Firepower Auxiliary Ship",
            img: "/ships/ediacaran.png",
            type: "Auxiliary Ship",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "NOMA Shipping",
            direction: ["Outstanding Firepower", "Strategy & Support"],
            scope: "Empty",
            weight: 2,
            row: "Middle",
            cp: 40,
            maxInFleet: 2,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: "Fortress Bow-Mounted Heavy Cannon System",
                stats: {
                    type: "weapon",
                    antiship: 11057,
                    antiair: 394,
                    siege: 1756,
                    hp: 18900
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `"Fortress" MK4-BG-2560`,
                    name: `Dual-Cannon Heavy Bow Battery`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 650,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `BG-1260`,
                    name: `Anti-Ship Turret`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 105,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `Fortress Assault Railgun System`,
                stats: {
                    type: "weapon",
                    antiship: 12000,
                    antiair: 319,
                    siege: 3150,
                    hp: 18900
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `"Fortress" MK4-BG-1850A`,
                    name: `Bow-Mounted Assault Heavy Railgun`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 2250,
                    attributes: ["Crit"]
                }, {
                    type: "weapon",
                    count: 2,
                    title: `BM-2x280B`,
                    name: `Anti-Aircraft Missile Launcher Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 25,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A1",
                name: "Frigates Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 18800
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `MF-2500`,
                    name: "Frigates Independent Production Facility",
                    attributes: ["Self-holding Capability"]
                }, {
                    type: "misc",
                    count: 1,
                    title: `BMP-60`,
                    name: "Production Line Modification Module",
                    attributes: ["Increase Production Speed"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A2",
                name: "Corvette Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 19800
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `MC-2500`,
                    name: "Corvette Independent Production Facility",
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: `BMP-60`,
                    name: "Production Line Modification Module",
                    attributes: ["Increase Production Speed"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A3",
                name: "Destroyer Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 18800
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `MD-2500`,
                    name: "Destroyer Independent Production Facility",
                    attributes: ["Self-holding Capability"]
                }, {
                    type: "misc",
                    count: 1,
                    title: `BMP-60`,
                    name: "Production Line Modification Module",
                    attributes: ["Increase Production Speed"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B1",
                name: `"Tundra" Interceptor UAV System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 4608,
                    siege: 0,
                    hp: 19350
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CAT/R-6`,
                    name: `Area-Denial Anti-Aircraft UAV Pod`,
                    hanger: "Area-Denial Anti-Aircraft UAV",
                    capacity: 4,
                    attributes: ["Anti-Aircraft Counterattack"],
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 15
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: `"Hummingbird" Firepower Recon UAV System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 19350
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFT-6`,
                    name: "Firepower Recon UAV Pod",
                    hanger: "Recon UAV",
                    capacity: 4,
                    attributes: ["Firepower Recon Support"]
                }]
            }, {
                type: "unknown",
                img: "/weapons/icons/unknown.png",
                system: "B3",
                unknown: true
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C1",
                name: `Aircraft Loading System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 19350
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-200`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 2,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C2",
                name: `Corvette Dock`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 19350
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-2000`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "D1",
                name: `Heavy Additional Armor System`,
                stats: {
                    type: "armor",
                    armor: 80,
                    extraHP: 30069,
                    energyShield: 0,
                    hp: 18000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `ASX-90`,
                    name: "Heavy Additional Armor",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "D2",
                name: `Nano Automated Maintenance System`,
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hpRecovery: 5169,
                    hp: 18000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `BST-300`,
                    name: `Nano Repair System`,
                    attributes: null
                }]
            }]
        }, {
            name: "FSV830",
            title: "Fast Tactical Auxiliary Ship",
            img: "/ships/fsv830.png",
            type: "Auxiliary Ship",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Dawn Accord",
            direction: ["Sustained Combat", "Strategy & Support"],
            scope: "Empty",
            weight: 5,
            row: "Back",
            cp: 40,
            maxInFleet: 2,
            modules: [{
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A1",
                name: "Frigates Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 21500
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XE-1250AM`,
                    name: "Frigates Independent Production Facility",
                    attributes: ["Self-holding Capability"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A2",
                name: "Corvette Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 21500
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XE-1250AG`,
                    name: "Corvette Independent Build Facility",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "A3",
                name: "Fighter Production System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 21500
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `MFG-1500`,
                    name: "Fighter Independent Production Facility",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B1",
                name: "Warning and Control System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 22000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XE-1250AW`,
                    name: "Situational Awareness System",
                    attributes: ["Back-Row Torpedo Hit Evasion", "Back-Row Missile Hit Evasion"]
                }, {
                    type: "misc",
                    count: 1,
                    title: `XC-4500`,
                    name: "Bridge",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B2",
                name: "Coordinate Command System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 22000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XCE-1250AI`,
                    name: "Assisted Lock-On Radar",
                    attributes: [`Increase Back-Row Missile Hit Rate`, `Increase Back-Row Torpedo Hit Rate`]
                }, {
                    type: "misc",
                    count: 1,
                    title: `XC-4500`,
                    name: "Bridge",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B3",
                name: "Camoflage System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 22000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XS-1250AC`,
                    name: "Field Signal Disguise Module",
                    attributes: [`Ship Disguise`]
                }, {
                    type: "misc",
                    count: 1,
                    title: `XC-4500`,
                    name: "Bridge",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "C1",
                name: "Engineering Maintenance System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 22000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `BSR-200`,
                    name: "Quick Repair Device",
                    attributes: ["Increase Repair Speed"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "C2",
                name: "Strategic Resource Storage System",
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    storage: 60000,
                    hp: 22000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `W-500`,
                    name: "Loading Platform",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "D1",
                name: "Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 21500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-255`,
                    name: "Medium Hanger",
                    hanger: "Medium Fighter",
                    capacity: 2,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "D2",
                name: "Repair UAV System",
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hpRecovery: 5454,
                    hp: 21500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CRT-3`,
                    name: "Engineering UAV Maintenance Pod",
                    hanger: "Repair UAV",
                    capacity: 2,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "E1",
                name: "Area-Defense System",
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 882,
                    siege: 0,
                    hp: 22000
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `SM-4x40B`,
                    name: "Anti-Arcraft Missile Silo",
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 35,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "E2",
                name: "Corvette Dock",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 21500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-2000`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }]
        }, {
            name: "CV3000",
            title: "High-Speed Carrier",
            img: "/ships/cv3000.png",
            type: "Carrier",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Dawn Accord",
            direction: ["Strategy & Support"],
            scope: "Empty",
            weight: 2,
            row: "Back",
            cp: 40,
            maxInFleet: 5,
            modules: [{
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M1",
                name: "Integrated Aircraft Hanger",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-605`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 5,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 1,
                    title: `CBC-2100`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M2",
                name: "Integrated Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-605`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 5,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 1,
                    title: `CIT-5`,
                    name: "Field Support UAV Hanger",
                    hanger: "Tactical UAV",
                    capacity: 5,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 27,
                    attributes: ["Attack Against Systems"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M3",
                name: "Large Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-605`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 5,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 1,
                    title: `CFB-400`,
                    name: "Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `"Dragoon" Battery System`,
                stats: {
                    type: "weapon",
                    antiship: 6500,
                    antiair: 297,
                    siege: 619,
                    hp: 25200
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `MK4-C/SG-3480A "Dragoon"`,
                    name: `Triple-Cannon Heavy Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 200,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `C/SG-190B "Dragoon"`,
                    name: `Generic Rapid-Fire Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 55,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Anti-Aircraft Missile Platform`,
                stats: {
                    type: "weapon",
                    antiship: 2868,
                    antiair: 372,
                    siege: 0,
                    hp: 25200
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `Bm-12x180T`,
                    name: `Missile Defense System`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 52,
                    attributes: ["Interception Capability", "Anti-Aircraft Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Missile Defense System`,
                stats: {
                    type: "weapon",
                    antiship: 1200,
                    antiair: 210,
                    siege: 70,
                    hp: 25200
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `MK3-SM-6x400B/C "Starfire"`,
                    name: `Missile Launcher Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 70,
                    attributes: ["Interception Capability", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: `Corvette Loading System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-2100`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B3",
                name: `Info UAV Support Platform`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 23850
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CITA-2`,
                    name: "Field Support UAV Pod",
                    hanger: "Info UAV",
                    capacity: 3,
                    attributes: ["Ship Calibration Support"]
                }]
            }]
        }, {
            name: "Eternal Heavens",
            title: "UAV Carrier",
            img: "/ships/eternalHeavens.png",
            type: "Carrier",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Jupiter Industry",
            direction: ["Outstanding Firepower"],
            scope: "Empty",
            weight: 2,
            row: "Back",
            cp: 40,
            maxInFleet: 5,
            modules: [{
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M1",
                name: "Collaborative Hanger I",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-280`,
                    name: "Medium Fighter Hanger",
                    hanger: "Medium Fighter",
                    capacity: 3,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 3,
                    title: `"Decomposer"`,
                    name: "Cooperative Offensive UAV Platform",
                    hanger: "Cooperative Offensive UAV",
                    capacity: 3,
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 140,
                    attributes: ["UAV Cooperation", "Anti-Aircraft Lightweight Ammo"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M2",
                name: "Collaborative Hanger II",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-280`,
                    name: "Medium Fighter Hanger",
                    hanger: "Medium Fighter",
                    capacity: 3,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 3,
                    title: `"Laminar"`,
                    name: "Cooperative Offensive UAV Platform",
                    hanger: "Cooperative Offensive UAV",
                    capacity: 3,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 40,
                    attributes: ["UAV Cooperation", "Anti-Aircraft Special Ammo"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M3",
                name: "Collaborative Hanger III",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-280`,
                    name: "Medium Fighter Hanger",
                    hanger: "Medium Fighter",
                    capacity: 3,
                    attributes: null
                }, {
                    type: "hanger",
                    count: 3,
                    title: `"Vortex"`,
                    name: "Cooperative Offensive UAV Platform",
                    hanger: "Cooperative Offensive UAV",
                    capacity: 3,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 20,
                    attributes: ["UAV Aerial Cover Support", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `Integrated Battery System`,
                stats: {
                    type: "weapon",
                    antiship: 10250,
                    antiair: 472,
                    siege: 3815,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `AG-3400A`,
                    name: `Triple-Fire Heavy Turret`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 320,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 3,
                    title: `AG-2208A`,
                    name: `Dual-Cannon Anti-Ship Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 100,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Experimental Ion Cannon System`,
                stats: {
                    type: "weapon",
                    antiship: 8857,
                    antiair: 252,
                    siege: 828,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `AI-450T`,
                    name: `Experimental Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 400,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `AG-290`,
                    name: `Generic Dual-Cannon Battery`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 35,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A3",
                name: `Pulse Anti-Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: 3600,
                    antiair: 1370,
                    siege: 0,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 3,
                    title: `AP-2x180`,
                    name: "Dual-Fire Pulse Cannon",
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 40,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 3,
                    title: `AP-140B`,
                    name: "Rapid-Fire Anti-Aircraft Pulse Cannon",
                    damageType: "Energy",
                    target: "Aircraft",
                    lockonEfficiency: 45,
                    alpha: 20,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Anti-Ship Projectile Launching System`,
                stats: {
                    type: "weapon",
                    antiship: 5640,
                    antiair: 0,
                    siege: 882,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `AM-2x450`,
                    name: `Dual-Fire Anti-Ship Missile Launcher`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 350,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 4,
                    title: `AM-250`,
                    name: `Light Missile Launcher`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 140,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B2",
                name: `Anti-Missile Defense System`,
                stats: {
                    type: "weapon",
                    antiship: 1104,
                    antiair: 257,
                    siege: 225,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `AM-3x250`,
                    name: `Triple-Fire Anti-Ship Missile Launcher`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 145,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `AM-12x100C`,
                    name: `Interception Missile Launcher Array`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 35,
                    attributes: ["Interception Capability", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B3",
                name: `Anti-Aircraft Missile Platform`,
                stats: {
                    type: "weapon",
                    antiship: 1527,
                    antiair: 811,
                    siege: 0,
                    hp: 26000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `AM-4x180`,
                    name: `Quadruple-Fire Multi-Role Missile Launcher`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 60,
                    alpha: 45,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 2,
                    title: `AM-2x100B`,
                    name: `Dual-Fire Light Anti-Aircraft Missile Launcher`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 75,
                    alpha: 80,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C1",
                name: "Auxiliary Aircraft Hanger",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-580`,
                    name: "Large Fighter Hangar",
                    hanger: "Large Fighter",
                    capacity: 4,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C2",
                name: "Auxiliary Corvette Dockyard",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-3000`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 4,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/storage.png",
                system: "C3",
                name: "Support Repair UAV System",
                stats: {
                    type: "armor",
                    armor: null,
                    extraHP: null,
                    energyShield: null,
                    hpRecovery: 8181,
                    hp: 24500
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CRT-6`,
                    name: "Engineering UAV Maintenance Platform",
                    hanger: "Repair UAV",
                    capacity: 3,
                    attributes: null
                }]
            }]
        }, {
            name: "Marshal Crux",
            title: "Carrier",
            img: "/ships/marshalCrux.png",
            type: "Carrier",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "Antonios",
            direction: ["Outstanding Firepower", "Strategy & Support"],
            scope: "Direct-Fire Weapon",
            weight: 2,
            row: "Back",
            cp: 40,
            maxInFleet: 5,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `"White Flashing" Integrated Armory`,
                stats: {
                    type: "weapon",
                    antiship: 16080,
                    antiair: 691,
                    siege: 1908,
                    hp: 28800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CI-600T`,
                    name: `Heavy Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 450,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `CG-2220`,
                    name: `Generic Dual-Cannon Battery`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 120,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `"White Flashing" Integrated Armory`,
                stats: {
                    type: "weapon",
                    antiship: 13628,
                    antiair: 162,
                    siege: 2275,
                    hp: 28800
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `CR-1650`,
                    name: `Railgun`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1000,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 6,
                    title: `CG-1105B`,
                    name: `Generic Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 20,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "A1",
                name: `Integrated Aircraft Hanger`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 25200
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-700`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 6,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "A2",
                name: `Corvette Dock`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 25200
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-3200`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 6,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B1",
                name: `Additional Energy System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 27000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `RET-200`,
                    name: "Energy Amplification Device",
                    attributes: ["Increase Aircraft Damage"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B2",
                name: `Fire-Control Auxiliary Calibration System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 27000
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `XGC-200`,
                    name: "Precision Guidance System",
                    attributes: ["Increase Aircraft Hit Rate"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C1",
                name: `Additional Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 25200
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBF-200`,
                    name: "Medium Hanger",
                    hanger: "Medium Fighter",
                    capacity: 4,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "C2",
                name: `Missile Defense System`,
                stats: {
                    type: "weapon",
                    antiship: 5200,
                    antiair: 504,
                    siege: 392,
                    hp: 28800
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `MK2-CM-4x250A "Storm"`,
                    name: `Missile Launcher Nest`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 140,
                    attributes: ["Anti-Aircraft Support"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C3",
                name: `Recon UAV System`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 25200
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: "CIT-3",
                    name: `Fire-Control Spotter UAV Hanger`,
                    hanger: "Spotter UAV",
                    capacity: 3,
                    attributes: ["Ship Calibration Support"]
                }]
            }]
        }, {
            name: "Solar Whale",
            title: "Armed Tactical Carrier",
            img: "/ships/solarWhale.png",
            type: "Carrier",
            variant: "A",
            variant_name: "Super Type",
            manufacturer: "NOMA Shipping",
            direction: ["Strategy & Support"],
            scope: "Empty",
            weight: 2,
            row: "Middle",
            cp: 55,
            maxInFleet: 5,
            modules: [{
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M1",
                name: "Corvette Dock",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24750
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-3200`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 6,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "M2",
                name: "Large Aircraft System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24750
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-1200`,
                    name: "Large Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 8,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `Integrated Armory`,
                stats: {
                    type: "weapon",
                    antiship: 9648,
                    antiair: 589,
                    siege: 959,
                    hp: 27000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `BG-2450A`,
                    name: `Dual-Cannon Heavy Battery`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 320,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `MK3-BM-8x320 "Lightning Field"`,
                    name: `Dodeca-Fire Anti-Ship Missile System`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 220,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Projectile Weapon Platform`,
                stats: {
                    type: "weapon",
                    antiship: 8749,
                    antiair: 589,
                    siege: 648,
                    hp: 27000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK5-BM-16x180 "Lightning Field"`,
                    name: `Anti-Ship Missile Array`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 120,
                    attributes: null
                }, {
                    type: "weapon",
                    count: 2,
                    title: `MK3-BM-8x320 "Lightning Field"`,
                    name: `Dodeca-Fire Anti-Ship Missile System`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 220,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A3",
                name: `Integrated Cannon Platform`,
                stats: {
                    type: "weapon",
                    antiship: 8888,
                    antiair: 1021,
                    siege: 630,
                    hp: 27000
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `MK3-BM-8x320 "Lightning Field"`,
                    name: `Dodeca-Fire Anti-Ship Missile System`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 220,
                    attributes: ["Anti-Aircraft Counterattack"]
                }, {
                    type: "weapon",
                    count: 2,
                    title: `BG-2180`,
                    name: `Anti-Ship Cannon`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: null,
                    alpha: 80,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "B1",
                name: "Ship Maintenance System",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 25200
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `BSY-5000`,
                    name: "Large Docking Jetty",
                    attributes: ["Aircraft Recovery"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: "Corvette Loading Platform",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24750
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CBC-2000`,
                    name: "Corvette Dock",
                    hanger: "Corvette",
                    capacity: 3,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C1",
                name: "Aircraft Hanger",
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 24750
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CFB-600`,
                    name: "Aircraft Hanger",
                    hanger: "Large Fighter",
                    capacity: 5,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "C2",
                name: "Siege UAV System",
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 0,
                    siege: 6652,
                    hp: 24750
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CST-6`,
                    name: "Siege UAV Pod",
                    hanger: "Siege UAV",
                    capacity: 4,
                    damageType: "Energy",
                    target: "Building",
                    lockonEfficiency: null,
                    alpha: 720,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "C3",
                name: "Anti-Aircraft Missile Platform",
                stats: {
                    type: "weapon",
                    antiship: 2618,
                    antiair: 1178,
                    siege: 0,
                    hp: 27000
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `BM-12x180T`,
                    name: "Missile Defense System",
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 50,
                    attributes: ["Interception Capability", "Anti-Aircraft Special Ammo", "Anti-Aircraft Support"]
                }]
            }]
        }, {
            name: "Warspite",
            title: "Assault Battleship",
            img: "/ships/warspite.png",
            type: "Battleship",
            variant: "A",
            variant_name: "Super",
            manufacturer: "Empty",
            direction: ["Empty"],
            scope: "Empty",
            weight: 0,
            row: "Middle",
            cp: 45,
            maxInFleet: 3,
            modules: [{
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M1",
                name: `Bow-Mounted Ion Cannon System`,
                stats: {
                    type: "weapon",
                    antiship: 21000,
                    antiair: 0,
                    siege: 7350,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `FI-800`,
                    name: `Heavy Ion Cannon`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 1050,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "M2",
                name: `Bow-Mounted High-Energy Bombardment System`,
                stats: {
                    type: "weapon",
                    antiship: 21272,
                    antiair: 0,
                    siege: 2127,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 1,
                    title: `FM-1x575`,
                    name: `Heavy High-Energy Bomber`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 780,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A1",
                name: `Anti-Ship Torpedo System`,
                stats: {
                    type: "weapon",
                    antiship: 8280,
                    antiair: 0,
                    siege: 3150,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `FT-4x160`,
                    name: `Missile Silo`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 125,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "A2",
                name: `Projectile Weapon System`,
                stats: {
                    type: "weapon",
                    antiship: 10000,
                    antiair: 2775,
                    siege: 3850,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 6,
                    title: `FM-1x205`,
                    name: `Missile Silo`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 60,
                    alpha: 110,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "B1",
                name: `Siege Armed System`,
                stats: {
                    type: "weapon",
                    antiship: 6200,
                    antiair: 0,
                    siege: 4480,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `FT-1-365C`,
                    name: `Siege Torpedo`,
                    damageType: "Projectile",
                    target: "Building",
                    lockonEfficiency: null,
                    alpha: 320,
                    attributes: ["Crit"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/aircraft.png",
                system: "B2",
                name: "Siege UAV System",
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 0,
                    siege: 6048,
                    hp: 27900
                },
                subsystems: [{
                    type: "hanger",
                    count: 1,
                    title: `CST-6`,
                    name: "Siege UAV Pod",
                    hanger: "Siege UAV",
                    capacity: 4,
                    damageType: "Energy",
                    target: "Building",
                    lockonEfficiency: null,
                    alpha: 630,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "C1",
                name: `Experimental Ion Cannon System`,
                stats: {
                    type: "weapon",
                    antiship: 9176,
                    antiair: 0,
                    siege: 3211,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `FI-400T`,
                    name: `Experimental Ion Turret`,
                    damageType: "Energy",
                    target: "Small Ship",
                    lockonEfficiency: null,
                    alpha: 260,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "C2",
                name: `Ion Turret System`,
                stats: {
                    type: "weapon",
                    antiship: 10400,
                    antiair: 0,
                    siege: 7280,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `FI-550`,
                    name: `Siege Ion Turret`,
                    damageType: "Energy",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 520,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D1",
                name: `Medium Anti-Ship Missile`,
                stats: {
                    type: "weapon",
                    antiship: 9000,
                    antiair: 1530,
                    siege: 3569,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 4,
                    title: `FM-3x180`,
                    name: `Missile Vertical Launcher`,
                    damageType: "Projectile",
                    target: "Small Ship",
                    lockonEfficiency: 10,
                    alpha: 85,
                    attributes: ["Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "D2",
                name: `Large Anti-Ship Missile`,
                stats: {
                    type: "weapon",
                    antiship: 11100,
                    antiair: 0,
                    siege: 3990,
                    hp: 27900
                },
                subsystems: [{
                    type: "weapon",
                    count: 2,
                    title: `FM-1x450`,
                    name: `Missile Launcher`,
                    damageType: "Projectile",
                    target: "Large Ship",
                    lockonEfficiency: null,
                    alpha: 380,
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "E1",
                name: `Standard Sacrum Chu Imperium Armor System`,
                stats: {
                    type: "armor",
                    extraHP: 284970,
                    armor: 270,
                    energyShield: 5,
                    hp: 27900
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `SC-100`,
                    name: `Ship Core`,
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: "AC-111",
                    name: "Sacrum Chu Imperium Super-Heavy Armor",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/armor.png",
                system: "E2",
                name: `Armor System`,
                stats: {
                    type: "armor",
                    extraHP: 284970,
                    armor: 300,
                    energyShield: 10,
                    hp: 27900
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `SC-100`,
                    name: `Ship Core`,
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: "AC-150",
                    name: "Generic Super-Heavy Armor",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/speed.png",
                system: "F1",
                name: `Standard Sacrum Chu Imperium Propulsion System`,
                stats: {
                    type: "propulsion",
                    cruise: 220,
                    warp: 1100,
                    hp: 30650
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `EN-111`,
                    name: `Sacrum Chu Imperium Vector Engine`,
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: "EC-111",
                    name: "Sacrum Chu Imperium Warp Drive",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/speed.png",
                system: "F2",
                name: `Propulsion System`,
                stats: {
                    type: "propulsion",
                    cruise: 250,
                    warp: 1250,
                    hp: 27900
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `EN-600`,
                    name: `Generic Vector Engine`,
                    attributes: null
                }, {
                    type: "misc",
                    count: 1,
                    title: "EC-600",
                    name: "Generic Warp Drive",
                    attributes: null
                }]
            }, {
                type: "known",
                img: "/weapons/icons/jamming.png",
                system: "G1",
                name: `Ion Enhancement Device`,
                stats: {
                    type: "weapon",
                    antiship: null,
                    antiair: null,
                    siege: null,
                    hp: 27900
                },
                subsystems: [{
                    type: "misc",
                    count: 1,
                    title: `RII-600`,
                    name: "Ion Energy Acceleration Device",
                    attributes: ["Increase Ion Damage"] // increases ion cannon damage by 25%
                }]
            }, {
                type: "unknown",
                img: "/weapons/icons/unknown.png",
                system: "G2",
                unknown: true
            }, {
                type: "known",
                img: "/weapons/icons/cannon.png",
                system: "H1",
                name: `Short-Range Anti-Aircraft System`,
                stats: {
                    type: "weapon",
                    antiship: 0,
                    antiair: 5717,
                    siege: 0,
                    hp: 28400
                },
                subsystems: [{
                    type: "weapon",
                    count: 6,
                    title: `FM-2x90B`,
                    name: `Missile Vertical Launcher`,
                    damageType: "Projectile",
                    target: "Aircraft",
                    lockonEfficiency: 60,
                    alpha: 50,
                    attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft High-Speed Strike", "Anti-Aircraft Counterattack"]
                }]
            }, {
                type: "unknown",
                img: "/weapons/icons/unknown.png",
                system: "H2",
                unknown: true
            }]
        }
    ];
    return data;
})
