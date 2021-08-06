import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { UserRole } from "./user";

export type NavLinks = {
  id: string;
  text: string;
  href: string;
  accessProhibite: UserRole[];
  withLogin: boolean;
  exec?: boolean;
}[];

export type AdminSidebarMenuLinkProps = {
  href: string;
  hits: string;
  icon: IconProp;
};