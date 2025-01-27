import { AllShip } from "~/utils/ships";

export default defineEventHandler(() => {
  const difficulty: Readonly<Record<string, number>> = {
    "Jupiter Industry": 3.5,
    "NOMA Shipping": 3.5,
    Antonios: 4,
    "Dawn Accord": 2.5,
    "Outstanding Firepower": 5.5,
    "Sustained Combat": 5,
    "Strategy & Support": 5.5,
    "Fighter & Corvette": 6,
    "Projectile Weapon": 4.5,
    "Direct-Fire Weapon": 4
  };

  const data: readonly AllShip[] = [
    {
      id: 0,
      name: "AT021",
      title: "Pulse Attacker",
      img: "/ships/at021_a.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 15,
      fightersPerSquadron: 3
    },
    {
      id: 1,
      name: "AT021",
      title: "Tactical Attacker",
      img: "/ships/at021_b.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "B",
      variantName: "Interference Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 15,
      fightersPerSquadron: 3
    },
    {
      id: 2,
      name: "AT021",
      title: "Heavy Attacker",
      img: "/ships/at021_c.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "C",
      variantName: "Multi-Role Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 15,
      fightersPerSquadron: 3
    },
    {
      id: 3,
      name: "B192 Newland",
      title: "Heavy Attacker",
      img: "/ships/b192_newland.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Multi-Role Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 3
    },
    {
      id: 4,
      name: "BR050",
      title: "Standard Bomber",
      img: "/ships/br050_a.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 5,
      name: "BR050",
      title: "Multi-Role Bomber",
      img: "/ships/br050_b.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "B",
      variantName: "Defense Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 6,
      name: "BR050",
      title: "Torpedo Bomber",
      img: "/ships/br050_c.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "C",
      variantName: "Torpedo Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 7,
      name: "Balancer Anderson SC020",
      title: "Scout",
      img: "/ships/sc020.png",
      type: "Fighter",
      fighterType: "Small",
      variant: "A",
      variantName: "Interference Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Sustained Combat", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 5
    },
    {
      id: 8,
      name: "Bullfrog",
      title: "Dual-Purpose Bomber",
      img: "/ships/bullfrog.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "A",
      variantName: "Siege Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 9,
      name: "Hayreddin's Loyal",
      title: "Pulsar Fighter",
      img: "/ships/hayreddins_loyal.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Special Type",
      hasVariants: false,
      manufacturer: "Empty",
      direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 8,
      fightersPerSquadron: 3
    },
    {
      id: 10,
      name: "Janbiya Aer410",
      title: "Assault Attacker",
      img: "/ships/janbiya_aer410.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 3
    },
    {
      id: 11,
      name: "Mistral",
      title: "Combat Attacker",
      img: "/ships/mistral.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Anti-Aircraft Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 4
    },
    {
      id: 12,
      name: "SC002",
      title: "Quantum Scout",
      img: "/ships/sc002.png",
      type: "Fighter",
      fighterType: "Small",
      variant: "A",
      variantName: "Generic Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 15,
      fightersPerSquadron: 5
    },
    {
      id: 13,
      name: "Sandrake",
      title: "Atmospheric Interceptor",
      img: "/ships/sandrake.png",
      type: "Fighter",
      fighterType: "Small",
      variant: "A",
      variantName: "Dual-Purpose Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 5
    },
    {
      id: 14,
      name: "Spore A404",
      title: "Light Fighter",
      img: "/ships/spore_a404.png",
      type: "Fighter",
      fighterType: "Small",
      variant: "A",
      variantName: "Anti-Aircraft Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 5
    },
    {
      id: 15,
      name: "Stingray",
      title: "Torpedo Bomber",
      img: "/ships/stingray.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "A",
      variantName: "Stealth Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 16,
      name: "Strix A100",
      title: "Joint Attacker",
      img: "/ships/strix_a100.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 3
    },
    {
      id: 17,
      name: "Vitas A021",
      title: "Heavy Attacker",
      img: "/ships/vitas_a021.png",
      type: "Fighter",
      fighterType: "Medium",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 3
    },
    {
      id: 18,
      name: "Vitas B010",
      title: "Bomber",
      img: "/ships/vitas_b010.png",
      type: "Fighter",
      fighterType: "Large",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 1,
      serviceLimit: 10,
      fightersPerSquadron: 2
    },
    {
      id: 19,
      name: "CV-II003",
      title: "Light Corvette",
      img: "/ships/cvii003.png",
      type: "Corvette",
      variant: "A",
      variantName: "Multi-Role Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 15
    },
    {
      id: 20,
      name: "CV-M011",
      title: "Heavy Missile Corvette",
      img: "/ships/cvm011_a.png",
      type: "Corvette",
      variant: "A",
      variantName: "Missile Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 15
    },
    {
      id: 21,
      name: "CV-M011",
      title: "Heavy Cannon Corvette",
      img: "/ships/cvm011_b.png",
      type: "Corvette",
      variant: "B",
      variantName: "Cannon Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 15
    },
    {
      id: 22,
      name: "CV-M011",
      title: "High-Speed Missile Corvette",
      img: "/ships/cvm011_c.png",
      type: "Corvette",
      variant: "C",
      variantName: "High-Speed Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 15
    },
    {
      id: 23,
      name: "CV-T800",
      title: "Pulsar Corvette",
      img: "/ships/cvt800.png",
      type: "Corvette",
      variant: "A",
      variantName: "Anti-Aircraft Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Strategy & Support", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 15
    },
    {
      id: 24,
      name: "Cellular Defender",
      title: "Heavy Torpedo Corvette",
      img: "/ships/cellular_defender.png",
      type: "Corvette",
      variant: "A",
      variantName: "Multi-Role Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 25,
      name: "Nebula Chaser",
      title: "Heavy Corvette",
      img: "/ships/nebula_chaser_a.png",
      type: "Corvette",
      variant: "A",
      variantName: "Ballistic Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 26,
      name: "Nebula Chaser",
      title: "Pulsar Corvette",
      img: "/ships/nebula_chaser_b.png",
      type: "Corvette",
      variant: "B",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 27,
      name: "RedBeast 7-13",
      title: "Missile Corvette",
      img: "/ships/redbeast_713.png",
      type: "Corvette",
      variant: "A",
      variantName: "Offensive Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Sustained Combat", "Strategy & Support", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 28,
      name: "S-Levy 9",
      title: "Heavy Torpedo Escort Corvette",
      img: "/ships/slevy_9.png",
      type: "Corvette",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 29,
      name: "Hale-Bopp",
      title: "System Support Corvette",
      img: "/ships/halebopp_a.png",
      type: "Corvette",
      variant: "A",
      variantName: "Multi-Role Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 30,
      name: "Hale-Bopp",
      title: "Repair Support Corvette",
      img: "/ships/halebopp_b.png",
      type: "Corvette",
      variant: "B",
      variantName: "Dock Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 31,
      name: "Silent Assassin",
      title: "Armored Corvette",
      img: "/ships/silent_assassin.png",
      type: "Corvette",
      variant: "A",
      variantName: "High-Speed Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Fighter & Corvette"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 32,
      name: "Tempel I",
      title: "Information Corvette",
      img: "/ships/tempel_i_a.png",
      type: "Corvette",
      variant: "A",
      variantName: "Interference Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Empty",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 33,
      name: "Tempel I",
      title: "Alert Corvette",
      img: "/ships/tempel_i_b.png",
      type: "Corvette",
      variant: "B",
      variantName: "Alert Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support", "Fighter & Corvette"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 34,
      name: "Void Elfin",
      title: "Stealth Missile Corvette",
      img: "/ships/void_elfin.png",
      type: "Corvette",
      variant: "A",
      variantName: "Offensive Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Sustained Combat", "Fighter & Corvette"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 2,
      serviceLimit: 10
    },
    {
      id: 35,
      name: "Carilion",
      title: "Recon Frigate",
      img: "/ships/carilion_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Recon Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Sustained Combat", "Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 36,
      name: "Carilion",
      title: "Heavy Cannon Frigate",
      img: "/ships/carilion_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Heavy Cannon Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 37,
      name: "Carilion",
      title: "Special Frigate",
      img: "/ships/carilion_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Special Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 38,
      name: "FG300",
      title: "Multi-Role Frigate",
      img: "/ships/fg300_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Multi-Role Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 3,
      serviceLimit: 15
    },
    {
      id: 39,
      name: "FG300",
      title: "Armored Frigate",
      img: "/ships/fg300_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Armored Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 3,
      serviceLimit: 15
    },
    {
      id: 40,
      name: "FG300",
      title: "Recon Frigate",
      img: "/ships/fg300_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Recon Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 3,
      serviceLimit: 15
    },
    {
      id: 41,
      name: "Inostrancevia",
      title: "Defensive Frigate",
      img: "/ships/inostrancevia_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Defense Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Empty"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 42,
      name: "Inostrancevia",
      title: "Assault Frigate",
      img: "/ships/inostrancevia_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Offensive Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 43,
      name: "Inostrancevia",
      title: "Onslaught Frigate",
      img: "/ships/inostrancevia_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Special Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 5,
      row: "Front",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 44,
      name: "Mare Imbrium",
      title: "Assault Frigate",
      img: "/ships/mare_imbrium_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Railgun Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 45,
      name: "Mare Imbrium",
      title: "Experimental Pulse Cannon Frigate",
      img: "/ships/mare_imbrium_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 46,
      name: "Mare Nubium",
      title: "Light Landing Ship",
      img: "/ships/mare_nubium_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Assault Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 47,
      name: "Mare Nubium",
      title: "Anti-Aircraft Frigate",
      img: "/ships/mare_nubium_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Empty"],
      scope: "Empty",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 48,
      name: "Mare Serenitatis",
      title: "Heavy Frigate",
      img: "/ships/mare_serenitatis_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 49,
      name: "Mare Serenitatis",
      title: "Missile Frigate",
      img: "/ships/mare_serenitatis_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Missile Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 50,
      name: "Mare Serenitatis",
      title: "Anti-Aircraft Frigate",
      img: "/ships/mare_serenitatis_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 51,
      name: "Mare Tranquillitatis",
      title: "Missile Frigate",
      img: "/ships/mare_tranquillitatis_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Integrated Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 52,
      name: "Mare Tranquillitatis",
      title: "Pulse Cannon Frigate",
      img: "/ships/mare_tranquillitatis_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Empty"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 53,
      name: "Mare Tranquillitatis",
      title: "Interceptor Frigate",
      img: "/ships/mare_tranquillitatis_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 54,
      name: "NOMA M470",
      title: "Heavy Landing Ship",
      img: "/ships/noma_m470_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Siege Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 55,
      name: "NOMA M470",
      title: "Support Frigate",
      img: "/ships/noma_m470_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 56,
      name: "NOMA M470",
      title: "Anti-Aircraft Frigate",
      img: "/ships/noma_m470_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 57,
      name: "Reliat",
      title: "Rapid Torpedo Frigate",
      img: "/ships/reliat_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 58,
      name: "Reliat",
      title: "Tactical Torpedo Frigate",
      img: "/ships/reliat_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Torpedo Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 59,
      name: "Reliat",
      title: "Stealth Frigate",
      img: "/ships/reliat_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Stealth Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 4,
      serviceLimit: 10
    },
    {
      id: 60,
      name: "Ruby",
      title: "Heavy Railgun Frigate",
      img: "/ships/ruby_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Railgun Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 61,
      name: "Ruby",
      title: "Experimental Ion Cannon Frigate",
      img: "/ships/ruby_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Ion Cannon Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 62,
      name: "Ruby",
      title: "Defensive Frigate",
      img: "/ships/ruby_c.png",
      type: "Frigate",
      variant: "C",
      variantName: "Defensive Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 5,
      serviceLimit: 10
    },
    {
      id: 63,
      name: "XenoStinger",
      title: "Tactical Frigate",
      img: "/ships/xenostinger_a.png",
      type: "Frigate",
      variant: "A",
      variantName: "Special Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 5,
      row: "Back",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 64,
      name: "XenoStinger",
      title: "Defensive Frigate",
      img: "/ships/xenostinger_b.png",
      type: "Frigate",
      variant: "B",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 5,
      row: "Back",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 65,
      name: "AC721",
      title: "Heavy Logistics Destroyer",
      img: "/ships/ac721_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Generic Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 8,
      serviceLimit: 15
    },
    {
      id: 66,
      name: "AC721",
      title: "Heavy Missile Destroyer",
      img: "/ships/ac721_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Missile Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 8,
      serviceLimit: 15
    },
    {
      id: 67,
      name: "AC721",
      title: "Heavy Dual-Purpose Assault Ship",
      img: "/ships/ac721_d.png",
      type: "Destroyer",
      variant: "D",
      variantName: "Aircraft Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 12,
      serviceLimit: 15,
      corvetteCapacity: 2
    },
    {
      id: 68,
      name: "Aldabra",
      title: "Heavy Cannon Destroyer",
      img: "/ships/aldabra_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Generic Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 69,
      name: "Aldabra",
      title: "Heavy Assault Destroyer",
      img: "/ships/aldabra_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Armored Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 70,
      name: "Ceres",
      title: "Aircraft Destroyer",
      img: "/ships/ceres_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Aircraft Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 8,
      serviceLimit: 10,
      mediumFighterCapacity: 2
    },
    {
      id: 71,
      name: "Ceres",
      title: "Support Destroyer",
      img: "/ships/ceres_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 72,
      name: "Ceres",
      title: "Tactical Destroyer",
      img: "/ships/ceres_c.png",
      type: "Destroyer",
      variant: "C",
      variantName: "Tactical Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 73,
      name: "Eris I",
      title: "Maneuver Assault Destroyer",
      img: "/ships/eris_i_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Cannon Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 7,
      serviceLimit: 10
    },
    {
      id: 74,
      name: "Eris I",
      title: "Heavy Cannon Destroyer",
      img: "/ships/eris_i_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Heavy Cannon Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 9,
      serviceLimit: 10
    },
    {
      id: 75,
      name: "Eris I",
      title: "Armored Destroyer",
      img: "/ships/eris_i_c.png",
      type: "Destroyer",
      variant: "C",
      variantName: "Armored Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 7,
      serviceLimit: 10
    },
    {
      id: 76,
      name: "Guardian",
      title: "Support Destroyer",
      img: "/ships/guardian_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Empty"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 9,
      serviceLimit: 10
    },
    {
      id: 77,
      name: "Guardian",
      title: "Dual-Purpose Assault Ship",
      img: "/ships/guardian_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Dual-Purpose Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Back",
      commandPoints: 14,
      serviceLimit: 10,
      corvetteCapacity: 2
    },
    {
      id: 78,
      name: "Guardian",
      title: "Experimental Pulse Assault Ship",
      img: "/ships/guardian_c.png",
      type: "Destroyer",
      variant: "C",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 9,
      serviceLimit: 10
    },
    {
      id: 79,
      name: "Quaoar",
      title: "Railgun Destroyer",
      img: "/ships/quaoar_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Railgun Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 80,
      name: "Quaoar",
      title: "Torpedo Destroyer",
      img: "/ships/quaoar_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Torpedo Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 81,
      name: "Taurus",
      title: "Pulse Cannon Destroyer",
      img: "/ships/taurus_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Offensive Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 11,
      serviceLimit: 10
    },
    {
      id: 82,
      name: "Taurus",
      title: "Assault Destroyer",
      img: "/ships/taurus_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Assault Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 11,
      serviceLimit: 10
    },
    {
      id: 83,
      name: "Taurus",
      title: "Defensive Destroyer",
      img: "/ships/taurus_c.png",
      type: "Destroyer",
      variant: "C",
      variantName: "Defensive Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Sustained Combat", "Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 8,
      serviceLimit: 10
    },
    {
      id: 84,
      name: "Tundra",
      title: "Tactical Destroyer",
      img: "/ships/tundra_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 9,
      serviceLimit: 10
    },
    {
      id: 85,
      name: "Tundra",
      title: "Aircraft Destroyer",
      img: "/ships/tundra_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Aircraft Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 9,
      serviceLimit: 10,
      mediumFighterCapacity: 2
    },
    {
      id: 86,
      name: "Winged Hussar",
      title: "Light Missile Destroyer",
      img: "/ships/winged_hussar_a.png",
      type: "Destroyer",
      variant: "A",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 87,
      name: "Winged Hussar",
      title: "Integrated Missile Destroyer",
      img: "/ships/winged_hussar_b.png",
      type: "Destroyer",
      variant: "B",
      variantName: "Integrated Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 88,
      name: "Winged Hussar",
      title: "Area-Denial Anti-Aircraft Destroyer",
      img: "/ships/winged_hussar_c.png",
      type: "Destroyer",
      variant: "C",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Sustained Combat", "Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 6,
      serviceLimit: 10
    },
    {
      id: 89,
      name: "CAS066",
      title: "Generic Cruiser",
      img: "/ships/cas066_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Integrated Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Front",
      commandPoints: 18,
      serviceLimit: 12
    },
    {
      id: 90,
      name: "CAS066",
      title: "Artillery Cruiser",
      img: "/ships/cas066_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Artillery Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 18,
      serviceLimit: 12
    },
    {
      id: 91,
      name: "CAS066",
      title: "Aircraft Cruiser",
      img: "/ships/cas066_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Aircraft Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Empty"],
      scope: "Empty",
      weight: 10,
      row: "Middle",
      commandPoints: 18,
      serviceLimit: 12,
      corvetteCapacity: 2
    },
    {
      id: 92,
      name: "CAS066",
      title: "Auxiliary Cruiser",
      img: "/ships/cas066_d.png",
      type: "Cruiser",
      variant: "D",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Middle",
      commandPoints: 18,
      serviceLimit: 12
    },
    {
      id: 93,
      name: "Callisto",
      title: "Cluster Torpedo Raid Ship",
      img: "/ships/callisto_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Torpedo Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 2,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 94,
      name: "Callisto",
      title: "Heavy Torpedo Raid Ship",
      img: "/ships/callisto_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 2,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 95,
      name: "Callisto",
      title: "Heavy UAV Cruiser",
      img: "/ships/callisto_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Empty"],
      scope: "Projectile Weapon",
      weight: 2,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 96,
      name: "Chimera",
      title: "Heavy Cruiser",
      img: "/ships/chimera_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Ballistic Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 97,
      name: "Chimera",
      title: "Cannon Cruiser",
      img: "/ships/chimera_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Heavy Cannon Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 98,
      name: "Chimera",
      title: "Defensive Cruiser",
      img: "/ships/chimera_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Defensive Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 99,
      name: "Conamara Chaos",
      title: "Railgun Cruiser",
      img: "/ships/conamara_chaos_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Railgun Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 100,
      name: "Conamara Chaos",
      title: "High-Speed Plasma Cruiser",
      img: "/ships/conamara_chaos_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Plasma Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 101,
      name: "Io",
      title: "Assault Ion Cannon Cruiser",
      img: "/ships/io_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Ion Cannon Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 102,
      name: "Io",
      title: "High-Speed Ion Cannon Cruiser",
      img: "/ships/io_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 103,
      name: "Io",
      title: "Siege Ion Cannon Cruiser",
      img: "/ships/io_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Siege Type",
      hasVariants: true,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Front",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 104,
      name: "Jaeger",
      title: "Heavy Aircraft Cruiser",
      img: "/ships/jaeger_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Support Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 5,
      row: "Back",
      commandPoints: 20,
      serviceLimit: 8,
      corvetteCapacity: 4
    },
    {
      id: 105,
      name: "Jaeger",
      title: "Heavy Cannon Cruiser",
      img: "/ships/jaeger_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Anti-Ship Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 106,
      name: "KCCPV2.0",
      title: "Light Attack Cruiser",
      img: "/ships/kccpv20_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Integrated Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower", "Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 16,
      serviceLimit: 12
    },
    {
      id: 107,
      name: "KCCPV2.0",
      title: "Light Pulse Attack Cruiser",
      img: "/ships/kccpv20_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Pulse Cannon Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 16,
      serviceLimit: 12
    },
    {
      id: 108,
      name: "KCCPV2.0",
      title: "Light Railgun Cruiser",
      img: "/ships/kccpv20_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Railgun Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Empty"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Middle",
      commandPoints: 16,
      serviceLimit: 12
    },
    {
      id: 109,
      name: "KCCPV2.0",
      title: "Light Aircraft Cruiser",
      img: "/ships/kccpv20_d.png",
      type: "Cruiser",
      variant: "D",
      variantName: "Aircraft Type",
      hasVariants: true,
      manufacturer: "Dawn Accord",
      direction: ["Empty"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 16,
      serviceLimit: 12,
      largeFighterCapacity: 2
    },
    {
      id: 110,
      name: "Light Cone",
      title: "Multi-Role Missile Cruiser Cruiser",
      img: "/ships/light_cone_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Generic Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Empty"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 111,
      name: "Light Cone",
      title: "Area-Denial Anti-Aircraft Cruiser",
      img: "/ships/light_cone_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 112,
      name: "Light Cone",
      title: "Offensive Missile Cruiser",
      img: "/ships/light_cone_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Assault Type",
      hasVariants: true,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower"],
      scope: "Projectile Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 20,
      serviceLimit: 8
    },
    {
      id: 113,
      name: "Ranger",
      title: "Comprehensive Warfare Cruiser",
      img: "/ships/ranger_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Integrated Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 10,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 114,
      name: "Ranger",
      title: "Heavy Ion Cannon Cruiser",
      img: "/ships/ranger_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Ion Cannon Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8
    },
    {
      id: 115,
      name: "Predator",
      title: "Aircraft Cruiser",
      img: "/ships/predator_a.png",
      type: "Cruiser",
      variant: "A",
      variantName: "Generic Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8,
      largeFighterCapacity: 4
    },
    {
      id: 116,
      name: "Predator",
      title: "Tactical Aircraft Cruiser",
      img: "/ships/predator_b.png",
      type: "Cruiser",
      variant: "B",
      variantName: "Tactical Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8,
      largeFighterCapacity: 4
    },
    {
      id: 117,
      name: "Predator",
      title: "Anti-Aircraft Cruiser",
      img: "/ships/predator_c.png",
      type: "Cruiser",
      variant: "C",
      variantName: "Anti-Aircraft Type",
      hasVariants: true,
      manufacturer: "Antonios",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 10,
      row: "Back",
      commandPoints: 18,
      serviceLimit: 8,
      largeFighterCapacity: 4
    },
    {
      id: 118,
      name: "Constantine the Great",
      title: "Multi-Role Battlecruiser",
      img: "/ships/constantine_the_great.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Middle",
      commandPoints: 35,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `"Gamma Storm" Ion Attack System`,
          default: true,
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 9000,
            antiair: null,
            siege: 1890,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CI-2x700T "Helium Flash"`,
              name: `Dual-Gun Super-Heavy Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 400,
              attributes: null,
              stats: {
                damageFrequency: 3,
                cooldown: 10,
                lockOnTime: 6,
                duration: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ],
                    damage: 9000
                  },
                  siege: {
                    position: 2,
                    damage: 1890
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `"Gamma Storm" Projectile Attack System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 19885,
            antiair: null,
            siege: 1478,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CI-2x600T "Gamma Storm"`,
              name: `Energy Torpedo Launching System`,
              damageType: "Energy",
              target: "Large Ship",
              alpha: 1740,
              lockonEfficiency: 10,
              attributes: ["Crit"],
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 10.5,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 19885
                  },
                  siege: {
                    position: 2,
                    damage: 1478
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `"Gamma Storm" Projectile Weapon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 23717,
            antiair: null,
            siege: 1920,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CM-8x608A "Gamma Storm"`,
              name: `Generic Missile Launching System`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 850,
              attributes: null,
              stats: {
                duration: 8,
                attacksPerRound: [1, 8],
                cooldown: 26,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 23717
                  },
                  siege: {
                    position: 2,
                    damage: 1920
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `"Gamma Storm" Projectile Weapon System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 29393,
            antiair: 1163,
            siege: 2287,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CM-8x608 "Gamma Storm"`,
              name: `Pulse-Energy Missile Launching System`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 700,
              attributes: null,
              stats: {
                duration: 12,
                attacksPerRound: [1, 8],
                cooldown: 25,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 19978
                  },
                  siege: {
                    position: 2,
                    damage: 1997
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: "CM-12x550",
              name: `Dodeca-Fire Anti-Ship Missile System`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 350,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 12,
                attacksPerRound: [1, 12],
                cooldown: 40,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 9415
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 1163
                  },
                  siege: {
                    position: 3,
                    damage: 290
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Generic Battery System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 10628,
            antiair: 270,
            siege: 1461,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `CG-1350`,
              name: `350mm Dual-Cannon Anti-Ship Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 250,
              attributes: null,
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 7,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 8228
                  },
                  siege: {
                    position: 2,
                    damage: 1371
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `CG-1160B`,
              name: `Generic Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 50,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2400
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 270
                  },
                  siege: {
                    position: 3,
                    damage: 90
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B2",
          name: `Pulse Anti-Aircraft System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 3465,
            antiair: 1365,
            siege: null,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `CP-3x220`,
              name: `Triple-Fire Anti-Aircraft Pulse`,
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 40,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [3, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 3465
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 950
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `CP-120`,
              name: `Anti-Missile Pulse Array`,
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 40,
              attributes: ["Interception Capability", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 2,
                lockOnTime: 3,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 415
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B3",
          name: `Anti-Aircraft Missile System`,
          sourcedFrom: ["Windserpent", "The Enlightened"],
          stats: {
            type: "weapon",
            antiship: 2400,
            antiair: 1548,
            siege: null,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK2-CM-4x200B "Storm"`,
              name: `Missile Launcher Nest`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 35,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Cycle", "Anti-Aircraft Support"],
              stats: {
                duration: 2,
                attacksPerRound: [1, 4],
                cooldown: 6,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 1500,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 1080,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `CM-2x188B`,
              name: `Missile Launcher Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 25,
              attributes: ["Interception Capability", "Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 2,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 900,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 468,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C1",
          name: `Additional Energy System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 15750
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `RIT-650`,
              name: `Energy Compression Device`,
              attributes: ["Increase Energy Weapon Damage"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C2",
          name: `Aircraft Module`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 18000
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CBF-200`,
              name: `Medium Hanger`,
              hanger: "Medium Fighter",
              capacity: 1,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C3",
          name: `Recon UAV System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 18000
          },
          subsystems: [
            {
              type: "hanger",
              count: 3,
              title: "CIT-1",
              name: `Fire-Control Spotter UAV Hanger`,
              hanger: "Spotter UAV",
              capacity: 3,
              attributes: ["Ship Calibration Support"],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3,
                targetPriority: [
                  [1, "Battleship"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D1",
          name: `Short-Range Anti-Aircraft System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 792,
            siege: null,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `CM-2x45B`,
              name: `Short-Range Anti-Aircraft Missile`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 35,
              attributes: ["Anti-Aircraft Critical Strike", "Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 1,
                attacksPerRound: [1, 2],
                cooldown: 2,
                lockOnTime: 3,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 792
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "D2",
          name: `Targeted Protection System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 18000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: "ASM-220",
              name: `Critical-System Reinforced Armor`,
              attributes: ["Reduce System Crit Damage Taken"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "D3",
          name: `Damage Control System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 4800,
            hp: 15750
          },
          subsystems: [
            {
              type: "misc",
              count: 4,
              title: "AST-50",
              name: `Damage Monitoring System`,
              attributes: null
            }
          ]
        }
      ]
    },
    {
      id: 119,
      name: "Eternal Storm",
      title: "Attack Battlecruiser",
      img: "/ships/eternal_storm.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Middle",
      commandPoints: 32,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `"Viggen" Ion Generation System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 20000,
            antiair: null,
            siege: 4200,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `AI-900A "Viggen"`,
              name: `Ion Cannon`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1200,
              attributes: null,
              stats: {
                duration: 8,
                cooldown: 10,
                damageFrequency: 5,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 20000
                  },
                  siege: {
                    position: 2,
                    damage: 4200
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `Experimental Plasma Caster`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 23538,
            antiair: 2824,
            siege: 4236,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `AIM-850T`,
              name: `Plasma Caster`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: 10,
              alpha: 850,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 20,
                attacksPerRound: [1, 6],
                cooldown: 6,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"],
                      [3, "Destroyer"],
                      [3, "Frigate"]
                    ],
                    damage: 23538
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [4, "Corvette"],
                      [5, "Fighter"]
                    ],
                    damage: 2824
                  },
                  siege: {
                    position: 3,
                    damage: 4236
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `"Eternal Polaris" Mk II Projectile Launching System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 12240,
            antiair: 396,
            siege: 1539,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK3-AT-800A "Supernova-White"`,
              name: `Anti-Ship Torpedo`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1600,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 20,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [1, "Auxiliary Ship"]
                    ],
                    damage: 9540
                  },
                  siege: {
                    position: 2,
                    damage: 1440
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `MK2-AM-8x300B "Eternal Polaris K"`,
              name: `Cluster Missile`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 55,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [4, 1],
                cooldown: 8,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 396
                  },
                  siege: {
                    position: 3,
                    damage: 99
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `"Eternal Polaris" Mk II Projectile Launching System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 11900,
            antiair: null,
            siege: 10440,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK3-AT-750C "Supernova-White"`,
              name: `Siege Torpedo Launcher Array`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1200,
              attributes: null,
              stats: {
                duration: 6,
                attacksPerRound: [1, 3],
                cooldown: 30,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 11900
                  },
                  siege: {
                    position: 2,
                    damage: 10440
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A3",
          name: `"Eternal Polaris" Mk II Projectile Launching System TEST`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 12300,
            antiair: 396,
            siege: 1440,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK4-AT-1-800AT "Supernova-White"`,
              name: `Energy Torpedo`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1600,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 20,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [1, "Auxiliary Ship"]
                    ],
                    damage: 9600
                  },
                  siege: {
                    position: 2,
                    damage: 1440
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `MK2-AM-16x150B "Eternal Polaris K"`,
              name: `Anti-Aircraft Missile Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 40,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 8,
                attacksPerRound: [1, 16],
                cooldown: 25,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 396
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Generic Cannon Platform`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 6000,
            antiair: 405,
            siege: 1110,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `AG-2580`,
              name: `Dual-Cannon Heavy Battery`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 350,
              attributes: null,
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 8,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 5100
                  },
                  siege: {
                    position: 2,
                    damage: 1050
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `AG-1120B`,
              name: `Rapid-Fire Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 35,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 900
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 405
                  },
                  siege: {
                    position: 3,
                    damage: 60
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B2",
          name: `Generic Close-In Weapon System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 900,
            antiair: 405,
            siege: 90,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `AG-1105B`,
              name: `Generic Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 25,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 900,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 405,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 90
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C1",
          name: `NT UAV Anti-Aircraft System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 3888,
            siege: null,
            hp: 20250
          },
          subsystems: [
            {
              type: "hanger",
              count: 3,
              title: `NT-1`,
              name: `Anti-Aircraft UAV Rack`,
              hanger: "Area-Denial Anti-Aircraft UAV",
              capacity: 3,
              damageType: "Projectile",
              alpha: 15,
              target: "Aircraft",
              lockonEfficiency: null,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 2,
                lockOnTime: 2,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Fighter"],
                      [2, "Corvette"]
                    ],
                    damage: 3888
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C2",
          name: `"Thunderstorm" UAV Shield System`,
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 20250
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `SNT-1`,
              name: `Shielded UAV Rack`,
              hanger: "Shield UAV",
              capacity: 2,
              attributes: [`Ship Shielding Support`],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 15,
                lockOnTime: 3,
                targetPriority: [
                  [1, "Battleship"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C3",
          name: `Energy Compensation Armor System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 16200
          },
          subsystems: [
            {
              type: "misc",
              count: 2,
              title: `RIR-220`,
              name: `Experimental Energy Compensation Armor`,
              attributes: ["Energy Damage Reduction", "Physical Damage Reduction", "Crit Damage Reduction"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D1",
          name: `Ion Turret System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 6857,
            antiair: null,
            siege: 1028,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `AI-450A`,
              name: `Experimental Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 800,
              attributes: null,
              stats: {
                duration: 3,
                cooldown: 4,
                damageFrequency: 1,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 6857,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 1028
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D2",
          name: `Pulse Turret System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 432,
            siege: null,
            hp: 18000
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `AP-130B`,
              name: `Rapid-Fire Near-Defense Pulse Cannon`,
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 40,
              attributes: ["Interception Capability", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 2,
                lockOnTime: 3,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 432
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 130,
      name: "Shield of Plutus",
      title: "Defensive Battlecruiser",
      img: "/ships/shield_of_plutus.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Empty",
      direction: ["Empty"],
      scope: "Empty",
      weight: 0,
      row: "Middle",
      commandPoints: 35,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `Integrated Weapon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 15108,
            antiair: 384,
            siege: 1851,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `AM-4x800C`,
              name: `Anti-Ship Missile Array`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 450,
              attributes: null,
              stats: {
                duration: 5,
                attacksPerRound: [1, 4],
                cooldown: 30,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 12068
                  },
                  siege: {
                    position: 2,
                    damage: 1851
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 1,
              title: `MK3-BG-2100 "Fortress"`,
              name: `Generic Cannon`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 200,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 5,
                attacksPerRound: [1, 2],
                cooldown: 10,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 3040
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 384
                  }
                }
              }
            }
          ]
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "M2"
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "M3"
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "A1",
          name: `"Fortress" Defense System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 4800,
            antiair: null,
            siege: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CIT-A`,
              name: "Guard UAV Hanger",
              hanger: "Military UAV",
              capacity: 2,
              damageType: "Energy",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 100,
              attributes: null,
              stats: {
                duration: 4,
                attacksPerRound: [2, 4],
                cooldown: 16,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 4800
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "A2",
          name: `"Fortress" Area Fire-Control System A`,
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 23900
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CIT-B`,
              name: `Fire-Control Spotter UAV Hanger`,
              hanger: "Spotter UAV",
              capacity: 2,
              attributes: ["Damage Resistance"],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3,
                targetPriority: [
                  [1, "Battlecruiser"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "A3",
          name: `"Fortress" Area Fire-Control System B`,
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 24900
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CIT-C`,
              name: `Fire-Control Spotter UAV Hanger`,
              hanger: "Spotter UAV",
              capacity: 3,
              attributes: ["Damage Resistance II"],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3,
                targetPriority: [
                  [1, "Battlecruiser"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Heavy Projectile Weapon System`,
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 13320,
            antiair: null,
            siege: 1215,
            hp: 24950
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `BM-4x1800`,
              name: `Anti-Ship Missile Array`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 750,
              attributes: ["Crit", "Evasive Counterattack"],
              stats: {
                duration: 10,
                attacksPerRound: [1, 4],
                cooldown: 30,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battlecruiser"],
                      [1, "Carrier"],
                      [1, "Auxiliary Ship"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ],
                    damage: 13320
                  },
                  siege: {
                    position: 2,
                    damage: 1215
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "B2",
          name: `Comprehensive Maintenance System`,
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 8100,
            hp: 20800
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CRT-3`,
              name: `Engineering UAV Maintenance Pod`,
              hanger: "Repair UAV",
              capacity: 3,
              repair: 8100,
              attributes: null
            }
          ]
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "B3"
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "C1"
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "C2"
        },
        {
          unknown: true,
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "C3"
        }
      ]
    },
    {
      id: 120,
      name: "Spear of Uranus",
      title: "Heavy Battlecruiser",
      img: "/ships/spear_of_uranus.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Sustained Combat"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Front",
      commandPoints: 35,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `Bow Railgun System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 12950,
            antiair: null,
            siege: 11310,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `BR-1950C "Ruby"`,
              name: `Bow-Mounted Siege Railgun`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 2600,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 12,
                lockOnTime: 7,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battleship"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 12950
                  },
                  siege: {
                    position: 2,
                    damage: 11310
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `Ion Turret System`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 12857,
            antiair: null,
            siege: 1800,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `BI-850`,
              name: `Dual-Fire Heavy Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 750,
              attributes: null,
              stats: {
                duration: 6,
                cooldown: 10.5,
                damageFrequency: 3,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ],
                    damage: 12857
                  },
                  siege: {
                    position: 2,
                    damage: 1800
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `"Fortress" Battery System A`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 15700,
            antiair: 816,
            siege: 3075,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `BG-1850`,
              name: `Heavy Cannon`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 950,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 12,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 9400
                  },
                  siege: {
                    position: 2,
                    damage: 2755
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 3,
              title: `BG-2240`,
              name: `Anti-Ship Cannon`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 100,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 9,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 3600
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 420
                  },
                  siege: {
                    position: 3,
                    damage: 320
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `BG-340B`,
              name: `Anti-Aircraft Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 10,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 3,
                attacksPerRound: [1, 3],
                cooldown: 3,
                lockOnTime: 2,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 396
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `"Fortress" Battery System B`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 18566,
            antiair: 396,
            siege: 2880,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `BG-1950`,
              name: `Heavy Cannon`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1200,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 18,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 15866
                  },
                  siege: {
                    position: 2,
                    damage: 2880
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `BG-340B`,
              name: `Anti-Aircraft Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 10,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 3,
                attacksPerRound: [1, 3],
                cooldown: 3,
                lockOnTime: 2,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 396
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A3",
          name: `"Fortress" Battery System F`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 17220,
            antiair: 1026,
            siege: 1800,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 6,
              title: `BG-2350`,
              name: `Anti-Ship Cannon`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 200,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 8,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 17100
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 810
                  },
                  siege: {
                    position: 3,
                    damage: 1800
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `BG-340B`,
              name: `Anti-Aircraft Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 10,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 3,
                attacksPerRound: [1, 3],
                cooldown: 3,
                lockOnTime: 2,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 120
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 216
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `"Minecart" Projectile Launching Array`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 5940,
            antiair: 680,
            siege: 259,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `BM-12x250`,
              name: `Generic Missile Launching Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 120,
              attributes: ["Interception Capability", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 12,
                attacksPerRound: [1, 12],
                cooldown: 28,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 5940
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 680
                  },
                  siege: {
                    position: 3,
                    damage: 259
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: `Corvette Dock`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-2300`,
              name: `Corvette Mounting Dock`,
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "B3",
          name: `Integrated Damage Control System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 5454,
            hp: 19800
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CRT-3`,
              name: `Engineering UAV Maintenance Pod`,
              hanger: "Repair UAV",
              capacity: 2,
              repair: 5454,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C1",
          name: `Distributed Weapon Control System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 18000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XI-1200`,
              name: "Distributed Fire Control Radar",
              attributes: ["Increase Hit Rate"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "C2",
          name: `Additional Armor System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: 0,
            extraHP: 32484,
            energyShield: 0,
            hp: 27000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `ASX-150`,
              name: "Energized Nano Armor",
              attributes: ["Additional HP Auto-Repair"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "C3",
          name: `Anti-Missile System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 324,
            siege: null,
            hp: 19800
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `BG-625C`,
              name: `Area Anti-Missile Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 10,
              attributes: ["Interception Capability (Fleet)", "Anti-Aircraft Special Ammo", "Anti-Aircraft Support"],
              stats: {
                duration: 3,
                attacksPerRound: [1, 6],
                cooldown: 4,
                lockOnTime: 2,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 324
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 121,
      name: "ST59",
      title: "Defensive Battlecruiser",
      img: "/ships/st59.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat", "Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 5,
      row: "Middle",
      commandPoints: 28,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: "Assault Railgun System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 10350,
            antiair: null,
            siege: 3360,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `SR-2600`,
              name: `Heavy Railgun`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 735,
              attributes: null,
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 16,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 10350
                  },
                  siege: {
                    position: 2,
                    damage: 3360
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `Bow Mounted Battery System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 11400,
            antiair: null,
            siege: 960,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `SG-2400`,
              name: `Dual-Cannon Rapid-Fire Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 200,
              attributes: null,
              stats: {
                attacksPerRound: [2, 2],
                cooldown: 6,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 11400
                  },
                  siege: {
                    position: 2,
                    damage: 960
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M3",
          name: `Assault Torpedo System`,
          sourcedFrom: ["Windserpent", "OZY"],
          stats: {
            type: "weapon",
            antiship: 11200,
            antiair: null,
            siege: 2266,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `ST-2600`,
              name: `Heavy Torpedo Launcher`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 850,
              attributes: ["Crit"],
              stats: {
                duration: 2,
                attacksPerRound: [1, 2],
                cooldown: 16,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 11200,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 2266
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `Large Cannon Platform`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 7875,
            antiair: 216,
            siege: 1206,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `MK4-SG-2580 "Thunderbolt"`,
              name: `Dual-Cannon Heavy Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 280,
              attributes: null,
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 16,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 6075
                  },
                  siege: {
                    position: 2,
                    damage: 1134
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `SG-1120`,
              name: `Generic Cannon`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 40,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 1800
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 216
                  },
                  siege: {
                    position: 3,
                    damage: 72
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Railgun Turret Array`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 9900,
            antiair: null,
            siege: 1923,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `SR-1425`,
              name: `Railgun Turret`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 450,
              attributes: null,
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 8,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Destroyer"],
                      [2, "Frigate"]
                    ],
                    damage: 9900
                  },
                  siege: {
                    position: 2,
                    damage: 1923
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A3",
          name: `Pulse Turret Array`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 7500,
            antiair: 787,
            siege: 1200,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `SP-430`,
              name: `Pulse Turret`,
              damageType: "Energy",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 250,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 6,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 7500
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 787
                  },
                  siege: {
                    position: 3,
                    damage: 1200
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Integrated Projectile Weapon Platform`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 8188,
            antiair: null,
            siege: 1185,
            hp: 15750
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `K-ST-12-255A`,
              name: `3x4 Cluster Torpedo Launching System`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 300,
              attributes: null,
              stats: {
                attacksPerRound: [1, 4],
                cooldown: 30,
                lockOnTime: 4,
                duration: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ],
                    damage: 8188
                  },
                  siege: {
                    position: 2,
                    damage: 1185
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: `Aircraft System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 15300
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CBF-305`,
              name: "Medium Hanger",
              hanger: "Medium Fighter",
              capacity: 2,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B3",
          name: `Area Fire-Control System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 15300
          },
          subsystems: [
            {
              type: "hanger",
              count: 2,
              title: `CIT-1`,
              name: `Fire-Control Spotter UAV Hanger`,
              hanger: "Spotter UAV",
              capacity: 3,
              attributes: ["Ship Calibration Support"],
              stats: {
                targetPriority: [
                  [1, "Battleship"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ],
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "C1",
          name: `Additional Armor System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: 0,
            extraHP: 27302,
            energyShield: 0,
            hp: 15750
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `ASX-100`,
              name: "Additional Armor",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "C2",
          name: `EM Armor System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: 0,
            extraHP: 0,
            energyShield: 20,
            hp: 15750
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `AEX-120`,
              name: "EM Armor",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "C3",
          name: "Heavy Defensive Armor System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: 250,
            extraHP: 0,
            energyShield: 0,
            hp: 15750
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `ASX-130`,
              name: "Additional Armor",
              attributes: ["Reduce Evasion", "Reduce Hit Rate"]
            }
          ]
        }
      ]
    },
    {
      id: 122,
      name: "Thunderbolt Star",
      title: "Multi-Role Arsenal Ship",
      img: "/ships/thunderbolt_star.png",
      type: "Battlecruiser",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Empty",
      direction: ["Outstanding Firepower", "Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Middle",
      commandPoints: 35,
      serviceLimit: 6,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `"Thunderbolt" Bow-Mounted Weapon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 27225,
            antiair: null,
            siege: 5744,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `HR-1850`,
              name: `Long-Rail Railgun`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 2127,
              attributes: null,
              stats: {
                duration: 14,
                attacksPerRound: [1, 6],
                cooldown: 14,
                lockOnTime: 10,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"]
                    ],
                    damage: 27225
                  },
                  siege: {
                    position: 2,
                    damage: 5744
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `"Thunderbolt" Bow-Mounted Projectile Weapon System`,
          sourcedFrom: ["Thalleous"],
          stats: {
            type: "weapon",
            antiship: 27168,
            antiair: null,
            siege: 5705,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `HT-1-850`,
              name: "High Energy Torpedo Launcher",
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 2070,
              attributes: ["Crit"],
              stats: {
                duration: 16,
                attacksPerRound: [1, 7],
                cooldown: 16,
                lockOnTime: 15,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 27168,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 5705
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M3",
          name: `"Thunderbolt Star" Bow-Mounted High-Energy Weapon System`,
          sourcedFrom: ["Thalleous"],
          stats: {
            type: "weapon",
            antiship: 33120,
            antiair: null,
            siege: 3312,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `HT-1250T`,
              name: `Experimental Super High-Energy Ion Cannon`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 2760,
              attributes: null,
              stats: {
                duration: 10,
                cooldown: 20,
                damageFrequency: 6,
                lockOnTime: 15,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 33120,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 3312
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `Rapid-Fire Anti-Ship Weapon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 12636,
            antiair: 1266,
            siege: 1407,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `HG-1220`,
              name: "Rapid-Fire Artillery Array",
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 97,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 18,
                attacksPerRound: [1, 18],
                cooldown: 12,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 12636
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 1266
                  },
                  siege: {
                    position: 3,
                    damage: 1407
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Medium Anti-Ship Weapon System`,
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 14184,
            antiair: null,
            siege: 1490,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `HG-2280`,
              name: "Dual-Cannon Stationary Heavy Battery",
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 207,
              attributes: null,
              stats: {
                duration: 18,
                attacksPerRound: [2, 9],
                cooldown: 12,
                lockOnTime: 10,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 14184
                  },
                  siege: {
                    position: 2,
                    damage: 1490
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: "Active Anti-Aircraft System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 3375,
            antiair: 465,
            siege: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `HM-4x60B`,
              name: "Mid-Range Anti-Aircraft Missile Array",
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 28,
              attributes: ["Anti-Aircraft Support"],
              stats: {
                duration: 16,
                attacksPerRound: [4, 6],
                cooldown: 16,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 3375
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 465
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B2",
          name: "Range Interception System",
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 345,
            siege: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `HP-100B`,
              name: "Anti-Aircraft Pulse Array",
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 28,
              attributes: ["Interception Capability", "Anti-Aircraft Support"],
              stats: {
                duration: 15,
                attacksPerRound: [1, 15],
                cooldown: 12,
                lockOnTime: 2,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 345
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C1",
          name: "Weapon Coordination Center",
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `HNI-260`,
              name: "Weapon Activation Device",
              attributes: ["Oscillatory Excitation"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C2",
          name: "Fire-Control Calibration System",
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `HNA-240`,
              name: "Real-Time Target Callibration Module",
              attributes: ["Collaborative Calibration"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D1",
          name: "Accurate Projectile Weapon System",
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 9140,
            antiair: 1164,
            siege: 970,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `HM-1x220A`,
              name: "Mid-Range Anti-Ship Missile",
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 172,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 16,
                attacksPerRound: [1, 15],
                cooldown: 16,
                lockOnTime: 7,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 9140
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 1164
                  },
                  siege: {
                    position: 3,
                    damage: 970
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D2",
          name: "Large Projectile Weapon System",
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 9776,
            antiair: null,
            siege: 2086,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `HT-1-450`,
              name: "Large Torpedo Launcher",
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 631,
              attributes: ["Crit"],
              stats: {
                duration: 15,
                attacksPerRound: [1, 8],
                cooldown: 15,
                lockOnTime: 10,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 9776
                  },
                  siege: {
                    position: 2,
                    damage: 2086
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "E1",
          name: "Multi-Target Weapon System",
          sourcedFrom: ["Thalleous"],
          stats: {
            type: "weapon",
            antiship: 6990,
            antiair: 910,
            siege: 759,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `HG-1220A`,
              name: "Multi-Target Anti-Ship Battery",
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 126,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 20,
                attacksPerRound: [1, 15],
                cooldown: 10,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 6990
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 910
                  },
                  siege: {
                    position: 3,
                    damage: 759
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "E2",
          name: "Multi-Target Anti-Aircraft System",
          sourcedFrom: ["Thalleous"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 633,
            siege: null,
            hp: 23400
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `HG-1120B`,
              name: "Multi-Target Anti-Aircraft Turret",
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 40,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 18,
                attacksPerRound: [1, 25],
                cooldown: 12,
                lockOnTime: 2,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 633
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 123,
      name: "Ediacaran",
      title: "Heavy Firepower Auxiliary Ship",
      img: "/ships/ediacaran.png",
      type: "Auxiliary Ship",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Outstanding Firepower", "Strategy & Support"],
      scope: "Empty",
      weight: 2,
      row: "Middle",
      commandPoints: 40,
      serviceLimit: 2,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: "Fortress Bow-Mounted Heavy Cannon System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 11057,
            antiair: 394,
            siege: 1756,
            hp: 18900
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `"Fortress" MK4-BG-2560`,
              name: `Dual-Cannon Heavy Bow Battery`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 650,
              attributes: null,
              stats: {
                duration: 8,
                attacksPerRound: [2, 2],
                cooldown: 11,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 8084
                  },
                  siege: {
                    position: 2,
                    damage: 1231
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `BG-1260`,
              name: `Anti-Ship Turret`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 105,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 15,
                attacksPerRound: [2, 3],
                cooldown: 8,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 2973
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 394
                  },
                  siege: {
                    position: 3,
                    damage: 525
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `Fortress Assault Railgun System`,
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 11519,
            antiair: 800,
            siege: 3150,
            hp: 18900
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `"Fortress" MK4-BG-1850A`,
              name: `Bow-Mounted Assault Heavy Railgun`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 2250,
              attributes: ["Crit"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 12,
                lockOnTime: 15,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 11200
                  },
                  siege: {
                    position: 2,
                    damage: 3150
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `BM-2x280B`,
              name: `Anti-Aircraft Missile Launcher Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 25,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 5,
                attacksPerRound: [1, 4],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 319
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 800
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A1",
          name: "Frigates Production System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 18800
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `MF-2500`,
              name: "Frigates Independent Production Facility",
              attributes: ["Self-holding Capability"]
            },
            {
              type: "misc",
              count: 1,
              title: `BMP-60`,
              name: "Production Line Modification Module",
              attributes: ["Increase Production Speed"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A2",
          name: "Corvette Production System",
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 19800
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `MC-2500`,
              name: "Corvette Independent Production Facility",
              attributes: null
            },
            {
              type: "misc",
              count: 1,
              title: `BMP-60`,
              name: "Production Line Modification Module",
              attributes: ["Increase Production Speed"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A3",
          name: "Destroyer Production System",
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 18800
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `MD-2500`,
              name: "Destroyer Independent Production Facility",
              attributes: ["Self-holding Capability"]
            },
            {
              type: "misc",
              count: 1,
              title: `BMP-60`,
              name: "Production Line Modification Module",
              attributes: ["Increase Production Speed"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B1",
          name: `"Tundra" Interceptor UAV System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 4608,
            siege: null,
            hp: 19350
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CAT/R-6`,
              name: `Area-Denial Anti-Aircraft UAV Pod`,
              hanger: "Area-Denial Anti-Aircraft UAV",
              capacity: 4,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 15,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [4, 1],
                cooldown: 3.5,
                lockOnTime: 7,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Fighter"],
                      [2, "Corvette"]
                    ],
                    damage: 4608
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: `"Hummingbird" Firepower Recon UAV System`,
          sourcedFrom: ["Somnambulist"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 19350
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFT-6`,
              name: "Firepower Recon UAV Pod",
              hanger: "Recon UAV",
              capacity: 4,
              attributes: ["Firepower Recon Support"],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 1,
                lockOnTime: 0,
                targetPriority: [
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B3",
          name: `"Colossus" Guard UAV System`,
          sourcedFrom: ["Sector"],
          stats: {
            type: "weapon",
            antiship: 7340,
            antiair: null,
            siege: 732,
            hp: 19350
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFV-2`,
              name: "Guard UAV Platform",
              hanger: "Guard UAV",
              capacity: 4,
              attributes: null,
              damageType: "Energy",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 65,
              stats: {
                duration: 6,
                attacksPerRound: [1, 8],
                cooldown: 11,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 7340,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 732
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C1",
          name: `Aircraft Loading System`,
          sourcedFrom: ["Toir"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 19350
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-200`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 2,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C2",
          name: `Corvette Dock`,
          sourcedFrom: ["Spy Shark"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 19350
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-2000`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "D1",
          name: `Heavy Additional Armor System`,
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: 80,
            extraHP: 30069,
            energyShield: 0,
            hp: 18000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `ASX-90`,
              name: "Heavy Additional Armor",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "D2",
          name: `Nano Automated Maintenance System`,
          sourcedFrom: ["Toir"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 5169,
            hp: 18000
          },
          subsystems: [
            {
              type: "hanger",
              capacity: 2,
              hanger: "Repair UAV",
              count: 1,
              title: `BST-300`,
              name: `Nano Repair System`,
              repair: 5169,
              attributes: null
            }
          ]
        }
      ]
    },
    {
      id: 124,
      name: "FSV830",
      title: "Fast Tactical Auxiliary Ship",
      img: "/ships/fsv830.png",
      type: "Auxiliary Ship",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Sustained Combat", "Strategy & Support"],
      scope: "Empty",
      weight: 5,
      row: "Back",
      commandPoints: 40,
      serviceLimit: 2,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A1",
          name: "Frigates Production System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 21500
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XE-1250AM`,
              name: "Frigates Independent Production Facility",
              attributes: ["Self-holding Capability"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A2",
          name: "Corvette Production System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 21500
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XE-1250AG`,
              name: "Corvette Independent Build Facility",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "A3",
          name: "Fighter Production System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 21500
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `MFG-1500`,
              name: "Fighter Independent Production Facility",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B1",
          name: "Warning and Control System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 22000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XE-1250AW`,
              name: "Situational Awareness System",
              attributes: ["Back-Row Torpedo Hit Evasion", "Back-Row Missile Hit Evasion"]
            },
            {
              type: "misc",
              count: 1,
              title: `XC-4500`,
              name: "Bridge",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B2",
          name: "Coordinate Command System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 22000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XCE-1250AI`,
              name: "Assisted Lock-On Radar",
              attributes: [`Increase Back-Row Missile Hit Rate`, `Increase Back-Row Torpedo Hit Rate`]
            },
            {
              type: "misc",
              count: 1,
              title: `XC-4500`,
              name: "Bridge",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B3",
          name: "Camoflage System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 22000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XS-1250AC`,
              name: "Field Signal Disguise Module",
              attributes: [`Ship Disguise`]
            },
            {
              type: "misc",
              count: 1,
              title: `XC-4500`,
              name: "Bridge",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "C1",
          name: "Engineering Maintenance System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 22000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `BSR-200`,
              name: "Quick Repair Device",
              attributes: ["Increase Repair Speed"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "C2",
          name: "Strategic Resource Storage System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            storage: 60000,
            hp: 22000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `W-500`,
              name: "Loading Platform",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "D1",
          name: "Aircraft System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 21500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-255`,
              name: "Medium Hanger",
              hanger: "Medium Fighter",
              capacity: 2,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "D2",
          name: "Repair UAV System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 5454,
            hp: 21500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CRT-3`,
              name: "Engineering UAV Maintenance Pod",
              hanger: "Repair UAV",
              capacity: 2,
              repair: 5454,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "E1",
          name: "Area-Defense System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 882,
            siege: null,
            hp: 22000
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `SM-4x40B`,
              name: "Anti-Arcraft Missile Silo",
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 35,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Support"],
              stats: {
                duration: 4,
                attacksPerRound: [1, 4],
                cooldown: 5,
                lockOnTime: 3,
                targetPriority: {
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 882
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "E2",
          name: "Corvette Dock",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 21500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-2000`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        }
      ]
    },
    {
      id: 125,
      name: "CV3000",
      title: "High-Speed Carrier",
      img: "/ships/cv3000.png",
      type: "Carrier",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Dawn Accord",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 2,
      row: "Back",
      commandPoints: 40,
      serviceLimit: 5,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M1",
          name: "Integrated Aircraft Hanger",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-605`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 5,
              attributes: null
            },
            {
              type: "hanger",
              count: 1,
              title: `CBC-2100`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M2",
          name: "Integrated Aircraft System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-605`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 5,
              attributes: null
            },
            {
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
              attributes: ["Attack Against Systems"],
              stats: {
                duration: 20,
                attacksPerRound: [1, 5],
                cooldown: 10,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Cruiser"]
                    ],
                    damage: 2250
                  },
                  siege: {
                    position: 2,
                    damage: 150
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M3",
          name: "Large Aircraft System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-605`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 5,
              attributes: null
            },
            {
              type: "hanger",
              count: 1,
              title: `CFB-400`,
              name: "Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `"Dragoon" Battery System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 6500,
            antiair: 297,
            siege: 619,
            hp: 25200
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `MK4-C/SG-3480A "Dragoon"`,
              name: `Triple-Cannon Heavy Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 200,
              attributes: null,
              stats: {
                attacksPerRound: [3, 1],
                cooldown: 9,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 3800
                  },
                  siege: {
                    position: 2,
                    damage: 520
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `C/SG-190B "Dragoon"`,
              name: `Generic Rapid-Fire Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 55,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 297
                  },
                  siege: {
                    position: 3,
                    damage: 99
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Anti-Aircraft Missile Platform`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 2700,
            antiair: 354,
            siege: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `Bm-12x180T`,
              name: `Missile Defense System`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 52,
              attributes: ["Interception Capability", "Anti-Aircraft Support"],
              stats: {
                duration: 12,
                attacksPerRound: [1, 12],
                cooldown: 20,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 2700
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 354
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Missile Defense System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 1200,
            antiair: 210,
            siege: 70,
            hp: 25200
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `MK3-SM-6x400B/C "Starfire"`,
              name: `Missile Launcher Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 70,
              attributes: ["Interception Capability", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 6,
                attacksPerRound: [1, 6],
                cooldown: 12,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 1200
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 210
                  },
                  siege: {
                    position: 3,
                    damage: 70
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: `Corvette Loading System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-2100`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B3",
          name: `Info UAV Support Platform`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 23850
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CITA-2`,
              name: "Field Support UAV Pod",
              hanger: "Info UAV",
              capacity: 3,
              attributes: ["Ship Calibration Support"],
              stats: {
                targetPriority: [
                  [1, "Battleship"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ],
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3
              }
            }
          ]
        }
      ]
    },
    {
      id: 126,
      name: "Eternal Heavens",
      title: "UAV Carrier",
      img: "/ships/eternal_heavens.png",
      type: "Carrier",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Jupiter Industry",
      direction: ["Outstanding Firepower"],
      scope: "Empty",
      weight: 2,
      row: "Back",
      commandPoints: 40,
      serviceLimit: 5,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M1",
          name: "Collaborative Hanger I",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 7752,
            antiair: 2658,
            siege: 774,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-280`,
              name: "Medium Fighter Hanger",
              hanger: "Medium Fighter",
              capacity: 3,
              attributes: null
            },
            {
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
              attributes: ["UAV Cooperation", "Anti-Aircraft Lightweight Ammo"],
              stats: {
                duration: 4,
                attacksPerRound: [1, 4],
                cooldown: 9,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 7752,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 2658,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 774
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M2",
          name: "Collaborative Hanger II",
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-280`,
              name: "Medium Fighter Hanger",
              hanger: "Medium Fighter",
              capacity: 3,
              attributes: null
            },
            {
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
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M3",
          name: "Collaborative Hanger III",
          sourcedFrom: ["OZY"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 5940,
            siege: null,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-280`,
              name: "Medium Fighter Hanger",
              hanger: "Medium Fighter",
              capacity: 3,
              attributes: null
            },
            {
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
              attributes: ["UAV Aerial Cover Support", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 4,
                attacksPerRound: [4, 3],
                cooldown: 8,
                lockOnTime: 5,
                targetPriority: {
                  antiair: {
                    position: 1,
                    damage: 5940,
                    priorities: [
                      [1, "Fighter"],
                      [2, "Corvette"]
                    ]
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `Integrated Battery System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 10250,
            antiair: 472,
            siege: 3815,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `AG-3400A`,
              name: `Triple-Fire Heavy Turret`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 320,
              attributes: null,
              stats: {
                duration: 6,
                attacksPerRound: [3, 1],
                cooldown: 12,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 6200,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 2240
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 3,
              title: `AG-2208A`,
              name: `Dual-Cannon Anti-Ship Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 100,
              attributes: null,
              stats: {
                duration: 2,
                attacksPerRound: [2, 1],
                cooldown: 6,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 4050,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 2,
                    damage: 472,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 1575
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Experimental Ion Cannon System`,
          sourcedFrom: ["LunatiCorp"],
          stats: {
            type: "weapon",
            antiship: 8857,
            antiair: 252,
            siege: 828,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `AI-450T`,
              name: `Experimental Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 400,
              attributes: null,
              stats: {
                duration: 3,
                cooldown: 4,
                damageFrequency: 1,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 6857,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 548
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `AG-290`,
              name: `Generic Dual-Cannon Battery`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 35,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 2,
                attacksPerRound: [1, 2],
                cooldown: 4,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 2000,
                    priorities: [
                      [3, "Destroyer"],
                      [3, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 252,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 280
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A3",
          name: `Pulse Anti-Aircraft System`,
          sourcedFrom: ["Ultix"],
          stats: {
            type: "weapon",
            antiship: 3600,
            antiair: 1370,
            siege: null,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 3,
              title: `AP-2x180`,
              name: "Dual-Fire Pulse Cannon",
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 40,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
            },
            {
              type: "weapon",
              count: 3,
              title: `AP-140B`,
              name: "Rapid-Fire Anti-Aircraft Pulse Cannon",
              damageType: "Energy",
              target: "Aircraft",
              lockonEfficiency: 45,
              alpha: 20,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Anti-Ship Projectile Launching System`,
          sourcedFrom: ["Spy Shark"],
          stats: {
            type: "weapon",
            antiship: 5640,
            antiair: null,
            siege: 882,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `AM-2x450`,
              name: `Dual-Fire Anti-Ship Missile Launcher`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 350,
              attributes: null,
              stats: {
                duration: 4,
                attacksPerRound: [2, 1],
                cooldown: 16,
                lockOnTime: 6,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 4080,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 630
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 4,
              title: `AM-250`,
              name: `Light Missile Launcher`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 140,
              attributes: null,
              stats: {
                duration: 2,
                attacksPerRound: [1, 1],
                cooldown: 8,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 1560,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 252
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B2",
          name: `Anti-Missile Defense System`,
          sourcedFrom: ["Somnambulist", "Sector"],
          stats: {
            type: "weapon",
            antiship: 1104,
            antiair: 257,
            siege: 225,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `AM-3x250`,
              name: `Triple-Fire Anti-Ship Missile Launcher`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 145,
              attributes: null,
              stats: {
                duration: 6,
                attacksPerRound: [3, 1],
                cooldown: 16,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 1104,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ]
                  },
                  siege: {
                    position: 2,
                    damage: 225
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `AM-12x100C`,
              name: `Interception Missile Launcher Array`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 35,
              attributes: ["Interception Capability", "Anti-Aircraft Counterattack"],
              stats: {
                duration: 12,
                attacksPerRound: [2, 12],
                cooldown: 35,
                lockOnTime: 4,
                targetPriority: {
                  antiair: {
                    position: 1,
                    damage: 257,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B3",
          name: `Anti-Aircraft Missile Platform`,
          sourcedFrom: null,
          stats: {
            type: "weapon",
            antiship: 1527,
            antiair: 811,
            siege: null,
            hp: 26000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `AM-4x180`,
              name: `Quadruple-Fire Multi-Role Missile Launcher`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 60,
              alpha: 45,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
            },
            {
              type: "weapon",
              count: 2,
              title: `AM-2x100B`,
              name: `Dual-Fire Light Anti-Aircraft Missile Launcher`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 75,
              alpha: 80,
              attributes: ["Anti-Aircraft Counterattack"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C1",
          name: "Auxiliary Aircraft Hanger",
          sourcedFrom: ["Spy Shark"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-580`,
              name: "Large Fighter Hangar",
              hanger: "Large Fighter",
              capacity: 4,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C2",
          name: "Auxiliary Corvette Dockyard",
          sourcedFrom: ["Spy Shark"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-3000`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 4,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/storage.png",
          system: "C3",
          name: "Support Repair UAV System",
          sourcedFrom: null,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hpRecovery: 8181,
            hp: 24500
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CRT-6`,
              name: "Engineering UAV Maintenance Platform",
              hanger: "Repair UAV",
              capacity: 3,
              repair: 8181,
              attributes: null
            }
          ]
        }
      ]
    },
    {
      id: 127,
      name: "Marshal Crux",
      title: "Carrier",
      img: "/ships/marshal_crux.png",
      type: "Carrier",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Antonios",
      direction: ["Outstanding Firepower", "Strategy & Support"],
      scope: "Direct-Fire Weapon",
      weight: 2,
      row: "Back",
      commandPoints: 40,
      serviceLimit: 5,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `"White Flashing" Integrated Armory`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 16080,
            antiair: 691,
            siege: 1908,
            hp: 28800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CI-600T`,
              name: `Heavy Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 450,
              attributes: null,
              stats: {
                duration: 8,
                damageFrequency: 8,
                cooldown: 12,
                lockOnTime: 8,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battlecruiser"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 10800
                  },
                  siege: {
                    position: 2,
                    damage: 1620
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `CG-2220`,
              name: `Generic Dual-Cannon Battery`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 120,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 5,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 5280
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 691
                  },
                  siege: {
                    position: 3,
                    damage: 288
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `"White Flashing" Integrated Armory`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 13628,
            antiair: 162,
            siege: 2275,
            hp: 28800
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `CR-1650`,
              name: `Railgun`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1000,
              attributes: null,
              stats: {
                duration: 6,
                attacksPerRound: [1, 3],
                cooldown: 8,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Destroyer"],
                      [2, "Frigate"]
                    ],
                    damage: 12728
                  },
                  siege: {
                    position: 3,
                    damage: 2185
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 6,
              title: `CG-1105B`,
              name: `Generic Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 20,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [1, 1],
                cooldown: 4,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ],
                    damage: 900
                  },
                  antiair: {
                    position: 1,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ],
                    damage: 162
                  },
                  siege: {
                    position: 3,
                    damage: 90
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "A1",
          name: `Integrated Aircraft Hanger`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-700`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 6,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "A2",
          name: `Corvette Dock`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-3200`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 6,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B1",
          name: `Additional Energy System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 27000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `RET-200`,
              name: "Energy Amplification Device",
              attributes: ["Increase Aircraft Damage"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B2",
          name: `Fire-Control Auxiliary Calibration System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 27000
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `XGC-200`,
              name: "Precision Guidance System",
              attributes: ["Increase Aircraft Hit Rate"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C1",
          name: `Additional Aircraft System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBF-200`,
              name: "Medium Hanger",
              hanger: "Medium Fighter",
              capacity: 4,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "C2",
          name: `Missile Defense System`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 5200,
            antiair: 504,
            siege: 392,
            hp: 28800
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `MK2-CM-4x250A "Storm"`,
              name: `Missile Launcher Nest`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 140,
              attributes: ["Anti-Aircraft Support"],
              stats: {
                duration: 4,
                attacksPerRound: [1, 4],
                cooldown: 20,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 5200
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [2, "Corvette"],
                      [3, "Fighter"]
                    ],
                    damage: 504
                  },
                  siege: {
                    position: 3,
                    damage: 392
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C3",
          name: `Recon UAV System`,
          sourcedFrom: ["kitty7hell", "Draconia19"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: "CIT-3",
              name: `Fire-Control Spotter UAV Hanger`,
              hanger: "Spotter UAV",
              capacity: 3,
              attributes: ["Ship Calibration Support"],
              stats: {
                duration: 30,
                operationCount: [1, 1],
                cooldown: 10,
                lockOnTime: 3,
                targetPriority: [
                  [1, "Battleship"],
                  [1, "Carrier"],
                  [1, "Auxiliary Ship"],
                  [1, "Battlecruiser"],
                  [1, "Cruiser"]
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 128,
      name: "Solar Whale",
      title: "Armed Tactical Carrier",
      img: "/ships/solar_whale.png",
      type: "Carrier",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "NOMA Shipping",
      direction: ["Strategy & Support"],
      scope: "Empty",
      weight: 2,
      row: "Middle",
      commandPoints: 55,
      serviceLimit: 5,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M1",
          name: "Corvette Dock",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24750
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-3200`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 6,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "M2",
          name: "Large Aircraft System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24750
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-1200`,
              name: "Large Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 8,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `Integrated Armory`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 9648,
            antiair: 589,
            siege: 959,
            hp: 27000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `BG-2450A`,
              name: `Dual-Cannon Heavy Battery`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 320,
              attributes: null,
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 15,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 4960
                  },
                  siege: {
                    position: 2,
                    damage: 665
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `MK3-BM-8x320 "Lightning Field"`,
              name: `Dodeca-Fire Anti-Ship Missile System`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 220,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 8,
                attacksPerRound: [1, 8],
                cooldown: 35,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 4688
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 589
                  },
                  siege: {
                    position: 3,
                    damage: 294
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Projectile Weapon Platform`,
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: 8749,
            antiair: 589,
            siege: 648,
            hp: 27000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK5-BM-16x180 "Lightning Field"`,
              name: `Anti-Ship Missile Array`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 120,
              attributes: null,
              stats: {
                duration: 12,
                attacksPerRound: [1, 16],
                cooldown: 40,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"]
                    ],
                    damage: 4061
                  },
                  siege: {
                    position: 2,
                    damage: 354
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `MK3-BM-8x320 "Lightning Field"`,
              name: `Dodeca-Fire Anti-Ship Missile System`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 220,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 8,
                attacksPerRound: [1, 8],
                cooldown: 35,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 4688
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 589
                  },
                  siege: {
                    position: 3,
                    damage: 294
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A3",
          name: `Integrated Cannon Platform`,
          sourcedFrom: ["Windserpent", "Sector"],
          stats: {
            type: "weapon",
            antiship: 8888,
            antiair: 1021,
            siege: 588,
            hp: 27000
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `MK3-BM-8x320 "Lightning Field"`,
              name: `Dodeca-Fire Anti-Ship Missile System`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 220,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 8,
                attacksPerRound: [1, 8],
                cooldown: 35,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 1,
                    damage: 4688,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ]
                  },
                  antiair: {
                    position: 2,
                    damage: 589,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 252
                  }
                }
              }
            },
            {
              type: "weapon",
              count: 2,
              title: `BG-2180`,
              name: `Anti-Ship Cannon`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: null,
              alpha: 80,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                attacksPerRound: [2, 1],
                cooldown: 8,
                lockOnTime: 4,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 4200,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 432,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  },
                  siege: {
                    position: 3,
                    damage: 336
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "B1",
          name: "Ship Maintenance System",
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 25200
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `BSY-5000`,
              name: "Large Docking Jetty",
              attributes: ["Aircraft Recovery"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: "Corvette Loading Platform",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24750
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CBC-2000`,
              name: "Corvette Dock",
              hanger: "Corvette",
              capacity: 3,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C1",
          name: "Aircraft Hanger",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: null,
            hp: 24750
          },
          subsystems: [
            {
              type: "hanger",
              count: 1,
              title: `CFB-600`,
              name: "Aircraft Hanger",
              hanger: "Large Fighter",
              capacity: 5,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "C2",
          name: "Siege UAV System",
          sourcedFrom: ["Windserpent"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: 6048,
            hp: 24750
          },
          subsystems: [
            {
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
              attributes: null,
              stats: {
                duration: 10,
                attacksPerRound: [1, 1],
                cooldown: 15,
                lockOnTime: 8,
                targetPriority: {
                  siege: {
                    position: 1,
                    damage: 6048
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "C3",
          name: "Anti-Aircraft Missile Platform",
          sourcedFrom: ["Windserpent", "The Enlightened"],
          stats: {
            type: "weapon",
            antiship: 2618,
            antiair: 1178,
            siege: null,
            hp: 27000
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `BM-12x180T`,
              name: "Missile Defense System",
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 50,
              attributes: ["Interception Capability", "Anti-Aircraft Special Ammo", "Anti-Aircraft Support"],
              stats: {
                duration: 6,
                attacksPerRound: [1, 12],
                cooldown: 5,
                lockOnTime: 3,
                targetPriority: {
                  antiship: {
                    position: 2,
                    damage: 2618,
                    priorities: [
                      [4, "Destroyer"],
                      [4, "Frigate"]
                    ]
                  },
                  antiair: {
                    position: 1,
                    damage: 1178,
                    priorities: [
                      [1, "Corvette"],
                      [2, "Fighter"],
                      [3, "Landing Ship"]
                    ]
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      id: 129,
      name: "Warspite",
      title: "Assault Battleship",
      img: "/ships/warspite.png",
      type: "Battleship",
      variant: "A",
      variantName: "Super Type",
      hasVariants: false,
      manufacturer: "Empty",
      direction: ["Empty"],
      scope: "Empty",
      weight: 0,
      row: "Middle",
      commandPoints: 45,
      serviceLimit: 3,
      modules: [
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M1",
          name: `Bow-Mounted Ion Cannon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 21000,
            antiair: null,
            siege: 7350,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `FI-800`,
              name: `Heavy Ion Cannon`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 1050,
              attributes: null,
              stats: {
                duration: 3,
                damageFrequency: 3,
                cooldown: 6,
                lockOnTime: 12,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Battleship"],
                      [1, "Carrier"],
                      [1, "Battlecruiser"],
                      [1, "Cruiser"],
                      [2, "Auxiliary Ship"]
                    ],
                    damage: 21000
                  },
                  siege: {
                    position: 2,
                    damage: 7350
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "M2",
          name: `Bow-Mounted High-Energy Bombardment System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: 21272,
            antiair: null,
            siege: 2127,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 1,
              title: `FM-1x575`,
              name: `Heavy High-Energy Bomber`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 780,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A1",
          name: `Anti-Ship Torpedo System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 8280,
            antiair: null,
            siege: 3150,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `FT-4x160`,
              name: `Missile Silo`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 125,
              attributes: ["Crit"],
              stats: {
                duration: 20,
                attacksPerRound: [4, 3],
                cooldown: 20,
                lockOnTime: 7,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 8280
                  },
                  siege: {
                    position: 2,
                    damage: 3150
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "A2",
          name: `Projectile Weapon System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: 10000,
            antiair: 2775,
            siege: 3850,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 6,
              title: `FM-1x205`,
              name: `Missile Silo`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 60,
              alpha: 110,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft Counterattack"]
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "B1",
          name: `Siege Armed System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 6200,
            antiair: null,
            siege: 4480,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `FT-1-365C`,
              name: `Siege Torpedo`,
              damageType: "Projectile",
              target: "Building",
              lockonEfficiency: null,
              alpha: 320,
              attributes: ["Crit"],
              stats: {
                duration: 18,
                attacksPerRound: [1, 3],
                cooldown: 18,
                lockOnTime: 7,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Auxiliary Ship"],
                      [1, "Battlecruiser"],
                      [2, "Carrier"],
                      [2, "Cruiser"]
                    ],
                    damage: 6200
                  },
                  siege: {
                    position: 2,
                    damage: 4480
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/aircraft.png",
          system: "B2",
          name: "Siege UAV System",
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: null,
            siege: 6048,
            hp: 27900
          },
          subsystems: [
            {
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
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "C1",
          name: `Experimental Ion Cannon System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 9176,
            antiair: null,
            siege: 3211,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `FI-400T`,
              name: `Experimental Ion Turret`,
              damageType: "Energy",
              target: "Small Ship",
              lockonEfficiency: null,
              alpha: 260,
              attributes: null,
              stats: {
                duration: 12,
                damageFrequency: 5,
                cooldown: 22,
                lockOnTime: 7,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 9176
                  },
                  siege: {
                    position: 2,
                    damage: 3211
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "C2",
          name: `Ion Turret System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: 10400,
            antiair: null,
            siege: 7280,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `FI-550`,
              name: `Siege Ion Turret`,
              damageType: "Energy",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 520,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D1",
          name: `Medium Anti-Ship Missile`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "weapon",
            antiship: 9000,
            antiair: 1530,
            siege: 3569,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 4,
              title: `FM-3x180`,
              name: `Missile Vertical Launcher`,
              damageType: "Projectile",
              target: "Small Ship",
              lockonEfficiency: 10,
              alpha: 85,
              attributes: ["Anti-Aircraft Counterattack"],
              stats: {
                duration: 12,
                attacksPerRound: [3, 4],
                cooldown: 12,
                lockOnTime: 5,
                targetPriority: {
                  antiship: {
                    position: 1,
                    priorities: [
                      [1, "Destroyer"],
                      [1, "Frigate"],
                      [2, "Battleship"],
                      [2, "Carrier"],
                      [2, "Battlecruiser"],
                      [2, "Cruiser"]
                    ],
                    damage: 9000
                  },
                  antiair: {
                    position: 2,
                    priorities: [
                      [3, "Corvette"],
                      [4, "Fighter"]
                    ],
                    damage: 1530
                  },
                  siege: {
                    position: 3,
                    damage: 3569
                  }
                }
              }
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "D2",
          name: `Large Anti-Ship Missile`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: 11100,
            antiair: null,
            siege: 3990,
            hp: 27900
          },
          subsystems: [
            {
              type: "weapon",
              count: 2,
              title: `FM-1x450`,
              name: `Missile Launcher`,
              damageType: "Projectile",
              target: "Large Ship",
              lockonEfficiency: null,
              alpha: 380,
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "E1",
          name: `Standard Sacrum Chu Imperium Armor System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "armor",
            extraHP: 284970,
            armor: 270,
            energyShield: 5,
            hp: 27900
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `SC-100`,
              name: `Ship Core`,
              attributes: null
            },
            {
              type: "misc",
              count: 1,
              title: "AC-111",
              name: "Sacrum Chu Imperium Super-Heavy Armor",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/armor.png",
          system: "E2",
          name: `Armor System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "armor",
            extraHP: 284970,
            armor: 300,
            energyShield: 10,
            hp: 27900
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `SC-100`,
              name: `Ship Core`,
              attributes: null
            },
            {
              type: "misc",
              count: 1,
              title: "AC-150",
              name: "Generic Super-Heavy Armor",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/speed.png",
          system: "F1",
          name: `Standard Sacrum Chu Imperium Propulsion System`,
          sourcedFrom: null,
          default: true,
          stats: {
            type: "propulsion",
            cruise: 220,
            warp: 1100,
            hp: 30650
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `EN-111`,
              name: `Sacrum Chu Imperium Vector Engine`,
              attributes: null
            },
            {
              type: "misc",
              count: 1,
              title: "EC-111",
              name: "Sacrum Chu Imperium Warp Drive",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/speed.png",
          system: "F2",
          name: `Propulsion System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "propulsion",
            cruise: 250,
            warp: 1250,
            hp: 27900
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `EN-600`,
              name: `Generic Vector Engine`,
              attributes: null
            },
            {
              type: "misc",
              count: 1,
              title: "EC-600",
              name: "Generic Warp Drive",
              attributes: null
            }
          ]
        },
        {
          type: "known",
          img: "/weapons/icons/jamming.png",
          system: "G1",
          name: `Ion Enhancement Device`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "armor",
            armor: null,
            extraHP: null,
            energyShield: null,
            hp: 27900
          },
          subsystems: [
            {
              type: "misc",
              count: 1,
              title: `RII-600`,
              name: "Ion Energy Acceleration Device",
              attributes: ["Increase Ion Damage"]
            }
          ]
        },
        {
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "G2",
          unknown: true
        },
        {
          type: "known",
          img: "/weapons/icons/cannon.png",
          system: "H1",
          name: `Short-Range Anti-Aircraft System`,
          sourcedFrom: ["WarpPrime"],
          stats: {
            type: "weapon",
            antiship: null,
            antiair: 5717,
            siege: null,
            hp: 28400
          },
          subsystems: [
            {
              type: "weapon",
              count: 6,
              title: `FM-2x90B`,
              name: `Missile Vertical Launcher`,
              damageType: "Projectile",
              target: "Aircraft",
              lockonEfficiency: 60,
              alpha: 50,
              attributes: ["Anti-Aircraft Special Ammo", "Anti-Aircraft High-Speed Strike", "Anti-Aircraft Counterattack"]
            }
          ]
        },
        {
          type: "unknown",
          img: "/weapons/icons/unknown.png",
          system: "H2",
          unknown: true
        }
      ]
    }
  ];

  return { data, difficulty };
});
