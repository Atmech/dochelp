import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  status?: "Option1" | null;
};
