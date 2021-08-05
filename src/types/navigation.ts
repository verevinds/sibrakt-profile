import { UserRole } from "./user";

export type NavLinks = {
  id: string;
  text: string;
  href: string;
  accessProhibite: UserRole[];
  withLogin: boolean;
  exec?: boolean;
}[];