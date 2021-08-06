import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { AdminSidebarMenuLinkProps } from "src/types/navigation";
import { ROUTE_ADMIN } from "src/utils/route";

export const ADMIN_LINKS: AdminSidebarMenuLinkProps[] = [
  {
    hits: "Дашборд",
    href: ROUTE_ADMIN,
    icon: faTachometerAlt,
  },
];
