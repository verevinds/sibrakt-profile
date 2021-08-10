import {
  faAddressCard,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarMenuLinkProps } from "src/types/navigation";
import {
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_ME,
} from "src/utils/route";

export const PROFILE_LINKS: SidebarMenuLinkProps[] = [
  {
    hits: "Мои достижения",
    href: ROUTE_PROFILE_DASHBOARD,
    icon: faTachometerAlt,
    exec: true,
  },
  {
    hits: "Мой профиль",
    href: ROUTE_PROFILE_ME,
    icon: faAddressCard,
  },
];
