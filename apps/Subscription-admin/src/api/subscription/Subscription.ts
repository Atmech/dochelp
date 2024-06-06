export type Subscription = {
  clientId: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
