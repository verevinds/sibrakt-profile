export type ProfileShort = {
  id: string;
  role: UserRole;
  email: string;
  score: number;
};

export type ProfileData = {
  lastName?: string;
  firstName?: string;
  email?: string;
  bornAt?: string;
  role: UserRole;
  score: number;
  _id: string;
  phone: string;
  createdAt: string;
  userPic?: string;
};

export type ProfileOnlyName = {
  lastName?: string;
  firstName?: string;
}
export enum UserRole {
  Admin = 'admin',
  User = 'user'
}