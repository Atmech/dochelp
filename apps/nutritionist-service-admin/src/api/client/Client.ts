import { Appointment } from "../appointment/Appointment";
import { Subscription } from "../subscription/Subscription";

export type Client = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
