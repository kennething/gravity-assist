import type { Op } from "quill";

export type UserData = {
  uid: string;
  accessToken: string;
  savedMails: SaveTemplate[];
  blueprints: any[];
};

export type Alert = {
  id: string;
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
