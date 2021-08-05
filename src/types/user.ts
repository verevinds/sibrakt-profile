export type ProfileShort = {
  id: string;
  role: UserRole;
  email: string;
  score: number;
};

export enum UserRole {
  Admin = 'admin',
  User = 'user'
}