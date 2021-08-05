import { UserRole } from "src/types/user";
import { ROUTE_ADMIN, ROUTE_DEFAULT, ROUTE_PROFILE } from "src/utils/route";

export default [
  {
    id: "top-list",
    text: "Зачет дня",
    href: ROUTE_DEFAULT,
    accessProhibite: [],
    withLogin: false,
  },
  {
    id: "profile",
    text: "Личный кабинет",
    href: ROUTE_PROFILE,
    accessProhibite: [],
    withLogin: true,
  },
  {
    id: "admin",
    text: "Панель администратора",
    href: ROUTE_ADMIN,
    accessProhibite: [UserRole.User],
    withLogin: true,
  },
];
