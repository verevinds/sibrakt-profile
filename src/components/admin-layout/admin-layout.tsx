import { PropsWithChildren } from "react";
import SidebarMenu from "src/components/sidebar-menu";
import { ADMIN_LINKS } from "./admin-layout.links";

import styles from "./admin-layout.module.css";

const AdminLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className={styles["AdminLayout"]}>
      <aside className={styles["AdminLayout__sidebar"]}>
        <SidebarMenu links={ADMIN_LINKS} />
      </aside>
      <article className={styles["AdminLayout__content"]}>{children}</article>
    </main>
  );
};

export default AdminLayout;
