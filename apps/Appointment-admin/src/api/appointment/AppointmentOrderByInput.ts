import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
