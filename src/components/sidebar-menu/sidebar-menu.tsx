import { SidebarMenuLinkProps } from "src/types/navigation";
import AdminSidebarMenuLink from "./sidebar-menu-link/sidebar-menu-link";

type Props = {
  links: SidebarMenuLinkProps[];
};
const AdminSidebarMenu = ({ links }: Props) => {
  return (
    <>
      {links.map((link) => (
        <AdminSidebarMenuLink {...link} key={link.href} />
      ))}
    </>
  );
};

export default AdminSidebarMenu;
