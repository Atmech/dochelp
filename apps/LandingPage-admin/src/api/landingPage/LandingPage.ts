import { JsonValue } from "type-fest";

export type LandingPage = {
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  title: string | null;
  updatedAt: Date;
};
