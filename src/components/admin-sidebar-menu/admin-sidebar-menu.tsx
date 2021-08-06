import AdminSidebarMenuLink from "./admin-sidebar-menu-link/admin-sidebar-menu-link";
import { ADMIN_LINKS } from "./admin-sidebar-menu.links";

import styles from "./admin-sidebar-menu.module.css";

const AdminSidebarMenu = () => {
  return (
    <div className={styles["AdminSidebarMenu"]}>
      {ADMIN_LINKS.map((link) => (
        <AdminSidebarMenuLink {...link} key={link.href} />
      ))}
    </div>
  );
};

export default AdminSidebarMenu;
