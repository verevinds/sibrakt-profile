import { PropsWithChildren } from "react";
import AdminSidebarMenu from "../admin-sidebar-menu";
import styles from "./admin-layout.module.css";

const AdminLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className={styles["AdminLayout"]}>
      <aside className={styles["AdminLayout__sidebar"]}>
        <AdminSidebarMenu />
      </aside>
      <article className={styles["AdminLayout__content"]}>{children}</article>
    </main>
  );
};

export default AdminLayout;
