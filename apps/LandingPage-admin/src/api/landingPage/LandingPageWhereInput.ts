import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LandingPageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
};
