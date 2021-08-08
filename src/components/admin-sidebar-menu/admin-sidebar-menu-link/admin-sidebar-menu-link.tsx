import cn from "classnames";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "react-tiny-popover";

import ActiveLink from "src/components/active-link";

import type { AdminSidebarMenuLinkProps } from "src/types/navigation";

import styles from "./admin-sidebar-menu-link.module.css";

const AdminSidebarMenuLink = (props: AdminSidebarMenuLinkProps): JSX.Element | null => {
  const [isShow, toggleIsShow] = useState(false);

  if (!process.browser) {
    return null;
  }

  const onHide = () => toggleIsShow(false);
  const onShow = () => toggleIsShow(true);

  return (
    <ActiveLink
      href={props.href}
      exec={props.exec}
      activeClassName={styles["AdminSideMenuLink_active"]}
    >
      <a className={styles["AdminSideMenuLink"]} onClick={onHide}>
        <Popover
          content={
            <span
              className={cn(
                styles["AdminSideMenuLink__text"],
                styles["effect7"]
              )}
            >
              {props.hits}
            </span>
          }
          isOpen={isShow}
          positions={["right"]}
        >
          <span
            className={styles["AdminSideMenu__icon"]}
            onMouseEnter={onShow}
            onMouseLeave={onHide}
          >
            <FontAwesomeIcon icon={props.icon} />
          </span>
        </Popover>
      </a>
    </ActiveLink>
  );
};

export default AdminSidebarMenuLink;
