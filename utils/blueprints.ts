export type ShipSorter = (shipA: BlueprintAllShip, shipB: BlueprintAllShip) => number;
export type ShipFilter = (ship: BlueprintAllShip) => boolean;

export type BlueprintAllShip =
  | BlueprintFighter
  | BlueprintCorvette
  | BlueprintCapitalShip
  | BlueprintMediumFighterCapitalShip
  | BlueprintLargeFighterCapitalShip
  | BlueprintCorvetteCapitalShip
  | BlueprintSuperCapitalShip;

export interface BlueprintFighter extends Fighter {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintCorvette extends Corvette {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintCapitalShip extends CapitalShip {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintMediumFighterCapitalShip extends MediumFighterCapitalShip {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintLargeFighterCapitalShip extends LargeFighterCapitalShip {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintCorvetteCapitalShip extends CorvetteCapitalShip {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
}

export interface BlueprintUnknownModule extends UnknownModule {
  unlocked: boolean;
}

export interface BlueprintWeaponModule extends WeaponModule {
  unlocked: boolean;
}

export interface BlueprintPropulsionModule extends PropulsionModule {
  unlocked: boolean;
}

export interface BlueprintMiscModule extends MiscModule {
  unlocked: boolean;
}

export interface BlueprintSuperCapitalShip extends SuperCapitalShip {
  unlocked: boolean;
  techPoints: number;
  mirrorTechPoints: boolean;
  modules: (BlueprintUnknownModule | BlueprintWeaponModule | BlueprintPropulsionModule | BlueprintMiscModule)[];
}
