import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
