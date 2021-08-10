import { ProfileData } from "./user";

export type RaceTypeData = {
  name: string;
  _id: string;
  createdAt: string;
  archive: boolean
};

export type RaceData = {
  createdAt: string;
  _id: string;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string;
  time: number;
  raceTypeId: Omit<RaceTypeData, "createdAt">;
  userLink: {
    firstName?: Pick<ProfileData, "firstName">;
    lastName?: Pick<ProfileData, "lastName">;
  } | null;
};
export type RaceRequest = {
  firstName?: string;
  lastName?: string;
  phone: string;
  time: number;
  raceTypeId: string;
};
