import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { InputJsonValue } from "../../types";

export type ClientUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  subscriptions?: InputJsonValue;
};
