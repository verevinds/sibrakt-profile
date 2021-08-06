export type RaceTypeData = {
  name: string;
  _id: string;
  createdAt: string;
};

export type RaceRequest = {
  firstName?: string;
  lastName?: string;
  phone: string;
  time: number;
  raceTypeId: string;
};