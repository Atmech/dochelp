import { Client } from "../client/Client";

export type Appointment = {
  appointmentDate: Date | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
