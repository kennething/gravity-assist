export type ManufacturerOption = "Jupiter Industry" | "NOMA Shipping" | "Antonios" | "Dawn Accord" | "Empty";
export type DirectionOption = "Outstanding Firepower" | "Sustained Combat" | "Strategy & Support" | "Fighter & Corvette" | "Empty";
export type ScopeOption = "Direct-Fire Weapon" | "Projectile Weapon" | "Empty";

export const manufacturers: ManufacturerOption[] = ["Jupiter Industry", "Dawn Accord", "Antonios", "NOMA Shipping", "Empty"];
export const directions: DirectionOption[] = ["Outstanding Firepower", "Sustained Combat", "Strategy & Support", "Fighter & Corvette", "Empty"];
export const scopes: ScopeOption[] = ["Projectile Weapon", "Direct-Fire Weapon", "Empty"];

export type AllShip = Fighter | Corvette | CapitalShip | MediumFighterCapitalShip | LargeFighterCapitalShip | CorvetteCapitalShip | SuperCapitalShip;

interface Ship {
  /** Name of the ship, as shown ingame.
   * @example "Conamara Chaos"
   */
  name: string;
  /** Title of the ship, shown next to the name.
   * @example "High-Speed Plasma Cruiser"
   */
  title: string;
  /** Image of the ship, found in `/public/ships`.
   *
   * Format: `shipName_variant.png`
   * @example "/ships/conamaraChaos_b.png"
   */
  img: string;
  variant: "A" | "B" | "C" | "D";
  /** Name of the variant, shown next to the variant letter.
   * @example "Plasma Type"
   */
  variantName: string;
  manufacturer: ManufacturerOption;
  direction: DirectionOption[];
  scope: ScopeOption;
  /** Weight of the ship's draw probability */
  weight: number;
  row: "Front" | "Middle" | "Back";
  commandPoints: number;
  serviceLimit: number;
}

export interface Fighter extends Ship {
  type: "Fighter";
  fighterType: "Small" | "Medium" | "Large";
  /** Number of fighters per unit. */
  fightersPerSquadron: number;
}

export interface Corvette extends Ship {
  type: "Corvette";
}

export interface CapitalShip extends Ship {
  type: "Frigate" | "Destroyer" | "Cruiser";
}

export interface MediumFighterCapitalShip extends CapitalShip {
  /** Number of medium fighters held. */
  mediumFighterCapacity: number;
}

export interface LargeFighterCapitalShip extends CapitalShip {
  /** Number of large fighters held. */
  largeFighterCapacity: number;
}

export interface CorvetteCapitalShip extends CapitalShip {
  /** Number of corvettes held. */
  corvetteCapacity: number;
}

interface Subsystem {
  count: number;
  title: string;
  name: string;
  attributes: string[] | null;
}

export interface WeaponSubsystem extends Subsystem {
  type: "weapon";
  damageType: "Projectile" | "Energy";
  target: "Building" | "Aircraft" | "Small Ship" | "Large Ship";
  /** Percentage represented as a number between 0 and 100 */
  lockonEfficiency: number | null;
  /** Alpha damage (damage per hit) */
  alpha: number;
}

export interface AircraftSubsystem extends Subsystem {
  type: "hanger";
  hanger: "Small Fighter" | "Medium Fighter" | "Large Fighter" | "Corvette";
  capacity: number;
}

export interface MiscSubsytem extends Subsystem {
  type: "misc";
}

interface UAVSubsystem extends Subsystem {
  type: "hanger";
  capacity: number;
}

export interface AttackUAVSubsystem extends UAVSubsystem {
  hanger: "Area-Denial Anti-Aircraft UAV" | "Cooperative Offensive UAV" | "Tactical UAV" | "Siege UAV";
  damageType: "Projectile" | "Energy";
  target: "Building" | "Aircraft" | "Small Ship" | "Large Ship";
  /** Percentage represented as a number between 0 and 100 */
  lockonEfficiency: number | null;
  /** Alpha damage (damage per hit) */
  alpha: number;
}

export interface RepairUAVSubsystem extends UAVSubsystem {
  hanger: "Repair UAV";
  repair: number;
}

export interface MiscUAVSubsystem extends UAVSubsystem {
  hanger: "Spotter UAV" | "Shield UAV" | "Info UAV" | "Recon UAV";
}

interface Module {
  /** Image of the weapon type, found in `/public/weapons/icons`. */
  img: string;
  system: "M1" | "M2" | "M3" | "A1" | "A2" | "A3" | "B1" | "B2" | "B3" | "C1" | "C2" | "C3" | "D1" | "D2" | "D3" | "E1" | "E2" | "F1" | "F2" | "G1" | "G2" | "H1" | "H2";
}

interface KnownModule extends Module {
  type: "known";
}

export interface UnknownModule extends Module {
  type: "unknown";
  unknown: true;
}

export interface WeaponModule extends KnownModule {
  name: string;
  stats: {
    type: "weapon";
    antiship: number | null;
    antiair: number | null;
    siege: number | null;
    hp: number;
  };
  subsystems: (WeaponSubsystem | AircraftSubsystem | AttackUAVSubsystem)[];
}

export interface PropulsionModule extends KnownModule {
  name: string;
  stats: {
    type: "propulsion";
    cruise: number | null;
    warp: number | null;
    hp: number;
  };
  subsystems: MiscSubsytem[];
}

export interface MiscModule extends KnownModule {
  name: string;
  stats: {
    type: "armor";
    armor: number | null;
    extraHP: number | null;
    /** Percentage represented as a number between 0 and 100 */
    energyShield: number | null;
    hpRecovery?: number;
    storage?: number;
    hp: number;
  };
  subsystems: (MiscSubsytem | RepairUAVSubsystem | MiscUAVSubsystem)[];
}

export interface SuperCapitalShip extends Ship {
  type: "Battlecruiser" | "Auxiliary Ship" | "Carrier" | "Battleship";
  modules: (UnknownModule | WeaponModule | PropulsionModule | MiscModule)[];
}

export function findShip(ships: AllShip[] | undefined, ship: AllShip | undefined, name?: string, variant?: string) {
  if (ship) return ships?.find((s) => s.name === ship.name && s.variant === ship.variant);
  return ships?.find((s) => s.name === name && s.variant === variant);
}

export function findBestDirection(data: AllShip[], ship: AllShip) {
  if (ship.direction.length === 1) {
    return ship.direction[0];
  }

  let bestDirection: DirectionOption = "Empty";
  const allChances: number[] = [];

  for (const direction of ship.direction) {
    const simulatedPath = data.filter((shipObj) => {
      const manufacturerCheck = ship.manufacturer === "Empty" || shipObj.manufacturer === ship.manufacturer;
      const directionCheck = direction === "Empty" || shipObj.direction.includes(direction);
      const scopeCheck = ship.scope === "Empty" || shipObj.scope === ship.scope;

      return manufacturerCheck && directionCheck && scopeCheck;
    });

    const chance = (ship.weight / simulatedPath.reduce((acc, item) => acc + item.weight, 0)) * 100;
    allChances.push(chance);
  }

  bestDirection = ship.direction[allChances.indexOf(Math.max(...allChances))];
  return bestDirection;
}
