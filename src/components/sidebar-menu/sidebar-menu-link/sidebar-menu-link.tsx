import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ActiveLink from "src/components/active-link";

import type { SidebarMenuLinkProps } from "src/types/navigation";

import styles from "./sidebar-menu-link.module.css";
import Popup from "src/components/popup";

const SidebarMenuLink = (props: SidebarMenuLinkProps): JSX.Element | null => {
  return (
    <ActiveLink
      href={props.href}
      exec={props.exec}
      activeClassName={styles["SideMenuLink_active"]}
    >
      <a className={styles["SideMenuLink"]}>
        <Popup hits={props.hits}>
          <FontAwesomeIcon icon={props.icon} />
        </Popup>
      </a>
    </ActiveLink>
  );
};

export default SidebarMenuLink;
