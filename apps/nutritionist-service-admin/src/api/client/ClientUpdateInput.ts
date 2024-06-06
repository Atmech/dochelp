import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { SubscriptionUpdateManyWithoutClientsInput } from "./SubscriptionUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutClientsInput;
};