import User from "src/mongodb/models/user";

export type User = {
  name: string;
  email: string;
  password: string;
};

export default async (user: User) => new User(user).save();
