import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubscriptionWhereInput = {
  clientId?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
