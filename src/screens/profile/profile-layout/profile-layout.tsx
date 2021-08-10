import { PropsWithChildren } from "react";
import SidebarMenu from "src/components/sidebar-menu";
import { PROFILE_LINKS } from "./profile-layout.links";
import styles from "./profile-layout.module.css";

const ProfileLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className={styles["ProfileLayout"]}>
      <aside className={styles["ProfileLayout__sidebar"]}>
        <SidebarMenu links={PROFILE_LINKS}/>
      </aside>
      <article className={styles["ProfileLayout__content"]}>{children}</article>
    </main>
  );
};

export default ProfileLayout;
