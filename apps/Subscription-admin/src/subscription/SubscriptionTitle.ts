import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "clientId";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.clientId?.toString() || String(record.id);
};
