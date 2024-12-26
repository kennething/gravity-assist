import type { Op } from "quill";

export type UserData = {
  uid: string;
  accessToken: string;
  /** YYYY-MM-DD */
  createdAt: string;
  /** YYYY-MM-DD */
  lastLoggedIn: string;
  savedMails: SaveTemplate[];
  blueprints: any[];
};

export type Alert = {
  id: string;
  /** Whether to show the alert or not */
  show: boolean;
  tag: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
};

export type SaveTemplate = {
  id: string;
  name: string;
  ops: Op[];
  /** YYYY-MM-DD */
  lastSaved: string;
  /** YYYY-MM-DD */
  createdAt: string;
};

export type TruncatedOp = {
  a?: { c: string };
  i: string;
};
