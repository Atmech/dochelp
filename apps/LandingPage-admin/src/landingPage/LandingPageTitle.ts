import { LandingPage as TLandingPage } from "../api/landingPage/LandingPage";

export const LANDINGPAGE_TITLE_FIELD = "title";

export const LandingPageTitle = (record: TLandingPage): string => {
  return record.title?.toString() || String(record.id);
};
