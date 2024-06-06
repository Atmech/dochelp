import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
