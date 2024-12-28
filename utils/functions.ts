import type { Op } from "quill";
import type { AllShip } from "./ships";

/**
 * @warning Be sure to await this function in order to actually use the delay.
 * @param {number} ms - Number of milliseconds to delay.
 * @example await delay(1000); // Wait for 1 second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((executor: any) => setTimeout(executor, ms));
}

/** Returns a random integer between `min` and `max`, inclusive. */
export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/** Returns a random item from an array. */
export function getRandomItem<T>(array: T[] | string) {
  return array[getRandomInt(0, array.length - 1)];
}

const dateOptions: Record<string, Record<string, string>> = {
  full: { dateStyle: "long", timeZone: "UTC" },
  numeric: { dateStyle: "short", timeZone: "UTC" }
};
/** Returns a date string as a localized date string
 *
 * If `timeDiff` is true, returns "today," "yesterday," "{n}d ago," or a localized date string
 * @params {date} YYYY-MM-DD
 * @params {options} "full" | "numeric" = "full"
 * @params {timeDiff} boolean = false
 */
export function formatDate(dateString: string, options: "full" | "numeric" = "full", timeDiff = false) {
  const formatter = new Intl.DateTimeFormat(undefined, dateOptions[options]);
  const date = new Date(dateString);

  const formattedDate = formatter.format(date);
  if (!timeDiff) return formattedDate;

  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  if (days > 7) return formattedDate;
  if (days > 1) return `${days}d ago`;
  if (days > 0) return "yesterday";
  return "today";
}

enum CharacterSets {
  numeric = "0123456789",
  alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  alphabetical = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
}
export function getRandomCharacters(length: number, set: "numeric" | "alphanumeric" | "alphabetical" = "alphanumeric") {
  let characters = "";
  for (let i = 0; i < length; i++) {
    characters += getRandomItem(CharacterSets[set]);
  }
  return characters;
}

export function truncateOps(ops: Op[]) {
  return ops.map((op) => {
    const newObj: Record<string, string | Record<string, string>> = {};

    if (op.attributes && op.attributes.color) {
      newObj.a = {};
      newObj.a.c = op.attributes.color as string;
    }

    newObj.i = op.insert as string;

    return newObj;
  });
}

export function untruncateOps(ops: TruncatedOp[]) {
  return ops.map((op) => {
    const newObj: Op = {};

    if (op.a && op.a.c) {
      newObj.attributes = {};
      newObj.attributes.color = op.a.c;
    }

    newObj.insert = op.i;

    return newObj;
  });
}
