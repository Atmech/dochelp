import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { InputJsonValue } from "../../types";

export type ClientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  subscriptions?: InputJsonValue;
};
