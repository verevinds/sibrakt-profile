import AdminSidebarMenuLink from "./admin-sidebar-menu-link/admin-sidebar-menu-link";
import { ADMIN_LINKS } from "./admin-sidebar-menu.links";

const AdminSidebarMenu = () => {
  return (
    <>
      {ADMIN_LINKS.map((link) => (
        <AdminSidebarMenuLink {...link} key={link.href} />
      ))}
    </>
  );
};

export default AdminSidebarMenu;
