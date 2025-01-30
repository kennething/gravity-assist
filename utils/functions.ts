import type { Op } from "quill";

/**
 * @warning Be sure to await this function in order to actually use the delay.
 * @param ms - Number of milliseconds to delay.
 * @example await delay(1000); // Wait for 1 second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((executor: () => void) => setTimeout(executor, ms));
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

const dateOptions: Readonly<Record<string, Record<string, string>>> = {
  full: { dateStyle: "long", timeZone: "UTC" },
  numeric: { dateStyle: "short", timeZone: "UTC" }
};
/** Returns a date string as a localized date string
 *
 * If `timeDiff` is true, returns "today," "yesterday," "{n}d ago," or a localized date string
 * @param date YYYY-MM-DD
 * @param options "full" | "numeric" = "full"
 * @param timeDiff boolean = false
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

const characterSets: Readonly<Record<string, string>> = {
  numeric: "0123456789",
  alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  alphabetical: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
};
/**
 * Returns a random string of characters from the given set with the given length.
 * @example getRandomCharacters(10, "numeric"); // Returns a random 10-digit number
 * @example getRandomCharacters(10, "alphanumeric"); // Returns a random alphanumeric string of length 10
 * @example getRandomCharacters(10, "alphabetical"); // Returns a random alphabetical string of length 10
 */
export function getRandomCharacters(length: number, set: keyof typeof characterSets = "alphanumeric") {
  let characters = "";
  for (let i = 0; i < length; i++) {
    characters += getRandomItem<string>(characterSets[set]);
  }
  return characters;
}

/**
 * Transforms an array of `Op` objects into a minified format.
 *
 * Each `Op` object is mapped to a new object containing:
 * - `a.c`: the `color` attribute if it exists.
 * - `i`: the `insert` value.
 */
export function truncateOps(ops: Op[]) {
  return ops.map((op) => {
    const newObj: Record<string, string | Record<string, string>> = {};

    if (op.attributes?.color) {
      newObj.a = {};
      newObj.a.c = op.attributes.color as string;
    }

    newObj.i = op.insert as string;

    return newObj;
  });
}

/**
 * Restores an array of `TruncatedOp` objects to their original `Op` format.
 *
 * Each `TruncatedOp` object is mapped to a new `Op` object containing:
 * - `attributes.color`: the `a.c` value if it exists.
 * - `insert`: the `i` value.
 */
export function untruncateOps(ops: TruncatedOp[]) {
  return ops.map((op) => {
    const newObj: Op = {};

    if (op.a?.c) {
      newObj.attributes = {};
      newObj.attributes.color = op.a.c;
    }

    newObj.insert = op.i;

    return newObj;
  });
}

/**
 * Returns the key of the first entry in the given object.
 *
 * @param object the object to get the key from
 * @param index the index of the key to return, defaults to 0
 */
export function getObjectKey<T extends object>(object: T, index = 0) {
  return Object.keys(object)[index];
}

/**
 * Returns the value of the first entry in the given object.
 *
 * @param object the object to get the value from
 * @param index the index of the value to return, defaults to 0
 */
export function getObjectValue<T extends object>(object: T, index = 0) {
  return Object.values(object)[index];
}
