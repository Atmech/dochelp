import { Client } from "../client/Client";

export type Subscription = {
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
