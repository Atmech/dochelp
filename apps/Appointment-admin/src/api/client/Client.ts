import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";

export type Client = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  subscriptions: JsonValue;
  updatedAt: Date;
};
