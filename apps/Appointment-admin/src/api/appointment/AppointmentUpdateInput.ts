import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  status?: "Option1" | null;
};
