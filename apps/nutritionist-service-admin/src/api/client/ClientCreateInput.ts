import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { SubscriptionCreateNestedManyWithoutClientsInput } from "./SubscriptionCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutClientsInput;
};
