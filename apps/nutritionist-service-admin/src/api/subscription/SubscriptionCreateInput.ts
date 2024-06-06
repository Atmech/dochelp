import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SubscriptionCreateInput = {
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
