import cn from "classnames";

import Button from "src/components/button";
import ActiveLink from "src/components/active-link/active-link";
import NavLinks from "src/components/nav-links/nav-links";

import { useAccessToken } from "src/hooks/useAccessToken";

import { ROUTE_SIGN_IN } from "src/utils/route";

import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const { events } = useRouter();
  const { removeAccessToken, isAccessToken } = useAccessToken();
  const [isOpen, toggleIsOpen] = useState(true);
  const handleShow = () => {
    console.log("complete");
    toggleIsOpen((value) => !value);
  };

  events.on("routeChangeComplete", () => toggleIsOpen(false));

  return (
    <header className={cn(styles["Header"])}>
      <div className={styles["Header__navigation"]}>
        <NavLinks />
      </div>
      <div className={styles["Header__exit"]}>
        {isAccessToken ? (
          <Button variant="link" onClick={removeAccessToken}>
            Выйти
          </Button>
        ) : (
          <ActiveLink href={ROUTE_SIGN_IN}>
            <a>Войти в систему</a>
          </ActiveLink>
        )}
      </div>
      <button onClick={handleShow} className={styles["Header__menuButton"]}>
        <label
          className={cn(styles["Header__menuButton_label"], {
            [styles["Header__menuButton_open"]]: isOpen,
          })}
        ></label>
      </button>
      <div
        className={cn(styles["Header__sidebar"], {
          [styles["Header__sidebar_open"]]: isOpen,
        })}
      >
        <h2 className={styles["Header__sidebarTitle"]}>Меню</h2>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
