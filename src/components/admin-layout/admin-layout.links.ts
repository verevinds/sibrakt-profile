import {
  faFlagCheckered,
  faTachometerAlt,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarMenuLinkProps } from "src/types/navigation";
import { ROUTE_ADMIN_DASHBOARD, ROUTE_ADMIN_RACE, ROUTE_ADMIN_TYPE_RACE } from "src/utils/route";

export const ADMIN_LINKS: SidebarMenuLinkProps[] = [
  {
    hits: "Дашборд",
    href: ROUTE_ADMIN_DASHBOARD,
    icon: faTachometerAlt,
    exec: true,
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
