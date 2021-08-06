import {
  faFlagCheckered,
  faTachometerAlt,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { AdminSidebarMenuLinkProps } from "src/types/navigation";
import { ROUTE_ADMIN, ROUTE_ADMIN_RACE, ROUTE_ADMIN_TYPE_RACE } from "src/utils/route";

export const ADMIN_LINKS: AdminSidebarMenuLinkProps[] = [
  {
    hits: "Дашборд",
    href: ROUTE_ADMIN,
    icon: faTachometerAlt,
  },
  {
    hits: "Заезды",
    href: ROUTE_ADMIN_RACE,
    icon: faFlagCheckered,
  },
  {
    hits: "Настройка заездов",
    href: ROUTE_ADMIN_TYPE_RACE,
    icon: faToolbox,
  },
];
