export type ProfileShort = {
  id: string;
  role: UserRole;
  email: string;
  score: number;
};

export type Profile = {
  role: UserRole;
  score: number;
  _id: string;
  phone: string;
  createdAt: string;
};
export enum UserRole {
  Admin = 'admin',
  User = 'user'
}